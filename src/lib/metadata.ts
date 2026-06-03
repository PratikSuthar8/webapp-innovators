import type { Metadata } from "next";

export const siteConfig = {
  name: "WebApp Innovators",

  description:
    "Premium digital experiences, scalable systems, and modern product design for ambitious brands.",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000",

  ogImage: "/og-image.jpg",
};

export function constructMetadata({
  title,
  description,
}: {
  title?: string;

  description?: string;
} = {}): Metadata {
  return {
    metadataBase: new URL(
      siteConfig.url
    ),

    title: title
      ? `${title} | ${siteConfig.name}`
      : siteConfig.name,

    description:
      description || siteConfig.description,

    openGraph: {
      title: title || siteConfig.name,

      description:
        description || siteConfig.description,

      url: siteConfig.url,

      siteName: siteConfig.name,

      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
        },
      ],

      locale: "en_US",

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: title || siteConfig.name,

      description:
        description || siteConfig.description,

      images: [siteConfig.ogImage],
    },
  };
}
