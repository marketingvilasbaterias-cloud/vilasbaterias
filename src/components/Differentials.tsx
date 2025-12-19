import { Clock, Shield, Award, DollarSign } from 'lucide-react';

export default function Differentials() {
  const features = [
    {
      icon: Clock,
      title: 'Agilidade no Atendimento',
      description:
        'Atendimento rápido e eficiente. Instalação expressa para você voltar à estrada o quanto antes.',
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description:
        'Trabalhamos apenas com as melhores marcas do mercado. Produtos testados e aprovados.',
    },
    {
      icon: Shield,
      title: 'Garantia Estendida',
      description:
        'Todas as nossas baterias contam com garantia estendida para sua tranquilidade.',
    },
    {
      icon: DollarSign,
      title: 'Melhor Preço da Região',
      description:
        'Preços competitivos sem abrir mão da qualidade. O melhor custo-benefício você encontra aqui.',
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#273444] mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-xl text-gray-600">
            Por que escolher a Vila's Baterias?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E43338] bg-opacity-10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-[#E43338]" />
              </div>
              <h3 className="text-xl font-bold text-[#273444] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
