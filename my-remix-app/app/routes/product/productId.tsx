// app/routes/products/$productId.tsx
import { LoaderFunction, useLoaderData } from "@remix-run/react";
import { connectToDatabase } from "~/utils/db";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";

type Product = {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
};

export const loader: LoaderFunction = async ({ params }) => {
  const db = await connectToDatabase();
  const product = await db.collection("products").findOne({ _id: params.productId });
  return product as Product;
};

export default function ProductDetail() {
  const product = useLoaderData<Product>();

  return (
    <div>
      <NavBar />
      <main className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row">
          <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-96 object-cover rounded-md" />
          <div className="md:ml-6">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-4">${product.price}</p>
            <p className="text-gray-700">{product.description}</p>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
