'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="#contact"
        aria-label="Contact Us"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#0057B7] text-white shadow-lg hover:bg-blue-700 transition-all duration-300 font-semibold hover:scale-105"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <MessageCircle className="w-5 h-5" />
        </motion.div>
        Talk to Us
      </Link>
    </motion.div>
  );
}
