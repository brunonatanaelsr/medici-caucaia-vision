
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const RisksCtaSection = () => {
  const { toast } = useToast();
  const [emailSent, setEmailSent] = useState(false);

  const handleApproveClick = () => {
    // In a real application, this would send an email or trigger an API call
    setTimeout(() => {
      setEmailSent(true);
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Você receberá um email para confirmar a aprovação do projeto.",
        duration: 5000,
      });
    }, 1000);
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-medici-navy mb-6">
              Riscos & Mitigações
            </h2>
            <p className="text-gray-600 mb-8">
              Identificação proativa de riscos e estratégias para minimizar impactos
            </p>
            
            <div className="flex items-center space-x-2 mb-8">
              <div className="h-1 bg-medici-teal w-12 rounded-full"></div>
              <div className="h-1 bg-medici-coral w-20 rounded-full"></div>
              <div className="h-1 bg-gray-200 w-8 rounded-full"></div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative h-80">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-medici-teal/20 to-medici-coral/20 rounded-lg"></div>
                <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-dashed border-medici-teal/50 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-6xl">⚠️</span>
                    <p className="mt-4 text-gray-800 font-medium">
                      Prever e mitigar riscos é parte essencial do sucesso do projeto
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <Card className="border-l-4 border-l-red-500 shadow-medici">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-medici-navy mb-1">Subutilização do tomógrafo</h3>
                      <p className="text-gray-700">
                        Equipamento com alto custo fixo e depreciação rápida requer alta utilização.
                      </p>
                    </div>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                      Gravidade Alta
                    </span>
                  </div>
                  <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-medici-navy mb-2 text-sm">Estratégia de mitigação:</h4>
                    <p className="text-gray-700 text-sm">
                      Parceria com SUS para atendimento da fila de PACs fora de horário comercial, 
                      garantindo ocupação mínima de 55% da capacidade.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-yellow-500 shadow-medici">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-medici-navy mb-1">Falhas de TI</h3>
                      <p className="text-gray-700">
                        Apenas 23% da equipe treinada adequadamente em sistemas integrados.
                      </p>
                    </div>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                      Gravidade Média
                    </span>
                  </div>
                  <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-medici-navy mb-2 text-sm">Estratégia de mitigação:</h4>
                    <p className="text-gray-700 text-sm">
                      Programa de capacitação contínua com módulos semanais + suporte técnico 24/7
                      durante os primeiros 6 meses de operação.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-red-500 shadow-medici">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-medici-navy mb-1">Rotatividade médica</h3>
                      <p className="text-gray-700">
                        Dificuldade em manter especialistas devido à concorrência da capital.
                      </p>
                    </div>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                      Gravidade Alta
                    </span>
                  </div>
                  <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-medici-navy mb-2 text-sm">Estratégia de mitigação:</h4>
                    <p className="text-gray-700 text-sm">
                      Programa de stock options para médicos seniores + possibilidade de teletrabalho para laudos,
                      diminuindo necessidade de deslocamento.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-500 shadow-medici">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-medici-navy mb-1">Engarrafamento BR-020</h3>
                      <p className="text-gray-700">
                        Possíveis greves e congestionamentos afetando acesso de pacientes.
                      </p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                      Gravidade Baixa
                    </span>
                  </div>
                  <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-medici-navy mb-2 text-sm">Estratégia de mitigação:</h4>
                    <p className="text-gray-700 text-sm">
                      Serviço de coleta móvel e extensão flexível de horários em dias de pico ou eventos
                      que afetem o tráfego na rodovia.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-medici p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-medici-navy mb-4">
                Conclusão
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Caucaia oferece base populacional robusta e demanda crescente. A Medici precisará
                <span className="font-semibold text-medici-navy"> conciliar alta eficiência de custos com experiência premium</span> para vencer a concorrência.
              </p>
              <p className="text-gray-700 mb-8">
                O mix certo de <span className="text-medici-teal font-medium">tecnologia</span>, <span className="text-medici-teal font-medium">conveniência</span>, <span className="text-medici-teal font-medium">serviços de maior complexidade</span> e <span className="text-medici-teal font-medium">cultura de acolhimento</span> posicionará 
                a Medici como referência regional em diagnóstico integrado, garantindo margens saudáveis e crescimento sustentável nos próximos cinco anos.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-medici-teal/10 flex items-center justify-center text-xl text-medici-teal mr-3">
                    ✓
                  </div>
                  <span className="text-gray-800 font-medium">Viabilidade financeira validada</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-medici-teal/10 flex items-center justify-center text-xl text-medici-teal mr-3">
                    ✓
                  </div>
                  <span className="text-gray-800 font-medium">Riscos identificados e mitigados</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-medici-teal/10 flex items-center justify-center text-xl text-medici-teal mr-3">
                    ✓
                  </div>
                  <span className="text-gray-800 font-medium">Estratégia clara de diferenciação</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-medici-teal/10 flex items-center justify-center text-xl text-medici-teal mr-3">
                    ✓
                  </div>
                  <span className="text-gray-800 font-medium">Roadmap de implementação definido</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-medici-teal to-medici-navy p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                Pronto para o próximo passo?
              </h3>
              <p className="text-lg mb-6">
                Aprovar este projeto significa iniciar a jornada para trazer atendimento de saúde de qualidade para Caucaia.
              </p>
              
              {!emailSent ? (
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <h4 className="font-bold mb-2">Próximas etapas:</h4>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Formalização do investimento inicial</li>
                      <li>Definição da equipe de implementação</li>
                      <li>Contratação do projeto arquitetônico</li>
                      <li>Pedido de equipamentos principais</li>
                    </ol>
                  </div>
                  
                  <Button 
                    className="w-full bg-white text-medici-navy hover:bg-gray-100 py-6 text-lg"
                    onClick={handleApproveClick}
                  >
                    Aprovar e Avançar com o Projeto
                  </Button>
                </div>
              ) : (
                <div className="bg-white/10 p-6 rounded-lg text-center backdrop-blur-sm">
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path fillRule="evenodd" d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22.872l1.5 2.1a.75.75 0 001.164.114l3.012-2.87a.75.75 0 00-1.032-1.091l-2.447 2.329-1.026-1.44z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Solicitação enviada com sucesso!</h4>
                  <p>
                    Você receberá um e-mail para confirmar os próximos passos do projeto Medici Caucaia.
                  </p>
                </div>
              )}
              
              <p className="text-sm text-white/70 mt-4 text-center">
                Um futuro mais saudável para Caucaia começa aqui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RisksCtaSection;
