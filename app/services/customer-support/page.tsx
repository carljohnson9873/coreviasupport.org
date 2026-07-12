import {
  BadgeCheck,
  Clock3,
  Headset,
  MessagesSquare,
  SmilePlus,
} from "lucide-react";

import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function CustomerSupportPage() {
  return (
    <ServicePageTemplate
      eyebrow="Customer Support"
      title="Professional customer communication throughout the order lifecycle."
      introduction="CoreViaSupport helps distributors maintain responsive customer communication, timely order updates, organized follow-ups, and professional issue coordination."
      icon={Headset}
      visualTitle="Keep customers informed without distracting your sales team."
      visualPoints={[
        "Customer emails",
        "Order updates",
        "Follow-up management",
        "Issue coordination",
      ]}
      visualSummary="Customers receive clear, professional communication while internal teams retain visibility."
      deliverablesTitle="Communication support across routine customer requirements."
      deliverablesDescription="Coverage is aligned with your preferred tone, communication channels, escalation process, and service standards."
      deliverables={[
        "Shared-inbox support",
        "Customer email responses",
        "Order status updates",
        "Proof follow-ups",
        "Shipment communication",
        "Issue documentation",
        "Internal escalation",
        "Post-delivery follow-up",
      ]}
      outcomesTitle="Better communication without increasing internal workload."
      outcomes={[
        {
          icon: MessagesSquare,
          title: "Consistent Responses",
          text: "Customer communication remains clear and aligned with your service standards.",
        },
        {
          icon: Clock3,
          title: "Timely Updates",
          text: "Customers receive progress information without repeatedly chasing your sales team.",
        },
        {
          icon: SmilePlus,
          title: "Stronger Experience",
          text: "Professional communication supports customer confidence throughout the order.",
        },
        {
          icon: BadgeCheck,
          title: "Clear Escalation",
          text: "Issues requiring internal attention are documented and escalated appropriately.",
        },
      ]}
    />
  );
}