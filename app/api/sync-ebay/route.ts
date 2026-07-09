import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Get OAuth Access Token
    const tokenResponse = await fetch(
      "https://api.ebay.com/identity/v1/oauth2/token",
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.EBAY_CLIENT_ID}:${process.env.EBAY_CLIENT_SECRET}`
            ).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: process.env.EBAY_REFRESH_TOKEN!,
          scope:
            "https://api.ebay.com/oauth/api_scope/sell.inventory.readonly",
        }),
      }
    );

    const token = await tokenResponse.json();

    if (!token.access_token) {
      return NextResponse.json(token);
    }

    // Download inventory
    const response = await fetch(
      "https://api.ebay.com/sell/inventory/v1/inventory_item",
      {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      }
    );

    const inventory = await response.json();

    if (!inventory.inventoryItems) {
      return NextResponse.json(inventory);
    }

    // Save products
    for (const item of inventory.inventoryItems) {
      await prisma.product.upsert({
        where: {
          sku: item.sku,
        },
        update: {
          name: item.product.title,
          stock: item.availability.shipToLocationAvailability.quantity,
        },
        create: {
          sku: item.sku,
          name: item.product.title,
          stock:
            item.availability.shipToLocationAvailability.quantity,
          sellPrice: 0,
        },
      });
    }

    return NextResponse.json({
      imported: inventory.inventoryItems.length,
    });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { error: "Sync failed" },
      { status: 500 }
    );
  }
}