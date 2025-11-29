import { siteUrl } from "../domain";

export const Footer = () => (
  <footer className="text-gray-700 mt-12 w-fit ml-auto">
    <div className="flex flex-col bg-white shadow rounded p-3">
      <a
        href="https://www.npmjs.com/package/state-in-url"
        target="_blank"
        rel="noopener"
      >
        state in url npm package
      </a>
      <a
        href={`${siteUrl}/llms.txt`}
        target="_blank"
        rel="noopener"
      >
        llms.txt
      </a>
      <a href="https://asmyshlyaev177.dev" target="_blank" rel="noopener">
        © asmyshlyaev177 {new Date().getFullYear()}
      </a>
      <div className="text-center">MIT</div>
    </div>
  </footer>
);
