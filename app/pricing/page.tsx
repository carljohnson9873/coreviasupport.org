import {
  BadgeCheck,
  Calculator,
  Check,
  Layers3,
  ReceiptText,
} from "lucide-react";

import PricingCalculator from "@/components/PricingCalculator";

const bundleDiscounts = [
  {
    services: "2 services",
    discount: "15% off",
  },
  {
    services: "3 services",
    discount: "20% off",
  },
  {
    services: "4 services",
    discount: "25% off",
  },
  {
    services: "5 services",
    discount: "30% off",
  },
  {
    services: "6 services",
    discount: "35% off",
  },
];

const pricingPrinciples = [
  {
    icon: ReceiptText,
    title: "Clear Base Pricing",
    text: "Each selected operational service begins at a defined monthly engagement fee.",
  },
  {
    icon: Layers3,
    title: "Bundle Savings",
    text: "Monthly discounts increase when multiple service functions are combined.",
  },
  {
    icon: Calculator,
    title: "Transparent Estimates",
    text: "Use the calculator to understand monthly fees, setup costs, and available discounts.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <section className="page-section">
        <div className="site-container">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_.92fr]">
            <div>
              <div className="section-kicker">Pricing</div>

              <h1 className="max-w-4xl">
                Flexible pricing aligned with the operational support your
                business requires.
              </h1>

              <p className="section-copy">
                Select one focused service or combine multiple operational
                functions under a coordinated support structure. Pricing remains
                clear while allowing the engagement to reflect your workload,
                systems, and business priorities.
              </p>

              <a href="#calculator" className="primary-button mt-8">
                Estimate Your Investment
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pricingPrinciples.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="business-card group min-h-[210px] p-6"
                  >
                    <div className="icon-panel">
                      <Icon size={23} />
                    </div>

                    <h2 className="mt-5 !text-[19px]">{item.title}</h2>

                    <p className="mt-3 text-[14px] leading-7 text-[#5F5752]">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section border-y border-[#E7DDD8] bg-white">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <article className="overflow-hidden rounded-[26px] border border-[#E7DDD8] bg-[#FFFDFC] shadow-[0_14px_38px_rgba(32,26,22,0.06)]">
              <div className="border-b border-[#E7DDD8] bg-[#FBF4F2] p-7 md:p-8">
                <p className="text-[14px] font-bold uppercase tracking-[0.05em] text-[#C21E3A]">
                  Standard Service Pricing
                </p>

                <h2 className="mt-4 !text-[29px]">
                  Clear pricing for focused operational support.
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#5F5752]">
                  Begin with one operational function and expand the engagement
                  when additional support is required.
                </p>
              </div>

              <div className="space-y-4 p-7 md:p-8">
                <div className="flex items-center justify-between gap-6 rounded-2xl border border-[#E7DDD8] bg-white p-5">
                  <div>
                    <p className="text-[14px] font-semibold text-[#201A16]">
                      Monthly service fee
                    </p>

                    <p className="mt-1 text-[13px] leading-6 text-[#6A625C]">
                      Per selected operational service
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[27px] font-bold text-[#201A16]">
                      $1,499
                    </p>

                    <p className="mt-1 text-[12px] text-[#6A625C]">
                      per month
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-6 rounded-2xl border border-[#E7DDD8] bg-white p-5">
                  <div>
                    <p className="text-[14px] font-semibold text-[#201A16]">
                      Standard setup fee
                    </p>

                    <p className="mt-1 text-[13px] leading-6 text-[#6A625C]">
                      Applied per service when selecting one or two services
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[27px] font-bold text-[#201A16]">
                      $750
                    </p>

                    <p className="mt-1 text-[12px] text-[#6A625C]">
                      one time
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-[#201A16] p-5 text-white">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#C21E3A]/25 blur-2xl" />

                  <div className="relative flex items-center justify-between gap-6">
                    <div>
                      <p className="text-[14px] font-semibold !text-white">
                        Multi-service setup
                      </p>

                      <p className="mt-1 text-[13px] leading-6 !text-white/60">
                        One setup fee when selecting more than two services
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[27px] font-bold text-white">
                        $1,000
                      </p>

                      <p className="mt-1 text-[12px] !text-white/55">
                        total setup
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-[#F0D6DB] bg-[#FFF7F8] p-5">
                  <BadgeCheck
                    size={20}
                    className="mt-1 shrink-0 text-[#C21E3A]"
                  />

                  <div>
                    <p className="text-[14px] font-semibold text-[#201A16]">
                      First-time client offer
                    </p>

                    <p className="mt-1 text-[13px] leading-6 text-[#6A625C]">
                      Receive 40% off the first month, including the applicable
                      initial setup fee.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-[26px] border border-[#E7DDD8] bg-[#FFFDFC] shadow-[0_14px_38px_rgba(32,26,22,0.06)]">
              <div className="border-b border-[#E7DDD8] bg-[#FBF4F2] p-7 md:p-8">
                <p className="text-[14px] font-bold uppercase tracking-[0.05em] text-[#C21E3A]">
                  Bundle Discounts
                </p>

                <h2 className="mt-4 !text-[29px]">
                  Reduce monthly investment by combining services.
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#5F5752]">
                  Bundle discounts apply to the combined monthly service
                  subtotal before the initial setup fee.
                </p>
              </div>

              <div className="p-7 md:p-8">
                <div className="grid gap-3">
                  {bundleDiscounts.map((item, index) => (
                    <div
                      key={item.services}
                      className="group flex items-center justify-between gap-6 rounded-2xl border border-[#E7DDD8] bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:border-[#C21E3A]/50 hover:shadow-[0_12px_28px_rgba(32,26,22,0.07)]"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FBEAEC] text-[13px] font-bold text-[#C21E3A] transition group-hover:bg-[#C21E3A] group-hover:text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-[14px] font-semibold text-[#514A45]">
                          {item.services}
                        </span>
                      </div>

                      <span className="rounded-full bg-[#FBEAEC] px-4 py-2 text-[14px] font-bold text-[#C21E3A]">
                        {item.discount}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-[#201A16] p-6 text-white">
                  <p className="text-[13px] font-bold uppercase tracking-[0.05em] !text-[#F3AAB6]">
                    Example
                  </p>

                  <h3 className="mt-3 !text-[21px] !text-white">
                    Three selected services receive a 20% monthly bundle
                    discount.
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 !text-white/65">
                    The calculator below automatically applies the correct
                    discount based on the number of selected services.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="calculator" className="page-section">
        <div className="site-container">
          <div className="mb-10">
            <div className="section-kicker">Pricing Calculator</div>

            <h2 className="max-w-3xl">
              Build an estimate around the services your business needs.
            </h2>

            <p className="section-copy">
              Select operational functions to review the monthly service fee,
              bundle discount, initial setup cost, first-time client offer, and
              recurring monthly investment.
            </p>
          </div>

          <PricingCalculator />
        </div>
      </section>

      <section className="page-section-sm border-y border-[#E7DDD8] bg-white">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Workload",
                text: "Order volume, communication requirements, and recurring task volume.",
              },
              {
                title: "Complexity",
                text: "Systems, supplier coordination, approval requirements, and reporting needs.",
              },
              {
                title: "Coverage",
                text: "Required availability, service scope, and number of operational functions.",
              },
            ].map((item, index) => (
              <article key={item.title} className="business-card p-7">
                <span className="text-[13px] font-bold text-[#C21E3A]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 !text-[19px]">{item.title}</h3>

                <p className="mt-3 text-[14px] leading-7 text-[#5F5752]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-4 rounded-[22px] border border-[#E7DDD8] bg-[#FFFDFC] p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FBEAEC]">
              <Check size={18} className="text-[#C21E3A]" />
            </span>

            <div>
              <h3 className="!text-[18px]">
                Final pricing is confirmed after reviewing the service scope.
              </h3>

              <p className="mt-2 text-[14px] leading-7 text-[#5F5752]">
                The calculator provides a transparent estimate. The final
                commercial proposal reflects confirmed responsibilities,
                workload, systems, availability, and communication
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}