
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-medici-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Clínica Médica Medici</h3>
            <p className="text-gray-300 mb-4">
              Diagnóstico completo, cuidado humano para toda a família.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#mercado" className="text-gray-300 hover:text-white transition-colors">Visão de Mercado</Link>
              </li>
              <li>
                <Link to="#swot" className="text-gray-300 hover:text-white transition-colors">Análise SWOT</Link>
              </li>
              <li>
                <Link to="#pestel" className="text-gray-300 hover:text-white transition-colors">PESTEL & Porter</Link>
              </li>
              <li>
                <Link to="#roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</Link>
              </li>
              <li>
                <Link to="#financeiro" className="text-gray-300 hover:text-white transition-colors">Projeção Financeira</Link>
              </li>
              <li>
                <Link to="#estratégias" className="text-gray-300 hover:text-white transition-colors">Estratégias</Link>
              </li>
              <li>
                <Link to="#cta" className="text-gray-300 hover:text-white transition-colors">Aprovar Projeto</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Clínica Médica Medici. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-300">Desenvolvido por Bruno Natanael</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
