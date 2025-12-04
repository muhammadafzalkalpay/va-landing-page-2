import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutTrainer } from "@/components/about-trainer"
import { Benefits } from "@/components/benefits"
import { Team } from "@/components/team"
import { Insights } from "@/components/insights"
import { Booking } from "@/components/booking"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutTrainer />
      <Benefits />
      <Team />
      <Insights />
      <Booking />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
