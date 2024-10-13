// app/routes/products.tsx
import { useLoaderData } from "@remix-run/react";
import { connectToDatabase } from "~/utils/db";

type Product = {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
};

// Define your loader function without the LoaderFunction type
export const loader = async () => {
  const db = await connectToDatabase();
  const products = await db.collection("products").find().toArray();
  return products as Product[];
};

export default function ProductsPage() {
  const products = useLoaderData<Product[]>();

  if (products.length === 0) {
    return (
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-6">No Products Available</h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="block p-4 bg-white shadow-md rounded-lg hover:shadow-xl">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-500">${product.price.toFixed(2)}</p> {/* Format price */}
          </div>
        ))}
      </div>
    </main>
  );
}

// CatchBoundary to handle errors when loading products
export function CatchBoundary() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">An error occurred while loading products.</h1>
    </main>
  );
}
