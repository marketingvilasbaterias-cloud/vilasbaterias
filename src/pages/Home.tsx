import { useState } from 'react';
import { Zap, Sparkles, TrendingUp, Search, Battery, Car, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import VehicleInquiryForm from '../components/VehicleInquiryForm';
import Differentials from '../components/Differentials';

export default function Home() {
  const [vehicleBrand, setVehicleBrand] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');

  const handleWhatsAppContact = () => {
    const message = vehicleBrand && vehicleModel
      ? `Olá! Gostaria de consultar preços de bateria para ${vehicleBrand} ${vehicleModel}.`
      : 'Olá! Gostaria de consultar preços de baterias.';

    const whatsappUrl = `https://wa.me/5513997228309?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-32">
      <section id="home" className="relative bg-gray-100 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="text-[#2E7D32]">PRECISA DE UMA</span><br />
                  <span className="text-[#E43338]">BATERIA NOVA?</span>
                </h1>
              </div>

              <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-2">
                <p>Não se preocupe. <span className="font-bold text-[#2E7D32]">A Vila's Baterias</span> garante o <span className="font-bold">melhor preço da região</span>. Entrega rápida e instalação grátis onde você estiver.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleWhatsAppContact}
                  className="bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#20BA5A] transition transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3 group"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>Agendar Troca Agora</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md">
                  <div className="bg-[#25D366] bg-opacity-10 p-2 rounded">
                    <TrendingUp className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <span className="font-bold text-[#2E7D32]">Melhor Preço Garantido</span>
                </div>
                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md">
                  <div className="bg-[#E43338] bg-opacity-10 p-2 rounded">
                    <Sparkles className="h-6 w-6 text-[#E43338]" />
                  </div>
                  <span className="font-bold text-[#2E7D32]">Garantia Nacional</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-[#E43338] px-6 py-4">
                  <div className="flex items-center justify-center space-x-3">
                    <Search className="h-6 w-6 text-white" />
                    <h2 className="text-xl md:text-2xl font-bold text-white text-center">
                      ENCONTRE SUA BATERIA
                    </h2>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-[#2E7D32] mb-2">
                        Qual a marca do seu carro?
                      </label>
                      <select
                        value={vehicleBrand}
                        onChange={(e) => setVehicleBrand(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E43338] focus:border-transparent transition text-gray-900 bg-white"
                      >
                        <option value="">Selecione a marca...</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Fiat">Fiat</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Ford">Ford</option>
                        <option value="Honda">Honda</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Renault">Renault</option>
                        <option value="Jeep">Jeep</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#2E7D32] mb-2">
                        Qual o modelo?
                      </label>
                      <input
                        type="text"
                        value={vehicleModel}
                        onChange={(e) => setVehicleModel(e.target.value)}
                        placeholder="Ex: Onix, Gol, HB20..."
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E43338] focus:border-transparent transition text-gray-900"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleWhatsAppContact}
                    className="w-full bg-[#FFF4A3] text-[#2E7D32] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#FFFACD] transition transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>VER PREÇO E MODELO</span>
                    <span>→</span>
                  </button>

                  <div className="mt-4 text-center text-sm text-gray-500">
                    <MessageCircle className="h-4 w-4 inline mr-1" />
                    Orçamento via WhatsApp sem compromisso
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#E43338] to-[#c72b30] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+10 Anos</div>
              <p className="text-lg text-gray-100">No mercado de baterias automotivas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+5.000</div>
              <p className="text-lg text-gray-100">Clientes satisfeitos na região</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-lg text-gray-100">Garantia de qualidade</p>
            </div>
          </div>
        </div>
      </section>

      <VehicleInquiryForm />

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E43338] bg-opacity-10 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-[#E43338]" />
            </div>
            <h2 className="text-4xl font-bold text-[#2E7D32] mb-4">
              Por Que Somos Líderes
            </h2>
            <p className="text-xl text-gray-600">
              Confiança, qualidade e comprometimento com você
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#E43338] text-white">
                    <Zap size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E7D32] mb-2">
                    Instalação Express
                  </h3>
                  <p className="text-gray-600">
                    Troque sua bateria em poucos minutos sem sair do conforto de casa. Agendamento fácil e rápido.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#E43338] text-white">
                    <Sparkles size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E7D32] mb-2">
                    Produtos Premium
                  </h3>
                  <p className="text-gray-600">
                    Selecionamos as melhores marcas do mercado com tecnologia avançada e durabilidade comprovada.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#E43338] text-white">
                    <TrendingUp size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E7D32] mb-2">
                    Melhor Preço Garantido
                  </h3>
                  <p className="text-gray-600">
                    Comparamos com a concorrência e oferecemos o melhor custo-benefício sem comprometer a qualidade.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4488660/pexels-photo-4488660.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profissional instalando bateria"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Differentials />

      <section className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto para Trocar sua Bateria?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Faça uma consulta rápida e gratuita. Vamos te ajudar a encontrar a melhor solução.
          </p>
          <a href="#home" className="bg-[#FFF4A3] text-[#2E7D32] px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#FFFACD] transition transform hover:scale-105 inline-block shadow-lg">
            Consultar Agora
          </a>
        </div>
      </section>
    </div>
  );
}
