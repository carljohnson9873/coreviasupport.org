import Link from "next/link";
import { ArrowRight, FileCheck2, Scale, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "Website Use",
    content:
      "This website is provided for general business information. You agree not to misuse the website, interfere with its operation, attempt unauthorized access, or use its content for unlawful purposes.",
  },
  {
    title: "Service Engagements",
    content:
      "Website content does not create a client relationship. Services begin only after scope, responsibilities, pricing, availability, confidentiality requirements, and commercial terms are confirmed in writing.",
  },
  {
    title: "Pricing and Estimates",
    content:
      "Website pricing and calculator results are estimates unless confirmed in a written proposal or service agreement. Final pricing may depend on workload, complexity, systems, required availability, and service scope.",
  },
  {
    title: "Client Responsibilities",
    content:
      "Clients are responsible for providing accurate instructions, timely approvals, necessary system access, relevant records, and appropriate contacts required for service delivery.",
  },
  {
    title: "Confidentiality",
    content:
      "Confidentiality obligations may be further defined in a service agreement or nondisclosure agreement. Both parties are expected to protect confidential business information received during an engagement.",
  },
  {
    title: "Third-Party Platforms",
    content:
      "CoreViaSupport may work through third-party software, supplier portals, communication tools, accounting platforms, and calendar services. Their availability and terms are controlled by their respective providers.",
  },
  {
    title: "Intellectual Property",
    content:
      "Website design, branding, text, graphics, and original materials belong to CoreViaSupport unless otherwise stated. They may not be copied, republished, or commercially used without written permission.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the extent permitted by law, CoreViaSupport is not liable for indirect, incidental, special, or consequential loss arising from website use or reliance on general website information.",
  },
  {
    title: "Changes to These Terms",
    content:
      "These terms may be updated when our website, services, or legal requirements change. Updated terms become effective when published on this page.",
  },
];

export default function TermsPage() {
  return (
    <main>
      <section className="page-section">
        <div className="site-container">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_.85fr]">
            <div>
              <div className="section-kicker">Terms & Conditions</div>

              <h1 className="max-w-4xl">
                Terms governing the use of the CoreViaSupport website.
              </h1>

              <p className="section-copy">
                These terms explain the conditions that apply when accessing
                this website and reviewing information about CoreViaSupport
                services.
              </p>

              <p className="mt-5 text-[14px] font-medium text-[#6A625C]">
                Last updated: July 2026
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[26px] bg-[#201A16] p-7 text-white">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#C21E3A]/25 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C21E3A]/20 text-[#F3AAB6]">
                  <Scale size={27} />
                </div>

                <h2 className="mt-6 !text-[27px] !text-white">
                  Clear commercial terms support reliable business
                  relationships.
                </h2>

                <p className="mt-4 text-[14px] leading-7 !text-white/70">
                  Specific service terms are documented separately before an
                  engagement begins.
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-xl bg-white/[0.08] p-4">
                  <FileCheck2 size={20} className="text-[#F3AAB6]" />

                  <span className="text-[14px] font-medium text-white">
                    Written scope and responsibilities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section border-y border-[#E7DDD8] bg-white">
        <div className="site-container">
          <div className="mx-auto max-w-4xl space-y-5">
            {sections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-[22px] border border-[#E7DDD8] bg-[#FFFDFC] p-6 md:p-7"
              >
                <div className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FBEAEC] text-[13px] font-bold text-[#C21E3A]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h2 className="!text-[20px]">{section.title}</h2>

                    <p className="mt-3 text-[14px] leading-7 text-[#6A625C]">
                      {section.content}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section-sm">
        <div className="site-container">
          <div className="grid items-center gap-7 rounded-[24px] bg-[#201A16] px-8 py-9 text-white lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={22} className="text-[#F3AAB6]" />

                <h2 className="!text-[26px] !text-white">
                  Need clarification before working with us?
                </h2>
              </div>

              <p className="mt-3 text-[14px] leading-7 !text-white/70">
                Commercial scope and engagement terms are reviewed before
                services begin.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C21E3A] px-6 py-4 font-semibold text-white no-underline hover:bg-[#8F1329]"
            >
              Contact CoreViaSupport
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}