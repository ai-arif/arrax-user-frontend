import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const authToken = request.cookies.get("arx_auth_token")?.value;
  const { pathname } = request.nextUrl;

  // Check if the route is a public route
  const isPublicRoute = pathname.startsWith("/login");

  // Check if the requested path is a dashboard route
  const isDashboardRoute = pathname.startsWith("/dashboard");

  // Check if the requested path is an admin-only route
  const isAdminRoute = pathname.startsWith("/dashboard/admin");

  // Decode JWT and extract the role
  let isRoleAdmin = false;
  if (authToken) {
    const decodedToken = jwtDecode(authToken);
    if (decodedToken?.roles?.some((role) => role === "admin")) {
      isRoleAdmin = true;
    }
  }

  // Redirect to login if user is not authenticated and accessing a protected route
  if (!authToken && isDashboardRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Restrict admin routes to only admin
  if (isAdminRoute && !isRoleAdmin) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Redirect authenticated users away from public routes
  if (isPublicRoute && authToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If all checks pass, proceed with the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard", "/login"],
};
