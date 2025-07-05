import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Corretores Especialistas",
      description: "Uma equipe que conhece o Rio como ninguém para te guiar.",
    },
    {
      title: "Imóveis Verificados",
      description: "Só trabalhamos com imóveis de procedência e alta qualidade.",
    },
    {
      title: "Atendimento Personalizado",
      description: "Soluções sob medida para o seu momento de vida.",
    },
    {
      title: "Visão de Mercado",
      description: "Análises e dados para você fazer sempre o melhor negócio.",
    },
  ];

  return (
    <section className="bg-foreground text-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna de Imagens (aparece primeiro no mobile) */}
          <div className="grid grid-cols-2 gap-4 md:order-last">
            <div className="col-span-2 md:col-span-1">
              <img
                src="https://placehold.co/400x600/020617/white?text=Corretor"
                alt="Corretor apresentando uma maquete de casa"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
              <img
                src="https://placehold.co/400x284/64748B/white?text=Reunião"
                alt="Dois homens em uma reunião de negócios"
                className="rounded-2xl w-full h-full object-cover"
              />
              <img
                src="https://placehold.co/400x284/EA580C/white?text=Aperto+de+mão"
                alt="Aperto de mãos fechando negócio"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Coluna de Texto */}
          <div className="md:order-first">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a gente?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Nosso compromisso é oferecer um serviço de excelência e um
              conhecimento sem igual do mercado imobiliário do Rio. Nossos
              diferenciais são pensados para garantir uma experiência tranquila,
              sem estresse e vantajosa, seja para comprar, vender ou investir.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Button size="lg">
              Saiba Mais <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
