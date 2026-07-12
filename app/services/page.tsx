import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Check,
  FileSearch,
  Headset,
  PackageCheck,
  Palette,
  UsersRound,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: PackageCheck,
    title: "Order Management",
    href: "/services/order-management",
    statement: "Keep every order organized, visible, and moving forward.",
    description:
      "Operational coordination across order entry, purchase orders, suppliers, production, shipping, and customer communication.",
    capabilities: [
      "Sales order creation",
      "Purchase order creation",
      "Supplier coordination",
      "Production follow-up",
      "Shipment tracking",
      "Customer updates",
    ],
  },
  {
    number: "02",
    icon: Palette,
    title: "Artwork Services",
    href: "/services/artwork",
    statement: "Move proofs, revisions, and approvals forward efficiently.",
    description:
      "Structured management of artwork communication between customers, suppliers, and production teams.",
    capabilities: [
      "Artwork review",
      "Proof coordination",
      "Revision tracking",
      "Approval follow-up",
      "Supplier communication",
      "Final-file coordination",
    ],
  },
  {
    number: "03",
    icon: FileSearch,
    title: "Research & Presentations",
    href: "/services/research",
    statement: "Respond to opportunities with stronger product recommendations.",
    description:
      "Product sourcing, supplier comparison, pricing research, alternative recommendations, and client-ready presentations.",
    capabilities: [
      "Product sourcing",
      "Supplier comparison",
      "Pricing research",
      "Inventory review",
      "Alternative products",
      "Presentation creation",
    ],
  },
  {
    number: "04",
    icon: Headset,
    title: "Customer Support",
    href: "/services/customer-support",
    statement: "Maintain professional communication throughout every order.",
    description:
      "Responsive customer communication, order updates, follow-ups, issue coordination, and post-delivery support.",
    capabilities: [
      "Customer emails",
      "Order status updates",
      "Proof follow-ups",
      "Issue coordination",
      "Internal escalation",
      "Post-delivery support",
    ],
  },
  {
    number: "05",
    icon: Calculator,
    title: "Bookkeeping",
    href: "/services/bookkeeping",
    statement: "Keep routine financial administration organized and current.",
    description:
      "Support for invoice records, expenses, payment follow-ups, reconciliations, documentation, and reporting.",
    capabilities: [
      "Invoice tracking",
      "Expense recording",
      "Transaction records",
      "Payment follow-up",
      "Reconciliation support",
      "Reporting assistance",
    ],
  },
  {
    number: "06",
    icon: UsersRound,
    title: "Hybrid Operations Support",
    href: "/services/hybrid-support",
    statement: "Combine several operational functions under one support team.",
    description:
      "A coordinated engagement designed around the responsibilities, systems, workload, and priorities of your business.",
    capabilities: [
      "Combined service functions",
      "Defined responsibilities",
      "Central coordination",
      "Flexible task allocation",
      "Structured communication",
      "Progress visibility",
    ],
  },
];

const engagementOptions = [
  {
    number: "01",
    title: "Focused Service",
    text: "Delegate one clearly defined operational function.",
  },
  {
    number: "02",
    title: "Combined Support",
    text: "Bring several related responsibilities under one coordinated team.",
  },
  {
    number: "03",
    title: "Flexible Capacity",
    text: "Adjust support as workload, order volume, and priorities change.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-section">
        <div className="site-container">
          <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_.98fr]">
            <div>
              <div className="section-kicker">Our Services</div>

              <h1 className="max-w-4xl">
                Operational support across the complete promotional products
                lifecycle.
              </h1>

              <p className="section-copy">
                CoreViaSupport takes ownership of the administrative,
                coordination, communication, and record-management
                responsibilities that consume your internal team’s time.
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#5F5752]">
                Begin with one focused service or combine multiple capabilities
                under a coordinated engagement aligned with your existing
                systems and procedures.
              </p>

              <a href="#capabilities" className="secondary-button mt-8">
                Review Service Capabilities
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="relative overflow-hidden rounded-[28px] bg-[#201A16] p-7 text-white shadow-[0_24px_60px_rgba(32,26,22,0.17)] md:p-8">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C21E3A]/25 blur-3xl" />

              <div className="relative">
                <p className="text-[14px] font-bold uppercase tracking-[0.05em] !text-[#F3AAB6]">
                  Complete Operational Coverage
                </p>

                <h2 className="mt-4 !text-[30px] !text-white">
                  One support partner across the responsibilities behind every
                  opportunity and order.
                </h2>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Sales support",
                    "Order administration",
                    "Supplier communication",
                    "Artwork coordination",
                    "Customer support",
                    "Financial records",
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

                <div className="mt-6 rounded-2xl bg-white p-5">
                  <p className="text-[14px] font-semibold leading-7 !text-[#201A16]">
                    Select only the responsibilities your team wants to
                    delegate. The final scope remains aligned with your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="page-section border-y border-[#E7DDD8] bg-white"
      >
        <div className="site-container">
          <div className="section-kicker">Service Capabilities</div>

          <h2 className="max-w-3xl">
            Clearly defined responsibilities supported by dependable daily
            execution.
          </h2>

          <p className="section-copy">
            Each service can operate independently or become part of a broader
            support structure.
          </p>

          <div className="mt-12 space-y-7">
            {services.map((service, index) => {
              const Icon = service.icon;
              const reverse = index % 2 !== 0;

              return (
                <article
                  key={service.title}
                  className="overflow-hidden rounded-[28px] border border-[#E7DDD8] bg-[#FFFDFC] shadow-[0_14px_38px_rgba(32,26,22,0.055)] transition duration-300 hover:border-[#C21E3A]/45 hover:shadow-[0_24px_52px_rgba(32,26,22,0.1)]"
                >
                  <div className="grid lg:grid-cols-[.84fr_1.16fr]">
                    <div
                      className={`relative overflow-hidden bg-[#FBF4F2] p-7 md:p-9 ${
                        reverse ? "lg:order-2" : ""
                      }`}
                    >
                      <span className="absolute -right-2 -top-8 text-[120px] font-black leading-none text-[#C21E3A]/[0.055]">
                        {service.number}
                      </span>

                      <div className="relative">
                        <div className="icon-panel">
                          <Icon size={25} />
                        </div>

                        <span className="mt-7 block text-[13px] font-bold text-[#C21E3A]">
                          {service.number}
                        </span>

                        <h3 className="mt-3 !text-[25px]">{service.title}</h3>

                        <p className="mt-4 text-[16px] font-semibold leading-7 text-[#38312D]">
                          {service.statement}
                        </p>

                        <p className="mt-4 text-[14px] leading-7 text-[#5F5752]">
                          {service.description}
                        </p>

                        <Link
                          href={service.href}
                          className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[#C21E3A] no-underline"
                        >
                          Explore {service.title}
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>

                    <div
                      className={`p-7 md:p-9 ${
                        reverse ? "lg:order-1" : ""
                      }`}
                    >
                      <p className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#C21E3A]">
                        Included Capabilities
                      </p>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {service.capabilities.map((item, capabilityIndex) => (
                          <div
                            key={item}
                            className="group flex min-h-[84px] items-center gap-4 rounded-2xl border border-[#E7DDD8] bg-white p-4 transition hover:-translate-y-1 hover:border-[#C21E3A]/50 hover:shadow-[0_12px_28px_rgba(32,26,22,0.07)]"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FBEAEC] text-[12px] font-bold text-[#C21E3A] transition group-hover:bg-[#C21E3A] group-hover:text-white">
                              {String(capabilityIndex + 1).padStart(2, "0")}
                            </span>

                            <span className="text-[14px] font-semibold text-[#514A45]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section-sm">
        <div className="site-container">
          <div className="grid gap-5 md:grid-cols-3">
            {engagementOptions.map((item) => (
              <article key={item.number} className="business-card p-7">
                <span className="text-[13px] font-bold text-[#C21E3A]">
                  {item.number}
                </span>

                <h3 className="mt-4 !text-[19px]">{item.title}</h3>

                <p className="mt-3 text-[14px] leading-7 text-[#5F5752]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-4 rounded-[22px] border border-[#E7DDD8] bg-white p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FBEAEC]">
              <Check size={18} className="text-[#C21E3A]" />
            </span>

            <div>
              <h3 className="!text-[18px]">
                Detailed responsibilities are confirmed before support begins.
              </h3>

              <p className="mt-2 text-[14px] leading-7 text-[#5F5752]">
                Systems, workload, communication channels, required
                availability, reporting expectations, and areas of ownership
                are reviewed during the initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}