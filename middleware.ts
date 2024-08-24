import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    // Get the authToken cookie from the request
    const authToken = request.cookies.get("authToken");

    // Public path (no authentication required)
    const publicPaths = ["/", "/auth/login", "/auth/register"];
    const authPath = ["/auth/login", "/auth/register"];

    // Check if the request is for a public path
    const isPublicPath = publicPaths.includes(request.nextUrl.pathname);
    const isAuthPath = authPath.includes(request.nextUrl.pathname)

    // if already login
    if (authToken && isAuthPath){
        return NextResponse.redirect(new URL("/", request.url))
    }

    // If the path is public, allow access
    if (isPublicPath) {
        return NextResponse.next();
    }

    const isLoggedIn = authToken !== undefined;

    // If authToken exists, allow access to the requested path
    if (isLoggedIn) {
        return NextResponse.next();
    }

    // If the user is not authenticated, redirect to the login page
    return NextResponse.redirect(new URL("/auth/login", request.url));
}

// Apply this middleware to all routes
export const config = {
    matcher: [
        "/((?!_next/static|_next/image|assets|favicon.ico).*)", // Apply to all routes except Next.js static files
    ],
};