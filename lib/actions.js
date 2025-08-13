"use server";

import clientPromise from "../lib/mongodb";

export async function addToCart(product) {
  try {
    const client = await clientPromise;
    const db = client.db("shop");
    await db.collection("cart").insertOne({
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    return { message: "Item added to cart" };
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
}
