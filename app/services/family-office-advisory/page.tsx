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
  ShieldCheck,
  Users,
} from "lucide-react";

export default function FamilyOfficeAdvisoryPage() {
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
            Advisory for GCC Families &amp; Family Offices
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Bespoke wealth management and family office solutions for
            high-net-worth GCC families
          </p>
        </div>
      </section>

      {/* Description Section — preserved copy, compact list layout */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              About This Service
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              We partner with high-net-worth and ultra-high-net-worth families
              across the GCC to provide holistic family office and private
              client advisory. Our support spans governance, structuring,
              succession planning and complex cross-border compliance.
            </p>
          </div>

          <h3 className="text-2xl md:text-4xl font-serif text-foreground mb-10">
            Core Offerings
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <Users className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Family office structuring and governance frameworks
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <ShieldCheck className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Wealth structuring and asset protection strategies
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <FileCheck className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Succession planning and generational wealth transfer
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <Building2 className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Trust and foundation advisory (onshore and offshore)
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <ClipboardList className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Multi-jurisdictional tax and regulatory compliance
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <Users className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Next-generation advisory and constitution development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar — Consistent Style */}
      <section className="py-14 bg-muted/30 border-y">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <ShieldCheck className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="text-sm font-medium text-foreground">
              Holistic Coordination
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Legal, tax and operational alignment
            </p>
          </div>

          <div>
            <Users className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="text-sm font-medium text-foreground">
              Governance & Legacy
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Succession, family charters & continuity
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
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
  );
}
