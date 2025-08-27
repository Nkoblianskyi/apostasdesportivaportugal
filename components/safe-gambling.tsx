import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "./animations/fade-in"

export function SafeGambling() {
  return (
    <section id="responsible-gambling" className="py-6 md:py-12 bg-black/50">
      <div className="container mx-auto px-3 md:px-4 max-w-6xl">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-white">Jogo Seguro e Responsável</h2>
            <h3 className="text-lg md:text-2xl font-semibold text-portugal-green mb-2 md:mb-4">
              Jogue com Segurança. Mantenha o Controlo.
            </h3>
            <p className="text-xs md:text-base text-gray-300 mb-1 md:mb-2">
              As apostas devem sempre permanecer uma forma de entretenimento — não uma forma de ganhar dinheiro.
            </p>
            <p className="text-xs md:text-base text-gray-300 mb-1 md:mb-2">
              Encorajamos todos os visitantes a manterem-se informados, estabelecerem limites e procurarem apoio se
              necessário.
            </p>
            <p className="text-xs md:text-base text-portugal-red font-medium">
              Lembre-se: jogue apenas com o que pode perder.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="border-t-2 border-portugal-green/30 pt-8 md:pt-12">
            <h4 className="text-base md:text-xl font-bold mb-6 md:mb-8 text-center text-portugal-green">
              PARCEIROS JOGO RESPONSÁVEL
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {/* SRIJ - Serviço de Regulação e Inspeção de Jogos */}
              <Link
                href="https://www.srij.turismodeportugal.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-portugal-green/10 border-2 border-portugal-green/30 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center transition-all duration-300 hover:border-portugal-green hover:scale-105 group min-h-[80px] md:min-h-[100px]"
              >
                <div className="relative w-full h-8 md:h-10 mb-1 md:mb-2">
                  <Image
                    src="/srij-new.svg"
                    alt="SRIJ"
                    fill
                    className="object-contain filter brightness-90 group-hover:brightness-110"
                  />
                </div>
                <span className="text-[8px] md:text-xs text-center text-gray-700 font-medium">
                  Regulação e Inspeção de Jogos
                </span>
              </Link>

              {/* ICAD - Instituto para os Comportamentos Aditivos e nas Dependências */}
              <Link
                href="https://www.sicad.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-portugal-green/10 border-2 border-portugal-green/30 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center transition-all duration-300 hover:border-portugal-green hover:scale-105 group min-h-[80px] md:min-h-[100px]"
              >
                <div className="relative w-full h-8 md:h-10 mb-1 md:mb-2">
                  <Image
                    src="/icad.png"
                    alt="ICAD"
                    fill
                    className="object-contain filter brightness-90 group-hover:brightness-110"
                  />
                </div>
                <span className="text-[8px] md:text-xs text-center text-gray-700 font-medium">
                  Comportamentos Aditivos
                </span>
              </Link>

              {/* GamCare */}
              <Link
                href="https://www.gamcare.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-portugal-red/10 border-2 border-portugal-red/30 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center transition-all duration-300 hover:border-portugal-red hover:scale-105 group min-h-[80px] md:min-h-[100px]"
              >
                <div className="relative w-full h-8 md:h-10 mb-1 md:mb-2">
                  <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
                </div>
                <span className="text-[8px] md:text-xs text-center text-gray-700 font-medium">Apoio Confidencial</span>
              </Link>

              {/* GambleAware */}
              <Link
                href="https://www.gambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-portugal-red/10 border-2 border-portugal-red/30 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center transition-all duration-300 hover:border-portugal-red hover:scale-105 group min-h-[80px] md:min-h-[100px]"
              >
                <div className="relative w-full h-8 md:h-10 mb-1 md:mb-2">
                  <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
                </div>
                <span className="text-[8px] md:text-xs text-center text-gray-700 font-medium">Consciencialização</span>
              </Link>

              {/* Jogo Responsável Portugal */}
              <Link
                href="https://www.jogoresponsavel.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-portugal-green/10 border-2 border-portugal-green/30 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center transition-all duration-300 hover:border-portugal-green hover:scale-105 group min-h-[80px] md:min-h-[100px] md:col-span-1 lg:col-span-1"
              >
                <div className="relative w-full h-8 md:h-10 mb-1 md:mb-2">
                  <Image
                    src="/jogo-responsavel-new.png"
                    alt="Jogo Responsável"
                    fill
                    className="object-contain filter brightness-90 group-hover:brightness-110"
                  />
                </div>
                <span className="text-[8px] md:text-xs text-center text-gray-700 font-medium">Jogo Responsável PT</span>
              </Link>
            </div>

            {/* Additional Information */}
            <div className="mt-6 md:mt-8 text-center">
              <p className="text-xs md:text-sm text-gray-300 mb-2">
                Se precisa de ajuda com problemas relacionados com o jogo, contacte estas organizações:
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
                <span className="text-portugal-green">📞 SICAD: 211 210 200</span>
                <span className="text-portugal-red">🌐 GamCare: gamcare.org.uk</span>
                <span className="text-portugal-green">💬 Linha SOS Vício do Jogo: 213 950 213</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
