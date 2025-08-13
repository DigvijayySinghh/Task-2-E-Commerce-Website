import Link from "next/link";
import React from "react";
import { GoSearch } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="nav h-[8vh] w-full flex">
      <div className="logo w-[10vw] flex justify-center items-center">
        <Link href={"/"}>
          <img
            className="h-35 w-35 object-cover object-center"
            src="/images/logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="links flex gap-20 w-[65vw] justify-center items-center">
        <Link
          className="text-lg hover:bg-gray-50 hover:px-4 hover:py-1 hover:border-1 hover:rounded-lg"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="text-lg hover:bg-gray-50 hover:px-4 hover:py-1 hover:border-1 hover:rounded-lg"
          href={"/#featured"}
        >
          New Arrivals
        </Link>
        <Link
          className="text-lg hover:bg-gray-50 hover:px-4 hover:py-1 hover:border-1 hover:rounded-lg"
          href={"/#women"}
        >
          Women
        </Link>
        <Link
          className="text-lg hover:bg-gray-50 hover:px-4 hover:py-1 hover:border-1 hover:rounded-lg"
          href={"/#men"}
        >
          Men
        </Link>
        <Link
          className="text-lg hover:bg-gray-50 hover:px-4 hover:py-1 hover:border-1 hover:rounded-lg"
          href={"/#sale"}
        >
          Sale
        </Link>
      </div>
      <div className="btns flex gap-4 justify-center items-center w-[30vw]">
        <div className="relative">
          <input
            className="pl-4 border rounded-md py-1 w-75" // Added border and padding for better appearance
            type="search"
            placeholder="Search"
            id="search"
          />
          <GoSearch className="absolute text-xl right-3 top-4 transform -translate-y-1/2 text-gray-500" />
        </div>
        <Link href={"/cart"}>
          <FaShoppingCart className="text-4xl p-2 rounded-md hover:bg-gray-100" />
        </Link>
        <Link href={"/"}>
          <FaUser className="text-4xl p-2 rounded-md hover:bg-gray-100" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
