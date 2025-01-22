"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import Header from "../components/header";
import DownHeader from "../components/downHeader";
import Footer from "../components/footer";
import Link from "next/link";

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

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  const truncateDescription = (description: string) => {
    return description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <Header />
      <DownHeader />

      <div className="relative overflow-hidden font-sans px-6 py-12 mb-7">
        <div className="w-[1440px] h-[209px] relative">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/products/${product.slug.current}`} key={product._id}>
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <Image
                src={product.image.asset.url}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="text-slate-800 mt-2 text-sm">
                  {truncateDescription(product.description)}
                </p>

                <div className="mt-2 text-sm text-gray-700">
                  <p>
                    Dimensions: {product.dimensions.height}x{product.dimensions.width}x{product.dimensions.depth} cm
                  </p>
                  <p>Quantity: {product.quantity}</p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-slate-600 font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-400 text-black rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-[#2A254B]">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-md p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="text-sm text-blue-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <Image
                  src={item.image.asset.url}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">
            Your Cart is Empty. Please Add Products.
          </p>
        )}
      </div>
      <div className="my-10 flex justify-center items-center">
        <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
          View collection
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCards;
