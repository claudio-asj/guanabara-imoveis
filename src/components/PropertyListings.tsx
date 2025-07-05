import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { MapPin, BedDouble, Bath, Square, CheckCircle } from "lucide-react";

// Definindo a interface para a estrutura de um imóvel
interface Imovel {
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

// Objeto de dados dos imóveis com a tipagem correta
const imoveisMock: Imovel[] = [
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

// Definindo as props do componente PropertyCard
interface PropertyCardProps {
  property: Imovel;
  onSelectProperty: (property: Imovel) => void;
}

// Componente do Card de Imóvel com tipagem
function PropertyCard({ property, onSelectProperty }: PropertyCardProps) {
  const formatPrice = (price: number, type: "comprar" | "alugar" | "vender") => {
    if (type === "alugar") {
      return `R$ ${price.toLocaleString("pt-BR")}/mês`;
    }
    return `R$ ${price.toLocaleString("pt-BR")}`;
  };

  return (
    <Card className="overflow-hidden border-0 max-w-xs shadow-none pt-0 rounded-none hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={property.imagemPrincipal}
          alt={property.titulo}
          className="w-full h-56 object-cover rounded-xl"
        />
        <Badge
          className="absolute top-4 right-4"
          variant={property.tipoDeTransacao === "comprar" ? "default" : "secondary"}
        >
          {property.tipoDeTransacao === "comprar" ? "À Venda" : "Para Alugar"}
        </Badge>
      </div>
      <CardContent className="px-4">
        <h3 className="text-lg font-bold truncate">{property.titulo}</h3>
        <p className="text-sm text-muted-foreground flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {property.bairro.charAt(0).toUpperCase() + property.bairro.slice(1).replace("-", " ")}
        </p>
        <div className="flex justify-between text-sm text-muted-foreground mt-4 pt-4">
          <span className="flex items-center gap-1">
            <BedDouble className="w-4 h-4" /> {property.quartos} Quartos
          </span>
          <span className="flex items-center gap-1">
            <Bath className="w-4 h-4" /> {property.banheiros} Banheiros
          </span>
          <span className="flex items-center gap-1">
            <Square className="w-4 h-4" /> {property.area} m²
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold text-primary">
            {formatPrice(property.preco, property.tipoDeTransacao)}
          </p>
          <Button onClick={() => onSelectProperty(property)}>Ver Detalhes</Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Definindo as props do componente principal
interface PropertyListingsProps {
  filters: {
    transactionType: string;
    location: string;
    propertyType: string;
    priceRange: string;
  };
}

// Componente principal que renderiza a lista e o dialog
export default function PropertyListings({ filters }: PropertyListingsProps) {
  const [filteredProperties, setFilteredProperties] = useState<Imovel[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Imovel | null>(null);

  useEffect(() => {
    let results = imoveisMock;

    // Lógica de filtragem
    if (filters.transactionType) {
      results = results.filter(p => p.tipoDeTransacao === filters.transactionType);
    }
    if (filters.location) {
      results = results.filter(p => p.bairro === filters.location);
    }
    if (filters.propertyType) {
      results = results.filter(p => p.tipoDeImovel === filters.propertyType);
    }
    // Adicione a lógica de preço se necessário
    
    setFilteredProperties(results);
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">Imóveis em Destaque</h2>
      <p className="text-muted-foreground text-center mb-8">
        Confira as melhores oportunidades que separamos para você.
      </p>

      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelectProperty={setSelectedProperty}
            />
          ))}
        </div>
      ) : (
         <p className="text-center text-muted-foreground mt-16">Nenhum imóvel encontrado com os filtros selecionados. Tente outra busca!</p>
      )}

      {/* Dialog para exibir os detalhes */}
      <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProperty && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProperty.titulo}</DialogTitle>
                <DialogDescription className="flex items-center pt-1">
                   <MapPin className="w-4 h-4 mr-1" />
                   {selectedProperty.bairro.charAt(0).toUpperCase() + selectedProperty.bairro.slice(1).replace("-", " ")}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 max-h-[70vh] overflow-y-auto pr-4">
                {/* Galeria de Fotos */}
                <div className="flex flex-col gap-4">
                  <img src={selectedProperty.imagemPrincipal} alt="Foto principal" className="rounded-lg object-cover w-full h-64" />
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProperty.galeriaDeFotos.map((foto: string, index: number) => (
                       <img key={index} src={foto} alt={`Foto ${index + 1}`} className="rounded-lg object-cover w-full h-32" />
                    ))}
                  </div>
                </div>
                {/* Informações */}
                <div>
                  <h4 className="font-semibold text-lg mb-2">Descrição</h4>
                  <p className="text-sm text-muted-foreground mb-4">{selectedProperty.descricao}</p>
                  
                  <h4 className="font-semibold text-lg mb-3">Detalhes do Imóvel</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t border-b py-3 mb-4">
                      <p><strong className="font-medium">Preço:</strong> {selectedProperty.preco.toLocaleString("pt-BR")}</p>
                      <p><strong className="font-medium">Tipo:</strong> {selectedProperty.tipoDeImovel}</p>
                      <p><strong className="font-medium">Quartos:</strong> {selectedProperty.quartos}</p>
                      <p><strong className="font-medium">Banheiros:</strong> {selectedProperty.banheiros}</p>
                      <p><strong className="font-medium">Área:</strong> {selectedProperty.area} m²</p>
                  </div>

                  <h4 className="font-semibold text-lg mb-2">Comodidades</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {selectedProperty.comodidades.map((item: string) => (
                      <li key={item} className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={() => setSelectedProperty(null)}>Fechar</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
