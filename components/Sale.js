"use client";

import React from "react";
import Image from "next/image";
import { RiDiscountPercentFill } from "react-icons/ri";
import { LiaCartPlusSolid } from "react-icons/lia";
import { toast } from "react-toastify";
import { useTransition } from "react";
import { addToCart } from "../lib/actions";
import "react-toastify/dist/ReactToastify.css";

// The notification function now accepts a product name for better UX.
const notify = (productName) =>
  toast.success(`Added "${productName}" to cart!`);

const Sale = ({ saleProducts = [] }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div id="sale" className="h-[45vh] w-[90vw] mx-auto p-5 flex flex-col">
      <div className="heading text-2xl flex gap-3 items-center">
        <RiDiscountPercentFill />
        <div className="title">Discounted Products</div>
      </div>
      <div className="products flex flex-wrap justify-center items-center gap-4 h-[40vh] w-[85vw] p-5 overflow-y-scroll">
        {saleProducts.length > 0 ? (
          saleProducts.map((card) => (
            <div
              key={card._id}
              className="product relative flex flex-col gap-1 h-[260px] w-[184px] p-3 rounded-lg hover:bg-gray-100"
            >
              <div className="img relative h-[160px] w-[160px]">
                <Image
                  className="rounded-lg object-cover object-center hover:bg-gray-100"
                  fill
                  sizes="160px"
                  quality={80}
                  src={card.imageUrl}
                  // The alt text is now descriptive for accessibility.
                  alt={card.name}
                />
              </div>
              <div className="p-name text-sm">{card.name}</div>
              <div className="prices flex gap-1">
                <div className="p-price text-sm line-through">
                  &#8377;{card.beforeDiscountPrice}
                </div>
                <div className="p-discountedPrice text-sm">
                  &#8377;{card.price}
                </div>
              </div>
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
                  {isPending ? (
                    <svg
                      className="animate-spin absolute bottom-1 right-1 h-8 w-8 text-gray-500 p-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <LiaCartPlusSolid className="absolute bottom-1 right-1 text-3xl p-1 rounded-md hover:bg-gray-200" />
                  )}
                </button>
              </form>
              <div className="discount">
                <img
                  className="absolute -top-5 -right-5 h-15 w-20"
                  src="/images/discount.png"
                  alt="discount"
                />
                <div className="d-off absolute -top-0 -right-1.25 text-sm text-yellow-100">
                  {card.discountPercentage}% off
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-sm">No discounted products available</div>
        )}
      </div>
    </div>
  );
};

export default Sale;
