import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#2E7D32] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo className="h-12" variant="light" />
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
                <MessageCircle className="h-5 w-5 text-[#25D366] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a
                    href="https://wa.me/5513997228309"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#25D366] transition"
                  >
                    (13) 99722-8309
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#FFF4A3] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Telefone</p>
                  <a
                    href="tel:+5513997228309"
                    className="text-gray-300 hover:text-[#FFF4A3] transition"
                  >
                    (13) 99722-8309
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#FFF4A3] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">contato@vilasbaterias.com.br</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#FFF4A3] mt-1 flex-shrink-0" />
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
                <Clock className="h-5 w-5 text-[#FFF4A3] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Segunda a Sexta</p>
                  <p className="text-gray-300">08:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-[#FFF4A3] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sábado</p>
                  <p className="text-gray-300">08:00 - 13:00</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-[#FFF4A3] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Domingo</p>
                  <p className="text-gray-300">Fechado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Vila's Baterias. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
