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
        "prepareCmd": "pnpm exec intent validate --set-version ${nextRelease.version}"
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
