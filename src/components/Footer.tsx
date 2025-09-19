import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/assets/tanstech-logo.png"
                alt="Tanstech Logo"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Revolucionando o futuro da mobilidade urbana com soluções elétricas inteligentes 
              para empreendedores visionários.
            </p>
            <p className="text-primary-foreground/60 text-sm font-orbitron">
              Tanstech, te aproximando do futuro.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-orbitron font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5547999916947"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone size={16} className="mr-3" />
                (47) 99991-6947
              </a>
              <a
                href="mailto:alexandre.sales1808@gmail.com"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail size={16} className="mr-3" />
                alexandre.sales1808@gmail.com
              </a>
              <div className="flex items-center text-primary-foreground/80">
                <MapPin size={16} className="mr-3" />
                Rua 2480
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-orbitron font-semibold mb-4">Links rápidos</h3>
            <div className="space-y-3">
              <a
                href="#about"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Sobre nós
              </a>
              <a
                href="#services"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Serviços
              </a>
              <a
                href="#solutions"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Soluções
              </a>
              <a
                href="#contact"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contato
              </a>
              <a
                href="https://instagram.com/tanstech.scooters.eletricas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram size={16} className="mr-2" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Tanstech. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              CNPJ: 022.618.829-98
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;