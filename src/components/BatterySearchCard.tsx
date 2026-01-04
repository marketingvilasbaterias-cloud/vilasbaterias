import { useState } from 'react';
import { Search, Battery, Car, MessageCircle } from 'lucide-react';

export default function BatterySearchCard() {
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
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] px-6 py-4">
            <div className="flex items-center justify-center space-x-3">
              <Search className="h-6 w-6 text-white" />
              <h2 className="text-2xl font-bold text-white text-center">
                Encontre a Bateria Ideal para Seu Veículo
              </h2>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-center text-gray-600 mb-6 text-lg">
              Informe o modelo do seu carro e receba atendimento personalizado via WhatsApp
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Car className="inline h-4 w-4 mr-1 text-[#2E7D32]" />
                  Marca do Veículo
                </label>
                <input
                  type="text"
                  value={vehicleBrand}
                  onChange={(e) => setVehicleBrand(e.target.value)}
                  placeholder="Ex: Volkswagen, Fiat, Chevrolet..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Battery className="inline h-4 w-4 mr-1 text-[#2E7D32]" />
                  Modelo do Veículo
                </label>
                <input
                  type="text"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  placeholder="Ex: Gol, Uno, Onix..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition"
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
    </section>
  );
}
