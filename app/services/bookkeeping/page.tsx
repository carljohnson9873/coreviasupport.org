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
      title="Organized financial records that support better operational visibility."
      introduction="CoreViaSupport handles routine bookkeeping and record-management responsibilities, helping invoices, transactions, payment follow-ups, and reconciliations remain organized."
      icon={Calculator}
      visualTitle="Keep routine financial administration accurate and current."
      visualPoints={[
        "Invoice tracking",
        "Expense recording",
        "Payment follow-up",
        "Reconciliation support",
      ]}
      visualSummary="Routine financial records remain organized, updated, and easier to review."
      deliverablesTitle="Bookkeeping support for everyday financial administration."
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
      outcomesTitle="More organized records and fewer administrative gaps."
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