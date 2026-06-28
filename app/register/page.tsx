import {
  AuthLayout,
  RegisterForm,
  registerTestimonial,
  authStats,
} from "../Components/auth";

export default function RegisterPage() {
  return (
    <AuthLayout testimonial={registerTestimonial} stats={authStats}>
      <RegisterForm />
    </AuthLayout>
  );
}
