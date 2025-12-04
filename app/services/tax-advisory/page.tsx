"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TaxAdvisoryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section — same copy, cleaner spacing */}
      <section className="bg-primary text-white py-24 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">OUR SERVICES</p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
            Tax Advisory &amp; International Structuring
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Strategic tax planning, international structuring, and cross-border compliance solutions for businesses and
            families
          </p>
        </div>
      </section>

      {/* Description Section — preserved copy, compact list layout */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">About This Service</h2>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
            Our tax advisory practice supports international families, entrepreneurs and businesses navigating the
            evolving GCC tax landscape and cross-border compliance obligations. We provide strategic tax planning,
            entity structuring advice, and compliance support across the UAE, KSA and UK.
          </p>

          <h3 className="font-serif text-2xl text-foreground mb-6 mt-12">Core Offerings</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>
                UAE Corporate Tax compliance and advisory (CT301 registration, transfer pricing)
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>
                KSA Zakat, VAT and Corporate Income Tax advisory
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>
                International tax planning and treaty optimization
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>
                Cross-border structuring for holding companies and family offices
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>
                Tax residency planning and certificate applications
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>
                UK-GCC tax coordination and dual residency planning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Short trust bar — keeps original tone while adding micro-design */}
      <section className="py-8 bg-background/50">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-accent font-medium mb-1">Practical advice</div>
            <div className="text-sm text-muted-foreground">Actionable plans, not just theory</div>
          </div>

          <div>
            <div className="text-xs text-accent font-medium mb-1">Cross-border expertise</div>
            <div className="text-sm text-muted-foreground">UAE, KSA and UK experience</div>
          </div>

          <div className="hidden sm:block">
            <Link href="/#contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-3">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section — original copy and button preserved */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Contact our team to discuss your tax advisory and structuring needs
          </p>

          <Link href="/#contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-4 text-base">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
