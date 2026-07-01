export interface Stat {
  id: number;
  icon: string;
  value: string;
  label: string;
}

export interface StatsSectionProps {
  stats: Stat[];
}
