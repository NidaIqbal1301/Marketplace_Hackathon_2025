'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import sanityClient from "@sanity/client";

const sanity = sanityClient({
  projectId: "czerxdw7",
  dataset: "production",
  apiVersion: "2025-01-18",
  useCdn: true,
});

interface Category {
  _id: string;
  name: string;
  slug: { current: string };
}

const DownHeader = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const query = `
        *[_type == "category"] {
          _id,
          name,
          slug {
            current
          }
        }
      `;
      const data = await sanity.fetch(query);
      setCategories(data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching categories.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="hidden md:block w-full h-[100px] px-[20px] md:px-[318px] py-[40px] bg-white shadow-md">
      <ul className="flex items-center justify-between text-gray-800 text-sm font-medium gap-3">
        <li className="text-gray-400 cursor-pointer">
          <Link href="/products">All Products</Link>
        </li>
        {error && <li className="text-red-500">{error}</li>}
        {!loading && !error &&
          categories.map((category) => (
            <li key={category._id} className="text-gray-400 cursor-pointer">
              <Link href={`/category/${category.slug.current}`}>
                {category.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DownHeader;
