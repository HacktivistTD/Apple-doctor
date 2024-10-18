import React from 'react';
import { motion } from 'framer-motion';
import Product from './Product';

const RotateBox = () => {
  return (
    <div className='flex justify-center items-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1, x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        style={{
          width:'auto',
          height:'auto',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Product/>
      </motion.div>
    </div>
  );
};

export default RotateBox;
