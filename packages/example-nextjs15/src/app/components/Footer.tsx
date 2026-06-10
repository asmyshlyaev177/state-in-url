import { siteUrl } from "../domain";

export const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-id">
        <span className="footer-mark">state-in-url</span>
        <span className="footer-tag">typed state, living in the URL</span>
      </div>

      <nav className="footer-links" aria-label="Footer">
        <a
          href="https://www.npmjs.com/package/state-in-url"
          target="_blank"
          rel="noopener"
        >
          npm
        </a>
        <a
          href="https://github.com/asmyshlyaev177/state-in-url"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
        <a href={`${siteUrl}/llms.txt`} target="_blank" rel="noopener">
          llms.txt
        </a>
        <a
          href="https://github.com/asmyshlyaev177/state-in-url/blob/master/LICENSE"
          target="_blank"
          rel="noopener"
        >
          MIT
        </a>
      </nav>

      <a
        href="https://asmyshlyaev177.dev"
        target="_blank"
        rel="noopener"
        className="footer-author"
      >
        © asmyshlyaev177 {new Date().getFullYear()}
      </a>
    </div>
  </footer>
);
