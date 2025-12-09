"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Building2,
  ClipboardList,
  Globe,
  Home,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function UaeKsaRelocationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section — close to original but cleaner spacing and balanced line-length */}
      <section className="bg-primary text-white py-24 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
            OUR SERVICES
          </p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
            UAE and KSA Relocation and Corporate Services
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive relocation support and corporate formation services
            for families, entrepreneurs, and businesses entering the Gulf region
          </p>
        </div>
      </section>

      {/* Description Section — preserved copy and list, tightened visuals */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              About This Service
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              We deliver an integrated suite of relocation, corporate set-up and
              regulatory support services for families, founders, investors and
              businesses entering the GCC. Our team provides end-to-end guidance
              across visa applications, company formation, PRO services, and
              compliance requirements.
            </p>
          </div>

          <h3 className="text-2xl md:text-4xl font-serif text-foreground mb-10">
            Core Offerings
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <ShieldCheck className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                UAE Golden Visa and residency advisory for investors,
                entrepreneurs and talent
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                KSA residency programs including Premium Residency and Special
                Iqama routes
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <Building2 className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Free Zone and mainland company formation (UAE and KSA)
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <ClipboardList className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Corporate structuring, licensing and regulatory approvals
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <Globe className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                PRO services and government relations support
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <Home className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Family relocation planning and settlement services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Trust/Highlights Section */}
      <section className="py-14 bg-muted/30 border-y">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <Users className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="text-sm font-medium text-foreground">
              Local Knowledge
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Local partners, compliance-first approach
            </p>
          </div>

          <div>
            <ShieldCheck className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="text-sm font-medium text-foreground">End-to-End</h4>
            <p className="text-sm text-muted-foreground mt-1">
              From visas to company bank introductions
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

      {/* CTA Section — keep original copy and action */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Contact our team to discuss your relocation and corporate services
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
