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
      title="Multiple operational functions managed through one coordinated team."
      introduction="Hybrid Operations Support combines selected service areas into one structured engagement, giving distributors broader operational coverage without managing separate providers."
      icon={UsersRound}
      visualTitle="Build a support structure around your actual operating needs."
      visualPoints={[
        "Combined services",
        "Defined ownership",
        "Flexible allocation",
        "Central communication",
      ]}
      visualSummary="Several operational responsibilities are managed through one coordinated support structure."
      deliverablesTitle="A flexible combination of operational capabilities."
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
      outcomesTitle="Broader operational coverage with one accountable support team."
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