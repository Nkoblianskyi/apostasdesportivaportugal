import { UserPlus, Gift, PlayCircle, ListChecks } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FadeIn } from "./animations/fade-in"

export function PlaySmartGuide() {
  return (
    <section className="py-6 md:py-12">
      <div className="container mx-auto px-3 md:px-4 max-w-6xl">
        <FadeIn>
          <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-white">
            Guia para Apostar com Inteligência
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div>
            <div className="grid gap-3 md:gap-6">
              <FadeIn delay={200} direction="right">
                <div className="flex gap-2 md:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-portugal-green/20 flex items-center justify-center">
                    <UserPlus className="h-4 w-4 md:h-6 md:w-6 text-portugal-green" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-lg font-semibold mb-0.5 md:mb-2 text-white">1. Escolha um site</h3>
                    <p className="text-[10px] md:text-sm text-gray-300">
                      Escolha da nossa lista de sites de apostas confiáveis que correspondem às suas preferências e
                      estilo de apostas.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={400} direction="right">
                <div className="flex gap-2 md:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-portugal-red/20 flex items-center justify-center">
                    <ListChecks className="h-4 w-4 md:h-6 md:w-6 text-portugal-red" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-lg font-semibold mb-0.5 md:mb-2 text-white">2. Registe-se</h3>
                    <p className="text-[10px] md:text-sm text-gray-300">
                      Complete o processo de registo fornecendo as informações necessárias e verificando a sua conta.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={600} direction="right">
                <div className="flex gap-2 md:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-portugal-green/20 flex items-center justify-center">
                    <Gift className="h-4 w-4 md:h-6 md:w-6 text-portugal-green" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-lg font-semibold mb-0.5 md:mb-2 text-white">
                      3. Reivindique o bónus
                    </h3>
                    <p className="text-[10px] md:text-sm text-gray-300">
                      Siga as instruções para reivindicar o seu bónus de boas-vindas, que pode exigir um código
                      promocional ou depósito mínimo.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={800} direction="right">
                <div className="flex gap-2 md:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-portugal-red/20 flex items-center justify-center">
                    <PlayCircle className="h-4 w-4 md:h-6 md:w-6 text-portugal-red" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-lg font-semibold mb-0.5 md:mb-2 text-white">4. Comece a apostar</h3>
                    <p className="text-[10px] md:text-sm text-gray-300">
                      Comece a fazer apostas nos seus desportos e eventos favoritos enquanto controla o seu bankroll.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={400} direction="left">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Perguntas Frequentes</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-gray-700">
                  <AccordionTrigger className="text-xs md:text-base text-white py-2 md:py-4">
                    As apostas são legais em Portugal?
                  </AccordionTrigger>
                  <AccordionContent className="text-[10px] md:text-sm text-gray-300">
                    Sim, as apostas desportivas são legais em Portugal para adultos com 18 anos ou mais. A indústria é
                    regulamentada pelo SRIJ (Serviço de Regulação e Inspeção de Jogos).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-gray-700">
                  <AccordionTrigger className="text-xs md:text-base text-white py-2 md:py-4">
                    Preciso de identificação para me registar?
                  </AccordionTrigger>
                  <AccordionContent className="text-[10px] md:text-sm text-gray-300">
                    Sim, os sites de apostas são obrigados a verificar a sua identidade como parte dos seus
                    procedimentos de Conhecimento do Cliente (KYC). Normalmente precisará de fornecer prova de
                    identidade e morada.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-gray-700">
                  <AccordionTrigger className="text-xs md:text-base text-white py-2 md:py-4">
                    Posso levantar fundos de bónus?
                  </AccordionTrigger>
                  <AccordionContent className="text-[10px] md:text-sm text-gray-300">
                    Os fundos de bónus geralmente vêm com requisitos de apostas que devem ser cumpridos antes do
                    levantamento. Estes requisitos variam entre casas de apostas, por isso verifique sempre os termos e
                    condições.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
