import Link from "next/link";
import MobileMenu from "@/components/mobile-menu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#paket", label: "Paket" },
  { href: "/#layanan", label: "Layanan" },
  { href: "/#tentang", label: "Tentang Kami" },
];

export default function Navbar() {
  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-50 bg-primary">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Ronda CCTV logo"
              role="img"
            >
              <title>Ronda CCTV</title>
              <rect x="2" y="10" width="20" height="14" rx="3" fill="white" />
              <rect x="6" y="14" width="3" height="6" rx="1.5" fill="#1888CD" />
              <rect
                x="11"
                y="14"
                width="3"
                height="6"
                rx="1.5"
                fill="#1888CD"
              />
              <rect
                x="16"
                y="14"
                width="3"
                height="6"
                rx="1.5"
                fill="#1888CD"
              />
              <rect x="15" y="6" width="8" height="4" rx="1" fill="white" />
              <circle cx="19" cy="8" r="1.5" fill="#1888CD" />
              <path d="M22 17l8-4v10l-8-4v-2z" fill="white" />
              <circle cx="22" cy="17" r="1" fill="#1888CD" />
            </svg>
            <span className="font-[family-name:var(--font-afacad)] font-bold text-xl text-white">
              Ronda CCTV
            </span>
          </Link>

          <div className="hidden md:flex items-center">
            <ul className="flex items-center list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-afacad)] text-lg font-medium text-white no-underline px-6 py-3 inline-block leading-normal transition-opacity duration-300 hover:opacity-80"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <MobileMenu links={NAV_LINKS} />
        </div>
      </nav>
    </header>
  );
}
