import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tokenResponse = await fetch(
      "https://api.ebay.com/identity/v1/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.EBAY_CLIENT_ID}:${process.env.EBAY_CLIENT_SECRET}`
            ).toString("base64"),
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: process.env.EBAY_REFRESH_TOKEN!,
          scope:
            "https://api.ebay.com/oauth/api_scope/sell.inventory.readonly",
        }),
      }
    );

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      return NextResponse.json(
        {
          error: "Failed to get eBay access token",
          ebay: tokenData,
        },
        { status: tokenResponse.status }
      );
    }

    const inventory = await fetch(
      "https://api.ebay.com/sell/inventory/v1/inventory_item",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const products = await inventory.json();

    if (!inventory.ok) {
      return NextResponse.json(
        {
          error: "Failed to fetch inventory",
          ebay: products,
        },
        { status: inventory.status }
      );
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to load eBay products",
      },
      { status: 500 }
    );
  }
}