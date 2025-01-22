"use client";

import { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import Header from "@/app/components/header";
import DownHeader from "@/app/components/downHeader";
import Footer from "@/app/components/footer";

const sanity = sanityClient({
  projectId: "czerxdw7",
  dataset: "production",
  apiVersion: "2025-01-18",
  useCdn: true,
});

export type Product = {
  _id: string;
  name: string;
  slug: { current: string };
  category: string;
  image: { asset: { url: string } };
  price: number;
  description: string;
  tags: string[];
  dimensions: {
    height: number;
    width: number;
    depth: number;
  };
};

async function fetchProduct(slug: string) {
  const query = `
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      slug { current },
      "category": category->title,
      image { asset-> { url } },
      price,
      description,
      tags,
      dimensions { height, width, depth }
    }
  `;
  return sanity.fetch(query, { slug });
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    async function getProduct() {
      const fetchedProduct = await fetchProduct(params.slug);
      setProduct(fetchedProduct);
    }
    getProduct();
  }, [params.slug]);

  const addToCart = () => {
    if (product) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert(`${product.name} has been added to your cart!`);
    }
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-lg font-medium text-gray-500">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <DownHeader />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <Image
              src={product.image.asset.url}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.name}</h1>
            <p className="text-lg text-gray-500 mb-2">{product.category}</p>
            <p className="text-2xl font-semibold text-blue-700 mt-4">${product.price.toFixed(2)}</p>
            <p className="mt-6 text-gray-700">{product.description}</p>

            <div className="mt-6">
              <p className="font-medium">
                <strong>Dimensions:</strong> {product.dimensions.height}x
                {product.dimensions.width}x{product.dimensions.depth} cm
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {product.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={addToCart}
              className="mt-8 w-full bg-[#2A254B] text-white py-3 rounded-lg shadow-md hover:bg-blue-900 transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cart Summary</h2>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                  </div>
                  <Image
                    src={item.image.asset.url}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md shadow-sm"
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
