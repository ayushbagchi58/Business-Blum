import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// Get base URL from environment variable
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

console.log("🔧 Axios Configuration:");
console.log("  baseURL from env:", baseURL);

// Validate base URL
if (!baseURL) {
  throw new Error(
    "❌ NEXT_PUBLIC_API_BASE_URL is not defined in environment variables!"
  );
}

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: false, // Set to true if backend requires credentials
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Construct full URL for logging
    const fullURL = `${config.baseURL}${config.url}`;

    // Log request details
    console.log("🌐 Axios Request:");
    console.log("  Method:", config.method?.toUpperCase());
    console.log("  Base URL:", config.baseURL);
    console.log("  Endpoint:", config.url);
    console.log("  Full URL:", fullURL);
    console.log("  Data:", config.data);

    // Add auth token if exists
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: AxiosError) => {
    console.error("❌ Axios Request Error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle common error scenarios
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          if (typeof window !== "undefined") {
            localStorage.removeItem("access_token");
            localStorage.removeItem("user");
            // Only redirect if not already on auth pages
            const pathname = window.location.pathname;
            if (
              !pathname.includes("/login") &&
              !pathname.includes("/register")
            ) {
              window.location.href = "/login";
            }
          }
          break;
      }
    }

    return Promise.reject(error);
  }
);

// Generic API methods
export const apiClient = {
  get: <T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.get<T>(url, config);
  },

  post: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.post<T>(url, data, config);
  },

  put: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.put<T>(url, data, config);
  },

  patch: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.patch<T>(url, data, config);
  },

  delete: <T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.delete<T>(url, config);
  },
};

export default axiosInstance;
