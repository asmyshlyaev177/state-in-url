/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["master"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ],
    "@semantic-release/npm",
    [
      // Sync the AI skill files' `metadata.library_version` frontmatter to the
      // version being released, so it never drifts from package.json. Runs after
      // @semantic-release/npm (version resolved) and before @semantic-release/git
      // (so the rewritten SKILL.md files land in the release commit). Uses the
      // pinned, already-installed `intent` binary — no network fetch on release.
      "@semantic-release/exec",
      {
        "prepareCmd": "pnpm exec intent validate --set-version ${nextRelease.version}",
        // Runs only after a release was actually published and pushed, which is
        // what Context7 re-clones. The release is done by then, so never fail it.
        "successCmd": "curl -fsS -X POST https://context7.com/api/v1/refresh -H 'Content-Type: application/json' -H \"Authorization: Bearer $CONTEXT7_API_KEY\" -d '{\"libraryName\": \"/asmyshlyaev177/state-in-url\"}' || echo 'Context7 refresh failed'"
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["CHANGELOG.md", "dist/**/*", "package.json", "skills/**/SKILL.md"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ]
};
