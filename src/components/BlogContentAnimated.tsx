'use client';

import { motion } from 'framer-motion';

export default function BlogContentAnimated({ title }: { title: string }) {
  return (
    <motion.h1
      className="text-4xl font-bold mb-4 text-center text-gray-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {title}
    </motion.h1>
  );
}
