import { Transition } from "framer-motion";

export interface GlowOrb {
  id: number;
  className: string;

  animate: {
    scale?: number[];
    opacity?: number[];
    x?: number[];
    y?: number[];
  };

  transition: Transition;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  badge: string;
}

export interface AboutSectionData {
  glowOrbs: GlowOrb[];
  content: AboutContent;
}
