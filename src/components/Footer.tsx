import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Linkedin, Twitter, Send } from "lucide-react";
import { Link } from "react-router";

// Componente para o Logo (substitua pelo seu)
const Logo = () => (
  <h2 className="text-2xl font-bold text-white">Guanabara Imóveis</h2>
);

// Ícones das lojas de app (placeholders)
const AppStoreIcon = () => (
  <img src="https://placehold.co/140x45/FFFFFF/020617?text=App+Store" alt="Baixar na App Store" className="h-12" />
);

const GooglePlayIcon = () => (
  <img src="https://placehold.co/140x45/FFFFFF/020617?text=Google+Play" alt="Baixar no Google Play" className="h-12" />
);


export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/propriedades", label: "Imóveis" },
    { href: "/nossa-equipe", label: "Corretores" },
    { href: "/contato", label: "Contato" },
  ];

  
  const socialLinks = [
    { href: "#", icon: <Twitter className="w-5 h-5" /> },
    { href: "#", icon: <Facebook className="w-5 h-5" /> },
    { href: "#", icon: <Instagram className="w-5 h-5" /> },
    { href: "#", icon: <Linkedin className="w-5 h-5" /> },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Seção Superior: Logo e Redes Sociais */}
        <div className="flex flex-col sm:flex-row justify-between items-center pb-8">
          <Logo />
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="text-sm font-medium">Siga a gente:</span>
            {socialLinks.map((link, index) => (
              <Link key={index} to={link.href} className="hover:text-primary transition-colors">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <Separator className="bg-border/20" />

        {/* Seção Principal: Links e Informações */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-12">
          {/* Coluna de Inscrição */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h4 className="font-semibold mb-4">Fique por dentro</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Assine nossa newsletter para receber as melhores ofertas da
              semana.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Seu e-mail" className="bg-background/10 border-border/30" />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Coluna de Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna de Contato */}
          <div>
            <h4 className="font-semibold mb-4">Fale com a gente</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contato@guanabaraimoveis.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  contato@guanabaraimoveis.com
                </a>
              </li>
              <li>
                <a href="tel:+5521999998888" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  (21) 99999-8888
                </a>
              </li>
            </ul>
          </div>
          
          {/* Coluna de Endereço */}
          <div>
            <h4 className="font-semibold mb-4">Onde estamos</h4>
             <address className="text-sm text-muted-foreground not-italic">
                Av. Vieira Souto, 100<br />
                Ipanema, Rio de Janeiro<br />
                RJ, 22420-000
              </address>
          </div>

          {/* Coluna de App */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-semibold mb-4">Baixe nosso app</h4>
            <div className="flex flex-col items-start space-y-2">
              <AppStoreIcon />
              <GooglePlayIcon />
            </div>
          </div>
        </div>
        
        <Separator className="bg-border/20" />

        {/* Seção Inferior: Copyright */}
        <div className="pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Guanabara Imóveis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
