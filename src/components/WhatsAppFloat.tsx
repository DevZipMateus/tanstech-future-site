import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5547999916947"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contato via WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppFloat;