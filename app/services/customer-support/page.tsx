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
      title="Customer Support for Promotional Product Companies"
      introduction="CoreViaSupport delivers responsive customer support for promotional product companies by handling customer communication, order updates, follow-ups, issue resolution, and coordination throughout the order lifecycle."
      icon={Headset}
      visualTitle="Professional customer communication that strengthens relationships."
      visualPoints={[
        "Customer emails",
        "Order updates",
        "Follow-up management",
        "Issue coordination",
      ]}
      visualSummary="Keep customers informed with timely updates, proactive communication, and dependable follow-up throughout every order."
      deliverablesTitle="Customer support services included in your operations support."
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
      outcomesTitle="Benefits of outsourcing promotional product customer support."
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

import { createServiceMetadata } from "@/lib/seo";

export const metadata = createServiceMetadata({
  title: "Customer Support for Promotional Product Companies",
  description:
    "Customer support services for promotional product companies, including order updates, customer follow-ups, issue coordination, status communication, and order lifecycle assistance.",
  slug: "customer-support",
});