"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import TopHeader from "../components/topHeader";
import Footer from "../components/footer";
import DownHeader from "../components/downHeader";

const sanity = sanityClient({
  projectId: "czerxdw7",
  dataset: "production",
  apiVersion: "2025-01-18",
  useCdn: true,
});

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  category: string;
  image: { asset: { _id: string; url: string } };
  price: number;
  quantity: number;
  tags: string[];
  description: string;
  features: string[];
  dimensions: {
    height: number;
    width: number;
    depth: number;
  };
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          name,
          slug {
            current
          },
          "category": category->title,
          image {
            asset-> {
              _id,
              url
            }
          },
          price,
          quantity,
          tags,
          description,
          features,
          dimensions {
            height,
            width,
            depth
          }
        }
      `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const goToCheckout = () => {
    setIsCheckout(true);
  };

  const truncateDescription = (description: string) => {
    return description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;
  };

  return (
    <div className="p-4">
      <TopHeader />
      <DownHeader />

      <div className="relative overflow-hidden font-sans px-6 py-12 mb-7">
        <div className="w-full h-[209px] relative">
          <img
            src="/images/all_products.jpg"
            alt="all products banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-items-start items-start">
            <h2 className="text-white sm:text-5xl font-semibold mb-4">
              All Products
            </h2>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/products/${product.slug.current}`}>
              <Image
                src={product.image.asset.url}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md cursor-pointer"
              />
            </Link>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="text-slate-800 mt-2 text-sm">
                {truncateDescription(product.description)}
              </p>
              <div className="mt-2 text-sm text-gray-700">
                <p>
                  Dimensions: {product.dimensions.height}x
                  {product.dimensions.width}x{product.dimensions.depth} cm
                </p>
                <p>Quantity: {product.quantity}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-slate-600 font-bold">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-[#2A254B] text-white px-4 py-2 rounded-md hover:bg-[#1a143e] transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AddToCart Section */}
      <div className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <button
          className="bg-[#2A254B] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#1a143e] transition duration-300 ease-in-out transform"
          onClick={toggleCart}
        >
          {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
        </button>

        {showCart && (
          <div className="mt-6 bg-[#F9F9F9] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#2A254B] text-center">
            Your shopping cart
            </h2>
            {cart.length > 0 ? (
              <div className="">
                <ul className="divide-y divide-slate-400">
                  {cart.map((product, index) => (
                    <li
                      key={index}
                      className="flex flex-col sm:flex-row items-center justify-between mb-6 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                    >
                      <img
                        src={product.image.asset.url}
                        alt={product.name}
                        className="w-16 sm:w-20 lg:w-24 h-40 object-cover inline-block transition-transform duration-300 ease-in-out transform hover:scale-110 text-black"
                      />
                      <span className="ml-0 sm:ml-4 text-sm sm:text-lg font-medium text-black mt-4 sm:mt-0 text-center sm:text-left">
                        {product.name} - ${product.price}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-black space-y-4 sm:space-y-0">
                  <span className="font-semibold text-lg sm:text-xl">
                    Total: $
                    {cart.reduce((total, product) => total + product.price, 0)}
                  </span>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button
                      onClick={goToCheckout}
                      className="bg-[#2A254B] py-3 px-6 sm:px-8 rounded-lg text-sm sm:text-lg shadow-md hover:bg-[#1a143e] transition duration-300 ease-in-out text-white transform hover:scale-110"
                    >
                      Go To Checkout
                    </button>

                    <button
                      onClick={clearCart}
                      className="bg-red-600 py-3 px-6 sm:px-8 rounded-lg text-sm sm:text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm sm:text-lg text-[#1a143e] text-center">
                Your Cart is Empty
              </p>
            )}
          </div>
        )}
      </div>

      {/* CheckOut Section */}
      {isCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
          <div className="bg-[#F9F9F9] p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md lg:max-w-lg">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2A254B] mb-4 text-center">
              CheckOut
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#1a143e] text-center">
              Please Confirm Your Order Before Proceeding
            </p>
            <div className="mt-4">
              <ul className="divide-y divide-gray-700">
                {cart.map((product, index) => (
                  <li key={index} className="flex justify-between py-2">
                    <span className="font-medium text-sm sm:text-base lg:text-lg">
                      {product.name}
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg">
                      ${product.price}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between mt-4">
                <span className="font-semibold text-sm sm:text-base lg:text-lg">
                  Total:
                </span>
                <span className="font-semibold text-sm sm:text-base lg:text-lg">
                  ${cart.reduce((total, product) => total + product.price, 0)}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
              <button
                onClick={() => setIsCheckout(false)}
                className="bg-red-600 text-white py-2 px-4 rounded-lg text-sm sm:text-base lg:text-lg shadow-md hover:bg-red-700 transition duration-300"
              >
                Close
              </button>

              <button
                onClick={() =>
                  alert("Order Confirm... Will Deliver At Your Door Step!")
                }
                className="bg-[#2A254B] text-white py-2 px-4 rounded-lg text-sm sm:text-base lg:text-lg shadow-md hover:bg-[#1a143e] transition duration-300"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="my-10 flex justify-center items-center">
        <Link href="/products">
          <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
            View collection
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCards;
