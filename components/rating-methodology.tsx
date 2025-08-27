import { Shield, Award, Users, BarChart, CreditCard, Headphones, CheckCircle, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "./animations/fade-in"

export function RatingMethodology() {
  return (
    <section className="py-6 md:py-12 bg-black/30">
      <div className="container mx-auto px-3 md:px-4 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-white">Como Criamos o Nosso Ranking</h2>
            <p className="text-sm md:text-lg text-gray-300 max-w-3xl mx-auto">
              A nossa equipa de especialistas avalia cada site de apostas através de critérios rigorosos para garantir
              que apenas os melhores chegam ao topo da nossa lista.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          <FadeIn delay={200}>
            <Card className="bg-gray-900/70 border-portugal-green/30 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-portugal-green/20 rounded-lg">
                    <Shield className="h-5 w-5 md:h-6 md:w-6 text-portugal-green" />
                  </div>
                  <CardTitle className="text-base md:text-lg text-white">Licenciamento e Segurança</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  Verificamos se cada site possui licença válida do SRIJ ou outras autoridades respeitáveis. Analisamos
                  encriptação SSL, proteção de dados e medidas de segurança.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={300}>
            <Card className="bg-gray-900/70 border-portugal-red/30 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-portugal-red/20 rounded-lg">
                    <Award className="h-5 w-5 md:h-6 md:w-6 text-portugal-red" />
                  </div>
                  <CardTitle className="text-base md:text-lg text-white">Bónus e Promoções</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  Avaliamos ofertas de boas-vindas, requisitos de apostas, limites de tempo e termos. Priorizamos bónus
                  justos e alcançáveis para os utilizadores portugueses.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={400}>
            <Card className="bg-gray-900/70 border-portugal-green/30 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-portugal-green/20 rounded-lg">
                    <Users className="h-5 w-5 md:h-6 md:w-6 text-portugal-green" />
                  </div>
                  <CardTitle className="text-base md:text-lg text-white">Experiência do Utilizador</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  Testamos websites e apps móveis quanto à facilidade de uso, velocidade de carregamento e design. A
                  experiência deve ser intuitiva para todos os utilizadores.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={500}>
            <Card className="bg-gray-900/70 border-portugal-red/30 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-portugal-red/20 rounded-lg">
                    <BarChart className="h-5 w-5 md:h-6 md:w-6 text-portugal-red" />
                  </div>
                  <CardTitle className="text-base md:text-lg text-white">Mercados e Odds</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  Comparamos a variedade de desportos, eventos e tipos de apostas. Analisamos a competitividade das odds
                  para garantir bom valor aos apostadores.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={600}>
            <Card className="bg-gray-900/70 border-portugal-green/30 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-portugal-green/20 rounded-lg">
                    <CreditCard className="h-5 w-5 md:h-6 md:w-6 text-portugal-green" />
                  </div>
                  <CardTitle className="text-base md:text-lg text-white">Métodos de Pagamento</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  Verificamos opções de depósito e levantamento, tempos de processamento, taxas e limites. Priorizamos
                  métodos populares em Portugal.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={700}>
            <Card className="bg-gray-900/70 border-portugal-red/30 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-portugal-red/20 rounded-lg">
                    <Headphones className="h-5 w-5 md:h-6 md:w-6 text-portugal-red" />
                  </div>
                  <CardTitle className="text-base md:text-lg text-white">Apoio ao Cliente</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  Testamos a qualidade, rapidez e disponibilidade do apoio ao cliente. Valorizamos suporte em português
                  e múltiplos canais de contacto.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={800}>
          <div className="bg-gray-800/50 rounded-lg p-6 md:p-8 border border-portugal-green/30">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Star className="h-6 w-6 text-portugal-red fill-current" />
                <h3 className="text-lg md:text-xl font-bold text-white">Sistema de Pontuação</h3>
                <Star className="h-6 w-6 text-portugal-red fill-current" />
              </div>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
                Cada site recebe uma pontuação de 10 baseada na nossa avaliação abrangente. A pontuação final é uma
                média ponderada de todos os critérios, com segurança e experiência do utilizador a receberem maior
                prioridade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center p-4 bg-portugal-green/10 rounded-lg border border-portugal-green/30">
                <div className="text-2xl md:text-3xl font-bold text-portugal-green mb-2">9.5+</div>
                <div className="text-xs md:text-sm text-white font-semibold mb-1">Excelente</div>
                <div className="text-xs text-gray-300">Sites excepcionais com pontuação máxima</div>
              </div>

              <div className="text-center p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
                <div className="text-2xl md:text-3xl font-bold text-amber-500 mb-2">8.5+</div>
                <div className="text-xs md:text-sm text-white font-semibold mb-1">Muito Bom</div>
                <div className="text-xs text-gray-300">Sites recomendados com alta qualidade</div>
              </div>

              <div className="text-center p-4 bg-portugal-red/10 rounded-lg border border-portugal-red/30">
                <div className="text-2xl md:text-3xl font-bold text-portugal-red mb-2">8.0+</div>
                <div className="text-xs md:text-sm text-white font-semibold mb-1">Padrão Mínimo</div>
                <div className="text-xs text-gray-300">Pontuação mínima para entrar no ranking</div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 text-portugal-green">
                <CheckCircle className="h-4 w-4" />
                <span className="text-xs md:text-sm font-semibold">
                  Apenas sites com pontuação superior a 8.0 fazem parte da nossa seleção
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
