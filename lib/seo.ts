import type { Metadata } from "next";

const SITE_NAME = "CoreViaSupport";
const SITE_URL = "https://coreviasupport.org";

type ServiceMetadataOptions = {
  title: string;
  description: string;
  slug: string;
};

export function createServiceMetadata({
  title,
  description,
  slug,
}: ServiceMetadataOptions): Metadata {
  const canonicalPath = `/services/${slug}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: {
      absolute: fullTitle,
    },

    description,

    alternates: {
      canonical: canonicalPath,
    },

    openGraph: {
      title: fullTitle,
      description,
      url: canonicalPath,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const seoConfig = {
  siteName: SITE_NAME,
  siteUrl: SITE_URL,
};