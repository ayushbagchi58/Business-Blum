import { AxiosError } from "axios";

/**
 * API Error Response type
 */
interface ApiErrorResponse {
  message?: string;
  error?: string;
  errors?: string | string[] | Record<string, string | string[]>;
  detail?: string;
}

/**
 * Extract error message from API error response
 * Handles different error response structures from the backend
 */
export const extractErrorMessage = (
  error: AxiosError<ApiErrorResponse>,
  fallbackMessage = "An error occurred. Please try again."
): string => {
  if (!error.response?.data) {
    return fallbackMessage;
  }

  const errorData = error.response.data;

  // Check for 'message' field (most common)
  if (errorData.message && typeof errorData.message === "string") {
    return errorData.message;
  }

  // Check for 'error' field
  if (errorData.error && typeof errorData.error === "string") {
    return errorData.error;
  }

  // Handle validation errors object
  if (errorData.errors) {
    const errors = errorData.errors;

    // If errors is an object with field-specific messages
    if (typeof errors === "object" && !Array.isArray(errors)) {
      const firstErrorKey = Object.keys(errors)[0];
      const firstError = errors[firstErrorKey];

      if (Array.isArray(firstError) && firstError.length > 0) {
        return firstError[0];
      } else if (typeof firstError === "string") {
        return firstError;
      }
    }

    // If errors is a direct string
    if (typeof errors === "string") {
      return errors;
    }

    // If errors is an array
    if (Array.isArray(errors) && errors.length > 0) {
      return errors[0];
    }
  }

  // Check for 'detail' field (some APIs use this)
  if (errorData.detail && typeof errorData.detail === "string") {
    return errorData.detail;
  }

  return fallbackMessage;
};

/**
 * Extract success message from API success response
 * Accepts any response structure and extracts the message field
 */
export const extractSuccessMessage = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: any,
  fallbackMessage = "Operation successful!"
): string => {
  if (response?.message && typeof response.message === "string") {
    return response.message;
  }

  if (response?.data?.message && typeof response.data.message === "string") {
    return response.data.message;
  }

  return fallbackMessage;
};
