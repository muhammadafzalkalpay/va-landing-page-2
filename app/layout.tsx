import type React from "react"
import type { Metadata } from "next"
import { Shippori_Mincho, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Added MEAG brand fonts: Shippori Mincho for headlines, Poppins for body
const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Middle East Advisory Group | Premium Corporate Advisory Services",
  description: "Trusted advisers delivering Big-Four-level expertise across the GCC region",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${shipporiMincho.variable} ${poppins.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
