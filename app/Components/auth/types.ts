export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
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
