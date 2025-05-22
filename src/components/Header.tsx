
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`text-xl md:text-2xl font-bold ${isScrolled ? 'text-medici-navy' : 'text-white'}`}>
            <span className="text-medici-teal">Medici</span> Caucaia
          </h1>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6">
          {['Mercado', 'SWOT', 'PESTEL', 'Roadmap', 'Financeiro', 'Estratégias'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium text-sm hover:text-medici-teal transition-colors ${
                isScrolled ? 'text-medici-navy' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <Button
            className="bg-medici-coral text-white hover:bg-red-500 transition-colors"
            onClick={() => window.location.href = "#cta"}
          >
            Aprovar Projeto
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className={`md:hidden ${isScrolled ? 'text-medici-navy' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </Button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
            {['Mercado', 'SWOT', 'PESTEL', 'Roadmap', 'Financeiro', 'Estratégias'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-medici-navy font-medium hover:text-medici-teal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button
              className="bg-medici-coral text-white hover:bg-red-500 transition-colors"
              onClick={() => {
                window.location.href = "#cta";
                setMobileMenuOpen(false);
              }}
            >
              Aprovar Projeto
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
