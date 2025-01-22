/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/header";
import DownHeader from "../components/downHeader";
import Footer from "../components/footer";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Header />
      <DownHeader />

      {/* Hero Section */}
      <div className="w-1440px h-277px flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="font-Clash Display md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
          A brand built on the love of craftsmanship, quality, and outstanding
          customer service
        </div>
        <div className="mt-6 md:mt-0">
          <Link href="/products">
            <button className="bg-[#F9F9F9] h-12 w-40 rounded-sm text-[#2A254B]">
              View our products
            </button>
          </Link>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row w-1440px h-598px items-center justify-around px-4 py-16">
        <div className="bg-[#2A254B] w-634px h-478px md:w-2/5 text-[#FFFFFF] p-8 md:p-16 mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
          <p className="mt-6">
            A global brand with local beginnings, our story began in a small
            studio in South London in early 2014.
          </p>
          <Link href="/products">
            <button className="bg-gray-600 h-12 w-40 rounded-sm mt-10 text-[#FFFFFF]">
              View Collection
            </button>
          </Link>
        </div>
        <div className="w-634px h-478px md:w-2/5">
          <img
            src="/images/About main.png"
            alt="About main"
            className="w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>
      </div>

      {/* Service Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 space-y-8 md:space-y-0">
        <img
          src="/images/About second.png"
          alt="Service"
          className="w-full md:w-3/6 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
        />
        <div className="border-2 bg-[#F9F9F9] w-full md:w-3/6 p-8 md:p-20">
          <h2 className="text-2xl md:text-2xl text-[#2A254B]">
            Our service isn&lsquo;t just personal, it&lsquo;s actually
            hyper-personally exquisite
          </h2>
          <p className="text-[#505977] py-6">
            When we started Avion, the idea was simple. Make high-quality
            furniture affordable and available for the mass market.
          </p>

          <p className="text-[#505977]">
            {" "}
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe, and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
          <div className="my-10">
            <button className="bg-[#FFFFFF] h-12 w-40 rounded-sm text-[#2A254B]">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full h-auto pb-16">
        <h1 className="text-center text-custom-purple text-xl">
          What makes our brand different
        </h1>
        <div className="flex flex-row justify-center md:justify-evenly px-4 py-10 gap-8">
          {[
            {
              img: "/images/Delivery.png",
              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day as standard",
            },
            {
              img: "/images/check.png",
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              img: "/images/Purchase.png",
              title: "Unbeatable prices",
              desc: "For our materials and quality you won’t find better prices anywhere",
            },
            {
              img: "/images/Sprout.png",
              title: "Recycled packaging",
              desc: "We use 100% recycled materials to ensure our footprint is more manageable",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 w-72 h-auto rounded-sm px-6 py-8 text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <h1 className="text-custom-purple text-lg mt-4">{item.title}</h1>
              <p className="text-custom-purple mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="text-[#2A254B] text-2xl md:text-3xl text-center">
            Join the club and get the benefits
          </h1>
          <p className="text-[#2A254B] text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new{" "}
            <br /> ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="bg-[#F9F9F9] text-[#2A254B] w-80 h-12 p-5 rounded-sm"
            />
            <button className="bg-[#2A254B] h-12 w-32 rounded-sm text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
