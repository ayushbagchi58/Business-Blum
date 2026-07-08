export interface ResetPasswordFormData {
  password: string;
  confirm_password: string;
}

export interface PasswordStrength {
  score: number;
  label: string;
  color: string;
  requirements: PasswordRequirement[];
}

export interface PasswordRequirement {
  id: string;
  label: string;
  met: boolean;
}
