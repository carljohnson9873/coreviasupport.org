import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://coreviasupport.org";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/order-management",
    "/services/artwork",
    "/services/research",
    "/services/customer-support",
    "/services/bookkeeping",
    "/services/hybrid-support",
    "/industries",
    "/pricing",
    "/resources",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/services" || route === "/contact"
          ? 0.9
          : route.startsWith("/services/")
            ? 0.8
            : 0.7,
  }));
}