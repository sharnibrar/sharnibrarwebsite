import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sharnibrar.com";
  const routes = ["", "/about", "/portfolio", "/services", "/contact", "/faq"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
