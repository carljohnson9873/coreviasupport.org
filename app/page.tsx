import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  FileSearch,
  Gift,
  Headset,
  PackageCheck,
  Palette,
  ReceiptText,
  Store,
  Truck,
  UsersRound,
} from "lucide-react";

const audiences = [
  {
    icon: PackageCheck,
    title: "Promotional Product Distributors",
  },
  {
    icon: BriefcaseBusiness,
    title: "Brand Merchandise Agencies",
  },
  {
    icon: Gift,
    title: "Corporate Gifting Companies",
  },
  {
    icon: Store,
    title: "Print & Promotional Businesses",
  },
];

const services = [
  {
    number: "01",
    icon: PackageCheck,
    title: "Order Management",
    href: "/services/order-management",
    description:
      "Reliable coordination from sales order creation through supplier follow-up, production, shipping, and customer updates.",
    capabilities: [
      "Sales and purchase orders",
      "Supplier coordination",
      "Production follow-up",
    ],
  },
  {
    number: "02",
    icon: Palette,
    title: "Artwork Services",
    href: "/services/artwork",
    description:
      "Structured management of artwork, proofs, revisions, approvals, and supplier communication.",
    capabilities: [
      "Proof coordination",
      "Revision tracking",
      "Approval follow-up",
    ],
  },
  {
    number: "03",
    icon: FileSearch,
    title: "Research & Presentations",
    href: "/services/research",
    description:
      "Product sourcing, supplier comparison, pricing research, and client-ready presentation support.",
    capabilities: [
      "Product research",
      "Supplier comparison",
      "Presentation creation",
    ],
  },
  {
    number: "04",
    icon: Headset,
    title: "Customer Support",
    href: "/services/customer-support",
    description:
      "Professional customer communication throughout the complete order lifecycle.",
    capabilities: [
      "Customer emails",
      "Order updates",
      "Follow-up management",
    ],
  },
  {
    number: "05",
    icon: ReceiptText,
    title: "Bookkeeping",
    href: "/services/bookkeeping",
    description:
      "Routine bookkeeping and record support that keeps financial information organized and current.",
    capabilities: [
      "Invoice tracking",
      "Payment follow-up",
      "Reconciliation support",
    ],
  },
  {
    number: "06",
    icon: UsersRound,
    title: "Hybrid Operations Support",
    href: "/services",
    description:
      "Multiple operational functions managed through one coordinated and accountable support structure.",
    capabilities: [
      "Combined services",
      "Defined ownership",
      "Flexible capacity",
    ],
  },
];

const workflow = [
  {
    number: "01",
    icon: UsersRound,
    title: "Customer Requirement",
    text: "Requirements, timelines, quantities, and expectations are reviewed.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Research & Quotation",
    text: "Products, suppliers, pricing, and presentation options are prepared.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Order Coordination",
    text: "Sales orders, purchase orders, and supplier instructions are aligned.",
  },
  {
    number: "04",
    icon: Palette,
    title: "Artwork & Approval",
    text: "Proofs, revisions, approvals, and final production files are managed.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Production & Delivery",
    text: "Production progress, shipping, and customer updates are monitored.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden pb-20 pt-10 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#C21E3A]/10 blur-[120px]" />
          <div className="absolute -bottom-36 -left-32 h-[350px] w-[350px] rounded-full bg-[#8F1329]/8 blur-[110px]" />
        </div>

        <div className="site-container">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
            <div>
              <div className="section-kicker">
                Promotional Products Operations Specialists
              </div>

              <h1 className="max-w-4xl">
                The operations team behind growing promotional product
                distributors.
              </h1>

              <p className="section-copy">
                CoreViaSupport becomes an extension of your business by managing
                order coordination, supplier communication, artwork approvals,
                product research, production follow-up, bookkeeping, and
                customer communication—so your sales team can stay focused on
                growth.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="primary-button">
                  Book a Free Discovery Call
                  <ArrowRight size={17} />
                </Link>

                <Link href="/services" className="secondary-button">
                  Explore Our Services
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Built around promo-industry workflows",
                  "Dedicated operational ownership",
                  "Flexible monthly engagement",
                  "US business-hour availability",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-[15px] font-medium text-[#514A45]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FBEAEC]">
                      <Check size={15} className="text-[#C21E3A]" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="business-card relative overflow-hidden p-6 md:p-7">
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#C21E3A]/8 blur-3xl" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[14px] font-bold uppercase tracking-[0.05em] text-[#C21E3A]">
                        Distributor Operations Flow
                      </p>

                      <h2 className="mt-3 !text-[28px]">
                        One coordinated team across every stage.
                      </h2>
                    </div>

                    <span className="rounded-full bg-[#E9F6EF] px-4 py-2 text-[13px] font-semibold text-[#247A52]">
                      Active
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <div className="absolute bottom-8 left-[27px] top-8 w-px bg-[#DCCDC8]" />

                    <div className="space-y-3">
                      {workflow.map((item, index) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.title}
                            className="group relative flex items-center gap-4 rounded-2xl border border-[#E7DDD8] bg-[#FFFDFC] p-4 transition hover:-translate-y-1 hover:border-[#C21E3A]/55 hover:shadow-[0_14px_32px_rgba(32,26,22,0.08)]"
                          >
                            <div className="icon-panel relative z-10">
                              <Icon size={21} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-4">
                                <h3 className="!text-[16px]">{item.title}</h3>

                                <span className="text-[12px] font-bold text-[#C21E3A]/65">
                                  {item.number}
                                </span>
                              </div>

                              <p className="mt-1 text-[13px] leading-5 text-[#6A625C]">
                                {item.text}
                              </p>
                            </div>

                            {index < workflow.length - 1 && (
                              <span className="absolute -bottom-3 left-[42px] z-20 h-3 w-px bg-[#C21E3A]/35" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-5 rounded-2xl bg-[#201A16] px-6 py-5 text-center text-white shadow-[0_18px_38px_rgba(32,26,22,0.16)]">
                      <p className="text-[15px] font-semibold !text-white">
                        CoreViaSupport keeps the work connected, visible, and
                        moving.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section-sm border-y border-[#E7DDD8] bg-white">
        <div className="site-container">
          <div className="grid items-center gap-10 lg:grid-cols-[.82fr_1.18fr]">
            <div>
              <div className="section-kicker">Who We Support</div>

              <h2 className="max-w-xl">
                Built exclusively around branded merchandise and promotional
                products operations.
              </h2>

              <p className="section-copy">
                Support for businesses coordinating products, suppliers,
                artwork, production schedules, customer requirements, and
                delivery commitments.
              </p>

              <Link
                href="/industries"
                className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[#C21E3A] no-underline"
              >
                Explore supported industries
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="business-card group flex min-h-[108px] items-center gap-4 p-5"
                  >
                    <div className="icon-panel">
                      <Icon size={22} />
                    </div>

                    <h3 className="!text-[16px]">{item.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <div className="grid gap-7 lg:grid-cols-2">
            <div className="rounded-[26px] border border-[#E7DDD8] bg-white p-7 shadow-[0_14px_38px_rgba(32,26,22,0.055)] md:p-8">
              <div className="section-kicker">The Challenge</div>

              <h2 className="max-w-xl !text-[29px]">
                Growth creates more operational work than many internal teams
                can absorb.
              </h2>

              <div className="mt-7 space-y-4">
                {[
                  "Sales teams lose valuable time to routine coordination.",
                  "Supplier follow-ups require constant attention.",
                  "Artwork and production delays affect customer commitments.",
                  "Administrative workload increases with every new order.",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl bg-[#FBF4F2] p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E3C9C9] bg-white text-[13px] font-bold text-[#C21E3A]">
                      0{index + 1}
                    </span>

                    <p className="pt-1 text-[14px] font-medium leading-7 text-[#514A45]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[26px] bg-[#201A16] p-7 text-white shadow-[0_22px_50px_rgba(32,26,22,0.16)] md:p-8">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C21E3A]/25 blur-3xl" />

              <div className="relative">
                <p className="text-[14px] font-bold uppercase tracking-[0.05em] !text-[#F3AAB6]">
                  The CoreViaSupport Advantage
                </p>

                <h2 className="mt-4 max-w-xl !text-[29px] !text-white">
                  Expand your operational capacity without expanding your
                  payroll.
                </h2>

                <p className="mt-5 text-[15px] leading-8 !text-white/70">
                  We take responsibility for agreed operational functions,
                  integrate with your systems, and provide dependable daily
                  execution behind your sales organization.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    "Defined operational ownership",
                    "Structured communication",
                    "Consistent follow-through",
                    "Flexible support capacity",
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

                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-white no-underline"
                >
                  Learn more about CoreViaSupport
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section border-y border-[#E7DDD8] bg-white">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="section-kicker">Core Capabilities</div>

              <h2 className="max-w-3xl">
                Specialist support across the complete distributor lifecycle.
              </h2>

              <p className="section-copy">
                Select focused support for one operational function or combine
                multiple capabilities under one coordinated engagement.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#C21E3A] no-underline"
            >
              View all services
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-11 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const darkCard = index === services.length - 1;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`group relative flex min-h-[350px] flex-col overflow-hidden rounded-[24px] border p-7 no-underline transition duration-300 hover:-translate-y-2 ${
                    darkCard
                      ? "border-[#201A16] bg-[#201A16] text-white shadow-[0_18px_40px_rgba(32,26,22,0.15)]"
                      : "border-[#E7DDD8] bg-[#FFFDFC] text-[#201A16] shadow-[0_12px_32px_rgba(32,26,22,0.055)] hover:border-[#C21E3A]/55 hover:shadow-[0_22px_46px_rgba(32,26,22,0.1)]"
                  }`}
                >
                  <span
                    className={`absolute right-5 top-3 text-[70px] font-black leading-none ${
                      darkCard
                        ? "text-white/[0.04]"
                        : "text-[#C21E3A]/[0.055]"
                    }`}
                  >
                    {service.number}
                  </span>

                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl transition ${
                      darkCard
                        ? "bg-[#C21E3A]/20 text-[#F3AAB6]"
                        : "bg-[#FBEAEC] text-[#C21E3A] group-hover:bg-[#C21E3A] group-hover:text-white"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3
                    className={`relative mt-6 !text-[21px] ${
                      darkCard ? "!text-white" : ""
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`relative mt-4 text-[14px] leading-7 ${
                      darkCard ? "!text-white/65" : "text-[#6A625C]"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="relative mt-6 grid gap-3">
                    {service.capabilities.map((item) => (
                      <div
                        key={item}
                        className={`flex items-center gap-3 text-[13px] font-medium ${
                          darkCard ? "text-white/75" : "text-[#514A45]"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                            darkCard
                              ? "bg-white/10"
                              : "bg-[#FBEAEC]"
                          }`}
                        >
                          <Check
                            size={13}
                            className={
                              darkCard ? "text-[#F3AAB6]" : "text-[#C21E3A]"
                            }
                          />
                        </span>

                        {item}
                      </div>
                    ))}
                  </div>

                  <div
                    className={`relative mt-auto flex items-center gap-2 pt-7 text-[14px] font-semibold ${
                      darkCard ? "text-white" : "text-[#C21E3A]"
                    }`}
                  >
                    Explore service
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}