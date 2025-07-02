'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldQuestion,
  ShieldCheck,
  GaugeCircle,
  Fingerprint,
  ScanSearch,
  ServerCog,
} from 'lucide-react';

const technologies = [
  {
    title: 'Deep Learning Detection',
    description:
      'Advanced neural networks trained to identify subtle inconsistencies invisible to the human eye.',
    icon: ShieldQuestion,
    color: 'text-purple-600',
    border: 'border-purple-600',
    position: 'top-2 left-1/2 -translate-x-1/2',
  },
  {
    title: 'Real-time Protection',
    description:
      'Instant analysis of communications to block deepfake attempts before reaching staff.',
    icon: ShieldCheck,
    color: 'text-indigo-600',
    border: 'border-indigo-600',
    position: 'right-2 top-1/4 -translate-y-1/2',
  },
  {
    title: '99.8% Accuracy',
    description:
      'Continuous learning with industry-leading precision against emerging threats.',
    icon: GaugeCircle,
    color: 'text-blue-600',
    border: 'border-blue-600',
    position: 'bottom-2 left-1/2 -translate-x-1/2',
  },
  {
    title: 'Biometric Verification',
    description:
      'Multi-factor authentication using unique biological markers to verify identities.',
    icon: Fingerprint,
    color: 'text-pink-600',
    border: 'border-pink-600',
    position: 'left-2 bottom-1/4 translate-y-1/2',
  },
  {
    title: 'Visual Forensics',
    description:
      'Pixel-level image/video analysis to detect manipulation and synthetic content.',
    icon: ScanSearch,
    color: 'text-green-600',
    border: 'border-green-600',
    position: 'top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2',
  },
  {
    title: 'Secure Integration',
    description:
      'Seamless implementation with healthcare systems and communication platforms.',
    icon: ServerCog,
    color: 'text-yellow-500',
    border: 'border-yellow-500',
    position: 'right-2 bottom-1/4 translate-y-1/2',
  },
];

export default function TechnologyOrbitSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
   <section
  className="relative overflow-hidden text-center py-20 px-6 bg-[#0A0A0A] text-white"
  id="technology"
>
 
      {/* Blurred Decorations */}
 <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#006EFF] rounded-full opacity-20 blur-3xl animate-pulse z-0" />
  <div className="absolute top-0 left-0 w-72 h-72 bg-[#3388FF] rounded-full opacity-20 blur-3xl animate-pulse z-0" />
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Advanced Technology Against Deepfakes
        </h2>
        <p className="mt-3 text-white/80">
          Our AI technology is designed to detect and prevent deepfake threats in environments where authenticity is critical.
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
        {/* Orbit Wrapper with rotation */}
        <motion.div
          className="relative w-[360px] sm:w-[420px] md:w-[480px] lg:w-[500px] h-[360px] sm:h-[420px] md:h-[480px] lg:h-[500px] rounded-full flex items-center justify-center shadow-xl bg-gradient-to-br from-[#1c1c3c] via-[#00264d] to-[#00111a]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
        >
          {technologies.map((item, i) => (
            <motion.div
              key={i}
              className={`absolute ${item.position}`}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
            >
              <div className={`bg-white text-black px-3 py-1 text-xs sm:text-sm rounded-full shadow border ${item.border} font-medium`}>
                {item.title}
              </div>
            </motion.div>
          ))}
          <div className="bg-black text-white px-6 py-3 rounded-full font-bold text-sm sm:text-base z-10 relative">
            GenuinAI
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] opacity-30 blur-md -z-10" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="w-full max-w-md space-y-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className={`bg-white text-black rounded-xl shadow-md border-l-4 ${tech.border} transition-all`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-4 py-3 font-semibold flex items-center gap-2 focus:outline-none"
                >
                  <Icon size={20} className={tech.color} />
                  {tech.title}
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-gray-700 transition-all duration-300 ease-in-out">
                    {tech.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
