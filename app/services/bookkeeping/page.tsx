import {
  BadgeDollarSign,
  Calculator,
  FileCheck2,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function BookkeepingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Bookkeeping"
      title="Bookkeeping Services for Promotional Product Companies"
      introduction="CoreViaSupport provides bookkeeping support for promotional product companies by organizing invoices, payments, reconciliations, financial records, and routine administrative accounting tasks to keep business operations running efficiently."
      icon={Calculator}
      visualTitle="Organized financial records that support daily business operations."
      visualPoints={[
        "Invoice tracking",
        "Expense recording",
        "Payment follow-up",
        "Reconciliation support",
      ]}
      visualSummary="Maintain accurate bookkeeping records, invoice tracking, and payment coordination without increasing administrative workload."
      deliverablesTitle="Bookkeeping services included in your operational support."
      deliverablesDescription="The service scope is aligned with your accounting software, reporting requirements, transaction volume, and internal review procedures."
      deliverables={[
        "Invoice record maintenance",
        "Expense entry",
        "Transaction categorization",
        "Payment-status tracking",
        "Accounts follow-up",
        "Reconciliation assistance",
        "Supporting-document organization",
        "Periodic reporting support",
      ]}
      outcomesTitle="Benefits of outsourcing bookkeeping support."
      outcomes={[
        {
          icon: ReceiptText,
          title: "Current Records",
          text: "Routine invoice, expense, and transaction information remains consistently updated.",
        },
        {
          icon: BadgeDollarSign,
          title: "Payment Visibility",
          text: "Outstanding payment information is easier to monitor and follow up.",
        },
        {
          icon: FileCheck2,
          title: "Organized Documentation",
          text: "Supporting financial documents remain easier to locate and review.",
        },
        {
          icon: ShieldCheck,
          title: "Professional Handling",
          text: "Financial and business information is managed with confidentiality.",
        },
      ]}
    />
  );
}

import { createServiceMetadata } from "@/lib/seo";

export const metadata = createServiceMetadata({
  title: "Bookkeeping Services for Promotional Product Companies",
  description:
    "Reliable bookkeeping support for promotional product companies, including invoice organization, payment tracking, reconciliations, financial records, and routine accounting administration.",
  slug: "bookkeeping",
});