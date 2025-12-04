"use client"

import { Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {/* Logo and description */}
          <div>
         <div className="mb-5 sm:mb-6">
  <div className="font-serif text-lg sm:text-xl font-bold tracking-wide">
    <div className="text-accent">MIDDLE EAST</div>
    <div className="text-white">ADVISORY GROUP</div>
  </div>
</div>
            {/* </CHANGE> */}
            <p className="text-xs sm:text-sm text-white/70 mt-5 sm:mt-6 font-light leading-relaxed">
              Middle East Advisory Group — A trusted advisory partner for the GCC region.
            </p>

            {/* Social icons in gold */}
            <div className="flex gap-4 mt-6 sm:mt-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:info@meag.com" className="text-accent hover:text-accent/80 transition" aria-label="Email">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="tel:+971000000000" className="text-accent hover:text-accent/80 transition" aria-label="Phone">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold mb-5 sm:mb-6 text-base sm:text-lg text-white">Services</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/70 font-light">
              <li>
                <a href="/#services" className="hover:text-accent transition">
                  UAE & KSA Relocation
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-accent transition">
                  Tax Advisory
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-accent transition">
                  Property Advisory
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-accent transition">
                  Family Office Advisory
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-accent transition">
                  Accounting & Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-semibold mb-5 sm:mb-6 text-base sm:text-lg text-white">Company</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/70 font-light">
              <li>
                <a href="/#about" className="hover:text-accent transition">
                  About MEAG
                </a>
              </li>
              <li>
                <a href="/#team" className="hover:text-accent transition">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/#insights" className="hover:text-accent transition">
                  Insights
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-accent transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-serif font-semibold mb-5 sm:mb-6 text-base sm:text-lg text-white">Offices</h4>
            <div className="space-y-5 sm:space-y-6">
              <div>
                <p className="text-xs sm:text-sm font-medium text-accent mb-2">Dubai</p>
                <p className="text-xs text-white/70 font-light leading-relaxed">Boulevard Plaza, Downtown Dubai</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-accent mb-2">London</p>
                <p className="text-xs text-white/70 font-light leading-relaxed">Mayfair, London</p>
              </div>
              <div>
                <p className="text-xs text-white/70 font-light">Also in Abu Dhabi, Saudi Arabia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 sm:pt-12 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-white/60 font-light">
            © 2025 Middle East Advisory Group. All rights reserved.
          </p>
          <div className="flex gap-6 sm:gap-8 text-xs sm:text-sm text-white/60 font-light">
            <a href="#" className="hover:text-accent transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
