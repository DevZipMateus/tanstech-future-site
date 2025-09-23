import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bike, Car, Zap, Leaf, Users, TrendingUp } from "lucide-react";

const Solutions = () => {
  const products = [
    {
      icon: Zap,
      name: "Patinetes elétricos",
      description: "Modelos urbanos compactos, ideais para deslocamento rápido e econômico na cidade.",
      features: ["Autonomia até 40km", "Velocidade até 25km/h", "Dobrável e portátil", "Recarga rápida"]
    },
    {
      icon: Bike,
      name: "Bikes elétricas",
      description: "Bicicletas elétricas modernas para transporte sustentável e exercício assistido.",
      features: ["Autonomia até 80km", "Motor silencioso", "Design ergonômico", "Múltiplos modos"]
    },
    {
      icon: Car,
      name: "Scooters elétricas",
      description: "Soluções robustas para médias distâncias com conforto e praticidade urbana.",
      features: ["Autonomia até 60km", "Assento confortável", "Porta-objetos", "Sistema anti-roubo"]
    }
  ];

  const benefits = [
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Zero emissão de poluentes, contribuindo para um futuro mais verde e sustentável."
    },
    {
      icon: Users,
      title: "Mercado crescente",
      description: "Segmento em expansão com alta demanda e excelente retorno sobre investimento."
    },
    {
      icon: TrendingUp,
      title: "Rentabilidade",
      description: "Margens atrativas e crescimento constante no setor de mobilidade urbana."
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-foreground mb-4 sm:mb-6 px-4">
              Nossas soluções
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Oferecemos uma linha completa de produtos modernos para mobilidade elétrica, 
              pensados para atender diferentes necessidades e perfis de usuários urbanos.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 px-4 sm:px-0">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card
                  key={index}
                  className="p-8 card-hover bg-card border-border/50 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-primary/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 electric-glow">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-4">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-electric rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href="https://wa.me/5547999916947" target="_blank" rel="noopener noreferrer">
                      Solicitar informações
                    </a>
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-primary mb-4">
                Por que investir em mobilidade elétrica?
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                O futuro da mobilidade urbana já começou e representa uma oportunidade única para empreendedores visionários.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="text-center animate-slide-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="bg-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-orbitron font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-6">
              Interesse em nossos produtos?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para conhecer nossa linha completa de produtos 
              e descobrir as melhores oportunidades para seu negócio.
            </p>
            
            <Button
              asChild
              size="lg"
              className="btn-electric electric-glow text-lg px-8 py-6 h-auto"
            >
              <a href="https://wa.me/5547999916947" target="_blank" rel="noopener noreferrer">
                Falar com especialista
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;