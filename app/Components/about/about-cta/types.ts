export interface CTAButton {
  label: string;
  href: string;
}

export interface AboutCTASectionContent {
  heading: string;
  description: string;
  button: CTAButton;
}

export interface AboutCTASectionData {
  content: AboutCTASectionContent;
}
