import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StrategySection = () => {
  return (
    <section id="estrategias" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medici-navy mb-4">
            Estratégia Recomendada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plano de ação para implantar e desenvolver a Clínica Médica Medici em Caucaia
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-medici p-8 mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-medici-teal/10 mb-4">
              <span className="text-2xl text-medici-teal">💡</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-medici-navy">Proposta de Valor</h3>
            <div className="h-1 w-24 bg-medici-teal mx-auto mt-4 mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl font-medium text-medici-navy max-w-3xl mx-auto">
              "Diagnóstico completo em 90 min, cuidado humano para toda a família."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 mb-4">
                  ⚡
                </div>
                <h4 className="text-lg font-bold text-medici-navy mb-3">Rapidez</h4>
                <p className="text-gray-700">
                  Resultado laboratorial básico em até 2h; imagem liberada online em 4h.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-50 text-green-500 mb-4">
                  🚗
                </div>
                <h4 className="text-lg font-bold text-medici-navy mb-3">Conveniência</h4>
                <p className="text-gray-700">
                  Estacionamento, coleta domiciliar, app multicanal para gerenciar saúde.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-50 text-purple-500 mb-4">
                  🏆
                </div>
                <h4 className="text-lg font-bold text-medici-navy mb-3">Qualidade</h4>
                <p className="text-gray-700">
                  Acreditação ONA em 24 meses; telelaudo duplo-cheque por radiologistas de referência.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="segments" className="w-full">
          <TabsList className="w-full mb-8 grid grid-cols-1 sm:grid-cols-3">
            <TabsTrigger value="segments">Segmentos & Mix</TabsTrigger>
            <TabsTrigger value="marketing">Marketing & Relacionamento</TabsTrigger>
            <TabsTrigger value="operations">Operações & Tecnologia</TabsTrigger>
          </TabsList>
          
          <TabsContent value="segments" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-medici-navy mb-6">Segmentos Prioritários</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center text-2xl mr-4">
                      👩‍👧
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-medici-navy mb-1">Mulheres 25-55 anos</h4>
                      <p className="text-gray-700">
                        Decisoras de saúde familiar, buscam praticidade e cuidado integrado para toda família.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-2xl mr-4">
                      🏭
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-medici-navy mb-1">Empresas B2B</h4>
                      <p className="text-gray-700">
                        Indústrias locais (exames admissionais, periódicos); convênios regionais.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center text-2xl mr-4">
                      👨‍⚕️
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-medici-navy mb-1">Médicos Parceiros</h4>
                      <p className="text-gray-700">
                        Clínicos e especialistas da região que precisam de serviços diagnósticos confiáveis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-medici-navy mb-6">Mix de Serviços</h3>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <span className="font-bold text-medici-teal text-lg mr-3">01</span>
                      <h4 className="font-bold text-medici-navy">Serviços âncora (ticket alto)</h4>
                    </div>
                    <ul className="mt-2 space-y-2 pl-8">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-medici-teal rounded-full mr-2"></span>
                        <span>Ressonância magnética</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-medici-teal rounded-full mr-2"></span>
                        <span>Tomografia multislice</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-medici-teal rounded-full mr-2"></span>
                        <span>Cardiologia diagnóstica (MAPA, Holter)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <span className="font-bold text-medici-coral text-lg mr-3">02</span>
                      <h4 className="font-bold text-medici-navy">Serviços fluxo (ticket baixo)</h4>
                    </div>
                    <ul className="mt-2 space-y-2 pl-8">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-medici-coral rounded-full mr-2"></span>
                        <span>Consultas generalistas</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-medici-coral rounded-full mr-2"></span>
                        <span>Ultrassonografia obstétrica</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-medici-coral rounded-full mr-2"></span>
                        <span>Análises clínicas de rotina</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <span className="font-bold text-green-500 text-lg mr-3">03</span>
                      <h4 className="font-bold text-medici-navy">Serviços de assinatura</h4>
                    </div>
                    <ul className="mt-2 space-y-2 pl-8">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span>Medici Prime: assinatura mensal com benefícios</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span>Pacotes corporativos para empresas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="marketing" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-medici">
                <CardContent className="p-6">
                  <div className="bg-medici-teal/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    🔍
                  </div>
                  <h3 className="text-xl font-bold text-medici-navy mb-4">Funil Digital</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-medici-teal text-white flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                      <span className="text-gray-700">Google Ads "clínica Caucaia"; SEO com landing pages de sintomas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-medici-teal text-white flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                      <span className="text-gray-700">Retargeting para visitantes do site que não agendaram</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-medici-teal text-white flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                      <span className="text-gray-700">Chat-bot WhatsApp 24h para orientação e agendamento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-medici-teal text-white flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                      <span className="text-gray-700">Reativação via e-mail/SMS para pacientes inativos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-medici">
                <CardContent className="p-6">
                  <div className="bg-medici-teal/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    👨‍👩‍👧‍👦
                  </div>
                  <h3 className="text-xl font-bold text-medici-navy mb-4">Comunidade</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-medici-coral text-white flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                      <span className="text-gray-700">Ações de prevenção em praças e escolas de Caucaia</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-medici-coral text-white flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                      <span className="text-gray-700">Lives sobre saúde da mulher com influenciadores locais</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-medici-coral text-white flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                      <span className="text-gray-700">Parceria com associações de bairro para ações de saúde</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-medici-coral text-white flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                      <span className="text-gray-700">Grupo de apoio a gestantes e mães de primeira viagem</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-medici">
                <CardContent className="p-6">
                  <div className="bg-medici-teal/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    🔄
                  </div>
                  <h3 className="text-xl font-bold text-medici-navy mb-4">Programa Medici Prime</h3>
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-medici-navy mb-2">Assinatura mensal</h4>
                    <ul className="pl-5 list-disc space-y-1 text-gray-700 text-sm">
                      <li>2 consultas incluídas</li>
                      <li>20% off em exames</li>
                      <li>Telemedicina ilimitada</li>
                      <li>Coleta domiciliar 1x/mês</li>
                      <li>Prioridade de agendamento</li>
                    </ul>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Modelo de recorrência permite prever receita e gerar fidelização.
                    Meta: 2.000 assinantes em 18 meses.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 bg-white rounded-xl shadow-medici p-8">
              <h3 className="text-2xl font-bold text-medici-navy mb-4">
                Customer Journey
              </h3>
              <div className="relative py-8">
                <div className="absolute h-1 bg-gray-200 top-16 left-0 right-0 z-0"></div>
                <div className="relative z-10 flex justify-between">
                  {['Awarness', 'Consideração', 'Decisão', 'Experiência', 'Fidelização'].map((stage, index) => (
                    <div key={index} className="flex flex-col items-center w-1/5">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        index <= 2 ? 'bg-medici-teal text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="text-sm text-center mt-2 font-medium">{stage}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 grid grid-cols-5 gap-2 text-xs text-center">
                  <div className="px-1">
                    <span className="block text-medici-teal font-medium">Google Ads</span>
                    <span className="block text-medici-teal font-medium">Instagram</span>
                  </div>
                  <div className="px-1">
                    <span className="block text-medici-teal font-medium">Site responsivo</span>
                    <span className="block text-medici-teal font-medium">WhatsApp</span>
                  </div>
                  <div className="px-1">
                    <span className="block text-medici-teal font-medium">Agendamento online</span>
                    <span className="block text-medici-teal font-medium">Call center</span>
                  </div>
                  <div className="px-1">
                    <span className="block text-gray-400">Check-in digital</span>
                    <span className="block text-gray-400">Resultados app</span>
                  </div>
                  <div className="px-1">
                    <span className="block text-gray-400">E-mail follow-up</span>
                    <span className="block text-gray-400">Medici Prime</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="operations" className="mt-0">
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl overflow-hidden shadow-medici">
                  <div className="bg-medici-teal text-white p-4">
                    <h3 className="text-xl font-bold">Sistemas Integrados</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      HIS + LIS + RIS integrados na nuvem, permitindo acesso unificado a todas as 
                      informações do paciente.
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Retrabalho de cadastro</span>
                      <span className="text-medici-teal font-bold">0%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div className="h-2 bg-medici-teal rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-medici-navy flex-shrink-0"></div>
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <span className="text-sm">API open-health</span>
                            <span className="text-sm font-medium text-gray-700">Q3 2025</span>
                          </div>
                          <div className="bg-gray-100 h-1 w-full mt-1">
                            <div className="bg-medici-navy h-1 w-1/4"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-medici-navy flex-shrink-0"></div>
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <span className="text-sm">App paciente</span>
                            <span className="text-sm font-medium text-gray-700">Q2 2025</span>
                          </div>
                          <div className="bg-gray-100 h-1 w-full mt-1">
                            <div className="bg-medici-navy h-1 w-1/2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-medici">
                  <div className="bg-medici-coral text-white p-4">
                    <h3 className="text-xl font-bold">Processos Lean</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Mapeamento do fluxo do paciente para eliminação de gargalos e esperas desnecessárias.
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Tempo porta-porta</span>
                      <span className="text-medici-coral font-bold">≤ 90 min</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div className="h-2 bg-medici-coral rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-2">
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-medium text-medici-navy mb-1">Lean Kanban</h4>
                        <p className="text-xs text-gray-600">Gestão visual do fluxo de atendimento</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-medium text-medici-navy mb-1">No-Wait Zones</h4>
                        <p className="text-xs text-gray-600">Áreas sem espera para pacientes</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-medium text-medici-navy mb-1">Células Lab</h4>
                        <p className="text-xs text-gray-600">Setorização por tipo de exame</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-medium text-medici-navy mb-1">Gemba Walks</h4>
                        <p className="text-xs text-gray-600">Gestores no local de trabalho</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl overflow-hidden shadow-medici">
                  <div className="bg-green-500 text-white p-4">
                    <h3 className="text-xl font-bold">Recursos Humanos</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Participação nos resultados e bolsas de estudo para qualificação contínua.
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Rotatividade médica</span>
                      <span className="text-green-600 font-bold">< 10%/ano</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <div className="mt-6">
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-2">Equipe</th>
                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-2">FTE</th>
                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-2">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="py-2 text-sm text-gray-800">Médicos</td>
                            <td className="py-2 text-sm text-gray-600">12</td>
                            <td className="py-2 text-sm">
                              <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">80% contratados</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 text-sm text-gray-800">Enfermagem</td>
                            <td className="py-2 text-sm text-gray-600">18</td>
                            <td className="py-2 text-sm">
                              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">100% contratados</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 text-sm text-gray-800">Administrativo</td>
                            <td className="py-2 text-sm text-gray-600">10</td>
                            <td className="py-2 text-sm">
                              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">100% contratados</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-medici">
                  <div className="bg-blue-500 text-white p-4">
                    <h3 className="text-xl font-bold">ESG</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Painéis fotovoltaicos 50 kWp, descarte certificado de reagentes e redução de plásticos.
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Redução custo energia</span>
                      <span className="text-blue-600 font-bold">12%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{ width: '12%' }}></div>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-start mb-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-lg mr-3">
                          🌱
                        </div>
                        <div>
                          <h4 className="font-medium text-medici-navy">Certificação Sustentabilidade</h4>
                          <p className="text-xs text-gray-600 mt-1">
                            Meta: obter certificação de clínica sustentável até 2026
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-lg mr-3">
                          📊
                        </div>
                        <div>
                          <h4 className="font-medium text-medici-navy">Relatório Impacto Social</h4>
                          <p className="text-xs text-gray-600 mt-1">
                            Publicação anual de métricas de impacto na comunidade
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default StrategySection;
