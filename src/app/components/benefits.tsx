import React from "react";

const Benefits = () => {
  return (
    <>
      <section>
        <div className="py-12 bg-[#F9F9F9]  mt-12">
          <div className="w-full max-w-[640px] md:max-w-[1340px] h-[350px] bg-white mx-auto flex justify-center items-center flex-col px-4">
            <h1 className="text-[#2A254B] text-2xl md:text-4xl text-center">
              Join the club and get the benefits
            </h1>
            <h2 className="text-[#2A254B] text-center py-4 text-sm md:text-base">
              Sign up for our newsletter and receive exclusive offers on new
              <br /> ranges, sales, pop-up stores, and more.
            </h2>
            <div className="mt-4 w-full">
              <form
                action=""
                className="flex flex-row items-center justify-center space-x-4"
              >
                <input
                  type="text"
                  placeholder="your@email.com"
                  className="p-4 bg-[#F9F9F9] w-full max-w-[354px] h-[56px] outline-none"
                />
                <button className="p-2 bg-[#2A254B] text-white w-auto min-w-[118px] h-[56px]">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
