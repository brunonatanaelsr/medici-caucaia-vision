
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface SwotItem {
  icon: string;
  title: string;
  description: string;
}

const SwotSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const swotData = {
    strengths: [
      {
        icon: "📍",
        title: "Localização estratégica",
        description: "Posicionada em eixo de tráfego (BR-020), permitindo fácil acesso para pacientes de toda a região."
      },
      {
        icon: "🏥",
        title: "Portfolio completo",
        description: "Integração de clínica, laboratório e diagnóstico por imagem num só local."
      },
      {
        icon: "📱",
        title: "Forte proposta digital",
        description: "Agendamento com 1 clique, app para acompanhamento de resultados e histórico médico."
      },
      {
        icon: "👨‍👩‍👧‍👦",
        title: "Ambiente patient-centric",
        description: "Sala kids, wi-fi gratuito, check-in por autoatendimento para reduzir esperas."
      }
    ],
    weaknesses: [
      {
        icon: "💰",
        title: "Intensivo em capital",
        description: "Alto investimento inicial, com payback estimado em 6-7 anos."
      },
      {
        icon: "🔄",
        title: "Complexidade operacional",
        description: "Gestão simultânea de três operações distintas: clínica, laboratório e imagem."
      },
      {
        icon: "👨‍⚕️",
        title: "Dependência de especialistas",
        description: "Escassez de médicos especialistas no interior, exigindo estratégia de atração."
      },
      {
        icon: "💸",
        title: "Precificação premium",
        description: "Posicionamento de preço pode limitar acesso das classes C-D."
      }
    ],
    opportunities: [
      {
        icon: "🏭",
        title: "Convênios empresariais",
        description: "Parcerias com ZPE do Pecém e parque industrial para exames ocupacionais."
      },
      {
        icon: "🖥️",
        title: "Telessaúde regional",
        description: "Expansão digital para cidades vizinhas sem oferta médica especializada."
      },
      {
        icon: "👴",
        title: "Envelhecimento populacional",
        description: "Aumento da demanda por check-ups e exames preventivos."
      },
      {
        icon: "🔬",
        title: "Serviços de alta complexidade",
        description: "Oferta de exames especializados ainda carentes na região (ressonância, densitometria)."
      }
    ],
    threats: [
      {
        icon: "💵",
        title: "Guerra de preços",
        description: "Concorrência acirrada de clínicas populares com preços mais baixos."
      },
      {
        icon: "📋",
        title: "Mudanças regulatórias",
        description: "Alterações súbitas nas regras da ANVISA/ANS podem impactar operações."
      },
      {
        icon: "📉",
        title: "Crises econômicas",
        description: "Redução do ticket médio em exames eletivos durante períodos de recessão."
      },
      {
        icon: "🚪",
        title: "Rotatividade médica",
        description: "Dificuldade de retenção de profissionais frente à concorrência de Fortaleza."
      }
    ]
  };

  const categoryColors = {
    strengths: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      hover: "hover:bg-green-100"
    },
    weaknesses: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-800",
      hover: "hover:bg-yellow-100"
    },
    opportunities: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      hover: "hover:bg-blue-100"
    },
    threats: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
      hover: "hover:bg-red-100"
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <section id="swot" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medici-navy mb-4">
            Análise SWOT Integrada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Avaliação estratégica dos pontos fortes, fraquezas, oportunidades e ameaças
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {Object.entries(swotData).map(([category, items], index) => (
            <div
              key={category}
              className={`cursor-pointer rounded-xl transition-all duration-300 swot-card ${categoryColors[category as keyof typeof categoryColors].bg} ${categoryColors[category as keyof typeof categoryColors].border} border-2 p-6 ${
                activeCategory === category ? 'shadow-lg transform -translate-y-1' : ''
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <h3 className={`text-2xl font-bold mb-4 flex items-center ${categoryColors[category as keyof typeof categoryColors].text}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
                {activeCategory === category && (
                  <span className="ml-2 text-sm bg-white rounded-full px-3 py-1">
                    Clique para detalhes
                  </span>
                )}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((item: SwotItem, i: number) => (
                  <div key={i} className="flex items-start">
                    <span className="mr-2 text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      {activeCategory === category && (
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-medici p-8">
          <h3 className="text-2xl font-bold text-medici-navy mb-6">Implicações Estratégicas</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-medici-teal">
                Como potencializar forças?
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Investir em campanha de marketing que destaque a experiência digital e localização estratégica</li>
                  <li>Criar pacotes integrados que aproveitem o portfolio completo de serviços</li>
                  <li>Implementar programa de fidelidade com benefícios no ecossistema Medici</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-medici-teal">
                Como minimizar fraquezas?
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Criar planos de assinatura para diluir custos fixos e gerar receita recorrente</li>
                  <li>Implementar sistema integrado de gestão para mitigar complexidade operacional</li>
                  <li>Oferecer benefícios atrativos para captação e retenção de especialistas</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-medici-teal">
                Como capturar oportunidades?
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Estabelecer departamento de vendas B2B para convênios empresariais</li>
                  <li>Desenvolver plataforma telemedicina própria para expansão regional</li>
                  <li>Criar pacotes específicos para idosos e prevenção geriátrica</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-medici-teal">
                Como mitigar ameaças?
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Diferenciar serviço pela qualidade e experiência, não pelo preço</li>
                  <li>Manter compliance ativo com monitoramento constante de mudanças regulatórias</li>
                  <li>Implementar plano de participação nos resultados para retenção médica</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SwotSection;
