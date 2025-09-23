import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const ProductGallery = () => {
  const products: any[] = [];

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
          {products.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                <h3 className="text-xl font-orbitron font-semibold text-foreground mb-4">
                  Novos produtos em breve
                </h3>
                <p className="text-muted-foreground">
                  Estamos preparando nosso catálogo atualizado com os melhores produtos de mobilidade elétrica.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
              {products.map((product, index) => (
                <Card
                  key={product.id}
                  className="p-4 sm:p-6 card-hover bg-card border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="bg-gradient-electric rounded-lg p-6 sm:p-8 mb-4">
                      <div className="text-white text-lg sm:text-xl font-orbitron font-bold">
                        {product.name}
                      </div>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-orbitron font-semibold text-foreground mb-3">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2">
                      {product.model}
                    </p>
                    
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm"
                    >
                      <a href="https://wa.me/5547997716947" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                        Solicitar informações
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

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
              <a href="https://wa.me/5547997716947" target="_blank" rel="noopener noreferrer">
                Ver catálogo completo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;