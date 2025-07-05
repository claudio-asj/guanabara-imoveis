
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router";

// Componente para o Logo (substitua pelo seu)
const Logo = () => (
  <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
    <img src="/logo.png" alt="Logo" className="w-10 h-10" />
    <span className="text-primary">
      Guanabara<span className="text-foreground">Imóveis</span>
    </span>
  </Link>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/propriedades", label: "Propriedades" },
    { href: "/nossa-equipe", label: "Corretores" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Navegação de Desktop */}
          <nav className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão de Contato e Menu Hambúrguer */}
          <div className="flex items-center">
            <div className="hidden md:block flex-shrink-0">
              <Button asChild>
                <a href="/contato">
                  <Phone className="w-4 h-4 mr-2" /> Fale Conosco
                </a>
              </Button>
            </div>
            <div className="md:hidden ml-4">
              <Button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                variant="ghost"
                size="icon"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary hover:bg-muted block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="px-2">
              <Button asChild className="w-full">
                <a href="/contato">
                  <Phone className="w-4 h-4 mr-2" /> Fale Conosco
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
