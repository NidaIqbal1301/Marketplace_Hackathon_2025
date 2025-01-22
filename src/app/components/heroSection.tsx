import Image from "next/image";
import React from "react";
import ChairImage from "/images/chair.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="px-8 py-12">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[60%] h-auto md:h-[580px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between">
              <div>
                <h1 className="text-xl md:text-3xl md:text-left">
                  The furniture brand for the future with <br /> the timeless
                  designs
                </h1>
                <div className="flex justify-center md:justify-start">
                  <Link href="/products">
                    <button className="w-[170px] h-[56px] bg-transparent text-white border border-gray-600 font-bold mt-12">
                      View collection
                    </button>
                  </Link>
                </div>
              </div>

              <div className="my-4 md:my-0">
                <p className="text-sm md:text-base md:text-left">
                  A new era in eco-friendly furniture with Avion, the French
                  luxury retail brand
                  <br /> with sleek fonts, full colors, and a beautiful way to
                  display things digitally
                  <br /> using modern web technologies.
                </p>
              </div>
            </div>

            <div className="hidden md:flex w-full md:w-[40%] h-auto md:h-[580px] bg-white flex justify-center items-end">
              <Image
                src={"/images/chair.png"}
                width={520}
                height={584}
                alt="Chair"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
