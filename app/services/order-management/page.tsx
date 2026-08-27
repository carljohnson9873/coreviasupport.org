import {
  ClipboardCheck,
  MessagesSquare,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function OrderManagementPage() {
  return (
    <ServicePageTemplate
      eyebrow="Order Management"
      title="Promotional Product Order Management Services"
      introduction="CoreViaSupport provides professional order management services for promotional product companies, ASI distributors, SAGE distributors, print shops, and branded merchandise businesses across the United States. We manage order entry, supplier coordination, production follow-up, artwork approvals, shipping updates, and customer communication so your team can focus on sales and business growth."
      icon={PackageCheck}
      visualTitle="Complete order management support for promotional product companies."
      visualPoints={[
        "Order entry",
        "Supplier follow-up",
        "Production updates",
        "Shipping visibility",
      ]}
      visualSummary="Dedicated order management specialists who coordinate every stage of the promotional product order lifecycle—from customer confirmation to final delivery."
      deliverablesTitle="Order management services included in your operational support package."
      deliverablesDescription="The exact scope is aligned with your systems, supplier network, order volume, and internal operating procedures."
      deliverables={[
        "Sales order creation",
        "Purchase order creation",
        "Supplier communication",
        "Order acknowledgement review",
        "Production follow-up",
        "Proof and approval tracking",
        "Shipping coordination",
        "Customer status updates",
      ]}
      outcomesTitle="Benefits of outsourcing promotional product order management."
      outcomes={[
        {
          icon: ClipboardCheck,
          title: "Improved Order Accuracy",
          text: "Structured order entry and review help reduce avoidable errors before orders reach suppliers.",
        },
        {
          icon: MessagesSquare,
          title: "Consistent Communication",
          text: "Suppliers and customers receive timely follow-ups throughout the order lifecycle.",
        },
        {
          icon: Truck,
          title: "Better Delivery Visibility",
          text: "Production progress and shipment status remain visible without constant internal chasing.",
        },
        {
          icon: ShieldCheck,
          title: "Clear Responsibility",
          text: "Defined ownership keeps routine operational work from returning to your sales team.",
        },
      ]}
    />
  );
}

import { createServiceMetadata } from "@/lib/seo";

export const metadata = createServiceMetadata({
  title: "Promotional Product Order Management Services",
  description:
    "Professional order management services for promotional product companies, including order entry, supplier coordination, proof tracking, production follow-up, shipping updates, and customer communication.",
  slug: "order-management",
});