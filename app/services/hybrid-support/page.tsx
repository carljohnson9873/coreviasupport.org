import {
  Expand,
  Layers3,
  MessagesSquare,
  UsersRound,
} from "lucide-react";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function HybridSupportPage() {
  return (
    <ServicePageTemplate
      eyebrow="Hybrid Operations Support"
      title="Back Office Support for Promotional Product Companies"
      introduction="CoreViaSupport combines multiple operational services into one flexible back-office support solution for promotional product companies. From order management and artwork coordination to customer support and bookkeeping, we become an extension of your team."
      icon={UsersRound}
      visualTitle="One dedicated team managing your complete back-office operations."
      visualPoints={[
        "Combined services",
        "Defined ownership",
        "Flexible allocation",
        "Central communication",
      ]}
      visualSummary="Combine multiple operational functions under one experienced support team with flexible monthly service packages."
      deliverablesTitle="Back-office support services tailored to your business."
      deliverablesDescription="The final scope is tailored around workload, priorities, systems, communication requirements, and the functions your internal team wants to delegate."
      deliverables={[
        "Order-management support",
        "Artwork coordination",
        "Product research",
        "Presentation support",
        "Customer communication",
        "Supplier follow-up",
        "Bookkeeping support",
        "Central progress reporting",
      ]}
      outcomesTitle="Benefits of outsourcing complete back-office operations."
      outcomes={[
        {
          icon: Layers3,
          title: "Combined Coverage",
          text: "Related operational functions are managed through one engagement.",
        },
        {
          icon: UsersRound,
          title: "Clear Ownership",
          text: "Responsibilities are assigned without creating multiple external relationships.",
        },
        {
          icon: Expand,
          title: "Flexible Allocation",
          text: "Support can shift across agreed functions as business priorities change.",
        },
        {
          icon: MessagesSquare,
          title: "Central Communication",
          text: "Updates and coordination remain structured through one support team.",
        },
      ]}
    />
  );
}