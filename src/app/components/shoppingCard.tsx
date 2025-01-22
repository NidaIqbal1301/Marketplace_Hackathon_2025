"use client"; 

import React, { useState } from "react";
import Image from "next/image";
import product from "../../../public/images/Product Image.png" 
import product1 from "../../../public/images/Product Image 2.png"; 

const ShoppingCart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Graystone vase",
      description: "A timeless ceramic vase with a tri color grey glaze.",
      price: 85,
      quantity: 1,
      image: product,
    },
    {
      id: 2,
      name: "Basic white vase",
      description: "Beautiful and simple, this is one for the classics.",
      price: 125,
      quantity: 1,
      image: product1,
    },
  ]);

  // Update quantity
  const updateQuantity = (id: number, type: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity:
                type === "increment"
                  ? product.quantity + 1
                  : product.quantity > 1
                  ? product.quantity - 1
                  : 1,
            }
          : product
      )
    );
  };

  // Calculate subtotal
  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          Your shopping cart
        </h1>
        <div className="bg-white shadow-md rounded-lg">
          <div className="p-6">
            <div className="hidden md:grid grid-cols-12 gap-4 mb-4 font-medium text-gray-600">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-3 text-right">Total</div>
            </div>
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-12 gap-4 items-center border-t py-4 first:border-t-0 md:gap-6"
              >
                <div className="col-span-12 md:col-span-6 flex items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="ml-4">
                    <h2 className="font-medium text-gray-800">{product.name}</h2>
                    <p className="text-gray-500 text-sm">{product.description}</p>
                    <p className="font-medium text-gray-700 mt-1 md:hidden">
                      Total: £{product.price * product.quantity}
                    </p>
                  </div>
                </div>
                <div className="col-span-6 md:col-span-3 text-center flex justify-center items-center space-x-4">
                  <button
                    onClick={() => updateQuantity(product.id, "decrement")}
                    className="text-gray-500 hover:text-gray-700 border px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="font-medium text-gray-800">{product.quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, "increment")}
                    className="text-gray-500 hover:text-gray-700 border px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
                <div className="hidden md:block col-span-3 text-right font-medium text-gray-800">
                  £{product.price * product.quantity}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-12 gap-4 items-center border-t pt-6">
              <div className="col-span-9 text-right font-semibold text-gray-800">Subtotal</div>
              <div className="col-span-3 text-right font-medium text-gray-800">£{subtotal}</div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center md:text-right">
          <button className="w-full md:w-auto px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
