import { Menu, X, Clock, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const isHome = location.pathname === '/';

  return (
    <header className="fixed w-full top-0 z-50">
      <div className="bg-[#2E7D32] text-white text-base py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Seg a Sex: 8h às 18h | Sáb: 8h às 14h</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Atendimento em toda Praia Grande e Região</span>
              </div>
            </div>
            <div className="text-sm md:text-base">
              Revenda Autorizada: Moura • Heliar • Zetta
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition">
              <img
                src="/image copy.png"
                alt="Vila's Baterias"
                className="h-16"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-[#2E7D32] hover:text-[#1B5E20] transition font-semibold text-base uppercase">
                Início
              </Link>
              {isHome && (
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-[#2E7D32] hover:text-[#1B5E20] transition font-semibold text-base uppercase"
                >
                  Baterias
                </button>
              )}
              {isHome && (
                <button
                  onClick={() => scrollToSection('diferenciais')}
                  className="text-[#2E7D32] hover:text-[#1B5E20] transition font-semibold text-base uppercase"
                >
                  Serviços
                </button>
              )}
              {isHome && (
                <button
                  onClick={() => scrollToSection('consulta')}
                  className="text-[#2E7D32] hover:text-[#1B5E20] transition font-semibold text-base uppercase"
                >
                  Dúvidas
                </button>
              )}
              <Link to="/blog" className="text-[#2E7D32] hover:text-[#1B5E20] transition font-semibold text-base uppercase">
                Blog
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-[#2E7D32] font-semibold uppercase">Emergência?</div>
                <a href="tel:5513997228309" className="text-[#2E7D32] font-bold text-xl hover:text-[#1B5E20] transition">
                  (13) 99722-8309
                </a>
              </div>
              <a
                href="https://wa.me/5513997228309"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFF4A3] text-[#2E7D32] px-6 py-3 rounded-lg hover:bg-[#FFFACD] transition font-bold flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                PEDIR AGORA
              </a>
            </div>

            <button
              className="lg:hidden text-[#2E7D32]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 space-y-4 border-t border-green-400">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#2E7D32] hover:text-[#1B5E20] font-semibold"
              >
                Início
              </Link>
              {isHome && (
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left text-[#2E7D32] hover:text-[#1B5E20] font-semibold"
                >
                  Baterias
                </button>
              )}
              {isHome && (
                <button
                  onClick={() => scrollToSection('diferenciais')}
                  className="block w-full text-left text-[#2E7D32] hover:text-[#1B5E20] font-semibold"
                >
                  Serviços
                </button>
              )}
              {isHome && (
                <button
                  onClick={() => scrollToSection('consulta')}
                  className="block w-full text-left text-[#2E7D32] hover:text-[#1B5E20] font-semibold"
                >
                  Dúvidas
                </button>
              )}
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#2E7D32] hover:text-[#1B5E20] font-semibold"
              >
                Blog
              </Link>
              <a
                href="https://wa.me/5513997228309"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#FFF4A3] text-[#2E7D32] px-6 py-3 rounded-lg hover:bg-[#FFFACD] transition font-bold text-center"
              >
                PEDIR AGORA
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
