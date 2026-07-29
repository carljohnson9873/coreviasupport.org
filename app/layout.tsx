import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import Navbar from "@/components/Navbar";

const siteUrl = "https://coreviasupport.org";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Operations Support for Promotional Product Companies | CoreViaSupport",
    template: "%s | CoreViaSupport",
  },

  description:
    "CoreViaSupport provides cost-effective operations support for promotional product companies, ASI and SAGE distributors, print shops, and merchandise businesses across the United States.",

  applicationName: "CoreViaSupport",

  authors: [
    {
      name: "CoreViaSupport",
      url: siteUrl,
    },
  ],

  creator: "CoreViaSupport",
  publisher: "CoreViaSupport",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Operations Support for Promotional Product Companies | CoreViaSupport",
    description:
      "Flexible back-office and operations support for promotional product companies, distributors, print shops, and merchandise businesses across the United States.",
    url: siteUrl,
    siteName: "CoreViaSupport",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CoreViaSupport operations support for promotional product companies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Operations Support for Promotional Product Companies | CoreViaSupport",
    description:
      "Flexible back-office and operations support for promotional product companies across the United States.",
    images: ["/og-image.png"],
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

  category: "Business Services",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C21E3A",
  colorScheme: "light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "CoreViaSupport",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo/coreviasupport-logo.png`,
  },
  image: `${siteUrl}/og-image.png`,
  email: "info@coreviasupport.org",
  telephone: "+91-82099-12773",
  description:
    "CoreViaSupport provides operations support for promotional product companies, ASI and SAGE distributors, print shops, and branding merchandise businesses serving the United States.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  sameAs: [
    "https://www.linkedin.com/in/carl-johnson-5907893b6/",
  ],
  knowsAbout: [
    "Promotional product operations support",
    "Order management",
    "Sales order creation",
    "Purchase order creation",
    "Artwork services",
    "Proof management",
    "Product research",
    "Presentation creation",
    "Customer support",
    "Bookkeeping",
    "Vendor coordination",
    "Production follow-up",
    "Shipping tracking",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@coreviasupport.org",
    telephone: "+91-82099-12773",
    contactType: "customer support",
    areaServed: "US",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body>
        <GoogleAnalytics />
        <MicrosoftClarity />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />

        <Navbar />

        {children}

        <Footer />

        <FloatingButtons />
      </body>
    </html>
  );
}