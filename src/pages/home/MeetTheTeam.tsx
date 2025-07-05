import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router";

// Dados da equipe
const teamMembers = [
  {
    name: "Juliana Flores",
    role: "Corretora Especialista",
    imageUrl: "https://placehold.co/400x400/EEF2F6/64748B?text=Juliana",
    socials: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Ricardo Miles",
    role: "Corretor de Luxo",
    imageUrl: "https://placehold.co/400x400/FED7AA/020617?text=Ricardo",
    socials: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Arthur Henry",
    role: "Especialista em Marketing",
    imageUrl: "https://placehold.co/400x400/64748B/white?text=Arthur",
    socials: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
];

// Tipagem para o membro da equipe
type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  socials: {
    instagram: string;
    facebook: string;
    linkedin: string;
  };
};

// Componente do Card de Membro da Equipe
const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="bg-card border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
    <img
      src={member.imageUrl}
      alt={`Foto de ${member.name}`}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="font-bold text-lg">{member.name}</h3>
    <p className="text-primary text-sm mb-4">{member.role}</p>
    <div className="flex justify-center space-x-4 text-muted-foreground">
      <Link to={member.socials.instagram} className="hover:text-primary">
        <Instagram className="w-5 h-5" />
      </Link>
      <Link to={member.socials.facebook} className="hover:text-primary">
        <Facebook className="w-5 h-5" />
      </Link>
      <Link to={member.socials.linkedin} className="hover:text-primary">
        <Linkedin className="w-5 h-5" />
      </Link>
    </div>
  </div>
);

// Componente Principal da Seção
export default function MeetTheTeam() {
  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Conheça Nossos Corretores
            </h2>
            <p className="text-muted-foreground mt-2">
              Profissionais dedicados e prontos para te guiar em cada etapa da
              sua jornada.
            </p>
          </div>
          <Button asChild>
            <Link to="/nossa-equipe">
              Nossa Equipe <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Grid de Membros da Equipe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
