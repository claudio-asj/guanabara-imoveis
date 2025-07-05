import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Componente para o item da lista numerada
type StepItemProps = {
  number: number;
  title: string;
  description: string;
};

const StepItem = ({ number, title, description }: StepItemProps) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mr-4">
      {number}
    </div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </li>
);

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Busque seu Imóvel",
      description: "Acesso a imóveis exclusivos que combinam com você.",
    },
    {
      number: 2,
      title: "Fale com um Especialista",
      description: "Assessoria de primeira durante toda a jornada.",
    },
    {
      number: 3,
      title: "Agende uma Visita",
      description: "Explore os imóveis no seu tempo, sem correria.",
    },
    {
      number: 4,
      title: "Feche Negócio",
      description: "Nosso suporte total até a entrega das chaves.",
    },
  ];

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna de Imagens (aparece primeiro no mobile) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 row-span-2">
              <img
                src="https://placehold.co/400x600/64748B/white?text=Contrato"
                alt="Pessoa assinando contrato com maquete de casa e dinheiro ao lado"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://placehold.co/400x284/020617/white?text=Corretores"
                alt="Corretores sorrindo em uma reunião"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://placehold.co/400x284/EA580C/white?text=Agendamento"
                alt="Pessoa agendando visita em um tablet"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Coluna de Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como Funciona?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              A gente sabe que o mercado imobiliário pode ser complicado, mas
              nosso trabalho é simplificar cada etapa. Com nosso processo, você
              encontra o imóvel dos seus sonhos, se conecta com corretores
              experientes e aproveita uma jornada tranquila do início ao fim.
            </p>
            <ul className="space-y-6 mb-8">
              {steps.map((step) => (
                <StepItem
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
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
