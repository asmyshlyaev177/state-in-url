export const Footer = () => (
  <footer className="text-gray-700 mt-12 w-fit ml-auto">
    <div className="flex flex-col bg-white shadow rounded p-3">
      <a href="https://github.com/asmyshlyaev177" target="_blank" rel="noopener">
        © asmyshlyaev177 {new Date().getFullYear()}
      </a>
      <a
        href="https://www.npmjs.com/package/state-in-url"
        target="_blank"
        rel="noopener"
      >
        state in url npm package
      </a>
    </div>
  </footer>
);
