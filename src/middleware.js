import { NextResponse } from "next/server";

export async function middleware(request) {
  const authToken = request.cookies.get("arx_auth_token")?.value;
  const { pathname } = request.nextUrl;

  // Check if the requested path is a dashboard route
  const isDashboardRoute = pathname.startsWith("/dashboard");

  // Redirect to login if user is not authenticated and accessing a protected route
  if (!authToken && isDashboardRoute) {
    console.log("inside login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Check if the route is a public route
  const isPublicRoute = pathname.startsWith("/login");

  // Redirect authenticated users away from public routes
  if (isPublicRoute && authToken) {
    console.log("inside dashboard");
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If all checks pass, proceed with the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard", "/login"],
};
