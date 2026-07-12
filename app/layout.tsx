import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
  metadataBase: new URL("https://coreviasupport.com"),

  title: {
    default:
      "CoreViaSupport | Promotional Products Operations Support",
    template: "%s | CoreViaSupport",
  },

  description:
    "Specialized operational support for promotional product distributors across the USA and UK, including order management, artwork coordination, product research, customer support, bookkeeping, and supplier communication.",

  keywords: [
    "promotional products operations support",
    "promotional product distributors",
    "order management services",
    "artwork coordination",
    "product research",
    "presentation creation",
    "customer support",
    "bookkeeping support",
    "supplier coordination",
    "vendor management",
    "promotional products USA",
    "promotional products UK",
    "CoreViaSupport",
  ],

  authors: [
    {
      name: "CoreViaSupport",
    },
  ],

  creator: "CoreViaSupport",
  publisher: "CoreViaSupport",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "CoreViaSupport | Promotional Products Operations Support",
    description:
      "A specialized operations partner for promotional product distributors across the USA and UK.",
    url: "https://coreviasupport.com",
    siteName: "CoreViaSupport",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CoreViaSupport promotional products operations support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "CoreViaSupport | Promotional Products Operations Support",
    description:
      "A specialized operations partner for promotional product distributors across the USA and UK.",
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

  category: "business",

  icons: {
    icon: "/logo/coreviasupport-logo.png",
    shortcut: "/logo/coreviasupport-logo.png",
    apple: "/logo/coreviasupport-logo.png",
  },
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
  name: "CoreViaSupport",
  url: "https://coreviasupport.com",
  logo: "https://coreviasupport.com/logo/coreviasupport-logo.png",
  email: "info@coreviasupport.com",
  telephone: "+91-82099-12773",
  description:
    "Specialized operational support for promotional product distributors across the USA and UK.",
  areaServed: [
    {
      "@type": "Country",
      name: "United States",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  serviceType: [
    "Order Management",
    "Artwork Services",
    "Product Research",
    "Presentation Creation",
    "Customer Support",
    "Bookkeeping",
    "Supplier Coordination",
    "Hybrid Operations Support",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
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