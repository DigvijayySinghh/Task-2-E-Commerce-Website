"use client";

import React from "react";
import Image from "next/image";
import { BsFire } from "react-icons/bs";
import { LiaCartPlusSolid } from "react-icons/lia";
import { toast } from "react-toastify";
import { useTransition } from "react";
import { addToCart } from "../lib/actions";
import "react-toastify/dist/ReactToastify.css";

// The notification function now accepts a product name for better UX.
const notify = (productName) =>
  toast.success(`Added "${productName}" to cart!`);

const Featured = ({ featuredProducts = [] }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div id="featured" className="h-[45vh] w-[90vw] mx-auto p-5 flex flex-col">
      <div className="heading text-2xl flex gap-3 items-center">
        <BsFire /> <div className="title">Featured Products</div>
      </div>
      <div className="products flex flex-wrap justify-center items-center gap-4 h-[40vh] w-[85vw] p-5 overflow-y-scroll">
        {featuredProducts.length > 0 ? (
          featuredProducts.map((card) => (
            <div
              key={card._id.toString()}
              className="product relative flex flex-col gap-1 h-[260px] w-[184px] p-3 rounded-lg hover:bg-gray-100"
            >
              <div className="img relative h-[160px] w-[160px]">
                <Image
                  className="rounded-lg object-cover object-center"
                  fill
                  sizes="160px"
                  quality={80} // Optimized image quality
                  // 'priority' prop is removed for better performance in a list.
                  src={card.imageUrl}
                  // The alt text is now descriptive for accessibility.
                  alt={card.name}
                />
              </div>
              <div className="p-name text-sm">{card.name}</div>
              <div className="p-prize text-sm">&#8377;{card.price}</div>
              {/* The form now directly handles the server action call. */}
              <form
                action={() => {
                  startTransition(async () => {
                    try {
                      const productToAdd = {
                        name: card.name,
                        price: card.price,
                        imageUrl: card.imageUrl,
                      };
                      await addToCart(productToAdd);
                      notify(card.name); // Pass product name to toast
                    } catch (error) {
                      console.error("Error adding to cart:", error);
                      toast.error("Failed to add item to cart.");
                    }
                  });
                }}
              >
                <button
                  type="submit"
                  disabled={isPending}
                  aria-label={`Add ${card.name} to cart`}
                >
                  <LiaCartPlusSolid className="absolute bottom-1 right-1 text-3xl p-1 rounded-md hover:bg-gray-200" />
                </button>
              </form>
            </div>
          ))
        ) : (
          <div className="text-sm">No featured products available</div>
        )}
      </div>
    </div>
  );
};

export default Featured;
