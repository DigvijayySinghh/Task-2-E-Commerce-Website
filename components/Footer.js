import Link from "next/link";
import React from "react";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { PiPinterestLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="h-[40vh] w-full flex flex-col gap-3 justify-center items-center">
      <div className="main-footer flex justify-between items-center h-[33vh] w-full bg-[#323232] text-white">
        <div className="img-links w-[40vw] flex flex-col gap-3 justify-center items-center">
          <div className="img">
            <img className="h-40 w-70" src="/images/footerIMG.png" alt="" />
          </div>
          <div className="img-icons flex gap-2 justify-center items-center">
            <Link href={"/"}>
              <CiFacebook className="h-5 w-5" />
            </Link>
            <Link href={"/"}>
              <PiInstagramLogoLight className="h-5 w-5" />
            </Link>
            <Link href={"/"}>
              <CiTwitter className="h-5 w-5" />
            </Link>
            <Link href={"/"}>
              <PiPinterestLogo className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="footer-links h-[22vh] w-[60vw] flex gap-50">
          <div className="shop-links flex flex-col gap-5">
            <Link href={"/"}>
              <div className="heading text-xl">Shop</div>
            </Link>
            <ul className="flex flex-col gap-2">
              <Link href={"/"}>
                <li className="text-md">New Arrivals</li>
              </Link>
              <Link href={"/"}>
                <li className="text-md">Collections</li>
              </Link>
              <Link href={"/"}>
                <li className="text-md">BestSellers</li>
              </Link>
              <Link href={"/"}>
                <li className="text-md">Sale</li>
              </Link>
            </ul>
          </div>
          <div className="about-links flex flex-col gap-5">
            <Link href={"/"}>
              <div className="heading text-xl">About Us</div>
            </Link>
            <ul className="flex flex-col gap-2">
              <Link href={"/"}>
                <li className="text-md">Our Story</li>
              </Link>
              <Link href={"/"}>
                <li className="text-md">Carrers</li>
              </Link>
              <Link href={"/"}>
                <li className="text-md">Press</li>
              </Link>
              <Link href={"/"}>
                <li className="text-md">Blog</li>
              </Link>
            </ul>
          </div>
          <div className="customer-links  flex flex-col gap-5">
            <Link href={"/"}>
              <div className="heading text-xl">Customer Service</div>
            </Link>
            <ul className="flex flex-col gap-2">
              <Link href={"/"}>
                <li className="text-md">Contact Us</li>
              </Link>
              <Link href={"/"}>
                <li className="text-md">FAQs</li>
              </Link>
              <Link href={"/"}>
                <li className="text-md">Shipping &amp; Returns</li>
              </Link>
              <Link href={"/"}>
                <li className="text-md">Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="line h-[1px] w-[92vw] bg-gray-200"></div>
      <div className="footer-icons h-[3vh] w-full flex justify-between items-center px-15">
        <div className="rights text-sm">
          &copy; Singh Brothers and Company. All rights reserved.
        </div>
        <div className="pay-methods flex gap-3">
          <Link target="_blank" href={"https://www.visa.co.in/"}>
            <img
              className="h-10 w-15"
              src="https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg"
              alt="visa"
            />
          </Link>
          <Link
            target="_blank"
            href={"https://www.mastercard.co.in/en-in.html"}
          >
            <img
              className="h-10 w-15"
              src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg"
              alt="mastercard"
            />
          </Link>
          <Link target="_blank" href={"https://www.americanexpress.com/en-in/"}>
            <img
              className="h-10 w-15"
              src="https://www.logo.wine/a/logo/American_Express/American_Express-Logo.wine.svg"
              alt="american express"
            />
          </Link>
          <Link target="_blank" href={"https://www.paypal.com/in/home"}>
            <img
              className="h-10 w-15"
              src="https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg"
              alt="pay pal"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
