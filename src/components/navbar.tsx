import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { ThemeSwitch } from "./theme-switch";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Contacts", href: "/#contacts" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 items-center justify-between gap-4 px-6">
        <RouterLink className="flex items-center gap-2" to="/">
          <img src="/logo.svg" alt="Logo" width="28" height="22" />
        </RouterLink>

        <ul className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="text-foreground hover:text-accent transition-colors" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex items-center">
          <ThemeSwitch />
        </div>

        <div className="flex sm:hidden items-center gap-1">
          <ThemeSwitch />
          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-foreground hover:bg-surface-hover transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-separator sm:hidden">
          <ul className="flex flex-col gap-1 px-6 py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="block py-2 text-foreground hover:text-accent transition-colors"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
