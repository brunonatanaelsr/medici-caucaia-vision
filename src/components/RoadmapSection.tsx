
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TimelineItem {
  month: string;
  milestone: string;
  deliverable: string;
  desc?: string;
}

const RoadmapSection = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  
  const timelineItems: TimelineItem[] = [
    {
      month: "T-8",
      milestone: "Viabilidade & funding",
      deliverable: "Plano de negócios validado, financiamento BNDS",
      desc: "Conclusão de todos os estudos financeiros, aprovação de crédito junto ao BNDES e assinatura do contrato de financiamento."
    },
    {
      month: "T-6",
      milestone: "Obras & licenças",
      deliverable: "Projeto arquitetônico fluxo limpo-sujo",
      desc: "Aprovação do projeto pela Vigilância Sanitária. Início das obras civis com controle rigoroso de cronograma."
    },
    {
      month: "T-4",
      milestone: "Contratos fornecedores",
      deliverable: "TC/USG/auto-analizador fechados",
      desc: "Negociação finalizada com fornecedores de equipamentos chave, com planos de manutenção e suporte técnico."
    },
    {
      month: "T-3",
      milestone: "Seleção de staff",
      deliverable: "70% da equipe recrutada; onboarding cultura Medici",
      desc: "Recrutamento e seleção de profissionais administrativos e de saúde. Início dos treinamentos."
    },
    {
      month: "T-2",
      milestone: "Marketing teaser",
      deliverable: "Landing page + campanha Medici vem aí",
      desc: "Lançamento de campanha de pré-inauguração para gerar expectativa. Início do cadastro de pacientes interessados."
    },
    {
      month: "T-1",
      milestone: "Teste-piloto",
      deliverable: "300 pacientes friends-and-family; ajustes de processos",
      desc: "Operação controlada com grupo selecionado para testar todos os fluxos e sistemas."
    },
    {
      month: "D-Day",
      milestone: "Inauguração soft-opening",
      deliverable: "Day-clinic; 50% da capacidade",
      desc: "Abertura gradual com capacidade controlada, monitoramento intensivo de indicadores de satisfação."
    },
    {
      month: "T+6",
      milestone: "Break-even operacional",
      deliverable: "Ocupação 60% exames/imagem",
      desc: "Atingimento do ponto de equilíbrio operacional conforme planejado, com metas de volume sendo atingidas."
    },
    {
      month: "T+12",
      milestone: "Acreditação ONA N1",
      deliverable: "Selo de qualidade, campanha de branding",
      desc: "Certificação de qualidade que atestará os processos e a segurança do paciente, gerando diferenciação."
    },
    {
      month: "T+24",
      milestone: "Expansão telessaúde",
      deliverable: "Cobertura 10 municípios CISVALE",
      desc: "Plataforma de telemedicina própria atingindo municípios menores da região sem oferta especializada."
    },
  ];
  
  const handleItemClick = (item: TimelineItem) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

  return (
    <section id="roadmap" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medici-navy mb-4">
            Roadmap de Implantação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Do planejamento ao break-even operacional
          </p>
        </div>
        
        <div className="relative mb-20">
          {/* Desktop timeline */}
          <div className="hidden md:block">
            <div className="timeline-container">
              <div className="timeline-line"></div>
              <div className="flex justify-between">
                {timelineItems.map((item, index) => (
                  <div key={index} className="timeline-item w-1/5 flex flex-col items-center">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center z-10 cursor-pointer transition-all duration-300 ${
                        selectedItem === item 
                          ? 'bg-medici-teal text-white transform scale-110 shadow-lg' 
                          : 'bg-white border-2 border-medici-teal text-medici-teal hover:bg-medici-teal/10'
                      }`}
                      onClick={() => handleItemClick(item)}
                    >
                      <span className="font-bold text-sm">{item.month}</span>
                    </div>
                    <h3 className="text-center mt-4 text-sm font-medium text-gray-800">{item.milestone}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile timeline */}
          <div className="md:hidden space-y-6">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-start space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedItem === item ? 'bg-blue-50 shadow' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => handleItemClick(item)}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  selectedItem === item 
                    ? 'bg-medici-teal text-white' 
                    : 'bg-white border-2 border-medici-teal text-medici-teal'
                }`}>
                  <span className="font-bold text-sm">{item.month}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{item.milestone}</h3>
                  <p className="text-sm text-gray-600">{item.deliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {selectedItem && (
          <Card className="border-none shadow-medici animate-fade-in mx-auto max-w-2xl">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-medici-teal text-white flex items-center justify-center mr-4">
                  <span className="font-bold text-sm">{selectedItem.month}</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-medici-navy">{selectedItem.milestone}</h3>
                  <p className="text-gray-600">{selectedItem.deliverable}</p>
                </div>
              </div>
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{selectedItem.desc}</p>
              
              {selectedItem.month === "D-Day" && (
                <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">Momento crítico!</h4>
                  <p className="text-green-700 text-sm">
                    Esta é a data mais importante do projeto - todas as preparações anteriores 
                    serão colocadas à prova com a abertura oficial, mesmo que em capacidade controlada.
                  </p>
                </div>
              )}
              
              {selectedItem.month === "T+6" && (
                <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">Meta financeira</h4>
                  <p className="text-blue-700 text-sm">
                    Atingir o break-even operacional no sexto mês é uma meta ambiciosa mas 
                    necessária para garantir a sustentabilidade do negócio.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        <div className="mt-12 bg-white shadow-medici rounded-xl p-6">
          <h3 className="text-2xl font-bold text-medici-navy mb-4">Marcos Críticos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border-l-4 border-medici-teal bg-blue-50 rounded-r-lg">
              <h4 className="font-bold text-medici-navy mb-2">Pré-Inauguração</h4>
              <p className="text-gray-700 text-sm">
                Garantir conclusão de obras, licenciamento completo e equipe treinada antes de T-2.
              </p>
            </div>
            <div className="p-4 border-l-4 border-medici-coral bg-red-50 rounded-r-lg">
              <h4 className="font-bold text-medici-navy mb-2">Volume mínimo T+3</h4>
              <p className="text-gray-700 text-sm">
                Atingir 40% de ocupação em exames de imagem até o 3º mês de operação.
              </p>
            </div>
            <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
              <h4 className="font-bold text-medici-navy mb-2">Certificação ONA</h4>
              <p className="text-gray-700 text-sm">
                Implementar processos de qualidade desde o início para facilitar acreditação no T+12.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
