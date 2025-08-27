import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { FadeIn } from "./animations/fade-in"
import Image from "next/image"

interface PolicyPageLayoutProps {
  children: ReactNode
  title: string
  lastUpdated?: string
  heroImage?: string
  heroAlt?: string
}

export function PolicyPageLayout({
  children,
  title,
  lastUpdated,
  heroImage = "/stadium-background.png",
  heroAlt = "Stadium background",
}: PolicyPageLayoutProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>
          <div className="animate-subtle-zoom">
            <Image
              src="/new-stadium-background.jpg"
              alt="Stadium background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center">
            <FadeIn>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-2">{title}</h1>
              {lastUpdated && <p className="text-sm text-gray-300 text-center">Last updated: {lastUpdated}</p>}
            </FadeIn>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative min-h-screen">
          {/* Background Image */}
          <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1]">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>
            <div className="animate-subtle-zoom">
              <Image
                src="/new-stadium-background.jpg"
                alt="Stadium background"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-lg shadow-lg p-6 md:p-8 lg:p-10 text-gray-200">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
