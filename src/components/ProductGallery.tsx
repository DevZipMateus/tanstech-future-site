import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
const ProductGallery = () => {
  const products = [{
    id: 1,
    name: "AUTOPROPELIDO MODELO SD3",
    image: "/assets/products/autopropelido-sd3-novo.jpg",
    specifications: ["POTÊNCIA: 1000W", "CONTROLE VELOCIDADE 1,2,3 (RÉ)", "BATERIA LÍTIO: 20AH", "VELOC. LIMITE: 32KM/H", "AUTONOMIA: ATÉ 55KM (POR CARGA)", "CONEXÃO: BLUETOOTH", "IGNIÇÃO: NFC, ALARME", "PORTA OBJETOS", "BAU (ITEM DE SÉRIE)", "CORES: BRANCO, VERMELHO, CINZA, ROXO E PRETO"]
  }, {
    id: 2,
    name: "AUTOPROPELIDO MODELO A3",
    image: "/assets/products/autopropelido-a3.jpg",
    specifications: ["POTÊNCIA: 1000W", "CONTROLE VELOCIDADE 1,2,3 (RÉ)", "BATERIA LÍTIO: 20AH", "VELOC. LIMITE: 32KM/H", "AUTONOMIA: ATÉ 55KM (POR CARGA)", "CONEXÃO: BLUETOOTH", "IGNIÇÃO: NFC, ALARME", "PORTA OBJETOS", "BAU (ITEM DE SÉRIE)", "CORES: BRANCO, CINZA E PRETO"]
  }, {
    id: 3,
    name: "AUTOPROPELIDO MODELO X13",
    image: "/assets/products/autopropelido-x13-new.jpg",
    specifications: ["POTÊNCIA: 1000W", "CONTROLE VELOCIDADE 1,2,3 E RÉ", "BATERIA LÍTIO: 24AH", "VELOC. LIMITE: 32KM/H", "AUTONOMIA: ATÉ 55KM (POR CARGA)", "CONEXÃO: BLUETOOTH", "IGNIÇÃO: NFC, ALARME", "CORES: BRANCO, INGLATERRA, VERMELHO, CINZA, PRETO, CARBONO, ETC"]
  }, {
    id: 4,
    name: "AUTOPROPELIDO MODELO SWD3",
    image: "/assets/products/autopropelido-swd3.jpg",
    specifications: ["POTÊNCIA: 1000W", "CONTROLE VELOCIDADE 1,2,3", "BATERIA LÍTIO: 20AH", "VELOC. LIMITE: 32KM/H", "AUTONOMIA: ATÉ 55KM (POR CARGA)", "CONEXÃO: BLUETOOTH", "IGNIÇÃO: NFC, ALARME", "PORTA OBJETOS", "CORES: BRANCO, VERMELHO, CINZA E PRETO"]
  }, {
    id: 5,
    name: "AUTOPROPELIDO MODELO SWD4",
    image: "/assets/products/autopropelido-swd4.jpg",
    specifications: ["POTÊNCIA: 1000W", "CONTROLE VELOCIDADE 1,2,3", "BATERIA LÍTIO: 20AH", "VELOC. LIMITE: 32KM/H", "AUTONOMIA: ATÉ 55KM (POR CARGA)", "CONEXÃO: BLUETOOTH", "IGNIÇÃO: NFC, ALARME", "PORTA OBJETOS", "CORES: BRANCO, CINZA, PRETO"]
  }, {
    id: 6,
    name: "AUTOPROPELIDO MODELO SP JOY",
    image: "/assets/products/autopropelido-sp-joy.jpg",
    specifications: ["POTÊNCIA: 800W", "CONTROLE VELOCIDADE 1,2,3", "BATERIA LÍTIO: 20AH", "VELOC. LIMITE: 32KM/H", "AUTONOMIA: ATÉ 55KM (POR CARGA)", "CONEXÃO: BLUETOOTH", "IGNIÇÃO: NFC, ALARME", "PORTA OBJETOS", "CORES: BRANCO, VERMELHO, CINZA, PRETO"]
  }, {
    id: 7,
    name: "AUTOPROPELIDO MODELO SP8",
    image: "/assets/products/autopropelido-sp8.jpg",
    specifications: ["POTÊNCIA: 1000W", "CONTROLE VELOCIDADE 1,2,3 (RÉ)", "BATERIA LÍTIO: 20AH", "VELOC. LIMITE: 32KM/H", "AUTONOMIA: ATÉ 55KM (POR CARGA)", "CONEXÃO: BLUETOOTH", "IGNIÇÃO: NFC, ALARME", "PORTA OBJETOS", "BAU (ITEM DE SÉRIE)", "CORES: BRANCO, VERMELHO, CINZA E PRETO"]
  }, {
    id: 8,
    name: "AUTOPROPELIDO MODELO SE6",
    image: "/assets/products/autopropelido-se6.jpg",
    specifications: ["POTÊNCIA: 1000W", "CONTROLE VELOCIDADE 1,2,3", "BATERIA LÍTIO: 20AH", "VELOC. LIMITE: 32KM/H", "AUTONOMIA: ATÉ 55KM (POR CARGA)", "CONEXÃO: BLUETOOTH", "IGNIÇÃO: NFC, ALARME", "LUZES EM LED", "PORTA OBJETOS", "BAU (ITEM DE SÉRIE)", "CORES: BRANCO, VERMELHO, CINZA, E PRETO"]
  }, {
    id: 9,
    name: "CICLOMOTOR MODELO CHOPPER",
    image: "/assets/products/chopper-4000w.jpg",
    specifications: ["POTÊNCIA: 4.000W", "CONTROLE VELOCIDADE 1,2,3 (RÉ)", "BATERIA LÍTIO: 42AH", "VELOC. LIMITE: 90KM/H", "AUTONOMIA: ATÉ 75KM (POR CARGA)", "CONEXÃO: BLUETOOTH", "IGNIÇÃO: ALARME E CHAVES CODIFICADAS", "BANCO EXTRA (OPCIONAL)", "CORES: VERMELHO, AZUL E PRETO"]
  }, {
    id: 10,
    name: "PATINETE ELÉTRICO 350W",
    image: "/assets/products/patinete-350w.jpg",
    specifications: ["POTÊNCIA: 350W", "BATERIA LÍTIO: 8AH", "VELOCIDADE MÁXIMA: 32KM/H", "AUTONOMIA: ATÉ 30KM", "PNEUS: CALIBRAGEM", "BOLSA (OPCIONAL)"]
  }, {
    id: 11,
    name: "AUTOPROPELIDO MODELO SV8",
    image: "/assets/products/bike-sv8.jpg",
    specifications: ["POTÊNCIA: 1000W", "CONTROLE VELOCIDADE 1,2,3", "BATERIA LÍTIO: 15AH", "PEDAL ASSISTIDO", "VELOC. LIMITE: 32KM/H", "AUTONOMIA: ATÉ 75KM (POR CARGA)", "IGNIÇÃO: NFC, ALARME", "CORES BANCO: PRETO, MARROM"]
  }, {
    id: 12,
    name: "AUTOPROPELIDO MODELO SWD5",
    image: "/assets/products/autopropelido-swd5.jpg",
    specifications: ["POTÊNCIA: 1000W", "CONTROLE VELOCIDADE 1,2,3", "BATERIA LÍTIO: 20AH", "VELOC. LIMITE: 32KM/H", "AUTONOMIA: ATÉ 55KM (POR CARGA)", "CONEXÃO: BLUETOOTH", "IGNIÇÃO: NFC, ALARME", "PORTA OBJETOS", "CORES: BRANCO, CINZA, PRETO E VERMELHO"]
  }, {
    id: 13,
    name: "AUTOPROPELIDO MODELO FAMILY",
    image: "/assets/products/triciclo-family.jpg",
    specifications: ["POTÊNCIA: 1000W", "CARGA MÁXIMO: 250 KG", "CONTROLE VELOCIDADE 1,2,3 E RÉ", "BATERIA LÍTIO: 20AH", "VELOC. LIMITE: 32KM/H", "AUTONOMIA: ATÉ 65KM (POR CARGA)", "CONEXÃO: BLUETOOTH", "IGNIÇÃO: NFC, ALARME", "ASSENTOS: 1, 2 E 3 OPÇÕES", "CORES: BRANCO, VERMELHO, CINZA, PRETO ETC"]
  }, {
    id: 14,
    name: "AUTOPROPELIDO MODELO SWD6",
    image: "/assets/products/autopropelido-swd6.jpg",
    specifications: ["POTÊNCIA: 1000W", "CONTROLE VELOCIDADE 1,2,3", "BATERIA LÍTIO: 20AH", "VELOC. LIMITE: 32KM/H", "AUTONOMIA: ATÉ 55KM (POR CARGA)", "CONEXÃO: BLUETOOTH", "IGNIÇÃO: NFC, ALARME", "CORES: BRANCO, VERMELHO, CINZA, PRETO"]
  }];
  return <section id="products" className="section-padding bg-background">
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
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="font-orbitron font-bold text-lg sm:text-xl text-foreground mb-3 sm:mb-4">
                    {product.name}
                  </h3>
                  
                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {product.specifications.map((spec, specIndex) => (
                      <div key={specIndex} className="text-xs sm:text-sm text-muted-foreground font-medium">
                        {spec}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary-glow shadow-electric text-xs sm:text-sm"
                  >
                    <a 
                      href="https://wa.me/5547997716947" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
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
            
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-electric text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto">
              <a href="https://wa.me/5547997716947" target="_blank" rel="noopener noreferrer">
                Ver catálogo completo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductGallery;