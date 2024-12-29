import { useEffect, useState } from "react";
import React from 'react';
import LatestItem from '~/components/LatestItem';
import Product from '~/components/Product';


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
        <Product />
      </section>


    </main>
  );
}
