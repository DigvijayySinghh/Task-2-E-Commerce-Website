import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa6";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

async function fetchCartItems() {
  try {
    const client = await clientPromise;
    const db = client.db("shop");
    const cartItems = await db.collection("cart").find({}).toArray();
    return cartItems;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return [];
  }
}

async function removeCartItem(itemId) {
  "use server";
  try {
    const client = await clientPromise;
    const db = client.db("shop");
    const result = await db
      .collection("cart")
      .deleteOne({ _id: new ObjectId(itemId) });
    if (result.deletedCount === 0) {
      throw new Error("Item not found");
    }
    revalidatePath("/cart"); // Refresh cart page
    return { message: "Item removed successfully" };
  } catch (error) {
    console.error("Error removing cart item:", error);
    throw error;
  }
}

export default async function Cart() {
  const cartItems = await fetchCartItems();

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 250;
  const tax = subtotal * 0.05; // Example: 5% tax
  const total = subtotal + shipping + tax;

  return (
    <div>
      <NavBar />
      <div className="bg h-[90vh] w-full flex justify-center items-center">
        <div className="cart-div h-[80vh] w-[85vw] p-5 flex flex-col gap-3 bg-gray-50 rounded-2xl shadow-xl">
          <div className="heading flex gap-1 items-center">
            <div className="home-text text-2xl font-medium">Home </div>
            <FaGreaterThan className="text-xs" />
            <div className="cart-text text-2xl font-medium">Cart</div>
          </div>
          <div className="main-cart h-[75vh] flex gap-3">
            <div className="left-cart">
              <div className="cart-items h-[55vh] w-[55vw] flex flex-col gap-1 p-1 overflow-y-scroll">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="cart-product h-[10vh] flex gap-3 p-1 rounded-lg relative hover:bg-gray-100"
                    >
                      <div className="img relative h-[70px] w-[70px]">
                        <Image
                          className="rounded-lg object-cover object-center hover:bg-gray-100"
                          fill
                          sizes="(max-width: 70px) 100vw, 70px"
                          quality={100}
                          priority
                          src={item.imageUrl}
                          alt="https://img.freepik.com/premium-vector/folding-clothes-vector-icon-illustration-cleaning-dusting-iconset_904970-134451.jpg"
                        />
                      </div>
                      <div className="product-name text-md text-wrap w-[33vw]">
                        {item.name}
                      </div>
                      <div className="product-info flex justify-center items-center gap-5">
                        <div className="product-price text-lg">
                          &#43; &#8377;{item.price}
                        </div>
                        <form
                          action={removeCartItem.bind(
                            null,
                            item._id.toString()
                          )}
                        >
                          <button
                            type="submit"
                            className="delete-btn h-[30px] w-[80px] text-center text-red-500 rounded-md cursor-pointer bg-white"
                          >
                            Remove
                          </button>
                        </form>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-md">Your cart is empty</div>
                )}
              </div>
              <div className="promo-code-div flex flex-col gap-5 h-[15vh] p-5">
                <div className="promo-head text-xl">Promo Code</div>
                <div className="promo-input flex gap-3">
                  <input
                    type="text"
                    id="promo-code"
                    className="bg-white h-10 w-100 px-5 py-2"
                    placeholder="Promo Code"
                  />
                  <button className="bg-black text-white text-md cursor-pointer px-8 py-2 rounded-md">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="cart-amount h-[70vh] w-[30vw] flex flex-col gap-10 p-3">
              <div className="head text-2xl">Order Summary</div>
              <div className="add flex flex-col justify-center gap-2">
                <div className="sub-total flex justify-between items-center text-lg">
                  <div className="main-head">Subtotal</div>
                  <div className="main-price">
                    &#8377; {subtotal.toFixed(2)}
                  </div>
                </div>
                <div className="sub-line h-[1px] w-[26vw] bg-gray-300"></div>
                <div className="shipping flex justify-between items-center text-lg">
                  <div className="main-head">Shipping</div>
                  <div className="main-price">
                    &#8377; {shipping.toFixed(2)}
                  </div>
                </div>
                <div className="sub-line h-[1px] w-[26vw] bg-gray-300"></div>
                <div className="tax flex justify-between items-center text-lg">
                  <div className="main-head">Tax</div>
                  <div className="main-price">&#8377; {tax.toFixed(2)}</div>
                </div>
                <div className="sub-line h-[1px] w-[26vw] bg-gray-300"></div>
              </div>
              <div className="total flex justify-between items-center text-3xl">
                <div className="total-head">Total</div>
                <div className="total-price">&#8377; {total.toFixed(2)}</div>
              </div>
              <button className="check-btn bg-black text-white text-lg cursor-pointer px-1 py-3 mx-10">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
