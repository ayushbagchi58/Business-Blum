import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AuthService } from "@/services/auth.service";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials, logout } from "@/store/slices/authSlice";
import {
  ApiResponse,
  ApiError,
  RegisterRequest,
  RegisterResponse,
  VerifyOTPRequest,
  VerifyOTPResponse,
  ResendOTPRequest,
  ResendOTPResponse,
  CreatePasswordRequest,
  CreatePasswordResponse,
  LoginRequest,
  LoginResponse,
} from "@/types/auth.types";
import {
  extractErrorMessage,
  extractSuccessMessage,
} from "@/lib/apiErrorHandler";

/**
 * Hook for user registration
 */
export const useRegister = (): UseMutationResult<
  ApiResponse<RegisterResponse>,
  AxiosError<ApiError>,
  RegisterRequest
> => {
  return useMutation({
    mutationFn: (data: RegisterRequest) => AuthService.register(data),
    onSuccess: (response) => {
      if (response.success) {
        const message = extractSuccessMessage(
          response,
          "Registration successful!"
        );
        toast.success(message);
      }
    },
    onError: (error: AxiosError<ApiError>) => {
      const message = extractErrorMessage(
        error,
        "Registration failed. Please try again."
      );
      toast.error(message);
    },
  });
};

/**
 * Hook for OTP verification
 */
export const useVerifyOTP = (): UseMutationResult<
  ApiResponse<VerifyOTPResponse>,
  AxiosError<ApiError>,
  VerifyOTPRequest
> => {
  return useMutation({
    mutationFn: (data: VerifyOTPRequest) => AuthService.verifyOTP(data),
    onSuccess: (response) => {
      if (response.success) {
        const message = extractSuccessMessage(
          response,
          "Email verified successfully!"
        );
        toast.success(message);
      }
    },
    onError: (error: AxiosError<ApiError>) => {
      const message = extractErrorMessage(
        error,
        "Verification failed. Please try again."
      );
      toast.error(message);
    },
  });
};

/**
 * Hook for resending OTP
 */
export const useResendOTP = (): UseMutationResult<
  ApiResponse<ResendOTPResponse>,
  AxiosError<ApiError>,
  ResendOTPRequest
> => {
  return useMutation({
    mutationFn: (data: ResendOTPRequest) => AuthService.resendOTP(data),
    onSuccess: (response) => {
      if (response.success) {
        const message = extractSuccessMessage(
          response,
          "Verification code sent successfully!"
        );
        toast.success(message);
      }
    },
    onError: (error: AxiosError<ApiError>) => {
      const message = extractErrorMessage(
        error,
        "Failed to resend code. Please try again."
      );
      toast.error(message);
    },
  });
};

/**
 * Hook for creating password with token
 */
export const useCreatePassword = (): UseMutationResult<
  ApiResponse<CreatePasswordResponse>,
  AxiosError<ApiError>,
  { token: string; data: CreatePasswordRequest }
> => {
  return useMutation({
    mutationFn: ({
      token,
      data,
    }: {
      token: string;
      data: CreatePasswordRequest;
    }) => AuthService.createPassword(token, data),
    onSuccess: (response) => {
      if (response.success) {
        const message = extractSuccessMessage(
          response,
          "Password created successfully!"
        );
        toast.success(message);
      }
    },
    onError: (error: AxiosError<ApiError>) => {
      const message = extractErrorMessage(
        error,
        "Failed to create password. Please try again."
      );
      toast.error(message);
    },
  });
};

/**
 * Hook for user login
 */
export const useLogin = (): UseMutationResult<
  ApiResponse<LoginResponse>,
  AxiosError<ApiError>,
  LoginRequest
> => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginRequest) => AuthService.login(data),
    onSuccess: (response) => {
      if (response.success && response.data) {
        // Transform API response to match Redux state
        const user = {
          id: response.data.owner_details.user_id,
          email: response.data.owner_details.email,
          first_name: response.data.owner_details.first_name,
          last_name: response.data.owner_details.last_name,
          company_id: response.data.company_details.company_id,
          legal_name: response.data.company_details.legal_name,
          is_email_verify: response.data.owner_details.is_email_verify,
        };

        // Save to Redux store (which also saves to localStorage)
        dispatch(
          setCredentials({
            user,
            access_token: response.data.tokens.access_token,
            refresh_token: response.data.tokens.refresh_token,
          })
        );

        // Show success message from API
        const message = extractSuccessMessage(response, "Login successful!");
        toast.success(message);

        // Redirect to dashboard
        router.push("/dashboard");
      }
    },
    onError: (error: AxiosError<ApiError>) => {
      const message = extractErrorMessage(
        error,
        "Login failed. Please check your credentials."
      );
      toast.error(message);
    },
  });
};

/**
 * Hook for user logout
 */
export const useLogout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      // If you have a logout API endpoint in the future, call it here
      // For now, we just handle client-side logout
      return Promise.resolve();
    },
    onSuccess: () => {
      // Clear Redux state and localStorage
      dispatch(logout());

      // Show success message
      toast.success("Logged out successfully");

      // Redirect to login page
      router.push("/login");
    },
    onError: () => {
      // Even if there's an error, clear local state
      dispatch(logout());
      toast.info("You have been logged out");
      router.push("/login");
    },
  });
};
