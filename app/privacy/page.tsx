import Link from "next/link";
import { ArrowRight, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We may collect information you submit through our contact forms, email communication, calendar bookings, or service enquiries. This may include your name, company name, email address, phone number, service requirements, and information you voluntarily provide.",
  },
  {
    title: "How We Use Information",
    content:
      "Information is used to respond to enquiries, schedule consultations, prepare service recommendations, communicate about potential or active engagements, improve our website, and fulfil legal or administrative responsibilities.",
  },
  {
    title: "Confidential Business Information",
    content:
      "Customer, supplier, pricing, operational, financial, artwork, and order-related information shared during an engagement is handled professionally and used only for the agreed business purpose.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell personal or business information. Information may be shared with trusted service providers only when reasonably necessary to operate our website, communicate with you, or deliver agreed services.",
  },
  {
    title: "Data Security",
    content:
      "We use reasonable administrative and technical measures to protect information against unauthorized access, disclosure, alteration, or loss. No internet-based system can guarantee complete security.",
  },
  {
    title: "Cookies and Analytics",
    content:
      "The website may use essential cookies and analytics tools to understand website performance and visitor behaviour. You may control cookies through your browser settings.",
  },
  {
    title: "Data Retention",
    content:
      "Information is retained only for as long as reasonably necessary for communication, service delivery, legal compliance, recordkeeping, and legitimate business purposes.",
  },
  {
    title: "Your Rights",
    content:
      "You may request access, correction, or deletion of personal information held by CoreViaSupport, subject to applicable legal and business recordkeeping requirements.",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-section">
        <div className="site-container">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_.85fr]">
            <div>
              <div className="section-kicker">Privacy Policy</div>

              <h1 className="max-w-4xl">
                How CoreViaSupport handles personal and business information.
              </h1>

              <p className="section-copy">
                This policy explains how information may be collected, used,
                protected, and retained when you visit our website or communicate
                with CoreViaSupport.
              </p>

              <p className="mt-5 text-[14px] font-medium text-[#6A625C]">
                Last updated: July 2026
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[26px] bg-[#201A16] p-7 text-white">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#C21E3A]/25 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C21E3A]/20 text-[#F3AAB6]">
                  <LockKeyhole size={27} />
                </div>

                <h2 className="mt-6 !text-[27px] !text-white">
                  Privacy and confidentiality are central to our operating
                  standards.
                </h2>

                <p className="mt-4 text-[14px] leading-7 !text-white/70">
                  We handle contact, customer, supplier, pricing, financial, and
                  operational information with appropriate care.
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-xl bg-white/[0.08] p-4">
                  <ShieldCheck size={20} className="text-[#F3AAB6]" />

                  <span className="text-[14px] font-medium text-white">
                    NDA-friendly engagements available
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
                <Mail size={22} className="text-[#F3AAB6]" />

                <h2 className="!text-[26px] !text-white">
                  Questions about this policy?
                </h2>
              </div>

              <p className="mt-3 text-[14px] leading-7 !text-white/70">
                Contact us regarding privacy, information access, correction, or
                deletion requests.
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