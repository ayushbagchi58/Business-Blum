import * as yup from "yup";

export const step1Schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export const step2Schema = yup.object().shape({
  verificationCode: yup
    .string()
    .matches(/^\d{6}$/, "Verification code must be 6 digits")
    .required("Verification code is required"),
});

export const step3Schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "First name must be at least 2 characters")
    .matches(/^[a-zA-Z\s]*$/, "First name can only contain letters")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Last name must be at least 2 characters")
    .matches(/^[a-zA-Z\s]*$/, "Last name can only contain letters")
    .required("Last name is required"),
  dateOfBirth: yup
    .string()
    .required("Date of birth is required")
    .test("age", "You must be at least 18 years old", function (value) {
      if (!value) return false;
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        return age - 1 >= 18;
      }
      return age >= 18;
    }),
  phoneNumber: yup
    .string()
    .matches(/^[\d\s\-\(\)]+$/, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
});

export const step4Schema = yup.object().shape({
  ssnLast4: yup
    .string()
    .matches(/^\d{4}$/, "Must be exactly 4 digits")
    .required("Last 4 digits of SSN are required"),
});

export const step5Schema = yup.object().shape({
  creditAuthorization: yup
    .boolean()
    .oneOf([true], "You must authorize credit monitoring to continue")
    .required("Authorization is required"),
});
