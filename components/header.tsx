"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleGetStarted = () => {
    const bookingSection = document.getElementById("contact")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const services = [
    { name: "UAE & KSA Relocation and Corporate Services", slug: "uae-ksa-relocation" },
    { name: "Tax Advisory & International Structuring", slug: "tax-advisory" },
    { name: "International Property Advisory & GCC–UK Real Estate", slug: "property-advisory" },
    { name: "Advisory for GCC Families & Family Offices", slug: "family-office-advisory" },
    { name: "Accounting, Audit Support & GCC Tax Compliance", slug: "accounting-compliance" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="leading-none">
            <div className="font-serif font-bold text-base sm:text-lg md:text-xl text-accent tracking-tight">
              MIDDLE EAST
            </div>
            <div className="font-serif font-bold text-base sm:text-lg md:text-xl text-primary tracking-tight">
              ADVISORY GROUP
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          <a
            href="/#about"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition tracking-wide"
          >
            About
          </a>
          {/* Services Dropdown - FIXED HOVER AREA */}
          <div
            className="relative py-1" // ADDED py-1 to expand the hover area vertically
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-sm font-medium text-foreground/70 hover:text-foreground transition tracking-wide flex items-center gap-1">
              Services
              <ChevronDown className="w-3 h-3" />
            </button>
            {servicesOpen && (
              <div 
                className="absolute top-full left-0 mt-0 w-96 bg-background border border-border shadow-lg" 
                // CRITICAL FIX: Changed mt-2 to mt-0 to eliminate the vertical gap
              >
                <div className="py-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      className="block px-6 py-3 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary/30 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        
          <a
            href="/#contact"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition tracking-wide"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={handleGetStarted}
            className="hidden sm:block bg-accent hover:bg-accent/90 text-accent-foreground font-medium tracking-wide text-sm px-6 py-2"
          >
            Get in Touch
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="px-4 sm:px-6 py-6 space-y-4">
            <a
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground/70 hover:text-foreground transition py-2"
            >
              About
            </a>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground/70 py-2">Services</p>
              <div className="pl-4 space-y-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-foreground/60 hover:text-foreground transition py-1.5"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
        
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground/70 hover:text-foreground transition py-2"
            >
              Contact
            </a>
            <Button
              onClick={handleGetStarted}
              className="w-full sm:hidden bg-accent hover:bg-accent/90 text-accent-foreground font-medium tracking-wide mt-4"
            >
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}