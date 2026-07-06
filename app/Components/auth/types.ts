export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface RegisterFormData {
  legal_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

export interface AuthTestimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface AuthStats {
  funded: string;
  businesses: string;
  partners: string;
}
