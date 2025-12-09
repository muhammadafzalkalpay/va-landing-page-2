"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Building2,
  ClipboardList,
  FileCheck,
  Home,
  MapPin,
  PhoneCall,
  Receipt,
  ShieldCheck,
} from "lucide-react";

export default function PropertyAdvisoryPage() {
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
            International Property Advisory &amp; GCC–UK Real Estate
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Expert guidance on property investments and real estate transactions
            between the GCC and UK markets
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
              We advise GCC-based investors, families and developers on
              international real estate acquisitions, structuring, financing and
              compliance. Our practice spans residential and commercial
              investment with a focus on UK and GCC markets.
            </p>
          </div>

          <h3 className="text-2xl md:text-4xl font-serif text-foreground mb-10">
            Core Offerings
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <Home className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                UK residential property acquisition for GCC investors
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <Building2 className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Structuring advice for property holding (SPVs, trusts, direct
                ownership)
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <FileCheck className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                UK mortgage advisory and financing coordination
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <Receipt className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                SDLT, CGT and inheritance tax planning
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Dubai & Abu Dhabi property investment structuring
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <ClipboardList className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground">
                Portfolio management and compliance coordination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar Match */}
      <section className="py-14 bg-muted/30 border-y">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <Building2 className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="text-sm font-medium text-foreground">
              Dual-Market Expertise
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              UK & GCC acquisition and structuring capabilities
            </p>
          </div>

          <div>
            <ShieldCheck className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="text-sm font-medium text-foreground">
              Risk Management
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Tax, financing and compliance advisory
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
            Contact our team to discuss your international property advisory
            needs
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
