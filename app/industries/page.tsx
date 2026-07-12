import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Gift,
  PackageCheck,
  Palette,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";

const industries = [
  {
    number: "01",
    icon: PackageCheck,
    title: "Promotional Product Distributors",
    description:
      "Operational support for distributors managing customer opportunities, product sourcing, suppliers, orders, artwork, production, shipping, and ongoing communication.",
    responsibilities: [
      "Order administration",
      "Supplier coordination",
      "Artwork follow-up",
      "Production monitoring",
      "Shipping updates",
      "Customer communication",
    ],
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "Brand Merchandise Agencies",
    description:
      "Additional operating capacity for agencies delivering branded merchandise campaigns, employee programs, client projects, and custom merchandise requirements.",
    responsibilities: [
      "Product research",
      "Presentation support",
      "Quote preparation",
      "Supplier communication",
      "Proof coordination",
      "Project follow-up",
    ],
  },
  {
    number: "03",
    icon: Gift,
    title: "Corporate Gifting Companies",
    description:
      "Structured coordination for gifting programs involving product selection, customization, multiple suppliers, recipient requirements, and delivery deadlines.",
    responsibilities: [
      "Supplier sourcing",
      "Pricing comparison",
      "Order coordination",
      "Customization follow-up",
      "Delivery tracking",
      "Customer updates",
    ],
  },
  {
    number: "04",
    icon: Store,
    title: "Print & Promotional Businesses",
    description:
      "Operational support for businesses combining print services, branded products, artwork management, supplier communication, and customer delivery.",
    responsibilities: [
      "Order processing",
      "Artwork management",
      "Production follow-up",
      "Supplier coordination",
      "Status reporting",
      "Customer support",
    ],
  },
  {
    number: "05",
    icon: ShoppingBag,
    title: "Company Store Programs",
    description:
      "Day-to-day support for branded company stores, employee merchandise programs, order processing, inventory communication, and fulfilment coordination.",
    responsibilities: [
      "Order review",
      "Inventory coordination",
      "Supplier follow-up",
      "Shipment tracking",
      "Customer inquiries",
      "Record maintenance",
    ],
  },
  {
    number: "06",
    icon: Palette,
    title: "Creative & Branding Partners",
    description:
      "Operational assistance for creative teams that require dependable product, artwork, supplier, production, and delivery coordination.",
    responsibilities: [
      "Product recommendations",
      "Presentation preparation",
      "Artwork follow-up",
      "Proof management",
      "Supplier communication",
      "Delivery coordination",
    ],
  },
];

const operatingAreas = [
  {
    title: "Customer Requirements",
    text: "Product expectations, quantities, timelines, branding, and delivery commitments.",
  },
  {
    title: "Supplier Coordination",
    text: "Pricing, inventory, production requirements, acknowledgements, and follow-ups.",
  },
  {
    title: "Artwork Management",
    text: "Proof requests, revisions, approvals, and production-ready file coordination.",
  },
  {
    title: "Order Administration",
    text: "Sales orders, purchase orders, records, production updates, and shipment tracking.",
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <section className="page-section">
        <div className="site-container">
          <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_.98fr]">
            <div>
              <div className="section-kicker">Industries We Support</div>

              <h1 className="max-w-4xl">
                Specialized operations support for branded merchandise
                businesses.
              </h1>

              <p className="section-copy">
                CoreViaSupport works with organizations that depend on accurate
                coordination across customers, products, suppliers, artwork,
                production, shipping, and financial administration.
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#5F5752]">
                Our focused industry model allows us to support the operational
                responsibilities behind branded merchandise opportunities and
                orders without introducing a generic outsourcing structure.
              </p>

              <Link href="/services" className="secondary-button mt-8">
                Review Our Capabilities
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-[28px] bg-[#201A16] p-7 text-white shadow-[0_24px_60px_rgba(32,26,22,0.17)] md:p-8">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C21E3A]/25 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C21E3A]/20 text-[#F3AAB6]">
                  <Building2 size={28} />
                </div>

                <p className="mt-6 text-[14px] font-bold uppercase tracking-[0.05em] !text-[#F3AAB6]">
                  Industry Alignment
                </p>

                <h2 className="mt-3 !text-[30px] !text-white">
                  Built around the work behind every branded merchandise order.
                </h2>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Product sourcing",
                    "Supplier communication",
                    "Artwork coordination",
                    "Order administration",
                    "Production follow-up",
                    "Customer updates",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white/[0.08] px-4 py-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C21E3A]">
                        <Check size={14} className="text-white" />
                      </span>

                      <span className="text-[14px] font-medium text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-start gap-4 rounded-2xl bg-white p-5">
                  <Truck
                    size={23}
                    className="mt-1 shrink-0 text-[#C21E3A]"
                  />

                  <p className="text-[14px] font-semibold leading-7 !text-[#201A16]">
                    Operational support from the initial customer requirement
                    through production, delivery, and follow-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section border-y border-[#E7DDD8] bg-white">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[.74fr_1.26fr]">
            <div>
              <div className="section-kicker">Where We Add Capacity</div>

              <h2 className="max-w-xl">
                Support across the responsibilities that consume internal time.
              </h2>

              <p className="section-copy">
                Each engagement is aligned with existing systems, procedures,
                communication standards, and areas of responsibility.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {operatingAreas.map((item, index) => (
                <article
                  key={item.title}
                  className="business-card group relative overflow-hidden p-7"
                >
                  <span className="absolute right-5 top-2 text-[64px] font-black leading-none text-[#C21E3A]/[0.05]">
                    0{index + 1}
                  </span>

                  <span className="relative text-[13px] font-bold text-[#C21E3A]">
                    0{index + 1}
                  </span>

                  <h3 className="relative mt-5 !text-[20px]">{item.title}</h3>

                  <p className="relative mt-4 text-[14px] leading-7 text-[#5F5752]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <div className="section-kicker">Specialized Coverage</div>

          <h2 className="max-w-3xl">
            Operational support adapted to different branded merchandise
            business models.
          </h2>

          <p className="section-copy">
            The responsibilities may vary by business model, but the need for
            accurate coordination, clear ownership, and consistent
            communication remains the same.
          </p>

          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.title}
                  className="group flex min-h-[500px] flex-col overflow-hidden rounded-[26px] border border-[#E7DDD8] bg-[#FFFDFC] shadow-[0_14px_38px_rgba(32,26,22,0.055)] transition duration-300 hover:-translate-y-2 hover:border-[#C21E3A]/60 hover:shadow-[0_26px_55px_rgba(32,26,22,0.11)]"
                >
                  <div className="relative border-b border-[#E7DDD8] bg-[#FBF4F2] p-7">
                    <span className="absolute right-6 top-4 text-[54px] font-black leading-none text-[#C21E3A]/[0.07]">
                      {industry.number}
                    </span>

                    <div className="icon-panel">
                      <Icon size={25} />
                    </div>

                    <h3 className="relative mt-6 !text-[22px]">
                      {industry.title}
                    </h3>

                    <p className="relative mt-4 text-[14px] leading-7 text-[#5F5752]">
                      {industry.description}
                    </p>
                  </div>

                  <div className="grid gap-3 p-7">
                    {industry.responsibilities.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-[#EFE6E2] bg-white px-4 py-3"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FBEAEC]">
                          <Check size={14} className="text-[#C21E3A]" />
                        </span>

                        <span className="text-[14px] font-medium text-[#514A45]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-[#E7DDD8] px-7 py-5">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#C21E3A] no-underline"
                    >
                      View relevant services
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section-sm border-y border-[#E7DDD8] bg-white">
        <div className="site-container">
          <div className="grid items-center gap-8 rounded-[26px] bg-[#201A16] px-8 py-9 text-white md:px-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[14px] font-bold uppercase tracking-[0.05em] !text-[#F3AAB6]">
                Industry-Specific Support
              </p>

              <h2 className="mt-3 max-w-3xl !text-[29px] !text-white">
                Not sure which operational functions are the right fit?
              </h2>

              <p className="mt-4 max-w-2xl text-[14px] leading-7 !text-white/70">
                Review the complete service range and identify the
                responsibilities currently consuming your team’s time.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#C21E3A] px-7 py-4 font-semibold text-white no-underline hover:-translate-y-1 hover:bg-[#8F1329]"
            >
              Explore Services
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}