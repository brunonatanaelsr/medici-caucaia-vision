
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToViability = () => {
    document.getElementById('mercado')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-bg-container h-screen flex items-center">
      <div className="container mx-auto hero-content text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 inline-block">
            <div className="flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="bg-medici-teal text-white text-xs font-bold px-4 py-1 rounded-full">
                Análise de Viabilidade
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Medici Caucaia — Diagnóstico completo
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-200">
            Mercado pronto, proposta inovadora, retorno sustentável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToViability}
              className="bg-medici-teal hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-full transition-transform hover:scale-105"
              size="lg"
            >
              Ver Viabilidade
            </Button>
            <Button
              onClick={() => window.location.href = "#roadmap"}
              variant="outline"
              className="border-white text-white bg-medici-coral hover:bg-medici-coral/80 px-8 py-6 text-lg rounded-full"
              size="lg"
            >
              Explorar Roadmap
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
