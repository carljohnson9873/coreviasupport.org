"use client";

import {
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  LoaderCircle,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "info@coreviasupport.org",
    href: "mailto:info@coreviasupport.org",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+91 82099 12773",
    href: "https://wa.me/918209912773",
  },
  {
    icon: Clock3,
    title: "Availability",
    value: "Support aligned with US business hours",
  },
];

const discoveryCallPoints = [
  "30-minute introductory discussion",
  "Review of your current workflow",
  "Identification of operational bottlenecks",
  "Discussion of required support functions",
  "Recommended engagement structure",
  "No obligation to proceed",
];

const consultationBenefits = [
  {
    icon: MessageCircle,
    title: "Focused Discussion",
    text: "We review your actual workflow instead of recommending a generic support package.",
  },
  {
    icon: Clock3,
    title: "Clear Next Steps",
    text: "You receive practical guidance based on scope, workload, systems, and required coverage.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential Review",
    text: "Customer, supplier, pricing, financial, and operational information is handled professionally.",
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Your inquiry could not be submitted.",
        );
      }

      setStatus("success");
      setFeedback(
        result.message || "Your inquiry has been submitted successfully.",
      );

      form.reset();
    } catch (error) {
      setStatus("error");

      setFeedback(
        error instanceof Error
          ? error.message
          : "Your inquiry could not be submitted. Please try again.",
      );
    }
  }

  return (
    <main>
      <section className="page-section">
        <div className="site-container">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_.9fr]">
            <div>
              <div className="section-kicker">Contact CoreViaSupport</div>

              <h1 className="max-w-4xl">
                Let’s discuss where your business needs additional operational
                capacity.
              </h1>

              <p className="section-copy">
                Share your current workload, operational priorities, and the
                responsibilities consuming your internal team’s time.
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#5F5752]">
                We will review your requirements and help determine which
                support model is best aligned with your systems, volume,
                communication needs, and business objectives.
              </p>
            </div>

            <div className="business-card p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <>
                      <div className="icon-panel">
                        <Icon size={23} />
                      </div>

                      <h2 className="mt-5 !text-[18px]">{item.title}</h2>

                      <p className="mt-2 text-[14px] leading-6 text-[#5F5752]">
                        {item.value}
                      </p>
                    </>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        target={
                          item.href.startsWith("https://")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          item.href.startsWith("https://")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group rounded-2xl border border-[#E7DDD8] bg-[#FFFDFC] p-5 no-underline transition hover:-translate-y-1 hover:border-[#C21E3A]/55 hover:shadow-[0_14px_30px_rgba(32,26,22,0.08)]"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#E7DDD8] bg-[#FFFDFC] p-5"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section border-y border-[#E7DDD8] bg-white">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div className="business-card h-fit p-7 md:p-8">
              <div className="section-kicker">Send an Inquiry</div>

              <h2 className="max-w-xl !text-[30px]">
                Tell us which responsibilities you want your team to delegate.
              </h2>

              <p className="mt-4 text-[14px] leading-7 text-[#5F5752]">
                Provide a brief overview of your workflow and operational
                challenges. We will review the information before the initial
                discussion.
              </p>

              {status === "success" ? (
                <div className="mt-8 rounded-2xl border border-[#D7E9DE] bg-[#F0FAF4] p-6">
                  <CheckCircle2 size={27} className="text-[#247A52]" />

                  <h3 className="mt-4 !text-[20px]">
                    Inquiry submitted successfully.
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-[#5C6C62]">
                    {feedback}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFeedback("");
                    }}
                    className="mt-5 text-[14px] font-semibold text-[#247A52]"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div
                    aria-hidden="true"
                    className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                  >
                    <label>
                      Website
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-[13px] font-semibold text-[#514A45]">
                        Full name
                      </span>

                      <input
                        type="text"
                        name="name"
                        required
                        maxLength={100}
                        autoComplete="name"
                        placeholder="Your full name"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-[13px] font-semibold text-[#514A45]">
                        Company
                      </span>

                      <input
                        type="text"
                        name="company"
                        required
                        maxLength={150}
                        autoComplete="organization"
                        placeholder="Company name"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-[13px] font-semibold text-[#514A45]">
                        Business email
                      </span>

                      <input
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="name@company.com"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-[13px] font-semibold text-[#514A45]">
                        Phone
                      </span>

                      <input
                        type="tel"
                        name="phone"
                        maxLength={40}
                        autoComplete="tel"
                        placeholder="+1 or country code"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-[13px] font-semibold text-[#514A45]">
                      Primary service interest
                    </span>

                    <select name="service" defaultValue="" required>
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="Order Management">
                        Order Management
                      </option>

                      <option value="Artwork Services">
                        Artwork Services
                      </option>

                      <option value="Research & Presentations">
                        Research & Presentations
                      </option>

                      <option value="Customer Support">
                        Customer Support
                      </option>

                      <option value="Bookkeeping">Bookkeeping</option>

                      <option value="Hybrid Operations Support">
                        Hybrid Operations Support
                      </option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[13px] font-semibold text-[#514A45]">
                      Operational requirements
                    </span>

                    <textarea
                      name="message"
                      required
                      minLength={20}
                      maxLength={5000}
                      rows={6}
                      placeholder="Describe your current workload, systems, operational challenges, required availability, and preferred timeline."
                    />
                  </label>

                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 rounded-2xl border border-[#F0CDD3] bg-[#FFF5F7] p-4"
                    >
                      <TriangleAlert
                        size={20}
                        className="mt-0.5 shrink-0 text-[#C21E3A]"
                      />

                      <p className="text-[14px] leading-6 text-[#7A3340]">
                        {feedback}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="primary-button w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <LoaderCircle size={18} className="animate-spin" />
                        Submitting Inquiry
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </button>

                  <p className="text-center text-[12px] leading-6 text-[#7B726C]">
                    By submitting this form, you agree that CoreViaSupport may
                    contact you regarding your inquiry.
                  </p>
                </form>
              )}
            </div>

            <div className="business-card overflow-hidden">
              <div className="border-b border-[#E7DDD8] p-7 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="icon-panel">
                    <CalendarDays size={24} />
                  </div>

                  <div>
                    <h2 className="!text-[25px]">
                      Schedule a Discovery Call
                    </h2>

                    <p className="mt-2 text-[14px] leading-7 text-[#5F5752]">
                      Select a convenient time for a focused 30-minute
                      discussion about your workflow, current challenges, and
                      support requirements.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-[20px] border border-[#E7DDD8] bg-[#FFFDFC] p-5">
                  <p className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#C21E3A]">
                    What to Expect
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {discoveryCallPoints.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-[13px] font-medium leading-6 text-[#514A45]"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FBEAEC]">
                          <Check size={13} className="text-[#C21E3A]" />
                        </span>

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <iframe
                src="https://calendly.com/carljohnson4758/30min"
                width="100%"
                height="760"
                title="Schedule a CoreViaSupport discovery call"
                loading="lazy"
                className="block border-0 bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section-sm">
        <div className="site-container">
          <div className="grid gap-5 md:grid-cols-3">
            {consultationBenefits.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="business-card group p-7">
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
      </section>
    </main>
  );
}