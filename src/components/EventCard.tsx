import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Event } from "@/data/mockEvents";

import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import event6 from "@/assets/event-6.jpg";

const eventImages: Record<string, string> = {
  "1": event1,
  "2": event2,
  "3": event3,
  "4": event4,
  "5": event5,
  "6": event6,
};

export const getEventImage = (id: string) => eventImages[id] || event1;

interface EventCardProps {
  event: Event;
  index?: number;
}

const EventCard = ({ event, index = 0 }: EventCardProps) => {
  const availablePercent = (event.available / event.total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Link
        to={`/events/${event.id}`}
        className="block glass-card rounded-xl overflow-hidden group hover:neon-glow transition-shadow"
      >
        <div className="relative overflow-hidden aspect-[3/2]">
          <img
            src={getEventImage(event.id)}
            alt={event.title}
            loading="lazy"
            width={960}
            height={640}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <Badge className="absolute top-3 left-3 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
            {event.category}
          </Badge>
          <div className="absolute bottom-3 right-3 text-right">
            <span className="text-lg font-display font-bold text-primary">{event.price}</span>
          </div>
        </div>
        <div className="p-4 space-y-3">
          <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1">
            {event.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(event.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {event.location}
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {event.available} disponíveis
              </span>
              <span>{Math.round(availablePercent)}%</span>
            </div>
            <div className="w-full h-1 rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${availablePercent}%` }}
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;
