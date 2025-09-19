import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, BookOpen, Headphones, TrendingUp, Package, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Store,
      title: "Consultoria para abertura",
      description: "Orientação completa desde o planejamento inicial até a inauguração da sua loja de mobilidade elétrica.",
      features: ["Análise de mercado", "Plano de negócios", "Licenças e documentação", "Layout da loja"]
    },
    {
      icon: Package,
      title: "Fornecimento de produtos",
      description: "Catálogo completo com patinetes, bikes e scooters elétricas modernas e certificadas.",
      features: ["Produtos importados", "Qualidade garantida", "Variedade de modelos", "Preços competitivos"]
    },
    {
      icon: BookOpen,
      title: "Treinamento especializado",
      description: "Capacitação da sua equipe sobre produtos, vendas e manutenção básica dos equipamentos.",
      features: ["Técnicas de vendas", "Conhecimento técnico", "Atendimento ao cliente", "Pós-venda"]
    },
    {
      icon: TrendingUp,
      title: "Estratégias de marketing",
      description: "Desenvolvemos estratégias personalizadas para promover seu negócio e aumentar as vendas.",
      features: ["Marketing digital", "Campanhas locais", "Redes sociais", "Material promocional"]
    },
    {
      icon: Headphones,
      title: "Suporte contínuo",
      description: "Acompanhamento permanente do seu negócio com suporte técnico e comercial especializado.",
      features: ["Suporte 24/7", "Resolução de problemas", "Dicas de otimização", "Atualizações do mercado"]
    },
    {
      icon: Shield,
      title: "Garantia e assistência",
      description: "Sistema completo de garantias e assistência técnica para seus produtos e clientes.",
      features: ["Garantia estendida", "Assistência técnica", "Peças de reposição", "Suporte ao cliente final"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
              Nossos serviços
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Para empreendedores interessados em investir no segmento de vendas de mobilidade elétrica, 
              nossa empresa prestará todo suporte necessário desde a abertura até a venda final.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-8 card-hover bg-card border-border/50 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="bg-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-orbitron font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="text-left space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-electric rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar você a construir 
              um negócio de sucesso no mercado de mobilidade elétrica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white/20 text-white border border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm text-lg px-8 py-6 h-auto"
              >
                <a href="https://wa.me/5547999916947" target="_blank" rel="noopener noreferrer">
                  Fale conosco no WhatsApp
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 h-auto"
              >
                <a href="#contact">
                  Ver contatos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;