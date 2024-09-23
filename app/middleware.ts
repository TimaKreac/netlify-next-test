import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname, search, origin } = request.nextUrl;
  const response = NextResponse.next();
  const fullURL = origin + pathname;

  console.log("1", request.nextUrl);
  console.log("2", pathname);

  if (pathname.endsWith("/")) {
    response.headers.set("X-Robots-Tag", "noindex");
  }

  response.headers.set("x-pathname", pathname);
  response.headers.set("x-url", fullURL);
  response.headers.set("x-queryString", search);

  return response;
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon|manifest|robots|sitemap*|opengraph-image|twitter-image).*)",
};
