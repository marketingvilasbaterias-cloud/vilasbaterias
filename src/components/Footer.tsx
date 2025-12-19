import { Battery, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#273444] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Battery className="h-8 w-8 text-[#E43338]" />
              <div className="text-2xl font-bold">
                <span className="text-white">VILA'S</span>
                <span className="text-[#E43338]">BATERIAS</span>
              </div>
            </div>
            <p className="text-gray-300">
              Há anos fornecendo as melhores soluções em baterias automotivas
              com qualidade, agilidade e o melhor preço da região.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#E43338] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Telefone</p>
                  <p className="text-gray-300">(00) 0000-0000</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#E43338] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">contato@vilasbaterias.com.br</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#E43338] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Endereço</p>
                  <p className="text-gray-300">
                    Rua Exemplo, 123 - Centro
                    <br />
                    Sua Cidade - Estado
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-[#E43338] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Segunda a Sexta</p>
                  <p className="text-gray-300">08:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-[#E43338] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sábado</p>
                  <p className="text-gray-300">08:00 - 13:00</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-[#E43338] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Domingo</p>
                  <p className="text-gray-300">Fechado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Vila's Baterias. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
