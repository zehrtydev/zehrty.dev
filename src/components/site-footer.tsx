import Link from "next/link";

const EMAIL = "soporte@zehrty.dev";

type SiteFooterProps = {
  counterpartHref: string;
  languageLabel: string;
};

export function SiteFooter({ counterpartHref, languageLabel }: SiteFooterProps) {
  return (
    <footer className="site-footer section-shell">
      <div className="footer-inner">
        <div className="footer-signature">
          <span className="footer-wordmark">Zehrtydev</span>
          <span className="footer-year">© {new Date().getFullYear()}</span>
        </div>
        <div className="footer-utilities">
          <Link href={counterpartHref}>{languageLabel}</Link>
          <a className="footer-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
