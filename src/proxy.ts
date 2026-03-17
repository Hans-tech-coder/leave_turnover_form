import { auth } from "@/auth"

export const proxy = auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
  const isPublicRoute = ["/login"].includes(nextUrl.pathname);

  if (isApiAuthRoute) return;

  if (isPublicRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl));
    }
    return;
  }

  if (!isLoggedIn) {
    return Response.redirect(new URL("/login", nextUrl));
  }
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|logos|login).*)"],
}
