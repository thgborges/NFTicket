import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const Marketplace = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-24 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <ShoppingBag className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold">
              <span className="gradient-text">Marketplace</span>
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Em breve você poderá comprar e revender ingressos NFT de outros usuários com total segurança e royalties automáticos.
            </p>
            <div className="glass-card rounded-xl p-8 max-w-lg mx-auto mt-8">
              <p className="text-sm text-muted-foreground">🚧 Funcionalidade em desenvolvimento</p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Marketplace;
