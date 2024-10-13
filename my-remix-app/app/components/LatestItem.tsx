import React, { useState, useEffect } from 'react';

const items = [
  {
    name: 'iPhone',
    image: '/images/iphone.png',
    description: 'Sleek, yet revolutionary. Experience the power of the iPhone.',
  },
  {
    name: 'Vission pro',
    image: '/images/vission.png',
    description: 'A New Era of Augmented Reality.',
  },
  {
    name: 'iWatch',
    image: '/images/watch.png',
    description: 'Stay connected with the latest iWatch.',
  },
  {
    name: 'MacBook',
    image: '/images/mac.png',
    description: 'Powerful performance with the new MacBook.',
  },
  {
    name: 'iPad',
    image: '/images/ipad.png',
    description: 'Powerful performance with the new MacBook.',
  },
  {
    name: 'Mac Mini',
    image: '/images/macmini.png',
    description: 'Compact, yet powerful. Meet the Mac mini.',
  },
  {
    name: 'AirPods',
    image: '/images/airpods.png',
    description: 'A Sound Like No Other',
  },
  {
    name: 'Apple TV',
    image: '/images/tv.png',
    description: 'Your Ultimate Entertainment Hub',
  },
];

export default function LatestItem() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-[40rem] items-center justify-center text-white overflow-hidden">
      {/* Left Column - Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].name}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      {/* Right Column - Name and Description */}
      <div className="flex flex-col justify-center items-start px-6 md:px-12">
        <p className="text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent rounded-md px-3 py-2  ">{items[currentIndex].name}</p>
        <p className="mt-6 text-xl">{items[currentIndex].description}</p>
      </div>
    </div>
  );
}
