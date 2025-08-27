import Image from "next/image"
import { Star, Crown, Award, TrendingUp } from "lucide-react"
import type { BettingSite } from "@/types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "./animations/fade-in"

interface RatingListProps {
  sites: BettingSite[]
}

export function RatingList({ sites }: RatingListProps) {
  const getBadgeForPosition = (index: number) => {
    switch (index) {
      case 0:
        return {
          text: "Mais Bem Avaliada",
          icon: Crown,
          className: "bg-portugal-green hover:bg-portugal-dark-green text-white",
        }
      case 1:
        return {
          text: "Oferta Exclusiva",
          icon: Award,
          className: "bg-portugal-red hover:bg-portugal-dark-red text-white",
        }
      case 2:
        return {
          text: "Em Tendência",
          icon: TrendingUp,
          className: "bg-amber-500 hover:bg-amber-600 text-white",
        }
      default:
        return null
    }
  }

  const renderStars = (stars: number) => {
    const starElements = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      if (i < stars) {
        starElements.push(<Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)
      } else {
        starElements.push(<Star key={i} className="h-4 w-4 text-gray-300" />)
      }
    }

    return starElements
  }

  return (
    <section className="py-3 md:py-6">
      <div className="container mx-auto px-3 md:px-4 max-w-[1150px]">
        <div className="grid gap-3 md:gap-6">
          {sites.map((site, index) => {
            const badge = getBadgeForPosition(index)
            const isFirstPlace = index === 0
            const IconComponent = badge?.icon

            return (
              <FadeIn key={site.id} delay={200 * index} direction="left">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-portugal-green focus:ring-offset-2 rounded-lg"
                >
                  <Card
                    className={`overflow-hidden border-2 h-full relative ${
                      isFirstPlace
                        ? "border-portugal-green bg-white shadow-lg shadow-portugal-green/20"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    {badge && (
                      <Badge
                        className={`${badge.className} text-[8px] md:text-xs px-2 py-1 md:px-3 md:py-1.5 flex items-center gap-1 absolute top-0 left-0 rounded-none rounded-br-lg z-10`}
                      >
                        {IconComponent && <IconComponent className="h-2 w-2 md:h-3 md:w-3" />}
                        {badge.text}
                      </Badge>
                    )}

                    <CardContent className="p-3 md:p-4 pt-8 md:pt-10">
                      {/* Desktop Layout */}
                      <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3 flex flex-col items-center justify-center">
                          <div className="p-4 relative rounded-lg bg-black w-full max-w-[200px]">
                            <div className="relative h-16 w-full">
                              <Image
                                src={site.logo || "/placeholder.svg"}
                                alt={site.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-span-5 flex flex-col items-center justify-center text-center">
                          <div className="text-sm text-portugal-red uppercase font-bold mb-2">BÓNUS</div>
                          <p className="font-bold text-portugal-green leading-tight text-3xl">{site.bonus}</p>
                        </div>

                        <div className="col-span-2 flex flex-col items-center justify-center text-center">
                          <div className="flex items-center justify-center gap-0.5 mb-2">{renderStars(site.stars)}</div>
                          <span
                            className={`font-bold text-lg mb-1 ${isFirstPlace ? "text-portugal-green" : "text-gray-900"}`}
                          >
                            {site.rating.toFixed(1)}
                          </span>
                          <span className="text-gray-500 text-sm">({site.reviews} avaliações)</span>
                        </div>

                        <div className="col-span-2 flex flex-col items-center justify-center">
                          <div className="w-full max-w-[180px] bg-portugal-green hover:bg-portugal-dark-green text-white font-medium py-3 px-4 rounded text-center mb-2 text-sm leading-tight">
                            Obter Bónus
                          </div>
                          <p className="text-xs text-gray-500 text-center leading-tight">+18 | T&Cs Aplicam-se</p>
                        </div>
                      </div>

                      {/* Mobile Layout */}
                      <div className="md:hidden">
                        <div className="grid grid-cols-2 gap-3 items-center mb-3">
                          <div className="flex justify-start">
                            <div className="p-4 relative rounded-lg bg-black w-full">
                              <div className="relative h-28 w-full">
                                <Image
                                  src={site.logo || "/placeholder.svg?height=80&width=120&text=" + site.name}
                                  alt={site.name}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="text-xs text-portugal-red uppercase font-bold mb-1">BÓNUS</div>
                            <div className="text-sm font-bold text-portugal-green leading-tight">{site.bonus}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 items-center gap-2 pt-3 border-t-2 border-gray-200">
                          <div className="text-center">
                            <div
                              className={`text-xl font-bold leading-none mb-1 ${isFirstPlace ? "text-portugal-green" : "text-portugal-red"}`}
                            >
                              {site.rating.toFixed(1)}
                            </div>
                            <div className="text-[8px] text-gray-600 font-bold">SCORE</div>
                          </div>

                          <div className="text-center">
                            <div className="flex justify-center gap-0.5 mb-1">{renderStars(site.stars)}</div>
                            <div className="text-[8px] text-gray-600 font-bold">({site.reviews})</div>
                          </div>

                          <div className="flex justify-center">
                            <div className="w-full bg-portugal-green hover:bg-portugal-dark-green text-white font-bold py-2 px-2 rounded text-center text-xs">
                              OBTER BÓNUS
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
