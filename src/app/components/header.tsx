"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa"; // Importing icons
import { TbTruckDelivery } from "react-icons/tb";

const Header = () => {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="shadow-md font-sans tracking-wide relative z-50">
        {/* Top section with notification */}
        <section className="flex items-center justify-center relative py-2 bg-[#2A254B] text-white px-10">
          <div className="flex items-center space-x-2">
            <TbTruckDelivery />
            <p className="text-sm text-center w-full">
              Free delivery on all orders over £50 with code easter checkout
            </p>
          </div>
          <svg
            className="h-8 w-8 text-white absolute right-4"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </section>

        {/* Main header */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-white min-h-[70px]">
          <h1 className="flex justify-center items-center text-black text-4xl h-10 font-semibold">
            Avion
          </h1>

          <div
            id="collapseMenu"
            className={`lg:block ${isMenuOpen ? "block" : "hidden"}`}
          >
            <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <h1 className="flex justify-center items-center text-black text-4xl h-10">
                    Avion
                  </h1>
                </a>
              </li>

              <li className="max-lg:border-b max-lg:py-3 px-3 left-[1047px]">
                <Link
                  href="/about"
                  className="hover:text-[#2A254B] text-gray-400 block text-[15px]"
                >
                  About Us
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  href="/shopping"
                  className="hover:text-[#2A254B] text-gray-400 block text-[15px]"
                >
                  Shopping
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  href="/productListing"
                  className="hover:text-[#2A254B] text-gray-400 block text-[15px]"
                >
                  Products
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#2A254B] text-gray-400 block text-[15px]"
                >
                  Contact
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#2A254B] text-gray-400 block text-[15px]"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile icon */}
          <div className="flex max-lg:ml-auto">
            <button id="toggleOpen" className="lg:hidden" onClick={toggleMenu}>
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Icons (Search, Cart, User) */}
          <div className="flex items-center space-x-4">
            <FaSearch className="w-6 h-6 cursor-pointer" />

            {/*<Link href="/shopping"></Link>*/}
            <FaShoppingCart className="hidden md:flex w-6 h-6 cursor-pointer" />

            <Link href="/auth">
              <FaUserCircle className="hidden md:flex  w-6 h-6 cursor-pointer" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

//  <Link
// href="/shopping"
// className="hidden md:flex w-6 h-6 cursor-pointer"
// >
// <FaShoppingCart  />
// </Link>
