// Auth Request Types
export interface RegisterRequest {
  legal_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

export interface VerifyOTPRequest {
  user_id: string;
  otp: string;
}

export interface ResendOTPRequest {
  email: string;
}

export interface CreatePasswordRequest {
  password: string;
  confirm_password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

// Auth Response Types
export interface ApiResponse<T = unknown> {
  code: number;
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

export interface RegisterResponse {
  company_id: string;
  legal_name: string;
  owner: {
    uid: string;
    owner_id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
  };
}

export interface VerifyOTPResponse {
  id: string;
  company_id: string;
  legal_name: string;
  owner: {
    id: string;
    owner_id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
  };
}

export interface ResendOTPResponse {
  message: string;
}

export interface CreatePasswordResponse {
  id: string;
  company_id: string;
  legal_name: string;
  owner: {
    id: string;
    owner_id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    is_email_verified: boolean;
    is_password_set: boolean;
  };
}

export interface LoginResponse {
  company_details: {
    company_id: string;
    company_prefix: string;
    legal_name: string;
    first_name: string;
    trade_name: string | null;
    business_entity_type: string | null;
    tax_id: string | null;
    business_address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    business_phone_number: string | null;
    company_email_address: string | null;
    industry_type: string | null;
    time_in_business: string | null;
    average_monthly_revenue: number | null;
    annual_revenue: number | null;
  };
  owner_details: {
    uid: number;
    user_id: string;
    first_name: string;
    last_name: string;
    email: string;
    is_email_verify: boolean;
    phone_number: string;
  };
  tokens: {
    access_token: string;
    refresh_token: string;
  };
}

// Auth State Types
export interface AuthState {
  user: {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    company_id: string;
    legal_name: string;
    is_email_verify: boolean;
  } | null;
  access_token: string | null;
  refresh_token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

// API Error Type
export interface ApiError {
  code: number;
  message: string;
  errors?: Record<string, string[]>;
}
