"use client"

import { useState } from "react"
import { Gift, Smartphone, CheckCircle } from "lucide-react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"
import { FadeIn } from "./animations/fade-in"
import { Pulse } from "./animations/pulse"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="pt-0 pb-2 md:pb-3">
      <div className="container mx-auto px-4">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-6xl mx-auto">
          <div className="text-center">
            <FadeIn delay={200}>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                Os Rankings de Apostas Mais Confiáveis de Portugal
              </h1>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                Verificado por Especialistas. Atualizado Mensalmente.
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
                <div className="flex items-center gap-2">
                  <Pulse>
                    <Gift className="h-5 w-5 text-portugal-green" />
                  </Pulse>
                  <span className="text-xs md:text-base text-gray-300">Bónus Fáceis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Pulse delay={500}>
                    <Smartphone className="h-5 w-5 text-portugal-green" />
                  </Pulse>
                  <span className="text-xs md:text-base text-gray-300">Mobile Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <Pulse delay={1000}>
                    <CheckCircle className="h-5 w-5 text-portugal-green" />
                  </Pulse>
                  <span className="text-xs md:text-base text-gray-300">Sites Confiáveis</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={800}>
              <div className="bg-black/50 border border-gray-700 rounded-lg p-3 text-xs md:text-sm text-gray-300 max-w-2xl mx-auto mb-4">
                <p>
                  Jogue com responsabilidade. Aplicam-se termos e condições.{" "}
                  <button onClick={openModal} className="text-portugal-green hover:underline">
                    Info Publicitária
                  </button>{" "}
                  |{" "}
                  <button onClick={openModal} className="text-portugal-red hover:underline">
                    Apenas +18
                  </button>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={1000}>
              <div className="text-center pt-4 border-t border-gray-600">
                <p className="text-[10px] md:text-xs text-gray-400">
                  Última atualização do ranking:{" "}
                  {new Date().toLocaleDateString("pt-PT", { month: "long", year: "numeric" })}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
