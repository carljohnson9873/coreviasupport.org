import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
} from "lucide-react";

type Outcome = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type ServicePageTemplateProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  icon: LucideIcon;
  visualTitle: string;
  visualPoints: string[];
  visualSummary: string;
  deliverablesTitle: string;
  deliverablesDescription: string;
  deliverables: string[];
  outcomesTitle: string;
  outcomes: Outcome[];
};

export default function ServicePageTemplate({
  eyebrow,
  title,
  introduction,
  icon: ServiceIcon,
  visualTitle,
  visualPoints,
  visualSummary,
  deliverablesTitle,
  deliverablesDescription,
  deliverables,
  outcomesTitle,
  outcomes,
}: ServicePageTemplateProps) {
  return (
    <main>
      <section className="page-section">
        <div className="site-container">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_.9fr]">
            <div>
              <div className="section-kicker">{eyebrow}</div>

              <h1 className="max-w-4xl">{title}</h1>

              <p className="section-copy">{introduction}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="primary-button">
                  Schedule a Consultation
                  <ArrowRight size={17} />
                </Link>

                <Link href="/services" className="secondary-button">
                  View All Services
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] bg-[#201A16] p-7 text-white shadow-[0_24px_60px_rgba(32,26,22,0.17)]">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C21E3A]/25 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C21E3A]/20 text-[#F3AAB6]">
                  <ServiceIcon size={28} />
                </div>

                <h2 className="mt-6 !text-[29px] !text-white">
                  {visualTitle}
                </h2>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {visualPoints.map((item) => (
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
                  <div className="flex items-start gap-3">
                    <BadgeCheck
                      size={20}
                      className="mt-1 shrink-0 text-[#C21E3A]"
                    />

                    <p className="text-[14px] font-semibold leading-7 !text-[#201A16]">
                      {visualSummary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section border-y border-[#E7DDD8] bg-white">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <div className="section-kicker">What We Handle</div>

              <h2 className="max-w-xl">{deliverablesTitle}</h2>

              <p className="section-copy">{deliverablesDescription}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map((item, index) => (
                <div
                  key={item}
                  className="group flex min-h-[90px] items-center gap-4 rounded-2xl border border-[#E7DDD8] bg-[#FFFDFC] p-5 transition hover:-translate-y-1 hover:border-[#C21E3A]/55 hover:shadow-[0_14px_30px_rgba(32,26,22,0.08)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FBEAEC] text-[13px] font-bold text-[#C21E3A] transition group-hover:bg-[#C21E3A] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[14px] font-semibold text-[#514A45]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <div className="section-kicker">Business Outcomes</div>

          <h2 className="max-w-3xl">{outcomesTitle}</h2>

          <div className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {outcomes.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="business-card p-7">
                  <div className="icon-panel">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 !text-[18px]">{item.title}</h3>

                  <p className="mt-3 text-[14px] leading-7 text-[#6A625C]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 rounded-[24px] border border-[#E7DDD8] bg-white px-6 py-7 sm:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex max-w-3xl items-start gap-3">
                <CheckCircle2
                  size={22}
                  className="mt-1 shrink-0 text-[#C21E3A]"
                />

                <div>
                  <h3 className="!text-[18px]">
                    Support built around your workflow
                  </h3>

                  <p className="mt-2 text-[14px] leading-7 text-[#514A45]">
                    Every promotional product business operates differently.
                    During your consultation, we review your current systems,
                    supplier relationships, order volume, responsibilities, and
                    coverage requirements to create a support plan that fits
                    your business.
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <Link href="/contact" className="primary-button">
                  Get Started
                  <ArrowRight size={17} />
                </Link>

                <Link href="/services" className="secondary-button">
                  Other Services
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}