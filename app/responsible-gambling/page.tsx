import { PolicyPageLayout } from "@/components/policy-page-layout"
import { PolicySection, PolicyParagraph, PolicyList } from "@/components/policy-content"
import { SafeGambling } from "@/components/safe-gambling"
import { AlertTriangle, Clock, Ban, Wallet, Brain, Phone } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export default function ResponsibleGamblingPage() {
  return (
    <PolicyPageLayout
      title="Jogo Responsável"
      heroImage="/responsible-gambling-bg.png"
      heroAlt="Conceito de jogo responsável"
    >
      <div className="mb-8">
        <FadeIn>
          <p className="text-lg md:text-xl text-emerald-400 mb-6 leading-relaxed">
            Na ApostasDesportivaPortugal.com, acreditamos que as apostas devem ser sempre uma atividade divertida e de
            entretenimento, nunca uma forma de ganhar dinheiro ou resolver problemas financeiros. Estamos empenhados em
            promover o jogo responsável e fornecer recursos para ajudar os nossos utilizadores a manter o controlo.
          </p>
        </FadeIn>
      </div>

      <PolicySection title="Sinais de Jogo Problemático">
        <PolicyParagraph>
          É importante reconhecer os sinais de alerta do jogo problemático. Se você ou alguém que conhece está a
          experienciar algum destes sinais, pode ser altura de procurar ajuda:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Gastar mais tempo ou dinheiro em apostas do que pode permitir-se",
            "Ter dificuldade em parar ou controlar as suas apostas",
            "Mentir a amigos ou família sobre os seus hábitos de apostas",
            "Apostar para escapar a problemas ou para lidar com sentimentos de ansiedade ou depressão",
            "Pedir dinheiro emprestado ou vender bens para financiar apostas",
            "Negligenciar trabalho, educação ou compromissos familiares devido às apostas",
            "Sentir-se irritável ou inquieto quando tenta reduzir as apostas",
          ]}
        />
      </PolicySection>

      <PolicySection title="Dicas para Apostas Responsáveis" delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-gray-700/50 p-4 rounded-lg flex gap-4">
            <div className="flex-shrink-0">
              <Clock className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Defina Limites de Tempo</h3>
              <p className="text-sm text-gray-300">
                Decida quanto tempo quer gastar a apostar e cumpra esse limite. Configure um alarme para o lembrar
                quando o tempo acabar.
              </p>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg flex gap-4">
            <div className="flex-shrink-0">
              <Wallet className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Estabeleça um Orçamento</h3>
              <p className="text-sm text-gray-300">
                Aposte apenas com dinheiro que pode permitir-se perder. Defina um limite diário, semanal ou mensal de
                gastos e cumpra-o rigorosamente.
              </p>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg flex gap-4">
            <div className="flex-shrink-0">
              <Ban className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Faça Pausas Regulares</h3>
              <p className="text-sm text-gray-300">
                Apostar continuamente pode levar a más decisões. Faça pausas regulares para limpar a mente e reavaliar a
                sua atividade de apostas.
              </p>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg flex gap-4">
            <div className="flex-shrink-0">
              <Brain className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Mantenha-se Informado</h3>
              <p className="text-sm text-gray-300">
                Compreenda as probabilidades e regras dos jogos que joga. Lembre-se que os resultados das apostas são
                aleatórios e não são influenciados por resultados passados.
              </p>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg flex gap-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Não Persiga as Perdas</h3>
              <p className="text-sm text-gray-300">
                Tentar recuperar dinheiro perdido muitas vezes leva a perdas maiores. Aceite que perder faz parte das
                apostas e afaste-se quando atingir o seu limite.
              </p>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg flex gap-4">
            <div className="flex-shrink-0">
              <Phone className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Procure Ajuda</h3>
              <p className="text-sm text-gray-300">
                Se está preocupado com os seus hábitos de apostas, não hesite em procurar ajuda. Existem muitas
                organizações que oferecem apoio gratuito e confidencial.
              </p>
            </div>
          </div>
        </div>
      </PolicySection>

      <PolicySection title="Opções de Auto-Exclusão" delay={200}>
        <PolicyParagraph>
          A maioria dos sites de apostas oferece opções de auto-exclusão que permitem bloquear o acesso à sua conta por
          um período específico. Esta pode ser uma ferramenta útil se sentir que precisa de uma pausa das apostas. Além
          disso, existem ferramentas de software e aplicações que podem bloquear o acesso a sites e aplicações de
          apostas em todos os seus dispositivos.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Recursos de Apoio em Portugal" delay={300}>
        <PolicyParagraph>
          Se você ou alguém que conhece está a lutar com problemas relacionados com o jogo, existem várias organizações
          em Portugal que podem ajudar:
        </PolicyParagraph>
        <PolicyList
          items={[
            "SICAD (Serviço de Intervenção nos Comportamentos Aditivos e nas Dependências) - Linha de apoio: 211 210 200",
            "Linha SOS Vício do Jogo - Telefone: 213 950 213",
            "APAJO (Associação Portuguesa de Apoio ao Jogador) - Apoio especializado em dependência do jogo",
            "Centro de Respostas Integradas (CRI) - Centros locais de apoio em todo o país",
            "Consultas de Psicologia e Psiquiatria nos Centros de Saúde e Hospitais",
          ]}
        />
      </PolicySection>

      <PolicySection title="Ferramentas de Controlo" delay={400}>
        <PolicyParagraph>
          Muitas casas de apostas oferecem ferramentas para ajudar os jogadores a manter o controlo:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Limites de depósito - Defina quanto pode depositar por dia, semana ou mês",
            "Limites de apostas - Controle quanto pode apostar em cada sessão",
            "Limites de tempo - Estabeleça quanto tempo pode passar no site",
            "Períodos de reflexão - Pausas curtas de 24 horas a 6 semanas",
            "Auto-exclusão - Bloqueio permanente ou temporário da conta",
            "Verificações de realidade - Lembretes sobre o tempo gasto a jogar",
          ]}
        />
      </PolicySection>

      <PolicySection title="Para Familiares e Amigos" delay={500}>
        <PolicyParagraph>
          Se está preocupado com os hábitos de apostas de alguém próximo, também pode procurar apoio. Muitas
          organizações oferecem aconselhamento e recursos para familiares e amigos de pessoas com problemas de jogo.
          Lembre-se de que o apoio e a compreensão são fundamentais no processo de recuperação.
        </PolicyParagraph>
      </PolicySection>

      <div className="mt-12">
        <SafeGambling />
      </div>
    </PolicyPageLayout>
  )
}
