import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  const isLoginPage = request.nextUrl.pathname === "/login";

  if (!token && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/users/:path*",
    "/roles/:path*",
    "/customers/:path*",
    "/locations/:path*",
    "/carriers/:path*",
    "/drivers/:path*",
    "/trucks/:path*",
    "/loads/:path*",
    "/dispatch/:path*",
    "/tracking/:path*",
    "/reports/:path*",
    "/admin/:path*",
  ],
};