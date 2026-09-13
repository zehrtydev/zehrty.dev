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
        <span className="footer-wordmark">Zehrtydev</span>
        <span>© {new Date().getFullYear()}</span>
        <Link href={counterpartHref}>{languageLabel}</Link>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </div>
    </footer>
  );
}
