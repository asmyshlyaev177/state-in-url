import { siteUrl } from "../domain";

export const Footer = () => (
  <footer className="text-ink2 mt-6 w-full border-t border-brand-dim">
    <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-1 px-6 py-4 text-sm">
      <a
        href="https://www.npmjs.com/package/state-in-url"
        target="_blank"
        rel="noopener"
        className="hover:text-brand transition-colors"
      >
        state-in-url on npm
      </a>
      <a
        href={`${siteUrl}/llms.txt`}
        target="_blank"
        rel="noopener"
        className="hover:text-brand transition-colors"
      >
        llms.txt
      </a>
      <a href="https://asmyshlyaev177.dev" target="_blank" rel="noopener" className="hover:text-brand transition-colors">
        © asmyshlyaev177 {new Date().getFullYear()}
      </a>
      <span>MIT</span>
    </div>
  </footer>
);
