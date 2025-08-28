import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-black/80 text-white py-8 md:py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div>
            <Logo className="mb-4" size="lg" />
            <p className="text-gray-400 text-xs md:text-sm">
              ApostasDesportivaPortugal.com fornece comparações independentes de plataformas de apostas desportivas.
              Podemos receber comissões de marcas em destaque, o que pode influenciar as classificações.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 md:mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-portugal-green transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-portugal-green transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-portugal-green transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/responsible-gambling" className="hover:text-portugal-green transition-colors">
                  Jogo Responsável
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-3 md:mb-4">Parceiros Jogo Responsável</h3>
            <p className="text-gray-400 text-xs md:text-sm mb-4">
              Trabalhamos com organizações de confiança para promover o jogo responsável e fornecer apoio quando
              necessário.
            </p>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
              <div className="bg-gray-800 p-2 md:p-3 rounded-lg flex flex-col items-center border border-portugal-green/20">
                <Link href="https://www.srij.turismodeportugal.pt/" target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[60px] h-[24px] md:w-[80px] md:h-[32px] mb-1 md:mb-2">
                    <Image src="/srij-new.svg" alt="SRIJ" fill className="object-contain" />
                  </div>
                </Link>

              </div>

              <div className="bg-gray-800 p-2 md:p-3 rounded-lg flex flex-col items-center border border-portugal-green/20">
                <Link href="https://www.sicad.pt/" target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[60px] h-[24px] md:w-[80px] md:h-[32px] mb-1 md:mb-2">
                    <Image src="/icad.png" alt="ICAD" fill className="object-contain" />
                  </div>
                </Link>

              </div>

              <div className="bg-gray-800 p-2 md:p-3 rounded-lg flex flex-col items-center border border-portugal-red/20">
                <Link href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[60px] h-[24px] md:w-[80px] md:h-[32px] mb-1 md:mb-2">
                    <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
                  </div>
                </Link>

              </div>

              <div className="bg-gray-800 p-2 md:p-3 rounded-lg flex flex-col items-center border border-portugal-red/20">
                <Link href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[60px] h-[24px] md:w-[80px] md:h-[32px] mb-1 md:mb-2">
                    <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
                  </div>
                </Link>

              </div>

              <div className="bg-gray-800 p-2 md:p-3 rounded-lg flex flex-col items-center border border-portugal-green/20">
                <Link href="https://www.jogoresponsavel.pt/" target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[60px] h-[24px] md:w-[80px] md:h-[32px] mb-1 md:mb-2">
                    <Image src="/jogo-responsavel-new.png" alt="Jogo Responsável" fill className="object-contain" />
                  </div>
                </Link>

              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 md:pt-6 text-center text-xs md:text-sm text-gray-400">
          <p>© {new Date().getFullYear()} apostasdesportivaportugal.com. Todos os direitos reservados.</p>
          <p className="mt-2">
            Jogue com responsabilidade. Apenas +18. Se precisa de ajuda:{" "}
            <Link href="tel:213950213" className="text-portugal-red hover:underline">
              213 950 213
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
