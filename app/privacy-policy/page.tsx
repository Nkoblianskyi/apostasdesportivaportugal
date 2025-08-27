import { PolicyPageLayout } from "@/components/policy-page-layout"
import { PolicySection, PolicyParagraph, PolicyList } from "@/components/policy-content"

export default function PrivacyPolicyPage() {
  return (
    <PolicyPageLayout
      title="Política de Privacidade"
      lastUpdated="27 de Janeiro de 2025"
      heroImage="/new-stadium-background.jpg"
      heroAlt="Privacidade digital"
    >
      <PolicySection title="Introdução">
        <PolicyParagraph>
          No apostasdesportivaportugal.com, respeitamos a sua privacidade e estamos comprometidos em proteger os seus
          dados pessoais. Esta política de privacidade informá-lo-á sobre como cuidamos dos seus dados pessoais quando
          visita o nosso website e dir-lhe-á sobre os seus direitos de privacidade e como a lei o protege.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Os Dados que Recolhemos Sobre Si" delay={100}>
        <PolicyParagraph>
          Podemos recolher, usar, armazenar e transferir diferentes tipos de dados pessoais sobre si, que agrupámos da
          seguinte forma:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Dados de Identidade incluem primeiro nome, apelido, nome de utilizador ou identificador similar.",
            "Dados de Contacto incluem endereço de email e números de telefone.",
            "Dados Técnicos incluem endereço de protocolo de internet (IP), os seus dados de login, tipo e versão do navegador, definição de fuso horário e localização, tipos e versões de plug-ins do navegador, sistema operativo e plataforma, e outras tecnologias nos dispositivos que usa para aceder a este website.",
            "Dados de Uso incluem informações sobre como usa o nosso website, produtos e serviços.",
            "Dados de Marketing e Comunicações incluem as suas preferências em receber marketing de nós e dos nossos terceiros e as suas preferências de comunicação.",
          ]}
        />
      </PolicySection>

      <PolicySection title="Como Usamos os Seus Dados Pessoais" delay={200}>
        <PolicyParagraph>
          Só usaremos os seus dados pessoais quando a lei nos permitir. Mais comummente, usaremos os seus dados pessoais
          nas seguintes circunstâncias:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Onde precisamos de executar o contrato que estamos prestes a celebrar ou celebrámos consigo.",
            "Onde é necessário para os nossos interesses legítimos e os seus interesses e direitos fundamentais não se sobrepõem a esses interesses.",
            "Onde precisamos de cumprir uma obrigação legal.",
          ]}
        />
      </PolicySection>

      <PolicySection title="Propósitos para os Quais Usaremos os Seus Dados Pessoais" delay={300}>
        <PolicyParagraph>
          Definimos abaixo uma descrição de todas as formas como planeamos usar os seus dados pessoais:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Para o registar como um novo cliente",
            "Para gerir a nossa relação consigo",
            "Para permitir que participe num sorteio, competição ou complete um inquérito",
            "Para administrar e proteger o nosso negócio e este website",
            "Para entregar conteúdo relevante do website e anúncios para si",
            "Para usar análise de dados para melhorar o nosso website, produtos/serviços, marketing, relações com clientes e experiências",
          ]}
        />
      </PolicySection>

      <PolicySection title="Cookies" delay={400}>
        <PolicyParagraph>
          Pode definir o seu navegador para recusar todos ou alguns cookies do navegador, ou para alertá-lo quando os
          websites definem ou acedem a cookies. Se desativar ou recusar cookies, note que algumas partes deste website
          podem tornar-se inacessíveis ou não funcionar adequadamente. Para mais informações sobre os cookies que
          usamos, consulte a nossa Política de Cookies.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Segurança de Dados" delay={500}>
        <PolicyParagraph>
          Implementámos medidas de segurança apropriadas para prevenir que os seus dados pessoais sejam acidentalmente
          perdidos, usados ou acedidos de forma não autorizada, alterados ou divulgados. Além disso, limitamos o acesso
          aos seus dados pessoais àqueles funcionários, agentes, contratados e outros terceiros que têm uma necessidade
          comercial de saber.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Retenção de Dados" delay={600}>
        <PolicyParagraph>
          Só reteremos os seus dados pessoais pelo tempo razoavelmente necessário para cumprir os propósitos para os
          quais os recolhemos, incluindo para os propósitos de satisfazer quaisquer requisitos legais, regulamentares,
          fiscais, contabilísticos ou de relatório.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Os Seus Direitos Legais" delay={700}>
        <PolicyParagraph>
          Sob certas circunstâncias, tem direitos sob as leis de proteção de dados em relação aos seus dados pessoais,
          incluindo o direito de:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Solicitar acesso aos seus dados pessoais",
            "Solicitar correção dos seus dados pessoais",
            "Solicitar eliminação dos seus dados pessoais",
            "Objetar ao processamento dos seus dados pessoais",
            "Solicitar restrição do processamento dos seus dados pessoais",
            "Solicitar transferência dos seus dados pessoais",
            "Direito de retirar consentimento",
          ]}
        />
      </PolicySection>

      <PolicySection title="Links de Terceiros" delay={800}>
        <PolicyParagraph>
          Este website pode incluir links para websites de terceiros, plug-ins e aplicações. Clicar nesses links ou
          ativar essas conexões pode permitir que terceiros recolham ou partilhem dados sobre si. Não controlamos estes
          websites de terceiros e não somos responsáveis pelas suas declarações de privacidade.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Alterações à Política de Privacidade" delay={900}>
        <PolicyParagraph>
          Podemos atualizar a nossa política de privacidade de tempos a tempos. Notificá-lo-emos de quaisquer alterações
          publicando a nova política de privacidade nesta página e atualizando a data "Última atualização" no topo desta
          política de privacidade.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Contacte-nos" delay={1000}>
        <PolicyParagraph>
          Se tiver questões sobre esta política de privacidade ou as nossas práticas de privacidade, contacte-nos em:
          privacidade@apostasdesportivaportugal.com
        </PolicyParagraph>
      </PolicySection>
    </PolicyPageLayout>
  )
}
