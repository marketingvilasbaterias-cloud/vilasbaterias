-- Sample blog posts for testing
-- Run these queries in your Supabase SQL editor to populate the blog with sample content

INSERT INTO blog_posts (title, slug, excerpt, content, image_url, published) VALUES
(
  'Como saber quando trocar a bateria do carro?',
  'quando-trocar-bateria-carro',
  'Aprenda a identificar os sinais de que sua bateria automotiva precisa ser substituída e evite surpresas desagradáveis.',
  'A bateria do seu carro é essencial para o funcionamento adequado do veículo. Mas como saber quando é hora de trocá-la? Aqui estão alguns sinais importantes:\n\n1. Motor de partida lento\n2. Luzes fracas no painel\n3. Idade da bateria (geralmente 3-5 anos)\n4. Corrosão nos terminais\n\nFique atento a esses sinais e evite ficar na mão!',
  'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=800',
  true
),
(
  'Dicas de manutenção para prolongar a vida da bateria',
  'manutencao-bateria-automotiva',
  'Descubra práticas simples que podem aumentar significativamente a durabilidade da bateria do seu veículo.',
  'Manter sua bateria em bom estado não precisa ser complicado. Aqui estão algumas dicas essenciais:\n\n1. Mantenha os terminais limpos\n2. Verifique o nível de água (baterias não seladas)\n3. Evite deixar luzes acesas com motor desligado\n4. Faça revisões periódicas\n5. Proteja contra temperaturas extremas\n\nSeguindo essas dicas simples, você pode prolongar a vida útil da sua bateria em até 30%!',
  'https://images.pexels.com/photos/4488660/pexels-photo-4488660.jpeg?auto=compress&cs=tinysrgb&w=800',
  true
),
(
  'Diferenças entre baterias seladas e convencionais',
  'diferencas-baterias-seladas-convencionais',
  'Entenda as principais diferenças entre os tipos de bateria e qual é a melhor opção para o seu veículo.',
  'Existem dois tipos principais de baterias automotivas: seladas e convencionais. Cada uma tem suas vantagens:\n\nBaterias Convencionais:\n- Menor custo inicial\n- Necessitam manutenção regular\n- Possibilidade de completar água\n\nBaterias Seladas:\n- Livre de manutenção\n- Maior durabilidade\n- Melhor desempenho em temperaturas extremas\n- Investimento inicial maior\n\nNa Vila''s Baterias, ajudamos você a escolher a melhor opção para seu veículo e necessidades!',
  'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
  true
);
