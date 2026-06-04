export interface ButtonType {
  id: number;
  title: string;
  primary: boolean;
  icon: boolean;
}

export interface FeatureType {
  id: number;
  title: string;
  subtitle: string;
}

export interface HeroDataType {
  badge: string;

  title: {
    first: string;
    highlight: string;
  };

  description: string;

  buttons: ButtonType[];

  features: FeatureType[];

  features: FeatureType[];
}
