"use client";

import React from "react";
import Image from "next/image";
import { BiFemale } from "react-icons/bi";
import { LiaCartPlusSolid } from "react-icons/lia";
import { ToastContainer, toast } from "react-toastify";
import { useTransition } from "react";
import { addToCart } from "../lib/actions";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Added this Women's Product to Cart!");

const Women = ({ womenProducts = [] }) => {
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
      <div id="women" className="h-[80vh] w-[90vw] mx-auto p-5 flex flex-col">
        <div className="heading text-2xl flex gap-3 items-center">
          <BiFemale /> <div className="title">Women Products</div>
        </div>
        <div className="products flex flex-wrap justify-center items-center gap-3 h-[80vh] w-[85vw] p-5 overflow-y-scroll">
          {womenProducts.length > 0 ? (
            womenProducts.map((card) => (
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
                <div className="p-prize text-sm">&#8377;{card.price}</div>
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
              </div>
            ))
          ) : (
            <div className="text-sm">No women products available</div>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Women;
