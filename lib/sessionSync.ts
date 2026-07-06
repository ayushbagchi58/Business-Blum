/**
 * Utility functions to sync sessionStorage with cookies for middleware access
 * Call these functions after updating sessionStorage to ensure immediate sync
 */

/**
 * Sync sessionStorage to cookies immediately
 * Call this after updating sessionStorage values
 */
export function syncSessionToCookies() {
  if (typeof window === "undefined") return;

  // Collect auth-related session data
  const sessionData = {
    temp_user_id: sessionStorage.getItem("temp_user_id"),
    temp_user_email: sessionStorage.getItem("temp_user_email"),
    email_verified: sessionStorage.getItem("email_verified"),
    verified_email: sessionStorage.getItem("verified_email"),
  };

  // Only sync if there's any data
  const hasData = Object.values(sessionData).some((value) => value !== null);

  if (hasData) {
    // Set cookie with session data (expires in 1 hour)
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 1);

    document.cookie = `auth_session_data=${encodeURIComponent(
      JSON.stringify(sessionData)
    )}; path=/; expires=${expiryDate.toUTCString()}; SameSite=Strict`;

    console.log("✅ Session synced to cookies:", sessionData);
  } else {
    // Clear the cookie if no data exists
    document.cookie =
      "auth_session_data=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict";

    console.log("🗑️ Session cookies cleared");
  }
}

/**
 * Clear auth session data from both sessionStorage and cookies
 * Call this on logout or when clearing auth state
 */
export function clearAuthSession() {
  if (typeof window === "undefined") return;

  // Clear sessionStorage
  sessionStorage.removeItem("temp_user_id");
  sessionStorage.removeItem("temp_user_email");
  sessionStorage.removeItem("email_verified");
  sessionStorage.removeItem("verified_email");
  sessionStorage.removeItem("otp_resent");
  sessionStorage.removeItem("otp_resent_time");
  sessionStorage.removeItem("resend_email");

  // Clear cookie
  document.cookie =
    "auth_session_data=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict";

  console.log("🗑️ Auth session cleared");
}
