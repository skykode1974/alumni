'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MonitorSmartphone, Hospital, ShieldCheck, Brain, ActivitySquare } from 'lucide-react';

const healthcareSectors = [
  {
    icon: <MonitorSmartphone size={32} className="text-blue-600" />,
    title: 'Telehealth Platforms',
    description: 'Secure virtual consultations with verified identities.',
    borderColor: 'border-l-blue-600'
  },
  {
    icon: <Hospital size={32} className="text-green-600" />,
    title: 'Hospitals & Health Systems',
    description: 'Protect EHR access and clinical workflows.',
    borderColor: 'border-l-green-600'
  },
  {
    icon: <ShieldCheck size={32} className="text-yellow-600" />,
    title: 'Health Insurance',
    description: 'Prevent fraudulent claims and identity theft.',
    borderColor: 'border-l-yellow-500'
  },
  {
    icon: <Brain size={32} className="text-pink-600" />,
    title: 'Mental Health Providers',
    description: 'Secure therapy sessions with trust verification.',
    borderColor: 'border-l-pink-500'
  },
  {
    icon: <ActivitySquare size={32} className="text-purple-600" />,
    title: 'Digital Health Startups',
    description: 'Scale with built-in trust and compliance.',
    borderColor: 'border-l-purple-600'
  },
];

export default function WhoWeServe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#f0f4f8] to-[#e6f0fa]" id="who-we-serve">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-green-600 drop-shadow-sm">Who We Serve</h2>
        <p className="mt-3 text-lg text-gray-600">
          Serving critical healthcare sectors with specialized AI protection.
        </p>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {healthcareSectors.map((sector, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
            className={`
              bg-white rounded-xl shadow-lg transform transition-transform duration-500 
              hover:rotate-[-1deg] hover:scale-[1.02] border-l-4 ${sector.borderColor}
              hover:shadow-2xl p-6 text-left cursor-default
            `}
            style={{
              backgroundImage: 'linear-gradient(145deg, #ffffff, #f4f6f8)',
              borderRadius: '16px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)'
            }}
          >
            <div className="mb-4">{sector.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{sector.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{sector.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
