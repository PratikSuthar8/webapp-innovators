import type { MetadataRoute } from "next";

export default function sitemap():
  MetadataRoute.Sitemap {
  return [
    {
      url: "https://webappinnovators.com",
    },
    {
      url:
        "https://webappinnovators.com/about",
    },
    {
      url:
        "https://webappinnovators.com/services",
    },
    {
      url:
        "https://webappinnovators.com/portfolio",
    },
    {
      url:
        "https://webappinnovators.com/blog",
    },
    {
      url:
        "https://webappinnovators.com/contact",
    },
  ];
}
