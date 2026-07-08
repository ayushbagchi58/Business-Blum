export const resetPasswordData = {
  title: "Reset Your Password",
  subtitle: "Choose a new strong password to secure your account",
  requirements: [
    {
      id: "minLength",
      label: "At least 8 characters",
      regex: /.{8,}/,
    },
    {
      id: "uppercase",
      label: "One uppercase letter",
      regex: /[A-Z]/,
    },
    {
      id: "lowercase",
      label: "One lowercase letter",
      regex: /[a-z]/,
    },
    {
      id: "number",
      label: "One number",
      regex: /\d/,
    },
    {
      id: "special",
      label: "One special character (!@#$%^&*)",
      regex: /[!@#$%^&*(),.?":{}|<>]/,
    },
  ],
  strengthLevels: [
    { score: 0, label: "Very Weak", color: "#ef4444" },
    { score: 1, label: "Weak", color: "#f97316" },
    { score: 2, label: "Fair", color: "#eab308" },
    { score: 3, label: "Good", color: "#22c55e" },
    { score: 4, label: "Strong", color: "#0EA56B" },
  ],
};
