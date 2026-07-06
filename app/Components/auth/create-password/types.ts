export interface CreatePasswordFormData {
  password: string;
  confirm_password: string;
}

export interface PasswordStrength {
  score: number; // 0-4
  label: string;
  color: string;
  requirements: PasswordRequirement[];
}

export interface PasswordRequirement {
  id: string;
  label: string;
  met: boolean;
}
