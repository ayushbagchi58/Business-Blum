export interface EmailVerificationProps {
  email: string;
  onVerificationComplete: () => void;
  onResendCode?: () => void;
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
