import { Ticket } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/30 bg-card/30 backdrop-blur-sm">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Ticket className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display font-bold gradient-text">NFTicket</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Ingressos NFT autênticos, rastreáveis e seguros.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Plataforma</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link to="/events" className="block hover:text-primary transition-colors">Eventos</Link>
            <Link to="/marketplace" className="block hover:text-primary transition-colors">Marketplace</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Empresa</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link to="/about" className="block hover:text-primary transition-colors">Sobre</Link>
            <Link to="/contact" className="block hover:text-primary transition-colors">Contato</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Legal</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link to="/terms" className="block hover:text-primary transition-colors">Termos de Uso</Link>
            <Link to="/privacy" className="block hover:text-primary transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/30 mt-8 pt-6 text-center text-xs text-muted-foreground">
        © 2026 NFTicket. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
