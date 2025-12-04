"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FamilyOfficeAdvisoryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section — same copy, cleaner spacing */}
      <section className="bg-primary text-white py-24 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">OUR SERVICES</p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
            Advisory for GCC Families &amp; Family Offices
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Bespoke wealth management and family office solutions for high-net-worth GCC families
          </p>
        </div>
      </section>

      {/* Description Section — preserved copy, compact list layout */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">About This Service</h2>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
            We partner with high-net-worth and ultra-high-net-worth families across the GCC to provide holistic advisory
            services covering wealth structuring, succession planning, governance, and cross-border compliance. Our
            approach integrates legal, tax, regulatory and operational considerations.
          </p>

          <h3 className="font-serif text-2xl text-foreground mb-6 mt-12">Core Offerings</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>Family office structuring and governance frameworks</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>Wealth structuring and asset protection strategies</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>Succession planning and generational wealth transfer</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>Trust and foundation advisory (onshore and offshore)</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>Multi-jurisdictional tax and regulatory compliance</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>Next-generation advisory and family constitution development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar — brief, consistent with other pages */}
      <section className="py-8 bg-background/50">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-accent font-medium mb-1">Holistic advice</div>
            <div className="text-sm text-muted-foreground">Legal, tax and operational coordination</div>
          </div>

          <div>
            <div className="text-xs text-accent font-medium mb-1">Family governance</div>
            <div className="text-sm text-muted-foreground">Constitution and succession frameworks</div>
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
            Contact our team to discuss your family office advisory needs
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
