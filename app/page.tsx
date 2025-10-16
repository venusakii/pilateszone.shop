import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Categories } from "@/components/categories"
import { FeaturedProduct } from "@/components/featured-product"
import { InteractiveQuiz } from "@/components/interactive-quiz"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { Gallery } from "@/components/gallery"
import { Blog } from "@/components/blog"
import { VideoSection } from "@/components/video-section"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Categories />
      <FeaturedProduct />
      <InteractiveQuiz />
      <Benefits />
      <Testimonials />
      <Gallery />
      <Blog />
      <VideoSection />
      <Newsletter />
      <Footer />
      <CookieBanner />
    </main>
  )
}
