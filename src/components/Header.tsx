import { Link } from "react-router";
import { Button } from "./ui/button";
import logo from "/logo.png";
import {Phone} from 'lucide-react'

export default function Header() {
  return (
    <header>
        <div className="mx-auto max-w-7xl py-2 flex items-center justify-center w-full">
          <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
            <img src={logo} alt="Logo" className="w-10" />
            <span className="text-primary">
              Guanabara<span className="text-foreground">Imóveis</span>
            </span>
          </div>
          <nav className="w-full flex items-center justify-center space-x-2">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Início
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Sobre
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Propiedades
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Corretores
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Blog
            </Link>
          </nav>
          <Button size={"lg"}><Phone /> Fale Conosco</Button>
        </div>
      </header>
  )
}