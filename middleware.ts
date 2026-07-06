import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define types for protected routes
interface BaseProtectedRoute {
  requiredKeys: string[];
  redirectTo: string;
}

interface RequiresAnyRoute extends BaseProtectedRoute {
  requiresAny: true;
}

interface TokenBasedRoute extends BaseProtectedRoute {
  allowWithToken: true;
}

type ProtectedRoute = BaseProtectedRoute | RequiresAnyRoute | TokenBasedRoute;

// Define protected routes and their required session keys
const protectedRoutes: Record<string, ProtectedRoute> = {
  "/check-email": {
    requiredKeys: ["email_verified", "verified_email"],
    redirectTo: "/register",
  },
  "/resend-otp": {
    requiredKeys: ["temp_user_id", "temp_user_email"],
    redirectTo: "/register",
    requiresAny: true, // At least one of the keys must exist
  },
  "/create-password": {
    // This page allows token-based access OR session-based access
    allowWithToken: true,
    requiredKeys: ["email_verified", "verified_email"],
    redirectTo: "/register",
  },
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the current path is a protected route
  const protectedRoute = protectedRoutes[pathname];

  if (!protectedRoute) {
    // Not a protected route, allow access
    return NextResponse.next();
  }

  // For create-password, check if there's a token in the URL
  if (
    pathname === "/create-password" &&
    "allowWithToken" in protectedRoute &&
    protectedRoute.allowWithToken
  ) {
    const token = request.nextUrl.searchParams.get("token");
    if (token && token.length > 0) {
      // Has token, allow access (backend will validate the token)
      return NextResponse.next();
    }
  }

  // Get session storage data from cookies
  // Note: sessionStorage is client-side only, so we need to use cookies for server-side checks
  const sessionData = request.cookies.get("auth_session_data")?.value;

  if (!sessionData) {
    // No session data, redirect to the specified page
    console.log(
      `⛔ Middleware: No session data for ${pathname}, redirecting to ${protectedRoute.redirectTo}`
    );
    return NextResponse.redirect(
      new URL(protectedRoute.redirectTo, request.url)
    );
  }

  try {
    const session = JSON.parse(sessionData);

    // Check if all required keys exist (or at least one if requiresAny is true)
    const { requiredKeys } = protectedRoute;

    // Check if this route requires any key (not all)
    if ("requiresAny" in protectedRoute && protectedRoute.requiresAny) {
      // At least one key must exist
      const hasAnyKey = requiredKeys.some((key) => session[key]);
      if (!hasAnyKey) {
        console.log(
          `⛔ Middleware: Missing required session keys for ${pathname}, redirecting to ${protectedRoute.redirectTo}`
        );
        return NextResponse.redirect(
          new URL(protectedRoute.redirectTo, request.url)
        );
      }
    } else {
      // All keys must exist
      const hasAllKeys = requiredKeys.every((key) => session[key]);
      if (!hasAllKeys) {
        console.log(
          `⛔ Middleware: Missing required session keys for ${pathname}, redirecting to ${protectedRoute.redirectTo}`
        );
        return NextResponse.redirect(
          new URL(protectedRoute.redirectTo, request.url)
        );
      }

      // Additional check for check-email: email_verified must be "true"
      if (pathname === "/check-email" && session.email_verified !== "true") {
        console.log(
          `⛔ Middleware: Email not verified for ${pathname}, redirecting to ${protectedRoute.redirectTo}`
        );
        return NextResponse.redirect(
          new URL(protectedRoute.redirectTo, request.url)
        );
      }

      // Additional check for create-password: email_verified must be "true"
      if (
        pathname === "/create-password" &&
        session.email_verified !== "true"
      ) {
        console.log(
          `⛔ Middleware: Email not verified for ${pathname}, redirecting to ${protectedRoute.redirectTo}`
        );
        return NextResponse.redirect(
          new URL(protectedRoute.redirectTo, request.url)
        );
      }
    }

    // All checks passed, allow access
    console.log(`✅ Middleware: Access granted to ${pathname}`);
    return NextResponse.next();
  } catch (error) {
    console.error("❌ Middleware: Error parsing session data:", error);
    return NextResponse.redirect(
      new URL(protectedRoute.redirectTo, request.url)
    );
  }
}

// Configure which routes this middleware should run on
export const config = {
  matcher: ["/check-email", "/resend-otp", "/create-password"],
};
