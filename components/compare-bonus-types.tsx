import { Gift, Coins, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "./animations/fade-in"

export function CompareBonusTypes() {
  return (
    <section className="py-6 md:py-12">
      <div className="container mx-auto px-3 md:px-4 max-w-6xl">
        <FadeIn>
          <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-white">Compare Tipos de Bónus</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          <FadeIn delay={200} direction="up">
            <Card className="bg-gray-900/70 border-gray-700">
              <CardHeader className="flex flex-row items-center gap-2 pb-1 md:pb-2 p-3 md:p-6">
                <Gift className="h-4 w-4 md:h-5 md:w-5 text-portugal-green" />
                <div>
                  <CardTitle className="text-base md:text-lg text-white">Apostas Grátis</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
                <CardDescription className="text-xs md:text-sm text-gray-300">
                  Receba apostas grátis após fazer uma aposta qualificativa. Use estas apostas grátis para apostar sem
                  arriscar o seu próprio dinheiro. Os ganhos geralmente excluem a participação.
                </CardDescription>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={400} direction="up">
            <Card className="bg-gray-900/70 border-gray-700">
              <CardHeader className="flex flex-row items-center gap-2 pb-1 md:pb-2 p-3 md:p-6">
                <Coins className="h-4 w-4 md:h-5 md:w-5 text-portugal-red" />
                <div>
                  <CardTitle className="text-base md:text-lg text-white">Bónus de Depósito</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
                <CardDescription className="text-xs md:text-sm text-gray-300">
                  As casas de apostas igualam uma percentagem do seu primeiro depósito como fundos de bónus. Estes
                  normalmente vêm com requisitos de apostas antes de poder levantar.
                </CardDescription>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={600} direction="up">
            <Card className="bg-gray-900/70 border-gray-700">
              <CardHeader className="flex flex-row items-center gap-2 pb-1 md:pb-2 p-3 md:p-6">
                <Zap className="h-4 w-4 md:h-5 md:w-5 text-portugal-green" />
                <div>
                  <CardTitle className="text-base md:text-lg text-white">Sem Depósito</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
                <CardDescription className="text-xs md:text-sm text-gray-300">
                  Receba fundos de bónus ou apostas grátis apenas por se registar, sem necessidade de depósito. Estes
                  geralmente têm termos mais rigorosos e valores mais baixos, mas são livres de risco.
                </CardDescription>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
