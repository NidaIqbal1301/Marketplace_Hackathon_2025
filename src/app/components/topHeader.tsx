"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Container from "./Container";
import CartIcon from "./CartIcon";
import { BsBasket } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const TopHeader = () => {
  const { user } = useUser();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-white sticky top-0 z-50 border-b border-b-gray-200 py-1">
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
      <Container>
        <header className="flex gap-2 flex-wrap justify-between items-center py-2">
          <Link href={"/"}>
            <h1 className="flex justify-center items-center text-black text-4xl h-10">
              Avion
            </h1>
          </Link>
          <form
            action="/search"
            className="w-full sm:w-auto sm:flex-1 sm:mx-4 sm:mt-0"
          >
            <input
              type="text"
              name="query"
              placeholder="Search for products"
              className="bg-gray-50 text-gray-800 px-4 py-2.5 focus:outline-none focus:ring-2 
              focus:ring-blue-500 focus:ring-opacity-50 border border-gray-200 w-full max-w-4xl
              rounded-md hoverEffect"
            />
          </form>
          <div className="flex items-center space-x-4 sm:mt-0 flex-1 sm:flex-none">
            <CartIcon />

            {isClient && (
              <ClerkLoaded>
                <SignedIn>
                  <Link
                    href={"/orders"}
                    className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md
                    shadow-md hover:shadow-none hoverEffect"
                  >
                    <BsBasket className="text-2xl text-[#2A254B]" />
                    <div className="flex flex-col">
                      <p className="text-xs">
                        <span className="font-semibold">0</span> items
                      </p>
                      <p className="font-semibold">Orders</p>
                    </div>
                  </Link>
                </SignedIn>

                {user ? (
                  <div
                    className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md 
                    shadow-md hover:shadow-none hoverEffect"
                  >
                    <UserButton />
                    <div className="text-xs">
                      <p className="text-gray-400">Welcome Back</p>
                      <p className="font-bold">{user.fullName}</p>
                    </div>
                  </div>
                ) : (
                  <SignInButton mode="modal">
                    <div
                      className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1
                      rounded-md shadow-md cursor-pointer hover:shadow-none hoverEffect"
                    >
                      <FaRegUserCircle className="text-2xl text-[#2A254B]" />
                      <div className="flex flex-col">
                        <p className="text-xs">Account</p>
                        <p className="font-semibold">Login</p>
                      </div>
                    </div>
                  </SignInButton>
                )}
              </ClerkLoaded>
            )}
          </div>
        </header>
      </Container>
    </div>
  );
};

export default TopHeader;
