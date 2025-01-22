import { Metadata } from "next";
import sanityClient from "@sanity/client";
import Header from "@/app/components/header";
import DownHeader from "@/app/components/downHeader";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Benefits from "@/app/components/benefits";
import Link from "next/link";

// Set up Sanity client
const sanity = sanityClient({
  projectId: "czerxdw7",
  dataset: "production",
  apiVersion: "2025-01-18",
  useCdn: true,
});

// Fetch category details by slug
async function fetchCategoryBySlug(slug: string) {
  const query = `
    *[_type == "category" && slug.current == $slug][0] {
      _id,
      title,
      description,
      "products": *[_type == "product" && references(^._id)] {
        _id,
        name,
        price,
        image { asset-> { url } },
        slug { current }
      }
    }
  `;
  return await sanity.fetch(query, { slug });
}

// Generate static params for all categories
export async function generateStaticParams() {
  const query = `*[_type == "category"] { slug { current } }`;
  const categories = await sanity.fetch(query);

  return categories.map((category: { slug: { current: string } }) => ({
    slug: category.slug.current,
  }));
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const category = await fetchCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-medium text-gray-500">Category not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <DownHeader />
      <div className="container mx-auto px-4 py-8">
        {/* Category Title and Description */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{category.title}</h1>
          <p className="text-lg text-gray-600">{category.description}</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products.map((product: any) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image.asset.url}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-lg font-semibold text-blue-600 mt-2">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <div className="bg-gray-100 py-2 px-4">
                <a
                  href={`/product/${product.slug.current}`}
                  className="block text-center text-sm font-medium text-white bg-blue-600 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggestions Section */}
      <h1 className="text-xl md:text-2xl font-semibold mt-12 text-[#505977]">
        You might also like
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {["Chair", "Vase", "Silky", "Lamp"].map((item, idx) => (
          <div key={idx} className="w-full">
            <Image
              src={`/images/${item}.png`}
              height={700}
              width={700}
              alt={item}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="mt-4 text-[#2A254B]">
              <p className="py-2">
                {item === "chair" ? "The Dendy Chair" : `The ${item}`}
              </p>
              <p>${item === "chair" ? 250 : item === "vase" ? 155 : 125}</p>
            </div>
          </div>
        ))}
      </div>

      <Benefits />
      <Footer />
    </div>
  );
}
