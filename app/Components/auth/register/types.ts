export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  verificationCode: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  ssnLast4: string;
  creditAuthorization: boolean;
}

export type RegistrationStep = 1 | 2 | 3 | 4 | 5;
