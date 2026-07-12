import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Handshake,
  MessagesSquare,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";

const industryChallenges = [
  "Sales teams spending valuable time on administrative coordination",
  "Supplier follow-ups interrupting customer and revenue-focused work",
  "Artwork, production, and shipping updates requiring constant attention",
  "Operational workload increasing faster than internal capacity",
];

const principles = [
  {
    icon: Target,
    title: "Clear Operational Ownership",
    text: "Every agreed responsibility has defined ownership, expectations, and accountability.",
  },
  {
    icon: MessagesSquare,
    title: "Structured Communication",
    text: "Progress updates, escalation points, and communication standards remain clear.",
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    text: "We work within your established systems and operate as an extension of your team.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Confidentiality",
    text: "Customer, supplier, pricing, financial, and operational information is handled responsibly.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-section">
        <div className="site-container">
          <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_.98fr]">
            <div>
              <div className="section-kicker">About CoreViaSupport</div>

              <h1 className="max-w-4xl">
                Operational support built specifically for promotional product
                distributors.
              </h1>

              <p className="section-copy">
                CoreViaSupport was established to solve a challenge common
                across the promotional products industry: as sales increase,
                operational responsibilities often expand faster than internal
                capacity.
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#5F5752]">
                Order administration, supplier communication, product research,
                artwork approvals, production follow-up, customer updates, and
                financial records can quickly consume the time of owners,
                account managers, and sales professionals.
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#5F5752]">
                We created CoreViaSupport to take ownership of those
                responsibilities while working within the systems, procedures,
                and business relationships our clients already rely on.
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
                  <BriefcaseBusiness size={28} />
                </div>

                <p className="mt-6 text-[14px] font-bold uppercase tracking-[0.05em] !text-[#F3AAB6]">
                  Why CoreViaSupport Exists
                </p>

                <h2 className="mt-3 !text-[30px] !text-white">
                  Give sales teams more time to sell, serve customers, and grow.
                </h2>

                <p className="mt-5 text-[15px] leading-8 !text-white/70">
                  We provide dependable operating capacity behind customer
                  opportunities and active orders without requiring
                  distributors to immediately increase permanent internal
                  overhead.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Industry-focused support",
                    "Defined responsibility",
                    "Flexible capacity",
                    "Clear communication",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white/[0.08] px-4 py-4"
                    >
                      <BadgeCheck
                        size={18}
                        className="shrink-0 text-[#F3AAB6]"
                      />

                      <span className="text-[14px] font-medium text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section border-y border-[#E7DDD8] bg-white">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[.76fr_1.24fr]">
            <div>
              <div className="section-kicker">The Industry Challenge</div>

              <h2 className="max-w-xl">
                Growth should not turn your sales organization into an
                operations department.
              </h2>

              <p className="section-copy">
                Distributor growth creates more coordination at every stage of
                the customer and order lifecycle.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {industryChallenges.map((item, index) => (
                <article
                  key={item}
                  className="group flex min-h-[150px] items-start gap-4 rounded-[22px] border border-[#E7DDD8] bg-[#FFFDFC] p-6 transition hover:-translate-y-1 hover:border-[#C21E3A]/55 hover:shadow-[0_16px_34px_rgba(32,26,22,0.08)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FBEAEC] text-[13px] font-bold text-[#C21E3A] transition group-hover:bg-[#C21E3A] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-1 text-[14px] font-medium leading-7 text-[#514A45]">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8 rounded-[26px] bg-[#201A16] px-8 py-9 text-white md:px-10 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="text-[14px] font-bold uppercase tracking-[0.05em] !text-[#F3AAB6]">
                The CoreViaSupport Role
              </p>

              <h3 className="mt-4 !text-[25px] !leading-[1.3] !text-white">
                Operate as a dependable extension of your internal team.
              </h3>
            </div>

            <p className="text-[15px] leading-8 !text-white/70">
              We do not replace your business processes or take control away
              from your team. We learn how your business operates, manage
              clearly assigned functions, and maintain the communication and
              visibility required for your team to remain informed and in
              control.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <div className="section-kicker">How We Operate</div>

              <h2 className="max-w-xl">
                Professional standards that support dependable execution.
              </h2>

              <p className="section-copy">
                Every engagement is built around clearly assigned
                responsibilities, structured communication, confidentiality,
                and long-term partnership.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {principles.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="business-card group p-7"
                  >
                    <div className="icon-panel">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-6 !text-[18px]">{item.title}</h3>

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

      <section className="page-section-sm border-t border-[#E7DDD8] bg-white">
        <div className="site-container">
          <div className="grid items-center gap-8 rounded-[26px] border border-[#E7DDD8] bg-[#FFFDFC] px-8 py-9 shadow-[0_14px_38px_rgba(32,26,22,0.055)] md:px-10 lg:grid-cols-[1fr_auto]">
            <div className="flex items-start gap-5">
              <div className="icon-panel hidden sm:flex">
                <UsersRound size={23} />
              </div>

              <div>
                <p className="text-[14px] font-bold uppercase tracking-[0.05em] text-[#C21E3A]">
                  Specialized Operations Partner
                </p>

                <h2 className="mt-3 max-w-3xl !text-[29px]">
                  Built for promotional products businesses—not for every
                  industry.
                </h2>

                <p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#5F5752]">
                  Our focused industry model helps us understand the
                  responsibilities, supplier relationships, communication, and
                  coordination required behind branded merchandise
                  opportunities and orders.
                </p>
              </div>
            </div>

            <Link href="/industries" className="secondary-button">
              View Supported Industries
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}