"use client";

import React from "react";
import Image from "next/image";
import { RiDiscountPercentFill } from "react-icons/ri";
import { LiaCartPlusSolid } from "react-icons/lia";
import { ToastContainer, toast } from "react-toastify";
import { useTransition } from "react";
import { addToCart } from "../lib/actions";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Added this Discounted Product to Cart!");

const Sale = ({ saleProducts = [] }) => {
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = (product) => {
    startTransition(async () => {
      try {
        await addToCart(product);
        notify(); // Show toast
      } catch (error) {
        console.error("Error adding to cart:", error);
        toast.error("Error adding item to cart. Please try again.");
      }
    });
  };

  return (
    <>
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
                    sizes="(max-width: 160px) 100vw, 160px"
                    quality={100}
                    priority
                    src={card.imageUrl}
                    alt="https://img.freepik.com/premium-vector/folding-clothes-vector-icon-illustration-cleaning-dusting-iconset_904970-134451.jpg"
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
                <form
                  action={() =>
                    handleAddToCart({
                      name: card.name,
                      price: card.price,
                      imageUrl: card.imageUrl,
                    })
                  }
                >
                  <button type="submit" disabled={isPending}>
                    <LiaCartPlusSolid className="absolute bottom-1 right-1 text-3xl p-1 rounded-md hover:bg-gray-200" />
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
      <ToastContainer />
    </>
  );
};

export default Sale;
