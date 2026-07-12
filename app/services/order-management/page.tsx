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
      title="Reliable order coordination from confirmation through delivery."
      introduction="CoreViaSupport manages the administrative and communication responsibilities behind promotional product orders so your sales team can remain focused on customers and new opportunities."
      icon={PackageCheck}
      visualTitle="Keep every order organized, visible, and moving forward."
      visualPoints={[
        "Order entry",
        "Supplier follow-up",
        "Production updates",
        "Shipping visibility",
      ]}
      visualSummary="One point of operational coordination across customers, suppliers, production, and delivery."
      deliverablesTitle="Daily responsibilities required to keep orders progressing."
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
      outcomesTitle="Stronger execution without increasing administrative pressure."
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