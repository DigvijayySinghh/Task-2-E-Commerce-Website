import Link from "next/link";
import React from "react";

const Slider = () => {
  return (
    <div className="h-[52vh] w-full relative flex flex-col gap-15 justify-center items-center">
      <div className="absolute inset-0 bg-[url(/images/fashion.webp)] bg-cover bg-top bg-no-repeat"></div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 heading text-white text-7xl font-extrabold">
        Discover Your Next Favourite Style
      </div>
      <Link
        href="/"
        className="relative z-10 text-md bg-white text-black px-5 py-2"
      >
        SHOP NOW
      </Link>
    </div>
  );
};

export default Slider;
