import { AuthTestimonial, AuthStats } from "./types";

export const loginTestimonial: AuthTestimonial = {
  id: 1,
  quote:
    "Business Blum matched us with three lenders within hours. We were funded 48 hours — unbelievable speed.",
  author: "Jeshurun Merkin",
  role: "Founder & COO",
  company: "Infinanze Technologies",
  avatar:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces",
};

export const registerTestimonial: AuthTestimonial = {
  id: 2,
  quote:
    "The AI matching gave me three relevant offers with no spam. Best platform experience I've had in business finance.",
  author: "Derrick Aryee",
  role: "Founder & CEO",
  company: "Business Blum",
  avatar:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces",
};

export const authStats: AuthStats = {
  funded: "$2.4B+",
  businesses: "50K+",
  partners: "200+",
};
