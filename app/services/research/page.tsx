import {
  BarChart3,
  FileSearch,
  Lightbulb,
  Presentation,
  SearchCheck,
} from "lucide-react";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function ResearchPage() {
  return (
    <ServicePageTemplate
      eyebrow="Research & Presentations"
      title="Stronger product recommendations prepared for faster client response."
      introduction="CoreViaSupport supports your sales team with structured product sourcing, supplier comparison, pricing research, alternative recommendations, and client-ready presentations."
      icon={FileSearch}
      visualTitle="Turn customer requirements into relevant product options."
      visualPoints={[
        "Product sourcing",
        "Supplier comparison",
        "Pricing review",
        "Presentation support",
      ]}
      visualSummary="Relevant products, pricing, suppliers, and presentation details are organized in one sales-ready output."
      deliverablesTitle="Research support designed around client opportunities."
      deliverablesDescription="Research is aligned with budget, quantity, branding, delivery requirements, supplier availability, and presentation standards."
      deliverables={[
        "Requirement review",
        "Product sourcing",
        "Supplier comparison",
        "Pricing research",
        "Inventory review",
        "Alternative recommendations",
        "Quote-support preparation",
        "Client presentation creation",
      ]}
      outcomesTitle="Respond faster with more relevant product recommendations."
      outcomes={[
        {
          icon: SearchCheck,
          title: "Focused Research",
          text: "Product options are selected against the actual customer requirement.",
        },
        {
          icon: BarChart3,
          title: "Supplier Comparison",
          text: "Pricing, availability, timelines, and alternatives are easier to review.",
        },
        {
          icon: Presentation,
          title: "Sales-Ready Output",
          text: "Information is organized into professional client-facing presentations.",
        },
        {
          icon: Lightbulb,
          title: "Stronger Alternatives",
          text: "Alternative products help sales teams respond when initial options are unavailable.",
        },
      ]}
    />
  );
}