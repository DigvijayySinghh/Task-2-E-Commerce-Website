"use client";

import React from "react";
import Image from "next/image";
import { BiMale } from "react-icons/bi";
import { LiaCartPlusSolid } from "react-icons/lia";
import { toast } from "react-toastify";
import { useTransition } from "react";
import { addToCart } from "../lib/actions";
import "react-toastify/dist/ReactToastify.css";

// Change 4: The notification function now accepts a product name for better UX.
const notify = (productName) =>
  toast.success(`Added "${productName}" to cart!`);

const Men = ({ menProducts = [] }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div id="men" className="h-[80vh] w-[90vw] mx-auto p-5 flex flex-col">
      <div className="heading text-2xl flex gap-3 items-center">
        <BiMale /> <div className="title">Men Products</div>
      </div>
      <div className="products flex flex-wrap justify-center items-center gap-3 h-[80vh] w-[85vw] p-5 overflow-y-scroll">
        {menProducts.length > 0 ? (
          menProducts.map((card) => (
            <div
              key={card._id}
              className="product relative flex flex-col gap-1 h-[260px] w-[184px] p-3 rounded-lg hover:bg-gray-100"
            >
              <div className="img relative h-[160px] w-[160px]">
                <Image
                  className="rounded-lg object-cover object-center"
                  fill
                  sizes="160px"
                  quality={80} // Quality can be slightly reduced with little visible difference
                  // Change 5: 'priority' prop is removed for better performance in a list.
                  src={card.imageUrl}
                  // Change 3: The alt text is now descriptive for accessibility.
                  alt={card.name}
                />
              </div>
              <div className="p-name text-sm">{card.name}</div>
              <div className="p-prize text-sm">&#8377;{card.price}</div>

              {/* Change 1: The form now directly uses the server action. */}
              <form
                action={() => {
                  startTransition(async () => {
                    // We construct the product object here to pass to the action.
                    const productToAdd = {
                      name: card.name,
                      price: card.price,
                      imageUrl: card.imageUrl,
                    };
                    await addToCart(productToAdd);
                    notify(card.name); // Pass the name to the toast
                  });
                }}
              >
                <button type="submit" disabled={isPending}>
                  <LiaCartPlusSolid className="absolute bottom-1 right-1 text-3xl p-1 rounded-md hover:bg-gray-200" />
                </button>
              </form>
            </div>
          ))
        ) : (
          <div className="text-sm">No men products available</div>
        )}
      </div>
    </div>
  );
};

export default Men;
