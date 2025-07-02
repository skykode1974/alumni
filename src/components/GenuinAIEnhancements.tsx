'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// ✅ Sample logos – replace with your own
const logos = [
  '/images/partner1.png',
  '/images/partner2.png',
  '/images/partner3.png',
  '/images/partner4.png',
  '/images/partner5.png',
];

export default function GenuinAIEnhancements() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-8">
          Trusted by Organizations Worldwide
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((src, index) => (
            <motion.div
              key={index}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-28 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
            >
              <Image
                src={src}
                alt={`Partner ${index + 1}`}
                width={100}
                height={60}
                className="mx-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
