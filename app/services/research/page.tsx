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
      title="Product Research for Promotional Product Companies"
      introduction="CoreViaSupport helps promotional product companies identify the right products, suppliers, pricing, and presentation materials. We conduct product research, supplier comparisons, pricing analysis, and create professional client presentations that support faster sales decisions."
      icon={FileSearch}
      visualTitle="Research that helps promotional product companies quote with confidence."
      visualPoints={[
        "Product sourcing",
        "Supplier comparison",
        "Pricing review",
        "Presentation support",
      ]}
      visualSummary="Product sourcing, supplier comparisons, pricing research, and presentation preparation—all managed by one dedicated support team."
      deliverablesTitle="Research and presentation services included in your support."
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
      outcomesTitle="Benefits of outsourcing product research."
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