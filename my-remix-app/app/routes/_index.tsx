// app/routes/index.tsx
import LatestItem from '~/components/LatestItem';
import Product from '~/components/Product';

export default function HomePage() {
  return (
    <main className="container mx-auto py-10 items-center px-4 sm:px-8">
      <section className="text-center">
        <p className="text-7xl font-bold text-white">Welcome to the Apple Doctor</p>
        <p className="mt-4 text-gray-600 text-xl">
          Discover the latest Apple products, from iPhones to MacBooks.
        </p>
      </section>



      {/* Latest Products */}
      <section className="mt-10">
        <LatestItem />
      </section>

      {/* Products */}
      <section className="mt-10">
        <Product />
      </section>
      <section className="mt-10 text-center">
        <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-black text-2xl font-bold p-4 rounded-lg inline-block">
          Meet Your Doctor
        </span>
        <p className="mt-4 text-white text-xl line-clamp-3 lg:line-clamp-none text-center">
          Our experts are here to provide top-tier Apple repair services, ensuring your devices get the care they need.
        </p>
      </section>
    </main>
  );
}
