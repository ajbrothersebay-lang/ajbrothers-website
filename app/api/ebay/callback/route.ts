import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("Full URL:", request.url);
  console.log("Search:", request.nextUrl.search);

  return NextResponse.json({
    url: request.url,
    search: request.nextUrl.search,
  });
}