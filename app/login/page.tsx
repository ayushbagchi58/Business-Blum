import {
  AuthLayout,
  LoginForm,
  loginTestimonial,
  authStats,
} from "../Components/auth";

export default function LoginPage() {
  return (
    <AuthLayout testimonial={loginTestimonial} stats={authStats}>
      <LoginForm />
    </AuthLayout>
  );
}
