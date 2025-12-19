# Vila's Baterias

Site moderno e profissional para loja de baterias automotivas, desenvolvido com React, TypeScript, Tailwind CSS e Supabase.

## Funcionalidades

- **Homepage atrativa** com hero section e CTAs
- **Formulário de consulta** para cotação por veículo (marca, modelo e ano)
- **Seção de diferenciais** destacando qualidade, agilidade, garantia e preço
- **Blog integrado** com sistema de gerenciamento de conteúdo para SEO
- **Design responsivo** otimizado para todos os dispositivos
- **Identidade visual** seguindo o guia de marca (cores: azul #273444 e vermelho #E43338)

## Tecnologias

- React 18
- TypeScript
- Tailwind CSS
- Supabase (banco de dados)
- Vite
- Lucide React (ícones)

## Configuração

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Copie `.env.example` para `.env`
   - Adicione suas credenciais do Supabase

4. Execute o projeto:
```bash
npm run dev
```

## Estrutura do Banco de Dados

### Tabela: blog_posts
Armazena artigos do blog para ranqueamento orgânico.

### Tabela: vehicle_inquiries
Armazena consultas de clientes sobre baterias para seus veículos.

## Próximos Passos

Para produção, você pode:
- Adicionar informações de contato reais no Footer
- Criar conteúdo para o blog
- Configurar análises (Google Analytics)
- Adicionar chat online
- Integrar com sistema de pagamento
