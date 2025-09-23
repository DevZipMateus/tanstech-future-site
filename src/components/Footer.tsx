import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/assets/tanstech-logo.png"
                alt="Tanstech Logo"
                className="h-8 sm:h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Revolucionando o futuro da mobilidade urbana com soluções elétricas inteligentes 
              para empreendedores visionários.
            </p>
            <p className="text-primary-foreground/60 text-xs sm:text-sm font-orbitron">
              Tanstech, te aproximando do futuro.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-orbitron font-semibold mb-3 sm:mb-4">Contato</h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="https://wa.me/5547997716947"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
              >
                <Phone size={14} className="mr-2 sm:mr-3 flex-shrink-0" />
                <span className="break-all">(47) 99771-6947</span>
              </a>
              <a
                href="mailto:alexandre.sales1808@gmail.com"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
              >
                <Mail size={14} className="mr-2 sm:mr-3 flex-shrink-0" />
                <span className="break-all">alexandre.sales1808@gmail.com</span>
              </a>
              <div className="flex items-center text-primary-foreground/80 text-sm sm:text-base">
                <MapPin size={14} className="mr-2 sm:mr-3 flex-shrink-0" />
                Rua 2480
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-base sm:text-lg font-orbitron font-semibold mb-3 sm:mb-4">Links rápidos</h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="#about"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
              >
                Sobre nós
              </a>
              <a
                href="#services"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
              >
                Serviços
              </a>
              <a
                href="#solutions"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
              >
                Soluções
              </a>
              <a
                href="#products"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
              >
                Produtos
              </a>
              <a
                href="#contact"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
              >
                Contato
              </a>
              <a
                href="https://instagram.com/tanstech.do.brazil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
              >
                <Instagram size={14} className="mr-2 flex-shrink-0" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 gap-2">
            <p className="text-primary-foreground/60 text-xs sm:text-sm">
              © {new Date().getFullYear()} Tanstech. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-xs sm:text-sm">
              CNPJ: 022.618.829-98
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;