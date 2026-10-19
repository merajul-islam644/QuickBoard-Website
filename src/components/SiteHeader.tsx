import { useState } from "react";
import { PAGE_PATHS, type Navigate, type PageId } from "../router";
import "./site-header.css";

const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

type Props = {
  current: PageId | null;
  onNavigate: Navigate;
};

export function SiteHeader({ current, onNavigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id: PageId) => {
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="site-header__brand"
          href={PAGE_PATHS.home}
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
        >
          QuickBoard
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="site-header__bar" />
          <span className="site-header__bar" />
          <span className="site-header__bar" />
        </button>

        <nav
          id="site-nav"
          className={`site-header__nav${menuOpen ? " is-open" : ""}`}
        >
          <ul className="site-header__links">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={PAGE_PATHS[link.id]}
                  className={
                    current === link.id ? "site-header__link is-active" : "site-header__link"
                  }
                  aria-current={current === link.id ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    go(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn--primary site-header__cta"
            onClick={() => go("contact")}
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}
