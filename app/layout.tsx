import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Fira_Code } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carlos Trod - Desarrollador Full Stack",
  description:
    "Portfolio profesional de Carlos Trod, Desarrollador Full Stack especializado en Java, PHP, HTML, CSS y más.",
  generator: 'v0.app'
}
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className={`${firaCode.variable}`}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
