"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UaeKsaRelocationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section — close to original but cleaner spacing and balanced line-length */}
      <section className="bg-primary text-white py-24 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">OUR SERVICES</p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
            UAE and KSA Relocation and Corporate Services
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive relocation support and corporate formation services for families, entrepreneurs, and
            businesses entering the Gulf region
          </p>
        </div>
      </section>

      {/* Description Section — preserved copy and list, tightened visuals */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">About This Service</h2>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
            We deliver an integrated suite of relocation, corporate set-up and regulatory support services for families,
            founders, investors and businesses entering the GCC. Our team provides end-to-end guidance across visa
            applications, company formation, PRO services, and compliance requirements.
          </p>

          {/* Core Offerings — keep same items but present as compact two-column on larger screens */}
          <h3 className="font-serif text-2xl text-foreground mb-6 mt-12">Core Offerings</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>
                UAE Golden Visa and residency advisory for investors, entrepreneurs and talent
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>
                KSA residency programs including Premium Residency and Special Iqama routes
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>
                Free Zone and mainland company formation (UAE and KSA)
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>
                Corporate structuring, licensing and regulatory approvals
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>
                PRO services and government relations support
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>
                Family relocation planning and settlement services
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Small visual/summary row (keeps original feel but adds micro-design) */}
      <section className="py-8 bg-background/50">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-between">
          <div>
            <div className="text-xs text-accent font-medium mb-1">Local knowledge</div>
            <div className="text-sm text-muted-foreground">Local partners, compliance-first approach</div>
          </div>

          <div>
            <div className="text-xs text-accent font-medium mb-1">End-to-end</div>
            <div className="text-sm text-muted-foreground">From visas to company bank introductions</div>
          </div>

          <div className="hidden sm:block">
            <Link href="/#contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-3">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section — keep original copy and action */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Contact our team to discuss your relocation and corporate services requirements
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
