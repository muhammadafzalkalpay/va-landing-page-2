"use client"

export function AboutTrainer() {
  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 lg:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column: About Content */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight text-balance text-primary">
              Middle East Advisory Group
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-secondary-foreground">
              Middle East Advisory Group is one of the leading GCC-based advisory and corporate services firms,
              supporting international families, entrepreneurs and businesses with relocation, corporate structuring,
              tax advisory, and cross-border compliance across the UAE, Saudi Arabia and the UK.
            </p>
          </div>

          {/* Right Column: Highlight Card */}
          <div className="bg-card p-8 sm:p-10 flex flex-col gap-6 sm:gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xs sm:text-sm font-medium uppercase tracking-widest mb-3 text-accent">
                  Global Presence
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-card-foreground">
                  Offices in UK, Dubai, Abu Dhabi, and Saudi Arabia
                </p>
              </div>

              <div className="h-px bg-border"></div>

              <div>
                <h3 className="text-xs sm:text-sm font-medium uppercase tracking-widest mb-3 text-accent">Expertise</h3>
                <p className="text-sm sm:text-base leading-relaxed text-card-foreground">
                  Big Four quality expertise with regional focus
                </p>
              </div>

              <div className="h-px bg-border"></div>

              <div>
                <h3 className="text-xs sm:text-sm font-medium uppercase tracking-widest mb-3 text-accent">Founder</h3>
                <p className="text-sm sm:text-base leading-relaxed font-medium text-card-foreground">Zeeshan Khilji</p>
                <p className="text-xs sm:text-sm leading-relaxed mt-2 text-muted-foreground">
                  Ex-Big Four, author, M&A specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
