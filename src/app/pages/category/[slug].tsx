import { GetStaticPaths, GetStaticProps } from 'next';
import { createClient } from 'next-sanity';
import Image from 'next/image';

const sanityClient = createClient({
  projectId: 'czerxdw7',
  dataset: 'production',
  apiVersion: '2025-01-18',
  useCdn: true,
});

interface Product {
  _id: string;
  name: string;
  price: number;
  image: { asset: { url: string } };
}

interface CategoryPageProps {
  category: { name: string };
  products: Product[];
}

const CategoryPage = ({ category, products }: CategoryPageProps) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{category.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="border p-4 rounded">
              <Image
                src={product.image.asset.url}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-auto object-cover"
                loading="lazy" // Lazy loading for performance
              />
              <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
              <p className="font-bold text-lg mt-2">${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

// Fetch dynamic paths (categories)
export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await sanityClient.fetch(
    `*[_type == "category"]{ "slug": slug.current }`
  );
  console.log(categories);  // Log to check if slugs are correct


  const paths = categories.map((category: { slug: string }) => ({
    params: { slug: category.slug },
  }));

  return {
    paths,
    fallback: 'blocking', // Ensures the page is generated on demand if not pre-generated
  };
};

// Fetch data for each category page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  // Fetch category details by slug
  const category = await sanityClient.fetch(
    `*[_type == "category" && slug.current == $slug][0]{
      _id,
      name
    }`,
    { slug }
  );

  if (!category) {
    return { notFound: true }; // Return 404 if category not found
  }

  // Fetch products that belong to the category
  const products = await sanityClient.fetch(
    `*[_type == "product" && references($categoryId)]{
      _id,
      name,
      image {
        asset->{
          url
        }
      },
      price
    }`,
    { categoryId: category._id }
  );

  return {
    props: {
      category,
      products,
    },
    revalidate: 60, // Revalidate this page every 60 seconds
  };
};

export default CategoryPage;
