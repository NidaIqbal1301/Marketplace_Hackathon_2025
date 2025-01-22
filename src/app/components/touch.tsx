import Image from 'next/image'
import React from 'react'

const Touch = () => {
  return (
    <>
      <section>
        <div className="py-12  mt-12">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[720px] h-auto px-4 md:px-12 py-8 flex flex-col justify-between">
              <div>
                <h1 className="text-[#2A254B] font-Clash Display text-2xl md:text-2xl">
                  From a studio in London to a global brand with <br /> over 400 outlets
                </h1>
                <h3 className="text-[#505977] py-4 text-xs md:text-base ">
                  When we started Avion, the idea was simple. Make high-quality furniture
                  affordable and available for the mass market.
                </h3>
                <h1 className="text-[#505977] text-xs md:text-base">
                  Handmade and lovingly crafted furniture and homeware is what we live,
                  breathe, and design, so our Chelsea boutique became the hotbed for the
                  London interior design community.
                </h1>
              </div>
              <div className="my-10">
                <button className="bg-[#F9F9F9] py-4 px-4 rounded-[5px] text-[#2A254B]">
                  Get in touch
                </button>
              </div>
            </div>

            <div className="w-full md:w-[720px] h-auto">
              <Image
                src={'/images/blend.png'}
                height={800}
                width={800}
                alt="sofa"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Touch;