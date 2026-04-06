import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => (
  <div className="min-h-screen">
    <Header />
    <section className="pt-24 pb-16">
      <div className="container max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-display font-bold">
            Sobre o <span className="gradient-text">NFTicket</span>
          </h1>
          <div className="glass-card rounded-xl p-8 space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>O NFTicket é uma plataforma SaaS Web3 para emissão, venda e revenda de ingressos em formato NFT (ERC-721).</p>
            <p>Nossa missão é eliminar fraudes, garantir autenticidade e devolver ao consumidor a propriedade real do seu ingresso.</p>
            <p>Com tecnologia blockchain, cada ingresso é único, verificável e impossível de falsificar.</p>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
