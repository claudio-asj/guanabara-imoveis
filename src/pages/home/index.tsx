import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Home as HomeIcon, DollarSign, Search } from "lucide-react";
import PropertyListings from "@/components/PropertyListings";
import WhyChooseUs from "./WhyChooseUs";
import HowItWorks from "./HowItWorks";
import ExploreCategories from "./ExploreCategories";
import MeetTheTeam from "./MeetTheTeam";

export default function Home() {
  // Estados para controlar os valores do filtro
  const [transactionType, setTransactionType] = useState("alugar");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Função para lidar com a busca e exibir o alerta
  const handleSearch = () => {
    const searchData = {
      tipoDeTransacao: transactionType,
      bairro: location,
      tipoDeImovel: propertyType,
      faixaDePreco: priceRange,
    };
    alert(JSON.stringify(searchData, null, 2));
  };

  return (
    <div className="bg-background">
      <Header />

      {/* Seção principal com a imagem de fundo - NÃO FOI ALTERADA */}
      <main className="relative bg-cover bg-center min-h-[70vh] max-w-7xl mx-auto mt-8 rounded-2xl flex items-end md:items-center text-white p-8 bg-[url('bg-main.png')] pb-32">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/80 md:to-transparent rounded-2xl"></div>
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Abra a porta para o seu lar no Rio
          </h1>
          <h2 className="text-lg md:text-xl max-w-2xl mb-10">
            Explore imóveis exclusivos, receba uma assessoria de primeira e viva
            a experiência de encontrar seu lugar na Cidade Maravilhosa.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 w-full max-w-4xl">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-3xl md:text-4xl font-bold text-primary">
                +34 mil
              </p>
              <p className="text-sm text-white/90 mt-1">
                Corretores Associados
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-3xl md:text-4xl font-bold text-primary">
                +20 mil
              </p>
              <p className="text-sm text-white/90 mt-1">Imóveis no Portfólio</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-3xl md:text-4xl font-bold text-primary">
                +15 mil
              </p>
              <p className="text-sm text-white/90 mt-1">Clientes Satisfeitos</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-3xl md:text-4xl font-bold text-primary">
                +20
              </p>
              <p className="text-sm text-white/90 mt-1">Anos de Mercado</p>
            </div>
          </div>
        </div>
      </main>

      {/* Filtro de Pesquisa com RadioGroup */}
      <div className="relative max-w-5xl mx-auto px-4 -mt-24 z-20">
        <Card className="shadow-2xl">
          <CardContent className="md:p-6">
            <RadioGroup
              value={transactionType}
              onValueChange={setTransactionType}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="alugar" id="alugar" />
                <Label htmlFor="alugar">Alugar</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comprar" id="comprar" />
                <Label htmlFor="comprar">Comprar</Label>
              </div>
              {/* <div className="flex items-center space-x-2">
                <RadioGroupItem value="vender" id="vender" />
                <Label htmlFor="vender">Vender</Label>
              </div> */}
            </RadioGroup>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  Bairro
                </label>
                <Select onValueChange={setLocation} value={location} >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Onde você quer morar?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ipanema">Ipanema</SelectItem>
                    <SelectItem value="leblon">Leblon</SelectItem>
                    <SelectItem value="copacabana">Copacabana</SelectItem>
                    <SelectItem value="barra-da-tijuca">Barra da Tijuca</SelectItem>
                    <SelectItem value="jardim-botanico">Jardim Botânico</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center text-muted-foreground">
                  <HomeIcon className="w-4 h-4 mr-2" />
                  Tipo de Imóvel
                </label>
                <Select onValueChange={setPropertyType} value={propertyType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Qual tipo de imóvel?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartamento">Apartamento</SelectItem>
                    <SelectItem value="cobertura">Cobertura</SelectItem>
                    <SelectItem value="casa">Casa de Condomínio</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center text-muted-foreground">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Faixa de Preço
                </label>
                <Select onValueChange={setPriceRange} value={priceRange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Até quanto?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ate-1m">Até R$ 1.000.000</SelectItem>
                    <SelectItem value="1m-2m">R$ 1.000.000 - R$ 2.000.000</SelectItem>
                    <SelectItem value="2m-5m">R$ 2.000.000 - R$ 5.000.000</SelectItem>
                    <SelectItem value="acima-5m">Acima de R$ 5.000.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleSearch} className="w-full h-10">
                <Search className="w-4 h-4 mr-2" />
                Buscar Imóvel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <PropertyListings filters={{
        transactionType,
        location,
        propertyType,
        priceRange
      }} />

      <WhyChooseUs />

      <HowItWorks />

      <ExploreCategories />

      <MeetTheTeam />
    </div>
  );
}
