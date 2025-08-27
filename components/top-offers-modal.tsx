"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, CheckCircle } from "lucide-react"
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

  const topSites = sites.slice(0, 3)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-[380px] sm:max-w-[430px] p-3 md:p-4">
        <DialogHeader className="pb-1">
          <DialogTitle className="text-center text-base md:text-lg">Top 3 Ofertas de Apostas</DialogTitle>
        </DialogHeader>

        <div className="py-1 space-y-3">
          {topSites.map((site, index) => (
            <div key={site.id} className="relative border rounded-lg overflow-hidden">
              <div className="flex items-center p-2 bg-gray-50">
                <div className="relative h-8 w-16 flex-shrink-0">
                  <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                </div>
                <div className="ml-2 flex-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-xs">{site.score.toFixed(1)}</span>
                    <span className="text-gray-500 text-[10px]">({site.reviews})</span>
                  </div>
                  <p className="font-bold text-portugal-green text-xs">{site.bonus}</p>
                </div>
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-portugal-red text-white text-[10px] font-bold px-1.5 py-0.5">
                    TOP
                  </div>
                )}
              </div>

              <div className="p-2 pt-1.5 bg-white">
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-1.5">
                  <div>
                    <h4 className="text-[10px] font-semibold text-gray-600">Características:</h4>
                    <ul className="mt-0.5">
                      {site.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-1">
                          <CheckCircle className="h-2 w-2 text-portugal-green flex-shrink-0" />
                          <span className="text-[9px] text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-semibold text-gray-600">Métodos de Pagamento:</h4>
                    <ul className="mt-0.5">
                      {site.paymentMethods.map((method) => (
                        <li key={method} className="flex items-center gap-1">
                          <CheckCircle className="h-2 w-2 text-portugal-green flex-shrink-0" />
                          <span className="text-[9px] text-gray-700">{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-portugal-green hover:bg-portugal-dark-green text-white text-[10px] font-medium py-1 px-2 rounded text-center"
                >
                  Obter Bónus
                </a>
              </div>
            </div>
          ))}
          <div className="text-center pt-1">
            <a
              href="#responsible-gambling"
              className="text-[10px] text-portugal-red hover:underline"
              onClick={() => setIsOpen(false)}
            >
              +18 | T&Cs Aplicam-se | Jogue com Responsabilidade
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
