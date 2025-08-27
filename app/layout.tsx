import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Apostas Desportiva Portugal - Os Melhores Sites de Apostas Desportivas",
  description:
    "Descubra os melhores sites de apostas desportivas em Portugal. Análises especializadas, bónus exclusivos e classificações confiáveis para uma experiência de apostas segura.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        {/* Background Image */}
        <div
          className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/new-stadium-background.jpg')`,
          }}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
