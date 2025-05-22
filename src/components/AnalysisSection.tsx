
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';

// We'll simulate a chart - in a real app you'd use Chart.js or another library
const RadarChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set dimensions
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 30;
    
    // Draw background circles
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * i / 5, 0, 2 * Math.PI);
      ctx.strokeStyle = '#e5e7eb';
      ctx.stroke();
    }
    
    // Draw axis lines
    const points = 5;
    const angleStep = (2 * Math.PI) / points;
    
    for (let i = 0; i < points; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = '#e5e7eb';
      ctx.stroke();
      
      // Draw labels
      const labels = ['Rivalidade', 'Novos entrantes', 'Fornecedores', 'Clientes/convênios', 'Substitutos'];
      const labelX = centerX + (radius + 20) * Math.cos(angle);
      const labelY = centerY + (radius + 20) * Math.sin(angle);
      
      ctx.font = '12px Work Sans';
      ctx.fillStyle = '#4b5563';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(labels[i], labelX, labelY);
    }
    
    // Data points (from 1 to 5)
    const data = [4, 3, 4, 4, 3];
    
    // Draw data points
    ctx.beginPath();
    for (let i = 0; i < points; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const value = data[i];
      const x = centerX + radius * (value / 5) * Math.cos(angle);
      const y = centerY + radius * (value / 5) * Math.sin(angle);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      
      // Draw data points
      ctx.fillStyle = '#0097A7';
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fill();
    }
    
    // Close the path
    ctx.closePath();
    ctx.fillStyle = 'rgba(0, 151, 167, 0.2)';
    ctx.fill();
    ctx.strokeStyle = '#0097A7';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Add a legend
    ctx.font = '12px Work Sans';
    ctx.fillStyle = '#4b5563';
    ctx.textAlign = 'left';
    ctx.fillText('1 - Baixo', 10, 20);
    ctx.fillText('5 - Alto', 10, 40);
    
  }, []);
  
  return (
    <div className="radar-chart-container">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="mx-auto"
      />
    </div>
  );
};

const AnalysisSection = () => {
  const pestelData = [
    {
      category: "Político-legal",
      icon: "📜",
      text: "Expansão de PPPs de saúde no Ceará; regulação mais exigente (RN 566 / ANS)"
    },
    {
      category: "Econômico",
      icon: "💹",
      text: "Inflação médica > inflação geral; renda média local R$ 2,2 mil"
    },
    {
      category: "Sociocultural",
      icon: "👨‍👩‍👧‍👦",
      text: "Mulheres são 56% dos usuários digitais de saúde; preferem agendamento mobile"
    },
    {
      category: "Tecnológico",
      icon: "💻",
      text: "Prontuário eletrônico em 92% dos serviços, mas só 23% da equipe treinada"
    },
    {
      category: "Ecológico",
      icon: "🌱",
      text: "Incentivos estaduais para energia solar em serviços de saúde"
    },
    {
      category: "Legal-ético",
      icon: "⚖️",
      text: "LGPD e Lei 14.510 exigem proteção de dados e consentimento em telessaúde"
    }
  ];

  const porterData = [
    {
      force: "Rivalidade entre concorrentes",
      level: "Alta",
      description: "Três concorrentes diretos + proximidade da capital regional"
    },
    {
      force: "Ameaça de novos entrantes",
      level: "Moderada",
      description: "CAPEX de imagem/laboratório é barreira de entrada significativa"
    },
    {
      force: "Poder de fornecedores",
      level: "Alto",
      description: "Concentração em equipamentos (Siemens, GE) e reagentes"
    },
    {
      force: "Poder de clientes/convênios",
      level: "Crescente",
      description: "Planos de saúde pressionando margens e exigindo descontos"
    },
    {
      force: "Ameaça de substitutos",
      level: "Média",
      description: "Telemedicina + SUS como alternativas para parte do público"
    }
  ];

  return (
    <section id="pestel" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medici-navy mb-4">
            Análise PESTEL & Porter 5 Forças
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Avaliação do ambiente externo e competitivo
          </p>
        </div>

        <Tabs defaultValue="pestel" className="w-full">
          <TabsList className="w-full mb-8 grid grid-cols-2">
            <TabsTrigger value="pestel" className="text-lg">Análise PESTEL</TabsTrigger>
            <TabsTrigger value="porter" className="text-lg">5 Forças de Porter</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pestel" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pestelData.map((item, index) => (
                <Card key={index} className="border-none shadow-medici hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <span className="text-3xl mr-3">{item.icon}</span>
                      <h3 className="text-xl font-bold text-medici-navy">{item.category}</h3>
                    </div>
                    <p className="text-gray-600">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 bg-white rounded-xl shadow-medici p-6">
              <h3 className="text-xl font-bold text-medici-navy mb-4 text-center">
                Implicações para Estratégia Medici
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-medici-navy mb-2">Oportunidades Regulatórias</h4>
                  <p className="text-sm text-gray-700">
                    Aproveitar incentivos para PPPs e energia renovável
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-medici-navy mb-2">Digitalização Acelerada</h4>
                  <p className="text-sm text-gray-700">
                    Investir em experiência mobile e agendamento digital
                  </p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-bold text-medici-navy mb-2">Foco Feminino</h4>
                  <p className="text-sm text-gray-700">
                    Desenvolver comunicação e serviços para mulheres decisoras
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="porter" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-xl shadow-medici p-6">
                <h3 className="text-xl font-bold text-medici-navy mb-4 text-center">
                  Radar das 5 Forças
                </h3>
                <RadarChart />
              </div>
              
              <div>
                {porterData.map((item, index) => (
                  <div key={index} className="mb-5 bg-white rounded-lg shadow-sm p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-medici-navy">{item.force}</h4>
                      <Badge 
                        className={`${
                          item.level === 'Alta' ? 'bg-red-100 text-red-800' : 
                          item.level === 'Moderada' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-blue-100 text-blue-800'
                        }`}>
                        {item.level}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
                
                <div className="mt-6 bg-blue-50 rounded-lg p-5">
                  <h4 className="font-bold text-medici-navy mb-2">Conclusão da Análise Porter</h4>
                  <p className="text-gray-700">
                    Ambiente competitivo desafiador exige diferenciação clara, investimento em experiência 
                    do paciente e estabelecimento de barreiras próprias através de tecnologia e qualidade 
                    percebida.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AnalysisSection;
