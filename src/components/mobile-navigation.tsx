"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { SiteNavigationContent } from "@/content/home";

export function MobileNavigation({
  homeHref,
  counterpartHref,
  counterpartLabel,
  nav,
  locale,
}: SiteNavigationContent) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <div className="mobile-navigation">
      <button
        ref={triggerRef}
        className="menu-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{isOpen ? nav.closeMenu : nav.menu}</span>
        <span className="menu-glyph" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      {isOpen ? (
        <div id="mobile-menu" className="mobile-menu">
          <nav aria-label={nav.menu}>
            <Link href={`${homeHref}#work`} onClick={close}>
              {nav.work}
            </Link>
            <Link href={`${homeHref}#about`} onClick={close}>
              {nav.about}
            </Link>
            <Link href={`${homeHref}#contact`} onClick={close}>
              {nav.contact}
            </Link>
          </nav>
          <div className="mobile-language" aria-label={nav.languageLabel}>
            <span aria-current="page">{locale.toUpperCase()}</span>
            <span aria-hidden="true">/</span>
            <Link href={counterpartHref}>{counterpartLabel}</Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
