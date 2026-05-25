export interface StatItem {
  id: number;
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  title: string;
  subtitle: string;
}

export interface StatsSectionData {
  stats: StatItem[];
}
