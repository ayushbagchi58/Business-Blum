export interface ContactFormField {
  id: number;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  required?: boolean;
}

export interface BusinessHour {
  id: number;
  day: string;
  time: string;
}

export interface ContactSidebarCard {
  id: number;
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  icon: string;
}

export interface ContactFormSectionData {
  heading: string;
  disclaimer: string;
  submitButtonText: string;
  formFields: ContactFormField[];
  businessHours: BusinessHour[];
  sidebarCards: ContactSidebarCard[];
}
