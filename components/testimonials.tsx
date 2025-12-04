"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sherad",
      title: "CEO, Technology Ventures",
      quote:
        "Middle East Advisory Group provided exceptional guidance through our UAE expansion. Their deep understanding of local regulations and corporate structuring was invaluable.",
    },
    {
      name: "Jacob Follett",
      title: "Managing Partner, Real Estate Fund",
      quote:
        "The tax advisory and international structuring support we received was world-class. MEAG's expertise saved us significant time and resources during our GCC market entry.",
    },
    {
      name: "Craig Potter",
      title: "Family Office Principal",
      quote:
        "Their family office advisory services are truly Big Four caliber. The team understands the unique needs of UHNW families operating across multiple jurisdictions.",
    },
    {
      name: "Chris Higgins",
      title: "Founder, FinTech Startup",
      quote:
        "MEAG made our relocation to Dubai seamless. From visa processing to corporate setup, every detail was handled with professionalism and expertise.",
    },
    {
      name: "Rob",
      title: "International Investor",
      quote:
        "The cross-border tax planning and compliance support has been outstanding. Their team provides clarity in complex multi-jurisdictional matters.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-secondary py-20 sm:py-24 md:py-32 lg:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-accent font-medium text-xs sm:text-sm uppercase tracking-widest mb-4">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight text-balance px-4">
            Trusted by Leaders Across the GCC
          </h2>
        </div>

     
      </div>
    </section>
  )
}
