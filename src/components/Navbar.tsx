"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const menuId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8"
      >
        <a
          href="#hero"
          className="text-sm font-semibold tracking-[0.2em] text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          AK
        </a>
        <ul className="hidden items-center gap-4 text-sm lg:gap-5 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavAnchor href={item.href} active={activeId === item.id}>
                {item.label}
              </NavAnchor>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded-md p-1.5 text-foreground transition-colors hover:text-accent md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open ? (
        <div id={menuId} className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavAnchor
                  href={item.href}
                  active={activeId === item.id}
                  className="block py-2 text-sm"
                  onClick={close}
                >
                  {item.label}
                </NavAnchor>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

type NavAnchorProps = {
  href: string;
  active: boolean;
  children: string;
  className?: string;
  onClick?: () => void;
};

function NavAnchor({ href, active, children, className = "", onClick }: NavAnchorProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? "location" : undefined}
      className={`rounded-sm transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
        active ? "text-accent" : "text-muted"
      } ${className}`}
    >
      {children}
    </a>
  );
}
