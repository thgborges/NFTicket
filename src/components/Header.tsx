import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Ticket, Menu, X, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Eventos", href: "/events" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Como Funciona", href: "/#how-it-works" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
    >
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-lg bg-primary/10 neon-glow">
            <Ticket className="w-5 h-5 text-primary" />
          </div>
          <span className="text-lg font-display font-bold gradient-text">
            NFTicket
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10">
            <Wallet className="w-4 h-4 mr-2" />
            Conectar Wallet
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass-card border-t border-border/30 px-4 pb-4"
        >
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 w-full mt-2">
              <Wallet className="w-4 h-4 mr-2" />
              Conectar Wallet
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
