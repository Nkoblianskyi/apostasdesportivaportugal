"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { BettingSite } from "@/types"

interface TopOffersModalProps {
  sites: BettingSite[]
}

export function TopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal on first visit
    const hasVisited = localStorage.getItem("hasVisitedBefore")

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem("hasVisitedBefore", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const renderStars = (score: number) => {
    const stars = []
    const maxScore = 10
    const maxStars = 5

    // Convert score to star rating (10 points = 5 stars, so 2 points = 1 star)
    const starRating = (score / maxScore) * maxStars

    for (let i = 0; i < maxStars; i++) {
      const starValue = i + 1
      let fillPercentage = 0

      if (starRating >= starValue) {
        fillPercentage = 100
      } else if (starRating > i) {
        fillPercentage = (starRating - i) * 100
      }

      stars.push(
        <div key={i} className="relative">
          <Star className="h-4 w-4 text-gray-300" />
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          </div>
        </div>,
      )
    }

    return stars
  }

  // Get only the first site
  const topSite = sites[0]

  if (!topSite) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-[400px] sm:max-w-[450px] p-4 md:p-6">
        <DialogHeader className="pb-3">
          <DialogTitle className="text-center text-lg md:text-xl font-bold text-portugal-green">
            Melhor Oferta de Apostas
          </DialogTitle>
        </DialogHeader>

        <div className="py-2">
          <div className="relative border-2 border-portugal-green rounded-xl overflow-hidden bg-white shadow-lg">
            {/* TOP Badge */}
            <div className="absolute top-0 right-0 bg-portugal-red text-white text-xs font-bold px-3 py-1 z-10">
              #1 RECOMENDADO
            </div>

            {/* Logo Section */}
            <div className="bg-gray-50 p-4 text-center border-b">
              <div className="relative h-20 w-full max-w-[200px] mx-auto mb-3 mt-2">
                <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex items-center justify-center gap-0.5">{renderStars(topSite.score)}</div>
                <span className="font-bold text-lg">{topSite.score.toFixed(1)}</span>
                <span className="text-gray-500 text-sm">({topSite.reviews} avaliações)</span>
              </div>
            </div>

            {/* Bonus Section */}
            <div className="p-4 text-center bg-portugal-green/5 border-b">
              <div className="text-sm text-portugal-red uppercase font-bold mb-2">BÓNUS EXCLUSIVO</div>
              <p className="font-bold text-portugal-green text-xl md:text-2xl leading-tight mb-3">{topSite.bonus}</p>
            </div>

            {/* CTA Button */}
            <div className="p-4 text-center">
              <a
                href={topSite.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-portugal-green hover:bg-portugal-dark-green text-white text-base font-bold rounded-lg text-center transition-colors duration-200 mb-3"
                onClick={() => setIsOpen(false)}
              >
                OBTER BÓNUS AGORA
              </a>

              {/* Disclaimer */}
              <div className="text-center">
                <p className="text-xs text-portugal-red font-medium">
                  +18 | T&Cs Aplicam-se | Jogue com Responsabilidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
