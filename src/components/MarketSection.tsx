
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CountUpNumber = ({ end, duration = 2000, prefix = '', suffix = '' }: { end: number, duration?: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <div className="font-bold text-3xl md:text-4xl text-medici-navy">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

const MarketSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.getElementById('market-stats') as Element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="mercado" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medici-navy mb-4">
            Visão de Mercado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Caucaia oferece uma base populacional robusta e demanda crescente em saúde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-medici p-8">
            <h3 className="text-xl font-bold text-medici-navy mb-4">Mapa de Calor - Caucaia e Região</h3>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center p-4">
                <div className="font-semibold text-lg text-medici-navy mb-2">Região de Caucaia</div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-red-100 p-2 rounded">São Gonçalo</div>
                  <div className="bg-red-300 p-2 rounded">Caucaia</div>
                  <div className="bg-red-100 p-2 rounded">Maracanaú</div>
                  <div className="bg-yellow-100 p-2 rounded">Maranguape</div>
                  <div className="bg-yellow-200 p-2 rounded">Centro</div>
                  <div className="bg-green-100 p-2 rounded">Fortaleza</div>
                  <div className="bg-green-100 p-2 rounded">Pacatuba</div>
                  <div className="bg-yellow-100 p-2 rounded">Icaraí</div>
                  <div className="bg-green-100 p-2 rounded">Pecém</div>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              População concentrada no eixo da BR-020, com novos condomínios e crescimento industrial na região do Pecém.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-medici p-8">
            <h3 className="text-xl font-bold text-medici-navy mb-4">Evolução Demográfica</h3>
            <div className="relative h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-opacity-50 flex flex-col justify-center">
                  <div className="text-center text-gray-600">
                    <div>População (2024) vs Projeção (2025)</div>
                    <div className="text-2xl font-bold text-medici-teal mt-2">
                      376 mil → 387 mil
                    </div>
                    <div className="mt-4 text-sm">
                      <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded">
                        Crescimento 2,9%/ano
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="market-stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isVisible && (
            <>
              <Card className="border-none shadow-medici animate-count-up">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-500 mb-2">População</h3>
                  <CountUpNumber end={376000} suffix=" hab." />
                  <p className="text-sm text-gray-500 mt-2">Caucaia (2024)</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-medici animate-count-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-500 mb-2">PIB per Capita</h3>
                  <CountUpNumber end={15000} prefix="R$ " />
                  <p className="text-sm text-gray-500 mt-2">estimativa 2023</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-medici animate-count-up" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-500 mb-2">Agendamentos Mobile</h3>
                  <CountUpNumber end={84} suffix="%" />
                  <p className="text-sm text-gray-500 mt-2">via smartphone</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-medici animate-count-up" style={{ animationDelay: '0.6s' }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-500 mb-2">Cobertura SUS</h3>
                  <CountUpNumber end={58} suffix="%" />
                  <p className="text-sm text-gray-500 mt-2">da população CISVALE</p>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
