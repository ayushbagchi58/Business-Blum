import { useEffect } from "react";

/**
 * Custom hook to sync sessionStorage with cookies for middleware access
 * This allows server-side middleware to read session data that's stored in sessionStorage
 */
export function useAuthSession() {
  useEffect(() => {
    // Function to sync sessionStorage to cookies
    const syncSessionToCookies = () => {
      // Collect auth-related session data
      const sessionData = {
        temp_user_id: sessionStorage.getItem("temp_user_id"),
        temp_user_email: sessionStorage.getItem("temp_user_email"),
        email_verified: sessionStorage.getItem("email_verified"),
        verified_email: sessionStorage.getItem("verified_email"),
      };

      // Only sync if there's any data
      const hasData = Object.values(sessionData).some(
        (value) => value !== null
      );

      if (hasData) {
        // Set cookie with session data (expires in 1 hour)
        const expiryDate = new Date();
        expiryDate.setHours(expiryDate.getHours() + 1);

        document.cookie = `auth_session_data=${encodeURIComponent(
          JSON.stringify(sessionData)
        )}; path=/; expires=${expiryDate.toUTCString()}; SameSite=Strict`;
      } else {
        // Clear the cookie if no data exists
        document.cookie =
          "auth_session_data=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict";
      }
    };

    // Initial sync
    syncSessionToCookies();

    // Listen for storage events (when sessionStorage changes in the same tab)
    const handleStorageChange = () => {
      syncSessionToCookies();
    };

    window.addEventListener("storage", handleStorageChange);

    // Sync on focus (in case sessionStorage was cleared)
    window.addEventListener("focus", syncSessionToCookies);

    // Periodic sync every 5 seconds to catch any changes
    const intervalId = setInterval(syncSessionToCookies, 5000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("focus", syncSessionToCookies);
      clearInterval(intervalId);
    };
  }, []);
}
