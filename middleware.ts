import { type MiddlewareResponse } from "@netlify/next";
import { NextResponse, type NextRequest } from "next/server";

type NextRequestCustom = Omit<NextRequest, "geo"> & { geo: any };

export async function middleware(
  nextRequest: NextRequestCustom
): Promise<MiddlewareResponse | NextResponse> {
  console.log("test");

  return NextResponse.next();
}
