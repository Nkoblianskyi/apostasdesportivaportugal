import { bettingSites } from "@/types"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingList } from "@/components/rating-list"
import { RatingMethodology } from "@/components/rating-methodology"
import { Footer } from "@/components/footer"
import { TopOffersModal } from "@/components/top-offers-modal"
import { CookieBanner } from "@/components/cookie-banner"
import { CompareBonusTypes } from "@/components/compare-bonus-types"
import { PlaySmartGuide } from "@/components/play-smart-guide"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative z-10">
        <div className="w-full max-w-[1150px] mx-auto px-4">
          <Hero />
          <RatingList sites={bettingSites} />
          <RatingMethodology />
          <CompareBonusTypes />
          <PlaySmartGuide />
        </div>
      </main>
      <Footer />
      <TopOffersModal sites={bettingSites} />
      <CookieBanner />
    </div>
  )
}
