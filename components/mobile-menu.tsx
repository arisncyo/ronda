"use client";

import Link from "next/link";
import { useState } from "react";

type LinkItem = { href: string; label: string };

export default function MobileMenu({ links }: { links: LinkItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="md:hidden text-white text-2xl p-2 bg-transparent border-0 cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        &#9776;
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full md:hidden bg-secondary px-4 pb-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-white/80 no-underline text-lg font-[family-name:var(--font-afacad)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
