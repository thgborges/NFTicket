import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Terms = () => (
  <div className="min-h-screen">
    <Header />
    <section className="pt-24 pb-16">
      <div className="container max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-display font-bold">
            Termos de <span className="gradient-text">Uso</span>
          </h1>
          <div className="glass-card rounded-xl p-8 text-muted-foreground text-sm leading-relaxed space-y-4">
            <p>Ao utilizar a plataforma NFTicket, você concorda com os seguintes termos e condições.</p>
            <p>Os ingressos NFT são ativos digitais armazenados na blockchain. A NFTicket não se responsabiliza por perdas de acesso à wallet do usuário.</p>
            <p>A revenda de ingressos está sujeita aos royalties definidos pelo organizador do evento.</p>
            <p>Reservamo-nos o direito de bloquear contas que violem nossas políticas de uso.</p>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Terms;
