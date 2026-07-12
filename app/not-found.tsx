import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main>
      <section className="page-section">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[84px] font-bold leading-none text-[#C21E3A]/15">
              404
            </p>

            <div className="section-kicker mt-7 justify-center">
              Page Not Found
            </div>

            <h1 className="mx-auto max-w-2xl">
              The page you requested could not be found.
            </h1>

            <p className="section-copy mx-auto">
              The link may be outdated, the page may have moved, or the address
              may have been entered incorrectly.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/" className="primary-button">
                <Home size={17} />
                Return Home
              </Link>

              <Link href="/services" className="secondary-button">
                <ArrowLeft size={17} />
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}