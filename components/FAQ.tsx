"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Which industries do you support?",
    a: "We specialize in supporting promotional product companies across the USA and UK.",
  },
  {
    q: "Do you provide dedicated resources?",
    a: "Yes. We can assign dedicated specialists based on your business requirements.",
  },
  {
    q: "Can you work with our existing software?",
    a: "Yes. We adapt to your CRM, ERP and workflow systems.",
  },
  {
    q: "How quickly can we get started?",
    a: "Most clients can begin onboarding within a few business days.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-red-600">
            FAQ
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div key={faq.q} className="rounded-2xl bg-white shadow">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold">{faq.q}</span>
                <ChevronDown
                  className={`transition ${open === index ? "rotate-180" : ""}`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}