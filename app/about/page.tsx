import { PolicyPageLayout } from "@/components/policy-page-layout"
import { PolicySection, PolicyParagraph } from "@/components/policy-content"
import { Shield, Award, CreditCard, Users, BarChart, Headphones, CheckCircle, Star } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export default function AboutPage() {
  return (
    <PolicyPageLayout title="Sobre Nós" heroImage="/new-stadium-background.jpg" heroAlt="Estádio de futebol português">
      <div className="space-y-8">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-portugal-green mb-4">ApostasDesportivaPortugal.com</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              O seu guia de confiança para as melhores experiências de apostas desportivas em Portugal
            </p>
          </div>
        </FadeIn>

        <PolicySection title="A Nossa Missão">
          <PolicyParagraph>
            Na ApostasDesportivaPortugal.com, a nossa missão é fornecer aos apostadores portugueses informações precisas
            e atualizadas sobre os melhores sites de apostas desportivas disponíveis no mercado nacional. Acreditamos na
            transparência, honestidade e no jogo responsável como pilares fundamentais da nossa atividade.
          </PolicyParagraph>
          <PolicyParagraph>
            Somos uma equipa de especialistas portugueses apaixonados pelo desporto e pelas apostas, dedicados a ajudar
            os nossos utilizadores a tomar decisões informadas e seguras no mundo das apostas desportivas.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="Análises Independentes" delay={100}>
          <PolicyParagraph>
            Todas as nossas análises são conduzidas de forma independente pela nossa equipa de especialistas em apostas
            desportivas. Testamos minuciosamente cada plataforma para garantir que fornecemos informações precisas sobre
            a experiência do utilizador, bónus, métodos de pagamento e atendimento ao cliente.
          </PolicyParagraph>
          <PolicyParagraph>
            A nossa equipa tem anos de experiência no mercado português de apostas e conhece profundamente as
            necessidades e preferências dos apostadores nacionais.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="A Nossa Metodologia de Classificação" delay={200}>
          <PolicyParagraph>
            Levamos as nossas classificações muito a sério. A nossa equipa utiliza um sistema de avaliação abrangente
            para garantir que apenas os melhores sites de apostas chegam ao topo da nossa lista. Eis como avaliamos e
            selecionamos os sites de apostas para as nossas classificações:
          </PolicyParagraph>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <FadeIn delay={300}>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-portugal-green/20">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="h-8 w-8 text-portugal-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Licenciamento e Segurança</h3>
                    <p className="text-gray-300 text-sm">
                      Apenas listamos sites de apostas devidamente licenciados pelo SRIJ (Serviço de Regulação e
                      Inspeção de Jogos) ou outras autoridades respeitáveis. Verificamos encriptação SSL, medidas de
                      proteção de dados e protocolos de segurança gerais.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-portugal-red/20">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Award className="h-8 w-8 text-portugal-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Ofertas de Bónus e Promoções</h3>
                    <p className="text-gray-300 text-sm">
                      Avaliamos bónus de boas-vindas, promoções contínuas e programas de fidelidade. A nossa equipa lê
                      as letras pequenas para avaliar requisitos de apostas, limites de tempo e outros termos para
                      garantir que são justos e alcançáveis.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-portugal-green/20">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Users className="h-8 w-8 text-portugal-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Experiência do Utilizador</h3>
                    <p className="text-gray-300 text-sm">
                      Testamos o website e aplicações móveis quanto à facilidade de uso, navegação, velocidades de
                      carregamento e design geral. Um bom site de apostas deve ser intuitivo e acessível tanto para
                      principiantes como para apostadores experientes.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-portugal-red/20">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <BarChart className="h-8 w-8 text-portugal-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Mercados de Apostas e Odds</h3>
                    <p className="text-gray-300 text-sm">
                      Comparamos a gama de desportos e eventos cobertos, bem como a variedade de opções de apostas
                      disponíveis. Também analisamos a competitividade das odds em diferentes mercados para garantir que
                      obtém bom valor.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={700}>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-portugal-green/20">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CreditCard className="h-8 w-8 text-portugal-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Métodos de Pagamento e Levantamentos</h3>
                    <p className="text-gray-300 text-sm">
                      Verificamos a variedade de opções de depósito e levantamento, tempos de processamento, taxas e
                      limites. Os melhores sites de apostas oferecem múltiplos métodos de pagamento convenientes e
                      levantamentos rápidos.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={800}>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-portugal-red/20">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Headphones className="h-8 w-8 text-portugal-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Apoio ao Cliente</h3>
                    <p className="text-gray-300 text-sm">
                      Testamos a capacidade de resposta, conhecimento e utilidade das equipas de apoio ao cliente.
                      Valorizamos sites de apostas que oferecem múltiplos canais de contacto (chat ao vivo, email,
                      telefone) e disponibilidade 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </PolicySection>

        <PolicySection title="O Nosso Sistema de Pontuação" delay={900}>
          <div className="bg-gray-800/30 p-6 rounded-lg border border-portugal-green/30">
            <PolicyParagraph>
              Cada site de apostas recebe uma pontuação de 10 baseada na nossa avaliação abrangente. A pontuação final é
              uma média ponderada de todos os critérios, com segurança e experiência do utilizador a receberem a maior
              prioridade. Apenas sites com pontuação superior a 8.5 chegam à nossa lista recomendada.
            </PolicyParagraph>
            <div className="flex items-center gap-2 mt-4">
              <Star className="h-5 w-5 text-portugal-red fill-current" />
              <span className="text-portugal-green font-semibold">
                Padrão de Excelência: Apenas os melhores sites fazem parte da nossa seleção
              </span>
            </div>
          </div>
        </PolicySection>

        <PolicySection title="Divulgação de Afiliação" delay={1000}>
          <PolicyParagraph>
            A ApostasDesportivaPortugal.com é financiada através de parcerias de afiliação com operadores de apostas.
            Quando se regista através dos nossos links, podemos receber uma comissão. Isto ajuda-nos a manter o nosso
            site e continuar a fornecer informações gratuitas aos nossos utilizadores. No entanto, isto não influencia
            as nossas análises ou classificações. Priorizamos sempre a precisão e os interesses dos utilizadores.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="Jogo Responsável" delay={1100}>
          <div className="bg-portugal-red/10 border border-portugal-red/30 p-6 rounded-lg">
            <PolicyParagraph>
              Defendemos fortemente o jogo responsável. As apostas devem ser divertidas e não uma forma de ganhar
              dinheiro. Encorajamos os nossos utilizadores a estabelecer limites, nunca perseguir perdas e procurar
              ajuda se o jogo se tornar problemático.
            </PolicyParagraph>
          </div>
        </PolicySection>

        <PolicySection title="A Nossa Equipa" delay={1200}>
          <PolicyParagraph>
            A nossa equipa é composta por entusiastas de apostas experientes, especialistas da indústria e analistas
            profissionais portugueses. Cada membro traz conhecimentos únicos para garantir que as nossas análises são
            abrangentes e precisas. Combinamos anos de conhecimento da indústria com uma paixão por ajudar os
            utilizadores a encontrar as melhores experiências de apostas.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="Contacte-nos" delay={1300}>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-portugal-green/20">
            <PolicyParagraph>
              Tem questões ou sugestões? Adoraríamos ouvir de si. Contacte a nossa equipa em{" "}
              <a href="mailto:info@apostasdesportivaportugal.com" className="text-portugal-green hover:underline">
                info@apostasdesportivaportugal.com
              </a>
            </PolicyParagraph>
            <div className="flex items-center gap-2 mt-4">
              <CheckCircle className="h-5 w-5 text-portugal-green" />
              <span className="text-gray-300">Resposta garantida em 24 horas</span>
            </div>
          </div>
        </PolicySection>
      </div>
    </PolicyPageLayout>
  )
}
