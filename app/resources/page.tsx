"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  HelpCircle,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Which businesses does CoreViaSupport support?",
    answer:
      "CoreViaSupport primarily supports promotional product distributors, branded merchandise agencies, corporate gifting companies, print and promotional businesses, company-store programs, and related organizations managing suppliers, products, artwork, production, shipping, customers, and financial administration.",
  },
  {
    question: "Can we begin with only one service?",
    answer:
      "Yes. You can begin with one clearly defined operational function and expand the engagement later as workload, order volume, seasonal demand, or business requirements change.",
  },
  {
    question: "Do you provide support during US business hours?",
    answer:
      "Yes. Support availability can be aligned with US business hours based on the agreed responsibilities, communication requirements, workload, and service scope.",
  },
  {
    question: "Can CoreViaSupport work within our existing systems?",
    answer:
      "Yes. We can work within your existing order-management platforms, supplier portals, accounting software, shared inboxes, communication tools, file-storage systems, and documented operating procedures.",
  },
  {
    question: "Can you sign a nondisclosure agreement?",
    answer:
      "Yes. CoreViaSupport supports NDA-based engagements and handles customer, supplier, pricing, artwork, financial, and operational information professionally and confidentially.",
  },
  {
    question: "Can support increase during seasonal demand?",
    answer:
      "Yes. The engagement can be reviewed when order volume, campaign activity, seasonal demand, or internal workload changes. Any expansion of responsibilities is confirmed before implementation.",
  },
  {
    question: "How is communication managed?",
    answer:
      "Communication channels, reporting frequency, responsibilities, escalation points, response expectations, and internal contacts are agreed before support begins.",
  },
  {
    question: "How quickly can services begin?",
    answer:
      "The start timeline depends on the selected services, system access, available documentation, workload, training requirements, and internal approvals. A realistic launch timeline is confirmed after reviewing the scope.",
  },
  {
    question: "Will we retain control of our operations?",
    answer:
      "Yes. CoreViaSupport manages clearly assigned responsibilities while your business retains control of systems, customer relationships, supplier decisions, approvals, and operational direction.",
  },
  {
    question: "How is final pricing confirmed?",
    answer:
      "Final pricing is confirmed after reviewing the required services, workload, complexity, systems, communication volume, availability, and level of operational ownership.",
  },
];

const informationAreas = [
  {
    icon: MessagesSquare,
    title: "Communication",
    text: "Defined channels, reporting expectations, and escalation procedures.",
  },
  {
    icon: ShieldCheck,
    title: "Confidentiality",
    text: "Professional handling of customer and business information.",
  },
  {
    icon: HelpCircle,
    title: "Flexible Support",
    text: "Operational coverage aligned with workload and priorities.",
  },
  {
    icon: FileText,
    title: "Clear Scope",
    text: "Responsibilities are documented before support begins.",
  },
];

export default function ResourcesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main>
      <section className="page-section">
        <div className="site-container">
          <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_.98fr]">
            <div>
              <div className="section-kicker">Frequently Asked Questions</div>

              <h1 className="max-w-4xl">
                Clear information before you begin working with CoreViaSupport.
              </h1>

              <p className="section-copy">
                Review common questions about service scope, communication,
                systems, confidentiality, availability, pricing, and
                operational responsibility.
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#5F5752]">
                Specific responsibilities and commercial terms are confirmed
                after reviewing how your business operates and where additional
                support is required.
              </p>

              <Link href="/services" className="secondary-button mt-8">
                Review Our Services
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {informationAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="business-card group min-h-[205px] p-6"
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
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <div className="section-kicker">Common Questions</div>

              <h2 className="max-w-xl">
                What businesses usually want to know before delegating
                operations.
              </h2>

              <p className="section-copy">
                These answers provide general guidance. Final scope and
                responsibilities remain specific to each engagement.
              </p>

              <div className="mt-8 rounded-[22px] bg-[#201A16] p-6 text-white">
                <p className="text-[13px] font-bold uppercase tracking-[0.05em] !text-[#F3AAB6]">
                  Important
                </p>

                <h3 className="mt-3 !text-[20px] !text-white">
                  CoreViaSupport adapts to your existing operating model.
                </h3>

                <p className="mt-3 text-[14px] leading-7 !text-white/65">
                  We do not require distributors to replace their systems,
                  supplier relationships, communication channels, or documented
                  procedures.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    key={faq.question}
                    className={`overflow-hidden rounded-[20px] border bg-[#FFFDFC] transition duration-300 ${
                      isOpen
                        ? "border-[#C21E3A]/55 shadow-[0_16px_38px_rgba(32,26,22,0.08)]"
                        : "border-[#E7DDD8]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[16px] font-semibold leading-7 text-[#201A16]">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                          isOpen
                            ? "bg-[#C21E3A] text-white"
                            : "bg-[#FBEAEC] text-[#C21E3A]"
                        }`}
                      >
                        <ChevronDown
                          size={18}
                          className={`transition duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#E7DDD8] px-6 py-5">
                        <p className="text-[14px] leading-7 text-[#5F5752]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section-sm">
        <div className="site-container">
          <div className="flex items-start gap-5 rounded-[24px] border border-[#E7DDD8] bg-white p-7 shadow-[0_14px_38px_rgba(32,26,22,0.055)] md:p-8">
            <div className="icon-panel hidden sm:flex">
              <HelpCircle size={23} />
            </div>

            <div>
              <p className="text-[14px] font-bold uppercase tracking-[0.05em] text-[#C21E3A]">
                Additional Questions
              </p>

              <h2 className="mt-3 !text-[27px]">
                Questions specific to your business can be reviewed during the
                consultation.
              </h2>

              <p className="mt-4 max-w-3xl text-[14px] leading-7 text-[#5F5752]">
                The Navbar provides direct access to the consultation page when
                you are ready to discuss your systems, workload, operational
                priorities, and required support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}