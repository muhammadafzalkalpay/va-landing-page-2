"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Building2,
  ClipboardList,
  FileCheck,
  PhoneCall,
  Receipt,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function AccountingCompliancePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section — same copy, cleaner spacing */}
      <section className="bg-primary text-white py-24 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
            OUR SERVICES
          </p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
            Accounting, Audit Support &amp; GCC Tax Compliance
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive accounting services, audit support, and tax compliance
            across GCC jurisdictions
          </p>
        </div>
      </section>

      {/* Description Section — preserved copy, compact list layout */}

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading + Intro */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              About This Service
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Our accounting and compliance practice delivers end-to-end
              financial reporting, audit coordination and regulatory compliance
              across the GCC. We ensure accuracy, transparency and adherence to
              local and international standards.
            </p>
          </div>

          {/* Core Offerings */}
          <h3 className="text-2xl md:text-4xl font-serif text-foreground mb-10">
            Core Offerings
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <ClipboardList className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                IFRS-compliant financial statement preparation
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <Receipt className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                UAE Corporate Tax compliance and quarterly reporting
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <Building2 className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                KSA ZATCA compliance (Zakat, VAT, e-invoicing)
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <ShieldCheck className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Audit support & coordination with external auditors
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <FileCheck className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Management accounts & performance reporting
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <Users className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Bookkeeping, payroll & operational accounting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar — Modernized */}
      <section className="py-14 bg-muted/30 border-y">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <ClipboardList className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="text-sm font-medium text-foreground">
              Accurate Reporting
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              IFRS & local standards covered
            </p>
          </div>

          <div>
            <ShieldCheck className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="text-sm font-medium text-foreground">Audit-Ready</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Coordination with global audit firms
            </p>
          </div>

          <div className="flex flex-col items-center">
            <PhoneCall className="w-7 h-7 text-accent mb-2" />
            <Link href="/#contact">
              <Button variant="outline" className="mt-1 px-6 py-5 rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section — original copy and button preserved */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Contact our team to discuss your accounting and compliance
            requirements
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
  );
}
