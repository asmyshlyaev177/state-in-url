/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  // branches: ["main", "next"],
  repositoryUrl: "git@github.com:asmyshlyaev177/state-in-url.git",
  plugins: ['@semantic-release/git', '@semantic-release/commit-analyzer', '@semantic-release/exec', '@semantic-release/release-notes-generator', '@semantic-release/npm', '@semantic-release/github']
};
