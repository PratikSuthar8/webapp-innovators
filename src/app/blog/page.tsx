import { Navbar } from "@/components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer/footer";

import { BlogHero } from "@/components/blog/hero/blog-hero";

import { FeaturedArticle } from "@/components/blog/featured/featured-article";

import { EditorialGrid } from "@/components/blog/editorial-grid/editorial-grid";

import { InsightsStrip } from "@/components/blog/insights-strip/insights-strip";

import { Newsletter } from "@/components/blog/newsletter/newsletter";

import { PageTransition } from "@/components/shared/page-transition/page-transition";

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <PageTransition>

        <main className="overflow-hidden bg-[#f8fbff]">

          <BlogHero />

          <FeaturedArticle />

          <EditorialGrid />

          <InsightsStrip />

          <Newsletter />

        </main>

      </PageTransition>

      <Footer />
    </>
  );
}
