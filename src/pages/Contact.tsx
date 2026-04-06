import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen">
    <Header />
    <section className="pt-24 pb-16">
      <div className="container max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-display font-bold">
            <span className="gradient-text">Contato</span>
          </h1>
          <div className="glass-card rounded-xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground text-sm">contato@nfticket.com.br</span>
            </div>
            <p className="text-sm text-muted-foreground">Entre em contato conosco para dúvidas, parcerias ou suporte.</p>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Contact;
