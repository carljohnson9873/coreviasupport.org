import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const serviceLinks = [
  { label: "Order Management", href: "/services/order-management" },
  { label: "Artwork Services", href: "/services/artwork" },
  { label: "Research & Presentations", href: "/services/research" },
  { label: "Customer Support", href: "/services/customer-support" },
  { label: "Bookkeeping", href: "/services/bookkeeping" },
  { label: "Hybrid Operations Support", href: "/services/hybrid-support" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E7DDD8] bg-[#FFFDFC]">
      <div className="site-container py-14">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_.9fr_.8fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3 no-underline">
              <Image
                src="/logo/coreviasupport-logo.png"
                alt="CoreViaSupport"
                width={52}
                height={52}
                className="rounded-xl object-contain"
              />

              <h3 className="!text-[21px]">CoreViaSupport</h3>
            </Link>

            <p className="mt-5 max-w-sm text-[14px] leading-7 text-[#6A625C]">
              Specialized operational support for promotional product
              distributors and branded merchandise businesses.
            </p>

            <p className="mt-3 max-w-sm text-[13px] leading-6 text-[#7B726C]">
              Supporting promotional product businesses across the United
              States and United Kingdom with dependable operational execution.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7DDD8] bg-white text-[#C21E3A] hover:bg-[#C21E3A] hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7DDD8] bg-white text-[#C21E3A] hover:bg-[#C21E3A] hover:text-white"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7DDD8] bg-white text-[#C21E3A] hover:bg-[#C21E3A] hover:text-white"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="!text-[17px]">Services</h3>

            <div className="mt-5 space-y-3">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-[14px] text-[#6A625C] no-underline hover:text-[#C21E3A]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="!text-[17px]">Company</h3>

            <div className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-[14px] text-[#6A625C] no-underline hover:text-[#C21E3A]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="!text-[17px]">Contact</h3>

            <div className="mt-5 space-y-4 text-[14px] text-[#6A625C]">
              <a
                href="mailto:info@coreviasupport.com"
                className="flex items-center gap-3 no-underline hover:text-[#C21E3A]"
              >
                <Mail size={17} className="shrink-0 text-[#C21E3A]" />
                info@coreviasupport.com
              </a>

              <a
                href="tel:+918209912773"
                className="flex items-center gap-3 no-underline hover:text-[#C21E3A]"
              >
                <Phone size={17} className="shrink-0 text-[#C21E3A]" />
                +91 82099 12773
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-[#E7DDD8] pt-6 text-[12px] text-[#7B726C] md:flex-row">
          <span>
            © {new Date().getFullYear()} CoreViaSupport. All rights reserved.
          </span>

          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="no-underline hover:text-[#C21E3A]">
              Privacy Policy
            </Link>

            <Link href="/terms" className="no-underline hover:text-[#C21E3A]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}