import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left">

        <div>
          <h2 className="text-4xl font-bold text-white">
            Ready to Grow Your Business?
          </h2>

          <p className="mt-4 max-w-2xl text-red-100">
            Let CoreViaSupport handle your operations while you focus on
            sales, customers and business growth.
          </p>
        </div>

        <Link
          href="/contact"
          className="rounded-xl bg-white px-8 py-4 font-semibold text-red-600 transition hover:scale-105"
        >
          Book Free Consultation
        </Link>

      </div>
    </section>
  );
}