import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Users, Ticket, Shield, RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockEvents } from "@/data/mockEvents";
import { getEventImage } from "@/components/EventCard";

const EventDetail = () => {
  const { id } = useParams();
  const event = mockEvents.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-display font-bold">Evento não encontrado</h1>
          <Button asChild variant="outline">
            <Link to="/events">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const availablePercent = (event.available / event.total) * 100;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={getEventImage(event.id)}
            alt={event.title}
            className="w-full h-full object-cover"
            width={960}
            height={640}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="container relative -mt-20 z-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Link to="/events" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Voltar
                </Link>
                <Badge className="ml-3 bg-primary/20 text-primary border-primary/30">{event.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-display font-bold mt-3">{event.title}</h1>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" />
                  {new Date(event.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  {event.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-primary" />
                  {event.available} / {event.total} ingressos
                </span>
              </div>

              <div className="glass-card rounded-xl p-6 space-y-4">
                <h2 className="font-display font-semibold text-lg">Sobre o Evento</h2>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                <p className="text-sm text-muted-foreground">
                  Organizado por <span className="text-primary font-medium">{event.organizer}</span>
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Shield, title: "Autenticidade", desc: "NFT verificável na blockchain" },
                  { icon: RefreshCw, title: "Revenda", desc: "Marketplace com royalties" },
                  { icon: Ticket, title: "Colecionável", desc: "Guarde como recordação" },
                ].map((f) => (
                  <div key={f.title} className="glass-card rounded-lg p-4 text-center space-y-2">
                    <f.icon className="w-5 h-5 text-primary mx-auto" />
                    <h3 className="font-display font-medium text-sm">{f.title}</h3>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar - buy card */}
            <div className="lg:col-span-1">
              <div className="glass-card gradient-border rounded-xl p-6 space-y-5 sticky top-24">
                <div className="text-center">
                  <span className="text-3xl font-display font-bold gradient-text">{event.price}</span>
                  <p className="text-xs text-muted-foreground mt-1">por ingresso</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Disponíveis</span>
                    <span className="font-medium">{event.available} / {event.total}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${availablePercent}%` }}
                    />
                  </div>
                </div>

                <Button className="w-full neon-glow" size="lg">
                  <Ticket className="w-4 h-4 mr-2" />
                  Comprar Ingresso
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Conecte sua wallet MetaMask para comprar
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;
