import { PolicyPageLayout } from "@/components/policy-page-layout"
import { PolicySection, PolicyParagraph, PolicyList, PolicyLink } from "@/components/policy-content"

export default function TermsPage() {
  return (
    <PolicyPageLayout
      title="Termos e Condições"
      lastUpdated="27 de Janeiro de 2025"
      heroImage="/new-stadium-background.jpg"
      heroAlt="Estádio português"
    >
      <PolicySection title="1. Aceitação dos Termos">
        <PolicyParagraph>
          Ao aceder e utilizar o apostasdesportivaportugal.com, aceita e concorda em ficar vinculado aos termos e
          disposições deste acordo. Se não concordar em cumprir estes termos, por favor não utilize o nosso website.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="2. Licença de Utilização" delay={100}>
        <PolicyParagraph>
          É concedida permissão para visualizar temporariamente os materiais no apostasdesportivaportugal.com apenas
          para uso pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título, e sob
          esta licença não pode:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Modificar ou copiar os materiais",
            "Usar os materiais para qualquer propósito comercial ou para qualquer exibição pública",
            "Tentar fazer engenharia reversa de qualquer software contido no apostasdesportivaportugal.com",
            "Remover quaisquer direitos de autor ou outras notações proprietárias dos materiais",
            'Transferir os materiais para outra pessoa ou "espelhar" os materiais noutro servidor',
          ]}
        />
        <PolicyParagraph>
          Esta licença terminará automaticamente se violar qualquer uma destas restrições e pode ser terminada pelo
          apostasdesportivaportugal.com a qualquer momento.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="3. Isenção de Responsabilidade" delay={200}>
        <PolicyParagraph>
          Os materiais no apostasdesportivaportugal.com são fornecidos numa base "como estão". O
          apostasdesportivaportugal.com não oferece garantias, expressas ou implícitas, e por este meio renuncia e nega
          todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização,
          adequação para um propósito particular, ou não violação de propriedade intelectual ou outra violação de
          direitos.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="4. Limitações" delay={300}>
        <PolicyParagraph>
          Em nenhum caso o apostasdesportivaportugal.com ou os seus fornecedores serão responsáveis por quaisquer danos
          (incluindo, sem limitação, danos por perda de dados ou lucro, ou devido a interrupção de negócios) decorrentes
          do uso ou incapacidade de usar os materiais no apostasdesportivaportugal.com, mesmo que o
          apostasdesportivaportugal.com ou um representante autorizado tenha sido notificado oralmente ou por escrito da
          possibilidade de tais danos.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="5. Precisão dos Materiais" delay={400}>
        <PolicyParagraph>
          Os materiais que aparecem no apostasdesportivaportugal.com podem incluir erros técnicos, tipográficos ou
          fotográficos. O apostasdesportivaportugal.com não garante que qualquer dos materiais no seu website seja
          preciso, completo ou atual. O apostasdesportivaportugal.com pode fazer alterações aos materiais contidos no
          seu website a qualquer momento sem aviso.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="6. Links" delay={500}>
        <PolicyParagraph>
          O apostasdesportivaportugal.com não reviu todos os sites ligados ao seu website e não é responsável pelo
          conteúdo de qualquer site ligado. A inclusão de qualquer link não implica endosso pelo
          apostasdesportivaportugal.com do site. O uso de qualquer site ligado é por conta e risco do utilizador.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="7. Restrição de Idade" delay={600}>
        <PolicyParagraph>
          O apostasdesportivaportugal.com destina-se ao uso por indivíduos com pelo menos 18 anos de idade. Ao usar este
          site, confirma que tem pelo menos 18 anos de idade. Se tem menos de 18 anos, não deve usar este website.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="8. Jogo Responsável" delay={700}>
        <PolicyParagraph>
          O apostasdesportivaportugal.com promove o jogo responsável. O jogo deve ser uma atividade de lazer agradável e
          não uma forma de ganhar dinheiro. Nunca jogue mais do que pode perder e esteja ciente dos riscos envolvidos.
          Se sente que pode ter um problema de jogo, procure ajuda de organizações como o SICAD ou a APAJO.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="9. Divulgação de Afiliação" delay={800}>
        <PolicyParagraph>
          O apostasdesportivaportugal.com pode receber compensação dos operadores de apostas aos quais nos ligamos. Esta
          compensação pode impactar como e onde os operadores aparecem no nosso site, incluindo a ordem em que aparecem.
          No entanto, isto não influencia as nossas avaliações. As nossas opiniões são nossas.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="10. Modificações" delay={900}>
        <PolicyParagraph>
          O apostasdesportivaportugal.com pode rever estes termos de serviço para o seu website a qualquer momento sem
          aviso. Ao usar este website está a concordar em ficar vinculado à versão atual destes termos de serviço.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="11. Lei Aplicável" delay={1000}>
        <PolicyParagraph>
          Estes termos e condições são regidos e interpretados de acordo com as leis de Portugal e submete-se
          irrevogavelmente à jurisdição exclusiva dos tribunais nessa localização.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Contacte-nos" delay={1100}>
        <PolicyParagraph>
          Se tiver questões sobre estes Termos e Condições, contacte-nos em:{" "}
          <PolicyLink href="mailto:legal@apostasdesportivaportugal.com">legal@apostasdesportivaportugal.com</PolicyLink>
        </PolicyParagraph>
      </PolicySection>
    </PolicyPageLayout>
  )
}
