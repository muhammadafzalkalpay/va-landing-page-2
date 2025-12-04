"use client"

import { Building2, Calculator, Home, Users, FileText } from "lucide-react"
import Link from "next/link"

export function Benefits() {
  const services = [
    {
      icon: Building2,
      title: "UAE & KSA Relocation and Corporate Services",
      description: "Complete relocation support and corporate formation services across the UAE and Saudi Arabia",
      slug: "uae-ksa-relocation",
    },
    {
      icon: Calculator,
      title: "Tax Advisory & International Structuring",
      description: "Strategic tax planning, international structuring, and cross-border compliance solutions",
      slug: "tax-advisory",
    },
    {
      icon: Home,
      title: "International Property Advisory & GCC–UK Real Estate",
      description: "Expert guidance on property investments and real estate transactions between the GCC and UK",
      slug: "property-advisory",
    },
    {
      icon: Users,
      title: "Advisory for GCC Families & Family Offices",
      description: "Bespoke wealth management and family office solutions for high-net-worth GCC families",
      slug: "family-office-advisory",
    },
    {
      icon: FileText,
      title: "Accounting, Audit Support & GCC Tax Compliance",
      description: "Comprehensive accounting services, audit support, and tax compliance across GCC jurisdictions",
      slug: "accounting-compliance",
    },
  ]

  return (
    <section id="services" className="bg-background py-20 sm:py-24 md:py-32 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="mb-16 sm:mb-20 text-center">
          <p className="text-accent font-medium text-xs sm:text-sm uppercase tracking-widest mb-4">OUR SERVICES</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight text-balance mx-auto max-w-3xl px-4">
            Comprehensive Advisory Solutions
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="bg-card border border-border/30 p-8 sm:p-10 group hover:border-accent/40 transition-all duration-300 block"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-accent flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-accent/5 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-3 sm:mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">{service.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
