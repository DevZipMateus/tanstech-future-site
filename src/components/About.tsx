import { Card } from "@/components/ui/card";
import { Truck, Users, Wrench, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Truck,
      title: "Importação e distribuição",
      description: "Conectamos você aos melhores produtos de mobilidade elétrica do mercado mundial."
    },
    {
      icon: Users,
      title: "Foco no lojista",
      description: "Nosso ecossistema é pensado especificamente para atender as necessidades dos empreendedores."
    },
    {
      icon: Wrench,
      title: "Suporte completo",
      description: "Da abertura do negócio até a venda final, estamos com você em cada etapa."
    },
    {
      icon: Target,
      title: "Produtos modernos",
      description: "Patinetes, bikes e scooters elétricas com tecnologia de ponta e design inovador."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-foreground mb-4 sm:mb-6 px-4">
              Sobre a Tanstech
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Somos especialistas em importação e distribuição de produtos para mobilidade elétrica. 
              Nosso ecossistema trabalha para levar aos lojistas modelos modernos de patinetes, 
              bikes e scooters elétricas com rapidez e segurança.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 border border-primary/10 mx-4 sm:mx-0">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-orbitron font-bold text-primary mb-4">
                Nossa missão
              </h3>
              <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-4xl mx-auto">
                Democratizar o acesso à mobilidade elétrica, oferecendo aos empreendedores brasileiros 
                as ferramentas, produtos e conhecimento necessários para construir negócios de sucesso 
                no segmento de transporte sustentável do futuro.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 sm:p-8 card-hover bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-lg sm:text-xl font-orbitron font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Company Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
            <Card className="p-4 sm:p-6 text-center bg-card/30 backdrop-blur-sm border-border/50">
              <h4 className="text-sm sm:text-base font-orbitron font-bold text-primary mb-2">Responsável</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Tanstech</p>
            </Card>
            
            <Card className="p-4 sm:p-6 text-center bg-card/30 backdrop-blur-sm border-border/50">
              <h4 className="text-sm sm:text-base font-orbitron font-bold text-primary mb-2">Horário</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">09:00 às 20:00</p>
            </Card>
            
            <Card className="p-4 sm:p-6 text-center bg-card/30 backdrop-blur-sm border-border/50">
              <h4 className="text-sm sm:text-base font-orbitron font-bold text-primary mb-2">Localização</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Rua 2480</p>
            </Card>
            
            <Card className="p-4 sm:p-6 text-center bg-card/30 backdrop-blur-sm border-border/50">
              <h4 className="text-sm sm:text-base font-orbitron font-bold text-primary mb-2">Instagram</h4>
              <a
                href="https://instagram.com/tanstech.scooters.eletricas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-primary hover:text-primary-glow transition-colors break-all"
              >
                @tanstech.scooters.eletricas
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;