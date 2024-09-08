// Replaces semantic-release with zx script
import process from 'node:process'

(async () => {
  $.quiet = !process.env.VERBOSE
  $.verbose = !!process.env.VERBOSE
  $.noquote = async (...args) => { const q = $.quote; $.quote = v => v; const p = $(...args); p; $.quote = q; return p }

  // Git configuration
  const {GIT_BRANCH, GIT_COMMITTER_NAME, GIT_COMMITTER_EMAIL, GITHUB_TOKEN, GH_TOKEN, PKG_ALIAS, PUSH_MAJOR_TAG, NPM_TOKEN, NPM_PROVENANCE, DEBUG, DRY_RUN} = process.env
  const githubAuth = GITHUB_TOKEN || GH_TOKEN

  if (!githubAuth) {
    throw new Error('env.GITHUB_TOKEN or GH_TOKEN is required')
  }

  const debug = DEBUG || argv['debug']
  const dryRun = DRY_RUN || argv['dry-run']
  const gitCommitterName = GIT_COMMITTER_NAME || 'Semrel Extra Bot'
  const gitCommitterEmail = GIT_COMMITTER_EMAIL || 'semrel-extra-bot@hotmail.com'
  const originUrl = (await $`git config --get remote.origin.url`).toString().trim()
  const branch = GIT_BRANCH || (await $`git branch --show-current`).toString().trim() || 'master'
  const [,,repoHost, repoName] = originUrl.replace(':', '/').replace(/\.git/, '').match(/.+(@|\/\/)([^/]+)\/(.+)$/)
  const repoPublicUrl = `https://${repoHost}/${repoName}`
  const repoAuthedUrl = `https://${githubAuth}@${repoHost}/${repoName}.git`

  // Commits analysis
  const semanticTagPattern = /^v?(\d+)\.(\d+)\.(\d+)$/
  const releaseSeverityOrder = ['major', 'minor', 'patch']
  const semanticRules = [
    {group: 'Features', releaseType: 'minor', prefixes: ['feat']},
    {group: 'Fixes & improvements', releaseType: 'patch', prefixes: ['fix', 'perf', 'refactor', 'docs']},
    {group: 'BREAKING CHANGES', releaseType: 'major', keywords: ['BREAKING CHANGE', 'BREAKING CHANGES']},
  ]

  const pkgJson = fs.readJSONSync('./package.json')
  const tags = (await $`git tag -l --sort=-v:refname`).toString().split('\n').map(tag => tag.trim())
  const lastTag = tags.find(tag => semanticTagPattern.test(tag))
  const commitsRange = lastTag ? `${(await $`git rev-list -1 ${lastTag}`).toString().trim()}..HEAD` : 'HEAD'
  const newCommits = (await $.noquote`git log --format=+++%s__%b__%h__%H ${commitsRange}`)
    .toString()
    .split('+++')
    .filter(Boolean)
    .map(msg => {
      const [subj, body, short, hash] = msg.split('__').map(raw => raw.trim())
      return {subj, body, short, hash}
    })

  const semanticChanges = newCommits.reduce((acc, {subj, body, short, hash}) => {
    semanticRules.forEach(({group, releaseType, prefixes, keywords}) => {
      const prefixMatcher = prefixes && new RegExp(`^(${prefixes.join('|')})(\\([a-z0-9\\-_]+\\))?:\\s.+$`)
      const keywordsMatcher = keywords && new RegExp(`(${keywords.join('|')}):\\s(.+)`)
      const change = subj.match(prefixMatcher)?.[0] || body.match(keywordsMatcher)?.[2]

      if (change) {
        acc.push({
          group,
          releaseType,
          change,
          subj,
          body,
          short,
          hash
        })
      }
    })
    return acc
  }, [])
  console.log('semanticChanges=', semanticChanges)
  debug && console.log('tags', tags)

  const nextReleaseType = releaseSeverityOrder.find(type => semanticChanges.find(({releaseType}) => type === releaseType))
  if (!nextReleaseType) {
    console.log('No semantic changes - no semantic release.')
    return
  }
  const nextVersion = ((lastTag, releaseType) => {
    if (!releaseType) {
      return
    }
    if (!lastTag) {
      return pkgJson.version || '1.0.0'
    }

    const [, c1, c2, c3] = semanticTagPattern.exec(lastTag)
    if (releaseType === 'major') {
      return `${-~c1}.0.0`
    }
    if (releaseType === 'minor') {
      return `${c1}.${-~c2}.0`
    }
    if (releaseType === 'patch') {
      return `${c1}.${c2}.${-~c3}`
    }
  })(lastTag, nextReleaseType)

  const nextTag = 'v' + nextVersion
  const releaseDiffRef = `## [${nextVersion}](${repoPublicUrl}/compare/${lastTag}...${nextTag}) (${new Date().toISOString().slice(0, 10)})`
  const releaseDetails = Object.values(semanticChanges
    .reduce((acc, {group, change, short, hash}) => {
      const {commits} = acc[group] || (acc[group] = {commits: [], group})
      const commitRef = `* ${change} ([${short}](${repoPublicUrl}/commit/${hash}))`

      commits.push(commitRef)

      return acc
    }, {}))
    .map(({group, commits}) => `
### ${group}
${commits.join('\n')}`).join('\n')

  const releaseNotes = releaseDiffRef + '\n' + releaseDetails + '\n'

  // Update changelog
  await $`echo ${releaseNotes}"\n$(cat ./CHANGELOG.md)" > ./CHANGELOG.md`

  // Update package.json version
  await $`npm --no-git-tag-version --allow-same-version version ${nextVersion}`

  if (dryRun)  return

  await $`git config user.name ${gitCommitterName}`
  await $`git config user.email ${gitCommitterEmail}`
  await $`git remote set-url origin ${repoAuthedUrl}`

  // Prepare git commit and push
  // Hint: PAT may be replaced with a SSH deploy token
  // https://stackoverflow.com/questions/26372417/github-oauth2-token-how-to-restrict-access-to-read-a-single-private-repo
  console.log('git push')
  const releaseMessage = `chore(release): ${nextVersion} [skip ci]`
  await $`git add -A .`
  await $`git commit -am ${releaseMessage}`
  await $`git tag -a ${nextTag} HEAD -m ${releaseMessage}`
  await $`git push --follow-tags origin HEAD:refs/heads/${branch}`
  if (PUSH_MAJOR_TAG){
    const majorTag = nextTag.split('.')[0]
    await $`git tag -fa ${majorTag} HEAD -m ${releaseMessage}`
    await $`git push --follow-tags -f origin ${majorTag}`
  }

  // Push GitHub release
  const releaseData = JSON.stringify({
    name: nextTag,
    tag_name: nextTag,
    body: releaseNotes
  })
  console.log('github release')
  await $`curl -H "Authorization: token ${githubAuth}" -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/${repoName}/releases -d ${releaseData}`

  // Publish npm artifact
  if (!pkgJson.private) {
    const aliases = new Set([pkgJson.name, PKG_ALIAS || pkgJson.alias].flat(1).filter(Boolean))
    const npmjsRegistry = 'https://registry.npmjs.org/'
    const npmrc = (() => {
      let _npmrc = path.resolve(process.cwd(), '.npmrc')
      if (fs.existsSync(_npmrc)) return _npmrc

      _npmrc = path.resolve(fs.realpathSync(os.tmpdir()), 'zx-semrel', Math.random().toString(36).substring(2), '.npmrc')
      fs.outputFileSync(_npmrc, `
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
//npm.pkg.github.com/:_authToken=${githubAuth}
`)
      return _npmrc
    })()

    for (const alias of aliases) {
      console.log(`npm publish ${alias} ${nextVersion} to ${npmjsRegistry}`)
      await $.noquote`echo "\`jq '.name="${alias}"' package.json\`" > package.json`
      await $`npm publish ${NPM_PROVENANCE ? '--provenance' : ''} --no-git-tag-version --registry=${npmjsRegistry} --userconfig ${npmrc}`
    }

    console.log(`npm publish @${repoName} ${nextVersion} to https://npm.pkg.github.com`)
    await $`echo "\`jq '.name="@${repoName}"' package.json\`" > package.json`
    await $`npm publish --no-git-tag-version --registry=https://npm.pkg.github.com/ --userconfig ${npmrc}`
  }

  console.log(chalk.bold('Great success!'))
})()
