import { siteUrl } from "../domain";
import { dateLocale, type Locale } from "../i18n";
import type { FooterCopy } from "../i18n/copy/types";

export const Footer = ({
  lastModified,
  copy,
  locale,
}: {
  lastModified: string;
  copy: FooterCopy;
  locale: Locale;
}) => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-id">
        <span className="footer-mark">state-in-url</span>
        <span className="footer-tag">{copy.tagline}</span>
        <span className="footer-updated">
          {/* One interpolated string, not text + {expression}: React SSR splits
              adjacent text nodes with an HTML comment, which left the year in a
              separate node from the label and made the date unreadable to
              anything parsing the markup rather than the DOM. The label is a
              copy key interpolated into that same literal, for the same
              reason. */}
          {`${copy.updated} ${new Date(lastModified).toLocaleDateString(dateLocale(locale.code), {
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "UTC",
          })}`}
        </span>
      </div>

      <nav className="footer-links" aria-label={copy.navLabel}>
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
        {`© ${new Date(lastModified).getUTCFullYear()} asmyshlyaev177`}
      </a>
    </div>
  </footer>
);
