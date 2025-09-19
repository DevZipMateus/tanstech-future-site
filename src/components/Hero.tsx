import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Leaf, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with image and overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: 'url(/assets/hero-bg.jpg)'}}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto container-padding text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading - H1 as per SEO requirements */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-white mb-6 animate-fade-in tracking-tight">
            Tanstech
          </h1>

          {/* Subheading - H2 as per SEO requirements */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 animate-fade-in font-inter font-medium leading-relaxed" style={{animationDelay: '0.2s'}}>
            Revolucionando o futuro da mobilidade urbana com soluções elétricas inteligentes para empreendedores visionários
          </h2>

          {/* Slogan */}
          <p className="text-lg md:text-xl text-white/80 mb-12 animate-fade-in font-orbitron" style={{animationDelay: '0.4s'}}>
            Tanstech, te aproximando do futuro.
          </p>

          {/* Key Features Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <Zap className="w-5 h-5 text-electric" />
              <span className="text-sm font-medium">Mobilidade elétrica</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <Leaf className="w-5 h-5 text-electric" />
              <span className="text-sm font-medium">Sustentável</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <TrendingUp className="w-5 h-5 text-electric" />
              <span className="text-sm font-medium">Inovação</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-electric text-lg px-8 py-6 h-auto"
            >
              <a href="https://wa.me/5547999916947" target="_blank" rel="noopener noreferrer">
                Começar agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/15 text-white border-white/50 hover:bg-white/25 hover:border-white/70 backdrop-blur-sm text-lg px-8 py-6 h-auto"
            >
              <a href="#about">
                Saiba mais
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-orbitron font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Suporte completo</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-orbitron font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Consultoria disponível</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-orbitron font-bold text-white mb-2">∞</div>
              <div className="text-white/80">Possibilidades futuras</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with subtle animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;