'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedWave from './AnimatedWave'; // ✅ import

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden text-center py-20 px-6 bg-[#0A0A0A] text-white">
      <AnimatedWave /> {/* ✅ client-only animated SVG */}

      {/* Glow Orbs */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#006EFF] rounded-full opacity-20 blur-3xl animate-pulse z-0" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#3388FF] rounded-full opacity-20 blur-3xl animate-pulse z-0" />

      {/* CTA Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-md">
          Ready to See <span className="text-[#006EFF]">GenuinAI</span> in Action?
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Experience the most advanced AI Deepfake protection platform. Protect your brand and ensure digital integrity today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#demo"
            className="bg-[#0057B7] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition shadow-lg"
          >
            Request a Demo
          </Link>
        
        </div>
      </motion.div>
    </section>
  );
}
