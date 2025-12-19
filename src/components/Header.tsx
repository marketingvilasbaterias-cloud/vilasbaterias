import { Battery, Menu, X } from 'lucide-react';
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
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition">
            <Battery className="h-8 w-8 text-[#E43338]" />
            <div className="text-2xl font-bold">
              <span className="text-[#273444]">VILA'S</span>
              <span className="text-[#E43338]">BATERIAS</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#E43338] transition font-medium">
              Início
            </Link>
            {isHome && (
              <button
                onClick={() => scrollToSection('consulta')}
                className="text-gray-700 hover:text-[#E43338] transition font-medium"
              >
                Consultar
              </button>
            )}
            {isHome && (
              <button
                onClick={() => scrollToSection('diferenciais')}
                className="text-gray-700 hover:text-[#E43338] transition font-medium"
              >
                Diferenciais
              </button>
            )}
            <Link to="/blog" className="text-gray-700 hover:text-[#E43338] transition font-medium">
              Blog
            </Link>
            {isHome && (
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-[#E43338] text-white px-6 py-2 rounded-lg hover:bg-[#c72b30] transition font-medium"
              >
                Contato
              </button>
            )}
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-[#E43338] font-medium"
            >
              Início
            </Link>
            {isHome && (
              <button
                onClick={() => scrollToSection('consulta')}
                className="block w-full text-left text-gray-700 hover:text-[#E43338] font-medium"
              >
                Consultar
              </button>
            )}
            {isHome && (
              <button
                onClick={() => scrollToSection('diferenciais')}
                className="block w-full text-left text-gray-700 hover:text-[#E43338] font-medium"
              >
                Diferenciais
              </button>
            )}
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-[#E43338] font-medium"
            >
              Blog
            </Link>
            {isHome && (
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-gray-700 hover:text-[#E43338] font-medium"
              >
                Contato
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
