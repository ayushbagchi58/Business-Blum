import { ReviewsSectionData } from "./types";

export const reviewsSectionData: ReviewsSectionData = {
  badge: "Client Excellence",
  title: "What Business Leaders Say",
  subtitle:
    "Verified feedback from executives we've empowered with strategic capital",

  reviewSources: [
    {
      id: 1,
      source: "Google",
      rating: 4.8,
      totalReviews: 8547,
    },
    {
      id: 2,
      source: "Trustpilot",
      rating: 4.7,
      totalReviews: 3892,
    },
    {
      id: 3,
      source: "BBB",
      rating: 4.9,
      totalReviews: 1247,
    },
  ],

  detailedReviews: [
    {
      id: 1,
      name: "Sarah Martinez",
      role: "Principal, Martinez Bakery",
      location: "Austin, TX",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
      rating: 5,
      review:
        "Business Blum facilitated a seamless capital acquisition process for our expansion initiative. We submitted our application morning, received competitive proposals by midday, and secured $85,000 in growth financing by close of business. Their institutional approach and transparency set a new benchmark for professional business financing.",
      date: "2 weeks ago",
      fundingAmount: "$85,000",
      source: "Google",
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, Chen Consulting",
      location: "Los Angeles, CA",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
      rating: 5,
      review:
        "Following conventional banking constraints, Business Blum connected us with institutional partners who appreciated our business model's sophistication. The $250K term facility we secured featured competitive covenants and enabled us to double revenue within the fiscal year. Exceptional partnership.",
      date: "1 month ago",
      fundingAmount: "$250,000",
      source: "Trustpilot",
      verified: true,
    },
    {
      id: 3,
      name: "Jessica Thompson",
      role: "Managing Director, Thompson Consulting",
      location: "Seattle, WA",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
      rating: 5,
      review:
        "When critical infrastructure financing became urgent, Business Blum delivered $15K in working capital within 24 hours. No hidden covenants, complete transparency. Their responsiveness during a pivotal operational moment was extraordinary.",
      date: "3 weeks ago",
      fundingAmount: "$15,000",
      source: "Google",
      verified: true,
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Principal, Rodriguez Automotive",
      location: "Miami, FL",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      rating: 5,
      review:
        "Exemplary business expansion financing experience. The soft credit inquiry preserved our credit profile while evaluating options. We secured $120K in equipment financing with institutional-grade terms. Their professionalism is unmatched in the industry.",
      date: "1 week ago",
      fundingAmount: "$120,000",
      source: "BBB",
      verified: true,
    },
    {
      id: 5,
      name: "Emily Parker",
      role: "Founder & CEO, Parker Marketing Group",
      location: "Chicago, IL",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400",
      rating: 5,
      review:
        "As an emerging enterprise, traditional funding channels proved inaccessible. Business Blum matched us with an SBA institutional partner who recognized our growth trajectory. The $500K strategic capital facility enabled us to scale to 25 professionals. Truly transformative partnership.",
      date: "2 months ago",
      fundingAmount: "$500,000",
      source: "Trustpilot",
      verified: true,
    },
    {
      id: 6,
      name: "Robert Williams",
      role: "Managing Partner, Williams Construction Group",
      location: "Phoenix, AZ",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
      rating: 4,
      review:
        "Professional service delivery throughout. While our initial $300K request yielded $200K approval, the working capital facility adequately supported our expansion requirements. Their responsive account management and transparent communication exceeded industry standards.",
      date: "1 month ago",
      fundingAmount: "$200,000",
      source: "Google",
      verified: true,
    },
  ],
};
