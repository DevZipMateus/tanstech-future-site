import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      info: "(47) 99991-6947",
      link: "https://wa.me/5547999916947",
      description: "Fale conosco agora mesmo"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "alexandre.sales1808@gmail.com",
      link: "mailto:alexandre.sales1808@gmail.com",
      description: "Envie sua mensagem"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua 2480",
      link: null,
      description: "Nossa localização"
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      info: "09:00 às 20:00",
      link: null,
      description: "Segunda à sexta-feira"
    },
    {
      icon: Instagram,
      title: "Instagram",
      info: "@tanstech.scooters.eletricas",
      link: "https://instagram.com/tanstech.scooters.eletricas",
      description: "Siga-nos nas redes sociais"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
              Entre em contato
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pronto para revolucionar seu negócio com mobilidade elétrica? 
              Nossa equipe está aqui para ajudar você a dar o primeiro passo rumo ao futuro.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              const content = (
                <Card
                  className="p-6 card-hover bg-card border-border/50 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-orbitron font-semibold text-foreground mb-2">
                    {contact.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {contact.description}
                  </p>
                  
                  <p className={`font-medium ${contact.link ? 'text-primary' : 'text-foreground'} transition-colors`}>
                    {contact.info}
                  </p>
                </Card>
              );

              return contact.link ? (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          {/* Main CTA Section */}
          <div className="bg-gradient-electric rounded-2xl p-8 md:p-12 text-center">
            <MessageCircle className="w-16 h-16 text-white/80 mx-auto mb-6" />
            
            <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
              Vamos conversar?
            </h3>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Estamos prontos para responder suas dúvidas, apresentar nossas soluções 
              e ajudar você a construir um negócio de sucesso no mercado de mobilidade elétrica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:text-primary border border-white backdrop-blur-sm text-lg px-8 py-6 h-auto electric-glow"
              >
                <a href="https://wa.me/5547999916947" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Iniciar conversa no WhatsApp
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white/60 text-white hover:bg-white/15 hover:border-white/80 backdrop-blur-sm text-lg px-8 py-6 h-auto"
              >
                <a href="mailto:alexandre.sales1808@gmail.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Enviar e-mail
                </a>
              </Button>
            </div>
          </div>

          {/* Business Hours Highlight */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 border border-primary/20">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">
                Atendimento: Segunda a sexta-feira, das 09:00 às 20:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;