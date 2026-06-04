import { AboutSectionData } from "./types";

export const aboutSectionData: AboutSectionData = {
  glowOrbs: [
    {
      id: 1,
      className:
        "absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl",
      animate: {
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      },
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    {
      id: 2,
      className:
        "absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-3xl",
      animate: {
        x: [0, 40, 0],
        y: [0, -20, 0],
      },
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  ],

  content: {
    title: "Welcome to Business Blum",
    subtitle:
      "A modern business funding company designed for ambitious entrepreneurs, growing companies, and business owners who move with purpose.",
    badge: "Institutional Business Capital Solutions",
  },
};
