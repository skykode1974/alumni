'use client';

import {
  ShieldQuestion,
  ShieldCheck,
  GaugeCircle,
  Fingerprint,
  ScanSearch,
  ServerCog,
} from 'lucide-react';
import { motion } from 'framer-motion';

const technologies = [
  {
    title: 'Deep Learning Detection',
    description:
      'Advanced neural networks trained to identify subtle inconsistencies invisible to the human eye.',
    icon: ShieldQuestion,
    color: 'text-purple-600',
    border: 'border-l-purple-600',
  },
  {
    title: 'Real-time Protection',
    description:
      'Instant analysis of communications to block deepfake attempts before reaching staff.',
    icon: ShieldCheck,
    color: 'text-indigo-600',
    border: 'border-l-indigo-600',
  },
  {
    title: '99.8% Accuracy',
    description:
      'Continuous learning with industry-leading precision against emerging threats.',
    icon: GaugeCircle,
    color: 'text-blue-600',
    border: 'border-l-blue-600',
  },
  {
    title: 'Biometric Verification',
    description:
      'Multi-factor authentication using unique biological markers to verify identities.',
    icon: Fingerprint,
    color: 'text-pink-600',
    border: 'border-l-pink-600',
  },
  {
    title: 'Visual Forensics',
    description:
      'Pixel-level image/video analysis to detect manipulation and synthetic content.',
    icon: ScanSearch,
    color: 'text-green-600',
    border: 'border-l-green-600',
  },
  {
    title: 'Secure Integration',
    description:
      'Seamless implementation with healthcare systems and communication platforms.',
    icon: ServerCog,
    color: 'text-yellow-500',
    border: 'border-l-yellow-500',
  },
];

export default function TechnologySection() {
  return (
    <section
      className="py-20 px-6 bg-gradient-to-br from-[#f0f5ff] via-white to-[#edf4ff] text-gray-800 relative overflow-hidden"
      id="technology"
    >
      {/* Decorative blurred background */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full opacity-30 blur-2xl -z-10" />

      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Advanced Technology Against Deepfakes
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Our AI technology is designed to detect and prevent deepfake threats in
          healthcare environments where authenticity is critical.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto z-10 relative">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={index}
              className={`bg-white border-l-4 ${tech.border} rounded-2xl shadow-md p-6 cursor-default`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, rotateX: 3, rotateY: -2 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-start gap-3">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="bg-gray-100 p-2 rounded-full shadow"
                >
                  <Icon size={32} className={tech.color} />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900">{tech.title}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
