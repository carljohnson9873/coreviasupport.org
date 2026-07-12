import {
  BadgeCheck,
  FileCheck2,
  MessagesSquare,
  Palette,
  RefreshCcw,
} from "lucide-react";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function ArtworkPage() {
  return (
    <ServicePageTemplate
      eyebrow="Artwork Services"
      title="Organized artwork coordination from initial proof to final approval."
      introduction="CoreViaSupport manages proof communication, revisions, approvals, supplier follow-up, and final-file coordination so artwork does not become a bottleneck."
      icon={Palette}
      visualTitle="Keep artwork communication clear and production-ready."
      visualPoints={[
        "Proof coordination",
        "Revision tracking",
        "Approval follow-up",
        "Supplier communication",
      ]}
      visualSummary="Artwork responsibilities remain documented, visible, and aligned across customers and suppliers."
      deliverablesTitle="Artwork support across every approval requirement."
      deliverablesDescription="Coverage is aligned with your customer expectations, supplier requirements, artwork procedures, and communication tools."
      deliverables={[
        "Artwork file review",
        "Proof request coordination",
        "Customer proof delivery",
        "Revision tracking",
        "Approval confirmation",
        "Supplier artwork communication",
        "Final-file coordination",
        "Artwork record maintenance",
      ]}
      outcomesTitle="Faster approvals and fewer communication gaps."
      outcomes={[
        {
          icon: FileCheck2,
          title: "Organized Proof Management",
          text: "Proofs, revisions, and approvals remain clearly tracked throughout the order.",
        },
        {
          icon: RefreshCcw,
          title: "Fewer Revision Delays",
          text: "Structured follow-up helps prevent revisions from remaining unresolved.",
        },
        {
          icon: MessagesSquare,
          title: "Clear Communication",
          text: "Customers and suppliers receive accurate artwork-related updates.",
        },
        {
          icon: BadgeCheck,
          title: "Production Readiness",
          text: "Final approvals and production files remain aligned before release.",
        },
      ]}
    />
  );
}