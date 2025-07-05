// Definindo o tipo para um único imóvel
export interface Imovel {
  id: number;
  titulo: string;
  bairro: string;
  tipoDeTransacao: "comprar" | "alugar" | "vender";
  tipoDeImovel: "cobertura" | "apartamento" | "casa" | "studio";
  quartos: number;
  banheiros: number;
  area: number;
  preco: number;
  imagemPrincipal: string;
  galeriaDeFotos: string[];
  descricao: string;
  comodidades: string[];
}

// Exportando o array de imóveis com a tipagem aplicada
export const imoveis: Imovel[] = [
  {
    id: 1,
    titulo: "Cobertura Duplex com Vista Mar",
    bairro: "ipanema",
    tipoDeTransacao: "comprar",
    tipoDeImovel: "cobertura",
    quartos: 4,
    banheiros: 5,
    area: 320,
    preco: 7500000,
    imagemPrincipal: "https://placehold.co/600x400/EA580C/white?text=Cobertura+Ipanema",
    galeriaDeFotos: [
      "https://placehold.co/800x600/64748B/white?text=Sala+de+Estar",
      "https://placehold.co/800x600/020617/white?text=Piscina",
      "https://placehold.co/800x600/FED7AA/black?text=Suíte+Master",
      "https://placehold.co/800x600/EEF2F6/black?text=Cozinha",
    ],
    descricao: "Uma espetacular cobertura duplex em Ipanema, oferecendo vistas panorâmicas para o mar e para o Morro Dois Irmãos. Totalmente reformada com acabamentos de luxo, piscina privativa e área gourmet. Perfeita para quem busca exclusividade e o melhor do estilo de vida carioca.",
    comodidades: ["Piscina Privativa", "Churrasqueira", "Vista Mar", "Portaria 24h", "Ar Condicionado Central"],
  },
  {
    id: 2,
    titulo: "Apartamento Moderno na Barra",
    bairro: "barra-da-tijuca",
    tipoDeTransacao: "alugar",
    tipoDeImovel: "apartamento",
    quartos: 3,
    banheiros: 3,
    area: 150,
    preco: 8500,
    imagemPrincipal: "https://placehold.co/600x400/64748B/white?text=Apto+Barra",
    galeriaDeFotos: [
      "https://placehold.co/800x600/EA580C/white?text=Varanda+Gourmet",
      "https://placehold.co/800x600/020617/white?text=Living",
    ],
    descricao: "Apartamento amplo e arejado em condomínio de alto padrão na Barra da Tijuca. Com varanda gourmet, vista para a lagoa e infraestrutura completa de lazer, incluindo academia, piscina e quadras esportivas.",
    comodidades: ["Academia", "Piscina", "Varanda Gourmet", "Segurança 24h"],
  },
  {
    id: 3,
    titulo: "Casa de Condomínio no Jardim Botânico",
    bairro: "jardim-botanico",
    tipoDeTransacao: "comprar",
    tipoDeImovel: "casa",
    quartos: 5,
    banheiros: 6,
    area: 500,
    preco: 9800000,
    imagemPrincipal: "https://placehold.co/600x400/020617/white?text=Casa+JB",
     galeriaDeFotos: [
      "https://placehold.co/800x600/EA580C/white?text=Jardim",
      "https://placehold.co/800x600/64748B/white?text=Sala+de+Jantar",
      "https://placehold.co/800x600/FED7AA/black?text=Área+Externa",
    ],
    descricao: "Casa espetacular cercada pelo verde do Jardim Botânico. Projeto arquitetônico moderno, com integração total aos jardins, piscina com borda infinita e muito sossego. Um refúgio de luxo e tranquilidade no coração da Zona Sul.",
    comodidades: ["Piscina", "Jardim", "Sauna", "Espaço Gourmet", "Lareira"],
  },
  {
    id: 4,
    titulo: "Studio Charmoso em Copacabana",
    bairro: "copacabana",
    tipoDeTransacao: "alugar",
    tipoDeImovel: "studio",
    quartos: 1,
    banheiros: 1,
    area: 45,
    preco: 3500,
    imagemPrincipal: "https://placehold.co/600x400/FED7AA/black?text=Studio+Copa",
    galeriaDeFotos: [
      "https://placehold.co/800x600/EA580C/white?text=Vista+Interna",
      "https://placehold.co/800x600/64748B/white?text=Cozinha+Integrada",
    ],
    descricao: "Studio totalmente reformado e mobiliado a duas quadras da praia de Copacabana. Ideal para quem busca praticidade e uma localização privilegiada, perto de metrô, comércios e restaurantes.",
    comodidades: ["Mobiliado", "Ar Condicionado", "Portaria 24h", "Próximo ao Metrô"],
  },
];
