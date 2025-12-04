"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AccountingCompliancePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section — same copy, cleaner spacing */}
      <section className="bg-primary text-white py-24 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">OUR SERVICES</p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
            Accounting, Audit Support &amp; GCC Tax Compliance
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive accounting services, audit support, and tax compliance across GCC jurisdictions
          </p>
        </div>
      </section>

      {/* Description Section — preserved copy, compact list layout */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">About This Service</h2>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
            Our accounting and compliance practice delivers end-to-end financial reporting, audit coordination and
            regulatory compliance services for businesses and investors operating across the GCC. We ensure accuracy,
            transparency and adherence to local and international standards.
          </p>

          <h3 className="font-serif text-2xl text-foreground mb-6 mt-12">Core Offerings</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>IFRS-compliant financial statement preparation</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>UAE Corporate Tax compliance and quarterly reporting</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>KSA ZATCA compliance (Zakat, VAT, e-invoicing)</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>Audit support and coordination with external auditors</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>Management accounts and financial performance reporting</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span>Bookkeeping, payroll and operational accounting services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar — brief, consistent with other pages */}
      <section className="py-8 bg-background/50">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-accent font-medium mb-1">Accurate reporting</div>
            <div className="text-sm text-muted-foreground">IFRS & local standards covered</div>
          </div>

          <div>
            <div className="text-xs text-accent font-medium mb-1">Audit-ready</div>
            <div className="text-sm text-muted-foreground">Coordination with global auditors</div>
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
            Contact our team to discuss your accounting and compliance requirements
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
