import { motion } from "framer-motion";
import { ArrowRight, Shield, RefreshCw, Wallet, QrCode } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ticket.png";

const features = [
  {
    icon: Shield,
    title: "Anti-Fraude",
    desc: "Cada ingresso é um NFT único e verificável na blockchain. Impossível de falsificar.",
  },
  {
    icon: RefreshCw,
    title: "Revenda Segura",
    desc: "Marketplace oficial com royalties automáticos para organizadores.",
  },
  {
    icon: Wallet,
    title: "Propriedade Real",
    desc: "O ingresso é seu. Armazenado na sua wallet, sob seu controle total.",
  },
  {
    icon: QrCode,
    title: "Check-in Digital",
    desc: "QR Code validado on-chain. Rápido, seguro e sem filas.",
  },
];

const steps = [
  { num: "01", title: "Empresa cria evento", desc: "Define dados, gera NFTs ERC-721 e salva metadata no IPFS." },
  { num: "02", title: "Cliente compra ingresso", desc: "Conecta sua wallet, compra o NFT e recebe direto na carteira." },
  { num: "03", title: "Revenda no marketplace", desc: "Liste seu ingresso. Smart contract transfere NFT e aplica royalties." },
  { num: "04", title: "Entrada no evento", desc: "QR Code escaneado, validação on-chain, ingresso marcado como usado." },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    {/* Background effects */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(175_80%_50%_/_0.06)_0%,_transparent_70%)]" />
    <div className="absolute top-1/4 -left-32 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl" />

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-neon" />
            Powered by Blockchain
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Ingressos <span className="gradient-text">NFT</span> para o{" "}
            <span className="gradient-text">futuro</span> dos eventos
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Compre, venda e revenda ingressos autênticos com total segurança.
            Cada ingresso é um NFT único na blockchain.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="neon-glow">
              <Link to="/events">
                Explorar Eventos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10"
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            >
              Como Funciona
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl" />
            <img
              src={heroImage}
              alt="NFTicket - Ingresso NFT holográfico"
              width={1024}
              height={1024}
              className="relative rounded-2xl w-full max-w-md animate-float"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Por que <span className="gradient-text">NFTicket</span>?
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Tecnologia blockchain aplicada a ingressos para resolver problemas reais.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-6 hover:neon-glow transition-shadow group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 bg-card/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Como <span className="gradient-text">Funciona</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative glass-card rounded-xl p-6"
          >
            <span className="text-4xl font-display font-bold gradient-text opacity-40">{s.num}</span>
            <h3 className="font-display font-semibold mt-2 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative glass-card gradient-border rounded-2xl p-12 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(175_80%_50%_/_0.08)_0%,_transparent_60%)]" />
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Pronto para o <span className="gradient-text">futuro</span>?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Junte-se à nova era dos eventos digitais. Sem fraude, sem cambista, sem complicação.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="neon-glow">
              <Link to="/events">
                Ver Eventos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export { HeroSection, FeaturesSection, HowItWorksSection, CTASection };
