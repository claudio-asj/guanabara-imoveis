import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

// Dados das categorias
const categories = [
  {
    id: "apartamentos",
    title: "Apartamentos",
    imageUrl: "https://placehold.co/600x400/020617/white?text=Apartamentos",
    gridClasses: "lg:col-span-1 lg:row-span-1", // Ocupa 1x1 no grid
  },
  {
    id: "coberturas",
    title: "Coberturas",
    imageUrl: "https://placehold.co/600x400/64748B/white?text=Coberturas",
    gridClasses: "lg:col-span-2 lg:row-span-1", // Ocupa 2x1 no grid
  },
  {
    id: "casas",
    title: "Casas",
    imageUrl: "https://placehold.co/600x400/FED7AA/black?text=Casas",
    gridClasses: "lg:col-span-1 lg:row-span-1", // Ocupa 1x1 no grid
  },
  {
    id: "residenciais",
    title: "Residenciais de Luxo",
    imageUrl: "https://placehold.co/600x800/EA580C/white?text=Luxo",
    gridClasses: "lg:col-span-1 lg:row-span-2", // Ocupa 1x2 no grid
  },
];

// Componente do Card de Categoria
type Category = {
  id: string;
  title: string;
  imageUrl: string;
  gridClasses: string;
};

const CategoryCard = ({ category }: { category: Category }) => (
  <Link
    to={`/propriedades?categoria=${category.id}`}
    className={`relative rounded-2xl overflow-hidden group h-64 lg:h-full ${category.gridClasses}`}
  >
    <img
      src={category.imageUrl}
      alt={`Imagem da categoria ${category.title}`}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white w-full flex justify-between items-end">
      <h3 className="text-xl font-bold">{category.title}</h3>
      <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-primary">
        <ArrowRight className="w-5 h-5" />
      </div>
    </div>
  </Link>
);

// Componente Principal da Seção
export default function ExploreCategories() {
  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Encontre seu Estilo de Morar
            </h2>
            <p className="text-muted-foreground mt-2">
              Descubra uma variedade de imóveis para cada momento de vida.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/propriedades">
              Ver Todas <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 h-auto lg:h-[36rem]">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
