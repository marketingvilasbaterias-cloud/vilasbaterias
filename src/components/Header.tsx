import { Zap, Menu, X, Clock, MapPin, Phone } from 'lucide-react';
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
      <div className="bg-[#1E3A8A] text-white text-sm py-2">
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
            <div className="text-xs md:text-sm">
              Revenda Autorizada: Moura • Heliar • Zetta
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-[#2563EB] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition">
              <div className="text-3xl font-bold text-white flex items-center">
                <span>VILA'S</span>
                <Zap className="h-8 w-8 mx-1 fill-[#FCD34D] text-[#FCD34D]" strokeWidth={1.5} />
                <span>BATERIAS</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-[#FCD34D] transition font-semibold text-sm uppercase">
                Início
              </Link>
              {isHome && (
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-white hover:text-[#FCD34D] transition font-semibold text-sm uppercase"
                >
                  Baterias
                </button>
              )}
              {isHome && (
                <button
                  onClick={() => scrollToSection('diferenciais')}
                  className="text-white hover:text-[#FCD34D] transition font-semibold text-sm uppercase"
                >
                  Serviços
                </button>
              )}
              {isHome && (
                <button
                  onClick={() => scrollToSection('consulta')}
                  className="text-white hover:text-[#FCD34D] transition font-semibold text-sm uppercase"
                >
                  Dúvidas
                </button>
              )}
              <Link to="/blog" className="text-white hover:text-[#FCD34D] transition font-semibold text-sm uppercase">
                Blog
              </Link>
              <button className="text-white hover:text-[#FCD34D] transition font-semibold text-sm uppercase border border-white px-4 py-2 rounded">
                AI EDITOR
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-[#FCD34D] font-semibold uppercase">Emergência?</div>
                <a href="tel:5513997228309" className="text-white font-bold text-lg hover:text-[#FCD34D] transition">
                  (13) 99722-8309
                </a>
              </div>
              <a
                href="https://wa.me/5513997228309"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FCD34D] text-[#1E3A8A] px-6 py-3 rounded-lg hover:bg-[#FDE047] transition font-bold flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                PEDIR AGORA
              </a>
            </div>

            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 space-y-4 border-t border-blue-400">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-[#FCD34D] font-semibold"
              >
                Início
              </Link>
              {isHome && (
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left text-white hover:text-[#FCD34D] font-semibold"
                >
                  Baterias
                </button>
              )}
              {isHome && (
                <button
                  onClick={() => scrollToSection('diferenciais')}
                  className="block w-full text-left text-white hover:text-[#FCD34D] font-semibold"
                >
                  Serviços
                </button>
              )}
              {isHome && (
                <button
                  onClick={() => scrollToSection('consulta')}
                  className="block w-full text-left text-white hover:text-[#FCD34D] font-semibold"
                >
                  Dúvidas
                </button>
              )}
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-[#FCD34D] font-semibold"
              >
                Blog
              </Link>
              <a
                href="https://wa.me/5513997228309"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#FCD34D] text-[#1E3A8A] px-6 py-3 rounded-lg hover:bg-[#FDE047] transition font-bold text-center"
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
