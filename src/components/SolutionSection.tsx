'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import AnimatedWave from './AnimatedWave';

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative bg-gradient-to-br from-[#f0f4f8] via-[#e8eff6] to-[#f9fafb] text-gray-900 py-20 px-6 overflow-hidden"
    >
      {/* 🌊 Wave at Top */}
      <div className="absolute top-0 left-0 w-full z-0">
        <AnimatedWave />
      </div>

      {/* 🔆 Radial Pulse Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 opacity-10 rounded-full blur-3xl animate-ping z-0"></div>

      {/* 🧠 AI Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <img
          src="/images/ai-icon.svg"
          alt="AI Watermark"
          className="w-2/3 max-w-3xl opacity-5 object-contain"
        />
      </div>

      {/* 💠 Main Content Box with vivid border */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto bg-white/30 backdrop-blur-lg border-2 border-[#007BFF] rounded-2xl p-10 shadow-xl ring-1 ring-white/10"
      >
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Our Solution</h2>
        <p className="text-gray-700 text-center mb-8">
          GenuinAI is a secure AI platform trained on health-relevant, clean datasets to provide real-time
          multi-modal verification and deepfake protection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            'Real-time Detection',
            'HIPAA Ready',
            'Multi-modal AI',
            'Easy Integration',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle2 className="text-[#00C2FF]" />
              <span className="text-gray-800 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 🌊 Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <AnimatedWave />
      </div>
    </section>
  );
}
