"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "px-0 py-0" : "px-4 py-4 md:px-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1180px] items-center justify-between transition-all duration-300 ${
          scrolled
            ? "rounded-none border-b border-[#E7DDD8] bg-white/95 px-5 py-3 shadow-[0_10px_30px_rgba(32,26,22,0.08)] backdrop-blur-xl md:px-7"
            : "rounded-[20px] border border-white/70 bg-white/90 px-5 py-4 shadow-[0_14px_42px_rgba(32,26,22,0.08)] backdrop-blur-xl md:px-7"
        }`}
      >
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex min-w-0 items-center gap-3 no-underline"
          aria-label="CoreViaSupport homepage"
        >
          <Image
            src="/logo/coreviasupport-logo.png"
            width={52}
            height={52}
            alt="CoreViaSupport"
            priority
            className="h-[50px] w-[50px] shrink-0 rounded-xl object-contain md:h-[52px] md:w-[52px]"
          />

          <span
            className="truncate text-[19px] font-bold tracking-[-0.03em] text-[#201A16] sm:text-[21px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CoreViaSupport
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-[14px] font-semibold no-underline transition duration-200 ${
                  active
                    ? "bg-[#FBEAEC] text-[#C21E3A]"
                    : "text-[#5F5752] hover:bg-[#FBF4F2] hover:text-[#C21E3A]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#C21E3A] px-5 py-3 text-[14px] font-semibold text-white no-underline shadow-[0_10px_24px_rgba(194,30,58,0.22)] transition hover:-translate-y-0.5 hover:bg-[#8F1329] hover:shadow-[0_15px_30px_rgba(143,19,41,0.26)]"
          >
            Book Consultation
            <ArrowRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E7DDD8] bg-white text-[#201A16] shadow-[0_8px_20px_rgba(32,26,22,0.06)] transition hover:border-[#C21E3A] hover:text-[#C21E3A] lg:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="mx-auto mt-3 max-w-[1180px] px-4 md:px-6 lg:hidden"
        >
          <div className="overflow-hidden rounded-[20px] border border-[#E7DDD8] bg-white shadow-[0_20px_50px_rgba(32,26,22,0.14)]">
            <nav className="p-4">
              <div className="grid gap-2">
                {navItems.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`rounded-xl px-4 py-3 text-[15px] font-semibold no-underline transition ${
                        active
                          ? "bg-[#FBEAEC] text-[#C21E3A]"
                          : "text-[#5F5752] hover:bg-[#FBF4F2] hover:text-[#C21E3A]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="mt-4 flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-[#C21E3A] px-5 py-3 text-[14px] font-semibold text-white no-underline shadow-[0_10px_24px_rgba(194,30,58,0.2)] hover:bg-[#8F1329]"
              >
                Book Consultation
                <ArrowRight size={17} />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}