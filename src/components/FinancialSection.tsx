
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// We'll simulate charts with styled divs for simplicity
const BarChart = ({ data }: { data: { category: string; value: number; color: string }[] }) => {
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <div className="space-y-3 py-4">
      {data.map((item, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-700">{item.category}</span>
            <span className="font-semibold text-gray-900">R$ {item.value.toLocaleString()}</span>
          </div>
          <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full" 
              style={{ 
                width: `${(item.value / maxValue) * 100}%`,
                backgroundColor: item.color
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const FinancialSection = () => {
  const [activeView, setActiveView] = useState('summary');
  
  const capexData = [
    { category: 'Infraestrutura & reformas', value: 2900, color: '#0097A7' },
    { category: 'Equipamentos de imagem', value: 4200, color: '#0097A7' },
    { category: 'Equip. laboratório + mobiliário', value: 1100, color: '#0097A7' }
  ];
  
  const opexData = [
    { category: 'Folha (40 FTE)', value: 420, color: '#FF6B6B' },
    { category: 'Consumíveis & reagentes', value: 150, color: '#FF6B6B' },
    { category: 'Marketing & TI', value: 60, color: '#FF6B6B' },
    { category: 'Outros', value: 100, color: '#FF6B6B' }
  ];
  
  const revenueData = [
    { category: 'Consultas (6.000/mês)', value: 660, color: '#4ade80' },
    { category: 'Exames de imagem', value: 220, color: '#4ade80' },
    { category: 'Laboratório', value: 70, color: '#4ade80' }
  ];

  const paybackData = [
    { year: 'Ano 1', ebitda: 2640, accumulated: -5560 },
    { year: 'Ano 2', ebitda: 2880, accumulated: -2680 },
    { year: 'Ano 3', ebitda: 3120, accumulated: 440 },
    { year: 'Ano 4', ebitda: 3360, accumulated: 3800 }
  ];

  return (
    <section id="financeiro" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medici-navy mb-4">
            Projeção Financeira
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Análise de investimento, custos operacionais e retorno esperado
          </p>
        </div>

        <Tabs defaultValue="summary" onValueChange={setActiveView} className="w-full">
          <TabsList className="w-full mb-8 grid grid-cols-3">
            <TabsTrigger value="summary" className="text-lg">Resumo</TabsTrigger>
            <TabsTrigger value="charts" className="text-lg">Gráficos</TabsTrigger>
            <TabsTrigger value="payback" className="text-lg">Payback</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="border-none shadow-medici">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-medici-navy">Capex Total</h3>
                    <Badge className="bg-medici-teal text-white">Investimento</Badge>
                  </div>
                  <div className="text-4xl font-bold text-medici-navy mb-4">
                    R$ 8.200.000
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Infraestrutura & reformas</span>
                      <span className="font-semibold">R$ 2.900.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Equipamentos de imagem</span>
                      <span className="font-semibold">R$ 4.200.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Lab + mobiliário</span>
                      <span className="font-semibold">R$ 1.100.000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-medici">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-medici-navy">Opex Mensal</h3>
                    <Badge className="bg-medici-coral text-white">Custos</Badge>
                  </div>
                  <div className="text-4xl font-bold text-medici-navy mb-4">
                    R$ 730.000
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Folha (40 FTE)</span>
                      <span className="font-semibold">R$ 420.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Consumíveis & reagentes</span>
                      <span className="font-semibold">R$ 150.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Marketing & TI</span>
                      <span className="font-semibold">R$ 60.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Outros</span>
                      <span className="font-semibold">R$ 100.000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-medici">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-medici-navy">Receita Estimada</h3>
                    <Badge className="bg-green-500 text-white">Faturamento</Badge>
                  </div>
                  <div className="text-4xl font-bold text-medici-navy mb-4">
                    R$ 950.000
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">EBITDA Mensal</span>
                        <span className="font-semibold text-gray-900">R$ 220.000</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full">
                        <div className="h-2 bg-green-500 rounded-full" style={{ width: '23%' }} />
                      </div>
                      <div className="flex justify-end mt-1">
                        <Badge className="bg-green-100 text-green-800">Margem 23%</Badge>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="text-gray-700 mb-2">Volume mensal estimado:</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-blue-50 p-2 rounded-lg text-center">
                          <div className="text-sm text-gray-600">Consultas</div>
                          <div className="font-bold text-medici-navy">6.000</div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded-lg text-center">
                          <div className="text-sm text-gray-600">Exames</div>
                          <div className="font-bold text-medici-navy">4.500</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 bg-white rounded-xl shadow-medici p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-2xl font-bold text-medici-navy mb-4 md:mb-0">
                  Indicadores Financeiros
                </h3>
                <Badge className="self-start md:self-auto bg-blue-100 text-blue-800 text-sm py-1 px-3">
                  Payback ~40-42 meses
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">TIR Projeto</div>
                  <div className="text-2xl font-bold text-medici-navy">18,5%</div>
                  <div className="text-xs text-gray-500 mt-1">10 anos</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">Ponto Equilíbrio</div>
                  <div className="text-2xl font-bold text-medici-navy">55%</div>
                  <div className="text-xs text-gray-500 mt-1">da capacidade</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">Ticket Médio</div>
                  <div className="text-2xl font-bold text-medici-navy">R$ 90,5</div>
                  <div className="text-xs text-gray-500 mt-1">consultas + exames</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">ROI 5 anos</div>
                  <div className="text-2xl font-bold text-medici-navy">196%</div>
                  <div className="text-xs text-gray-500 mt-1">acumulado</div>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-50 rounded-lg p-4">
                <div className="flex items-start">
                  <span className="text-yellow-500 text-xl mr-2">⚠️</span>
                  <div>
                    <h4 className="font-bold text-medici-navy mb-1">Sensibilidade Alta</h4>
                    <p className="text-sm text-gray-700">
                      Payback é sensível à ocupação dos equipamentos de imagem. Cada 5% abaixo da meta 
                      aumenta o período de recuperação em ~3 meses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="charts" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-none shadow-medici">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-medici-navy mb-4">
                    Capex - Investimento Inicial (R$ mil)
                  </h3>
                  <BarChart data={capexData} />
                  <div className="text-right mt-4">
                    <Badge className="bg-medici-teal text-white">
                      Total: R$ 8.200.000
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-medici">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-medici-navy mb-4">
                    Opex - Custos Mensais (R$ mil)
                  </h3>
                  <BarChart data={opexData} />
                  <div className="text-right mt-4">
                    <Badge className="bg-medici-coral text-white">
                      Total: R$ 730.000/mês
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-medici">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-medici-navy mb-4">
                    Receita Mensal Estimada (R$ mil)
                  </h3>
                  <BarChart data={revenueData} />
                  <div className="text-right mt-4">
                    <Badge className="bg-green-500 text-white">
                      Total: R$ 950.000/mês
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-medici">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-medici-navy mb-4">
                    Distribuição de Custos Operacionais
                  </h3>
                  <div className="aspect-square flex items-center justify-center p-4">
                    <div className="w-48 h-48 rounded-full border-8 border-gray-100 relative">
                      <div className="absolute inset-0 border-8 border-t-medici-coral border-r-medici-coral border-b-transparent border-l-transparent rounded-full transform rotate-45"></div>
                      <div className="absolute inset-0 border-8 border-t-transparent border-r-transparent border-b-transparent border-l-medici-teal rounded-full transform -rotate-[75deg]"></div>
                      <div className="absolute inset-0 border-8 border-t-transparent border-r-transparent border-b-medici-navy border-l-medici-navy rounded-full transform rotate-[135deg]"></div>
                      
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="font-bold text-sm text-gray-700">Custos Operacionais</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4 text-xs">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-medici-coral rounded-full mr-1"></div>
                      <span>Pessoal (57%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-medici-teal rounded-full mr-1"></div>
                      <span>Insumos (21%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-medici-navy rounded-full mr-1"></div>
                      <span>Outros (22%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="payback" className="mt-0">
            <Card className="border-none shadow-medici">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-medici-navy mb-6">
                  Análise de Payback (R$ mil)
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 text-left font-semibold text-gray-700">Período</th>
                        <th className="py-3 px-4 text-right font-semibold text-gray-700">EBITDA Anual</th>
                        <th className="py-3 px-4 text-right font-semibold text-gray-700">Fluxo Acumulado</th>
                        <th className="py-3 px-4 text-center font-semibold text-gray-700">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 text-medici-navy font-medium">Investimento</td>
                        <td className="py-3 px-4 text-right text-medici-coral font-medium">-8.200</td>
                        <td className="py-3 px-4 text-right text-medici-coral font-medium">-8.200</td>
                        <td className="py-3 px-4 text-center">
                          <Badge className="bg-red-100 text-red-800">Início</Badge>
                        </td>
                      </tr>
                      
                      {paybackData.map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4 text-medici-navy font-medium">{row.year}</td>
                          <td className="py-3 px-4 text-right font-medium text-green-600">+{row.ebitda}</td>
                          <td className={`py-3 px-4 text-right font-medium ${row.accumulated < 0 ? 'text-medici-coral' : 'text-green-600'}`}>
                            {row.accumulated > 0 ? '+' : ''}{row.accumulated}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {row.accumulated < 0 ? (
                              <Badge className="bg-yellow-100 text-yellow-800">Em progresso</Badge>
                            ) : (
                              <Badge className="bg-green-100 text-green-800">Recuperado!</Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-8 relative h-16">
                  <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
                  <div className="absolute left-0 top-0 bottom-0 bg-green-500 rounded-full" style={{ width: '76%' }}></div>
                  
                  {[0, 12, 24, 36, 40, 48].map((month, index) => (
                    <div
                      key={index}
                      className="absolute top-full mt-1 text-xs transform -translate-x-1/2"
                      style={{ left: `${(month / 48) * 100}%` }}
                    >
                      <div className={`font-medium ${month === 40 ? 'text-medici-teal' : 'text-gray-500'}`}>
                        {month}m
                      </div>
                      {month === 40 && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 -mt-16 bg-medici-teal text-white text-xs py-1 px-2 rounded">
                          Payback
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-medici-navy mb-2">Observações financeiras</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    <li>
                      Análise não considera inflação médica e potenciais reajustes de preço
                    </li>
                    <li>
                      Possível aceleração do payback com crescimento da receita via telemedicina a partir do T+24
                    </li>
                    <li>
                      Estrutura de capital considera 30% equity e 70% financiamento a 12% a.a.
                    </li>
                    <li>
                      TIR e payback sensíveis à taxa de ocupação dos equipamentos de imagem
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FinancialSection;
