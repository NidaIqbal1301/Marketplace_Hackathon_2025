import React from 'react'
import { Menu, Search, ShoppingCart, UserCircle } from "lucide-react";
import { Close, DialogClose } from '@radix-ui/react-dialog';

const Banners = () => {
  return (
    <div className='w-full p-3 bg-[#2A254B] md:flex item-center justify-between'>
        <div className='max-w-7xl mx-auto flex items-center justify-center'>
          
            <p className=' width: Hug (407px)px;
              height: Hug (19px)px;
              top: 11px;
              left: 516px;
              gap: 8px;
              opacity: 0px;
              text-white'>
            Free delivery on all orders over £50 with code easter checkout
            </p>
        </div>
      
    </div>
  )
}

export default Banners
