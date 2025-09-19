import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, ExternalLink } from "lucide-react";

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const products = [
    {
      id: 1,
      name: "Scooter Elétrica S3",
      image: "/assets/products/scooter-s3.jpg",
      model: "Autopropelido MOD:S3 1000W",
      price: "R$ 6.997,00"
    },
    {
      id: 2,
      name: "Scooter Elétrica S6",
      image: "/assets/products/scooter-s6.jpg",
      model: "Autopropelido MODELO S6 1000W",
      price: "R$ 6.997,00"
    },
    {
      id: 3,
      name: "Scooter Elétrica JET",
      image: "/assets/products/scooter-jet.jpg",
      model: "Autopropelido MODELO JET 1000W",
      price: "R$ 7.597,00"
    },
    {
      id: 4,
      name: "Scooter Elétrica A3",
      image: "/assets/products/scooter-a3.jpg",
      model: "Autopropelido MODELO A3 1000W",
      price: "R$ 6.997,00"
    },
    {
      id: 5,
      name: "Scooter Elétrica Modelo",
      image: "/assets/products/scooter-modelo.jpg",
      model: "Autopropelido 1000W",
      price: "R$ 7.597,00"
    },
    {
      id: 6,
      name: "Scooter Elétrica SOL",
      image: "/assets/products/scooter-sol.jpg",
      model: "Autopropelido SOL 1000W",
      price: "R$ 5.697,00"
    },
    {
      id: 7,
      name: "WD 1000W",
      image: "/assets/products/wd-1000w.jpg",
      model: "Bateria 20AH Removível",
      price: "R$ 5.497,00"
    },
    {
      id: 8,
      name: "Super 800",
      image: "/assets/products/super-800.jpg",
      model: "800W Bateria 20AH",
      price: "R$ 4.997,00"
    },
    {
      id: 9,
      name: "Triciclo Family",
      image: "/assets/products/triciclo-family.jpg",
      model: "600W/1000W",
      price: "R$ 8.497,00"
    },
    {
      id: 10,
      name: "Chopper 4000W",
      image: "/assets/products/chopper-4000w.jpg",
      model: "Veículo Ciclomotor 4000W",
      price: "R$ 11.497,00"
    },
    {
      id: 11,
      name: "Bike V8 PRO",
      image: "/assets/products/bike-v8-pro.jpg",
      model: "Motor 1000W Bateria 48V 15Ah",
      price: "R$ 6.697,00"
    },
    {
      id: 12,
      name: "Patinete 350W",
      image: "/assets/products/patinete-350w.jpg",
      model: "Bateria 36V 7.8Ah - Autonomia 30km",
      price: "R$ 1.897,00"
    },
    {
      id: 13,
      name: "Autopropelido 1000W",
      image: "/assets/products/autopropelido-1000w.jpg",
      model: "Bateria 20AH Removível - NFC",
      price: "R$ 7.597,00"
    }
  ];

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-4 sm:mb-6 px-4">
              Nossos produtos
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Conheça nossa linha completa de scooters, bikes e triciclos elétricos. 
              Produtos modernos com tecnologia de ponta e qualidade garantida.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="p-3 sm:p-4 card-hover bg-card border-border/50 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(product.image)}
              >
                <div className="aspect-square overflow-hidden rounded-lg mb-3 sm:mb-4 bg-gradient-subtle">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-orbitron font-semibold text-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.model}
                  </p>
                  <p className="text-primary font-bold text-base sm:text-lg mb-3 sm:mb-4">
                    {product.price}
                  </p>
                  
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href="https://wa.me/5547999916947" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                      Solicitar orçamento
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-6 sm:p-8 md:p-12 border border-primary/10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-4 px-4">
              Interessado em algum produto?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Entre em contato conosco para mais informações sobre especificações técnicas, 
              disponibilidade e condições especiais para revendedores.
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-electric text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto"
            >
              <a href="https://wa.me/5547999916947" target="_blank" rel="noopener noreferrer">
                Ver catálogo completo
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Modal para visualizar imagem ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-black/50 text-white rounded-full p-1.5 sm:p-2 hover:bg-black/70 transition-colors"
              aria-label="Fechar imagem"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Produto ampliado"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductGallery;