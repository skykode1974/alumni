'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
  <section className="bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white">

      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Welcome to GenuinAI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl mb-8"
        >
          Real-time deepfake detection and digital.
        </motion.p>

        <motion.a
          href="#how-it-works"
          className="inline-block bg-white text-[#0057B7] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Explore How It Works
        </motion.a>
      </div>
    </section>
  );
}
