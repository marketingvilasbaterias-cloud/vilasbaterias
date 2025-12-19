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
    <div className="pt-20">
      <section id="home" className="relative bg-gradient-to-br from-[#273444] via-[#1a2332] to-[#0f1620] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#E43338] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#E43338] opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#E43338]">
                  <Sparkles size={20} />
                  <span className="font-semibold">Sua bateria, nosso compromisso</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    A Melhor Bateria para Seu Veículo
                  </span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Qualidade garantida, preço justo e atendimento rápido. Encontre a bateria perfeita para seu carro em minutos.
              </p>

              <ul className="space-y-3 text-lg">
                <li className="flex items-center space-x-3 text-gray-200">
                  <div className="w-2 h-2 bg-[#E43338] rounded-full"></div>
                  <span>Atendimento profissional e rápido</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-200">
                  <div className="w-2 h-2 bg-[#E43338] rounded-full"></div>
                  <span>Produtos de marcas renomadas</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-200">
                  <div className="w-2 h-2 bg-[#E43338] rounded-full"></div>
                  <span>Garantia estendida em todas as vendas</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-200">
                  <div className="w-2 h-2 bg-[#E43338] rounded-full"></div>
                  <span>Melhor custo-benefício da região</span>
                </li>
              </ul>

              <div className="flex gap-4 pt-4">
                <a href="#consulta" className="bg-[#E43338] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#c72b30] transition transform hover:scale-105 shadow-lg">
                  Consultar Preços
                </a>
                <Link to="/blog" className="border-2 border-[#E43338] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#E43338] hover:bg-opacity-10 transition transform hover:scale-105">
                  Ver Blog
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#E43338] to-[#c72b30] px-6 py-4">
                  <div className="flex items-center justify-center space-x-3">
                    <Search className="h-6 w-6 text-white" />
                    <h2 className="text-xl md:text-2xl font-bold text-white text-center">
                      Encontre a Bateria Ideal para Seu Veículo
                    </h2>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-center text-gray-600 mb-6 text-base md:text-lg">
                    Informe o modelo do seu carro e receba atendimento personalizado via WhatsApp
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Car className="inline h-4 w-4 mr-1 text-[#E43338]" />
                        Marca do Veículo
                      </label>
                      <input
                        type="text"
                        value={vehicleBrand}
                        onChange={(e) => setVehicleBrand(e.target.value)}
                        placeholder="Ex: Volkswagen, Fiat, Chevrolet..."
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E43338] focus:border-transparent transition text-gray-900"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Battery className="inline h-4 w-4 mr-1 text-[#E43338]" />
                        Modelo do Veículo
                      </label>
                      <input
                        type="text"
                        value={vehicleModel}
                        onChange={(e) => setVehicleModel(e.target.value)}
                        placeholder="Ex: Gol, Uno, Onix..."
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E43338] focus:border-transparent transition text-gray-900"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleWhatsAppContact}
                    className="w-full bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#20BA5A] transition transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3 group"
                  >
                    <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
                    <span>Consultar Preços no WhatsApp</span>
                  </button>

                  <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Atendimento rápido</span>
                    </div>
                    <span>•</span>
                    <span>Resposta em minutos</span>
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
            <h2 className="text-4xl font-bold text-[#273444] mb-4">
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
                  <h3 className="text-xl font-bold text-[#273444] mb-2">
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
                  <h3 className="text-xl font-bold text-[#273444] mb-2">
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
                  <h3 className="text-xl font-bold text-[#273444] mb-2">
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

      <section className="bg-gradient-to-r from-[#273444] to-[#1a2332] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto para Trocar sua Bateria?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Faça uma consulta rápida e gratuita. Vamos te ajudar a encontrar a melhor solução.
          </p>
          <a href="#consulta" className="bg-[#E43338] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#c72b30] transition transform hover:scale-105 inline-block shadow-lg">
            Consultar Agora
          </a>
        </div>
      </section>
    </div>
  );
}
