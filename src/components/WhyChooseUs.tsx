'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Brain, Puzzle, Server, Lock } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Brain className="w-6 h-6 text-blue-600" />,
    title: 'Multi-modal AI',
    desc: 'Face, voice, behavior, and document analysis combined for accurate verification.',
  },
  {
    icon: <Server className="w-6 h-6 text-green-600" />,
    title: 'Healthcare-trained Models',
    desc: 'Built on healthcare-specific datasets for medical-grade integrity checks.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
    title: 'HIPAA & GDPR Compliant',
    desc: 'Fully compliant from day one for safe, global usage.',
  },
  {
    icon: <Puzzle className="w-6 h-6 text-pink-600" />,
    title: 'Modular SDK/API',
    desc: 'Easily integrate into your systems with our flexible developer tools.',
  },
  {
    icon: <Lock className="w-6 h-6 text-yellow-600" />,
    title: 'Biometric EHR Access',
    desc: 'Coming soon: Seamless biometric authentication for electronic health records.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white px-6" id="why-choose-us">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image (LOCAL) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <img
            src="/images/why-choose.jpeg"
            alt="Why Choose Us"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto"
          />
       
        </motion.div>

        {/* Right: Features */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0A0A0A]">
            Why Choose GenuinAI?
          </h2>

          <div className="space-y-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                className="flex items-start gap-4"
              >
                <div>{item.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-8"
          >
            <a
              href="#"
              className="inline-block bg-[#0057B7] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Request a Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
