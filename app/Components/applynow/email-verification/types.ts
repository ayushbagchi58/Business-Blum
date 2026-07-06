export interface EmailVerificationProps {
  email: string;
  onVerificationComplete: (otp: string) => void | Promise<void>;
  onResendCode?: () => void;
  isVerifying?: boolean;
  resetTimer?: boolean;
}

export interface VerificationData {
  title: string;
  subtitle: string;
  codeLength: number;
  resendCooldown: number;
  instructions: VerificationInstruction[];
}

export interface VerificationInstruction {
  id: number;
  text: string;
  icon: string;
}
