export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface LeadershipSectionData {
  badge: string;
  title: string;
  subtitle: string;
  members: TeamMember[];
}
