import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => (
  <div className="min-h-screen">
    <Header />
    <section className="pt-24 pb-16">
      <div className="container max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-display font-bold">
            <span className="gradient-text">Privacidade</span>
          </h1>
          <div className="glass-card rounded-xl p-8 text-muted-foreground text-sm leading-relaxed space-y-4">
            <p>A NFTicket respeita a sua privacidade. Não coletamos dados pessoais além do necessário para o funcionamento da plataforma.</p>
            <p>Seu endereço de wallet é utilizado para identificação e transações na blockchain.</p>
            <p>Não compartilhamos informações com terceiros sem seu consentimento.</p>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Privacy;
