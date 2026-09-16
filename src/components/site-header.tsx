import Link from "next/link";
import type { SiteNavigationContent } from "@/content/home";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader({ content }: { content: SiteNavigationContent }) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="wordmark" href={content.homeHref} aria-label="Zehrtydev">
          Zehrtydev
        </Link>

        <nav className="desktop-navigation" aria-label={content.nav.menu}>
          <Link href={`${content.homeHref}#work`}>{content.nav.work}</Link>
          <Link href={`${content.homeHref}#about`}>{content.nav.about}</Link>
          <Link href={`${content.homeHref}#contact`}>{content.nav.contact}</Link>
          <div className="language-switch" aria-label={content.nav.languageLabel}>
            <span aria-current="page">{content.locale.toUpperCase()}</span>
            <span aria-hidden="true">/</span>
            <Link href={content.counterpartHref}>{content.counterpartLabel}</Link>
          </div>
        </nav>

        <MobileNavigation
          locale={content.locale}
          homeHref={content.homeHref}
          counterpartHref={content.counterpartHref}
          counterpartLabel={content.counterpartLabel}
          nav={content.nav}
        />
      </div>
    </header>
  );
}
