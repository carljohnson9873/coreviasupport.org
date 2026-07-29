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
      title="Artwork Services for Promotional Products"
      introduction="CoreViaSupport provides professional artwork services for promotional product companies, ASI distributors, SAGE distributors, print shops, and branded merchandise businesses across the United States. We coordinate artwork files, proof approvals, revisions, supplier communication, and production-ready files to keep every order moving smoothly."
      icon={Palette}
      visualTitle="Professional artwork coordination from design to final approval."
      visualPoints={[
        "Proof coordination",
        "Revision tracking",
        "Approval follow-up",
        "Supplier communication",
      ]}
      visualSummary="We manage artwork reviews, proof approvals, revisions, and supplier communication to ensure production begins without unnecessary delays."
      deliverablesTitle="Artwork management services included in your operational support."
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
      outcomesTitle="Benefits of outsourcing promotional product artwork services."
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