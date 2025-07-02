'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

const values = [
  {
    title: 'Integrity',
    description: 'We uphold honesty, transparency, and strong moral principles.',
    icon: '🧭',
    colorClass: 'text-blue-400 border-blue-400',
  },
  {
    title: 'Innovation',
    description: 'Driving breakthroughs in AI and deepfake detection.',
    icon: '💡',
    colorClass: 'text-teal-400 border-teal-400',
  },
  {
    title: 'Responsibility',
    description: 'We act responsibly to safeguard digital truth and trust.',
    icon: '🛡️',
    colorClass: 'text-purple-400 border-purple-400',
  },
  {
    title: 'Collaboration',
    description: 'Working together with partners and communities for greater impact.',
    icon: '🤝',
    colorClass: 'text-indigo-400 border-indigo-400',
  },
];

export default function OurValues() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative pt-28 pb-28 bg-gradient-to-br from-[#0A0A0A] via-[#0C1C2C] to-[#0A0F1C] text-white overflow-hidden">
      {/* 🌌 Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-1 h-1 bg-blue-300 rounded-full top-[20%] left-[10%] animate-ping opacity-10"></div>
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full top-[40%] right-[15%] animate-bounce opacity-10"></div>
        <div className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full bottom-[30%] left-[30%] animate-pulse opacity-10"></div>
        <div className="absolute w-2 h-2 bg-indigo-300 rounded-full bottom-[10%] right-[25%] animate-ping opacity-10"></div>
      </div>

      {/* 🔼 Top Wave */}
      <div className="absolute top-0 left-0 w-full z-0 overflow-hidden animate-breathe">
        <svg viewBox="0 0 1440 320" className="w-full h-[120px]" preserveAspectRatio="none">
          <defs>
            <linearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#006EFF" />
              <stop offset="25%" stopColor="#88F0E0" />
              <stop offset="50%" stopColor="#A98EFF" />
              <stop offset="75%" stopColor="#506DFF" />
              <stop offset="100%" stopColor="#006EFF" />
            </linearGradient>
          </defs>
          <path
            fill="url(#topGradient)"
            d="M0,192L80,165.3C160,139,320,85,480,80C640,75,800,117,960,133.3C1120,149,1280,139,1360,133.3L1440,128L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* 💠 Watermark Logo */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-5 z-0">
        <img
          src="/images/GenuinAI_Logo_transparent.png"
          alt="GenuinAI Watermark"
          className="w-[300px] h-auto animate-float"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">Our Values</h2>

        {/* ✅ Desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`bg-white/10 backdrop-blur-md border ${val.colorClass} text-white shadow-xl p-6 rounded-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className={`font-semibold text-lg mb-2 flex items-center gap-2 ${val.colorClass}`}>
                <motion.span
                  className="text-2xl"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: idx * 0.2 }}
                >
                  {val.icon}
                </motion.span>
                {val.title}
              </h3>
              <p className="text-sm text-white/80">{val.description}</p>

              {hoveredIndex === idx && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded shadow-lg z-50">
                  {val.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ✅ Mobile */}
        <div className="lg:hidden block">
          <Swiper spaceBetween={16} slidesPerView={1.2}>
            {values.map((val, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`bg-white/10 backdrop-blur-md border ${val.colorClass} text-white shadow-xl p-6 rounded-xl mb-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative`}
                >
                  <h3 className={`font-semibold text-lg mb-2 flex items-center gap-2 ${val.colorClass}`}>
                    <motion.span
                      className="text-2xl"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: idx * 0.2 }}
                    >
                      {val.icon}
                    </motion.span>
                    {val.title}
                  </h3>
                  <p className="text-sm text-white/80">{val.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 🔽 Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full z-0 overflow-hidden animate-breathe">
        <svg viewBox="0 0 1440 320" className="w-full h-[120px] rotate-180" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#006EFF" />
              <stop offset="25%" stopColor="#88F0E0" />
              <stop offset="50%" stopColor="#A98EFF" />
              <stop offset="75%" stopColor="#506DFF" />
              <stop offset="100%" stopColor="#006EFF" />
            </linearGradient>
          </defs>
          <path
            fill="url(#bottomGradient)"
            d="M0,192L80,165.3C160,139,320,85,480,80C640,75,800,117,960,133.3C1120,149,1280,139,1360,133.3L1440,128L1440,0L0,0Z"
          />
        </svg>
      </div>
    </section>
  );
}
