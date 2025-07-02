'use client';

import { motion } from 'framer-motion';
import {
  ImagePlus,
  Mic2,
  FileSearch2,
  ScanFace
} from 'lucide-react';

const features = [
  {
    title: 'Pixel-Level Analysis',
    description: 'Detects tampering at the pixel level to catch the most subtle manipulations.',
    icon: <ImagePlus size={28} className="text-blue-500" />,
  },
  {
    title: 'Audio Forensics',
    description: 'Analyzes voice patterns and background audio to detect deepfake alterations.',
    icon: <Mic2 size={28} className="text-green-500" />,
  },
  {
    title: 'Metadata Verification',
    description: 'Inspects file metadata to uncover inconsistencies and fabrication trails.',
    icon: <FileSearch2 size={28} className="text-yellow-500" />,
  },
  {
    title: 'Face & Motion Detection',
    description: 'Uses facial mapping and motion tracking to identify abnormal behavior.',
    icon: <ScanFace size={28} className="text-purple-500" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-[#f0f9ff] text-[#0A0A0A]" id="features">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Powerful Deepfake Detection Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition duration-300 border-l-4 border-[#006EFF] text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-3 mb-2">
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
