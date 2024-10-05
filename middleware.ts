import { useUser } from "@clerk/nextjs";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedPages = createRouteMatcher(["/meetings", "/groups", "/"]);

export default clerkMiddleware((auth, req, evt) => {
  if (protectedPages(req))
    auth().protect({ unauthenticatedUrl: "http://localhost:3000/sign-in" }); //todo: change to prod url
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
