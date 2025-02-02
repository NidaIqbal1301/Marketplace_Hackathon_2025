import React from "react";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-1440px h-380px bg-[#2A254B] ">
      <div className="w-108px h-175px flex gap-12px pt-10 pl-20">
        <div>
          <h1 className="text-[#FFFFFF] text-lg  font-Clash Display">Menu</h1>
          <p className="text-[#FFFFFF] mt-4 text-sm">
            <Link href="/new-arrivals">New arrivals</Link>
          </p>
          <p className="text-[#FFFFFF] mt-4 text-sm">
            <Link href="/best-seller">Best seller</Link>
          </p>
          <p className="text-[#FFFFFF] mt-4 text-sm">
            <Link href="/recently-viewed">Recently Viewed</Link>
          </p>
          <p className="text-[#FFFFFF] mt-4 text-sm">
            <Link href="/popular-this-week">Popular this week</Link>
          </p>
          <p className="text-[#FFFFFF] mt-4 text-sm">
            <Link href="/products">All Products</Link>
          </p>
        </div>
        <div>
          <h1 className="text-[#FFFFFF] text-lg font-Clash Display ml-20">
            Catergory
          </h1>

          <p className="text-[#FFFFFF] mt-4 text-sm ml-20">
            <Link href="/category/plantpots">Plant pots</Link>
          </p>
          <p className="text-[#FFFFFF] mt-4 text-sm ml-20">
            <Link href="/category/ceramics">Ceramics</Link>
          </p>
          <p className="text-[#FFFFFF] mt-4 text-sm ml-20">
            <Link href="/category/tables">Tables</Link>
          </p>
          <p className="text-[#FFFFFF] mt-4 text-sm ml-20">
            <Link href="/category/chairs">Chairs</Link>
          </p>
          <p className="text-[#FFFFFF] mt-4 text-sm ml-20">
            <Link href="/category/crockory">Crockery</Link>
          </p>
          <p className="text-[#FFFFFF] mt-4 text-sm ml-20">
            <Link href="/category/tableware">Tableware</Link>
          </p>
          <p className="text-[#FFFFFF] mt-4 text-sm ml-20">
            <Link href="/category/cutlery">Cutlery</Link>
          </p>
        </div>
        <div className="pl-28">
          <h1 className="text-[#FFFFFF] text-lg font-Clash Display">
            Our Company
          </h1>

          <p className="text-[#FFFFFF] mt-4 text-sm">
            <Link href="/about">About Us</Link>
          </p>
          <p className="text-[#FFFFFF] mt-4 text-sm">
            <Link href="/vacancies">Vacancies</Link>
          </p>
          <p className="text-[#FFFFFF] mt-4 text-sm">
            <Link href="/contact">Contact Us</Link>
          </p>
          <p className="text-[#FFFFFF] mt-4 text-sm">
            <Link href="/privacy-policy">Privacy</Link>
          </p>
          <p className="text-[#FFFFFF] mt-4 text-sm">
            <Link href="/return-policy">Return Policy</Link>
          </p>
        </div>
        <div className="pl-28">
          <h1 className="text-[#FFFFFF] text-lg font-Clash Display">
            Join our mailing list
          </h1>
          <input
            type="text"
            placeholder="you@gmail.com"
            className="bg-[#FFFFFF26] w-80 mt-5 h-12 p-5 rounded-sm"
          />
          <button className="bg-[#FFFFFF] h-12 w-32 rounded-sm mt-1">
            Sign Up
          </button>
        </div>
      </div>
      <div className="border-t-2 m-auto w-11/12 my-8 flex items-center sm:flex-row flex-col">
        <p className="text-[#FFFFFF] mt-4 text-sm ">Copyright 2022 Avion LTD</p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="http://facebook.com " className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="http://twitter.com" className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="http://www.instagram.com" className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a href="http://www.linkedin.com" className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
