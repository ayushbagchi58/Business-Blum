import { apiClient } from "@/lib/axios";
import { API } from "@/lib/endpoints";
import {
  ApiResponse,
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

export class AuthService {
  /**
   * Register a new company/user
   */
  static async register(
    data: RegisterRequest
  ): Promise<ApiResponse<RegisterResponse>> {
    const response = await apiClient.post<ApiResponse<RegisterResponse>>(
      API.AUTH.REGISTER,
      data
    );
    return response.data;
  }

  /**
   * Verify OTP for email verification
   */
  static async verifyOTP(
    data: VerifyOTPRequest
  ): Promise<ApiResponse<VerifyOTPResponse>> {
    const response = await apiClient.post<ApiResponse<VerifyOTPResponse>>(
      API.AUTH.VERIFICATION,
      data
    );
    return response.data;
  }

  /**
   * Resend OTP verification code
   */
  static async resendOTP(
    data: ResendOTPRequest
  ): Promise<ApiResponse<ResendOTPResponse>> {
    console.log("📤 AuthService.resendOTP called");
    console.log("  Endpoint:", API.AUTH.RESENDOTP);
    console.log("  Data:", JSON.stringify(data, null, 2));

    const response = await apiClient.post<ApiResponse<ResendOTPResponse>>(
      API.AUTH.RESENDOTP,
      data
    );

    console.log("📥 AuthService.resendOTP response:", response.data);
    return response.data;
  }

  /**
   * Create password with token from email
   */
  static async createPassword(
    token: string,
    data: CreatePasswordRequest
  ): Promise<ApiResponse<CreatePasswordResponse>> {
    // Use endpoint from config with dynamic token
    const endpoint = `${API.AUTH.CREATEPASSWORD}/${token}`;

    console.log("📤 AuthService.createPassword called");
    console.log("  Endpoint:", endpoint);
    console.log("  Token:", token);
    console.log("  Data:", { password: "***", confirm_password: "***" });

    const response = await apiClient.post<ApiResponse<CreatePasswordResponse>>(
      endpoint,
      data
    );

    console.log("📥 AuthService.createPassword response:", response.data);
    return response.data;
  }

  /**
   * Login user
   */
  static async login(data: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    console.log("📤 AuthService.login called");
    console.log("  Endpoint:", API.AUTH.LOGIN);
    console.log("  Data:", { email: data.email, password: "***" });

    const response = await apiClient.post<ApiResponse<LoginResponse>>(
      API.AUTH.LOGIN,
      data
    );

    console.log("📥 AuthService.login response:", response.data);
    return response.data;
  }
}
