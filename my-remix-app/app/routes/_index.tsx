// app/routes/index.tsx
import React from 'react';
import LatestItem from '~/components/LatestItem';
import Product from '~/components/Product';
import RotateBox from '~/components/RotateBox';
import { motion } from 'framer-motion'; // Add this if RotateBox uses motion

export default function HomePage() {
  return (
    <main className="container mx-auto py-10 items-center px-4 sm:px-8">
      {/* Welcome Section */}
      <section className="text-center">
        <section className="text-7xl font-bold">
          <p className='text-white'>Welcome to the</p>
          <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pl-9 sm:pl-4">
            Apple Doctor
          </p>
        </section>
        <p className="mt-4 text-gray-600 text-xl">
          Discover the latest Apple products, from iPhones to MacBooks.
        </p>
      </section>

      {/* Latest Products */}
      <section className="mt-10">
        <LatestItem />
      </section>

      {/* RotateBox Section */}
      <section className="mt-10">
        <RotateBox />
      </section>



      {/* Meet Your Doctor Section */}
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
