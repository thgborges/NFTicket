export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  price: string;
  image: string;
  category: string;
  available: number;
  total: number;
  organizer: string;
  description: string;
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Crypto Music Festival",
    date: "2026-05-15",
    location: "São Paulo, SP",
    price: "0.05 ETH",
    image: "",
    category: "Festival",
    available: 342,
    total: 500,
    organizer: "Web3 Sounds",
    description: "O maior festival de música cripto do Brasil. 3 palcos, 20 artistas, experiência NFT exclusiva.",
  },
  {
    id: "2",
    title: "Blockchain Summit 2026",
    date: "2026-06-20",
    location: "Rio de Janeiro, RJ",
    price: "0.08 ETH",
    image: "",
    category: "Conferência",
    available: 150,
    total: 300,
    organizer: "BlockBR",
    description: "Conferência sobre o futuro da blockchain no Brasil. Palestrantes internacionais e networking.",
  },
  {
    id: "3",
    title: "Neon Night Party",
    date: "2026-05-28",
    location: "Belo Horizonte, MG",
    price: "0.02 ETH",
    image: "",
    category: "Festa",
    available: 80,
    total: 200,
    organizer: "Neon Events",
    description: "Festa temática neon com DJs internacionais. Ingresso NFT dá acesso a área VIP exclusiva.",
  },
  {
    id: "4",
    title: "eSports Championship",
    date: "2026-07-10",
    location: "Curitiba, PR",
    price: "0.03 ETH",
    image: "",
    category: "eSports",
    available: 500,
    total: 1000,
    organizer: "Game Arena",
    description: "Campeonato de eSports com premiação em crypto. Ingresso NFT colecionável.",
  },
  {
    id: "5",
    title: "Art Basel Web3",
    date: "2026-08-05",
    location: "Florianópolis, SC",
    price: "0.1 ETH",
    image: "",
    category: "Arte",
    available: 45,
    total: 100,
    organizer: "Digital Art Co",
    description: "Exposição de arte digital e NFTs. Experiência imersiva com artistas renomados.",
  },
  {
    id: "6",
    title: "DeFi Meetup SP",
    date: "2026-05-22",
    location: "São Paulo, SP",
    price: "Free",
    image: "",
    category: "Meetup",
    available: 25,
    total: 50,
    organizer: "DeFi Brasil",
    description: "Meetup sobre finanças descentralizadas. Networking e palestras relâmpago.",
  },
];
