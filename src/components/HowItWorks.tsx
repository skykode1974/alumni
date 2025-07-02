'use client';

import { Upload, ScanSearch, ShieldCheck, FileText } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="w-8 h-8 text-blue-600" />,
    title: 'Upload Media',
    description: 'Submit an image or video file suspected to be manipulated.',
  },
  {
    icon: <ScanSearch className="w-8 h-8 text-green-600" />,
    title: 'Run AI Analysis',
    description: 'GenuinAI scans the file using multiple detection layers.',
  },
  {
    icon: <FileText className="w-8 h-8 text-purple-600" />,
    title: 'Review Integrity Report',
    description: 'Get a detailed report showing deepfake traces, metadata, and audio clues.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-pink-600" />,
    title: 'Take Action',
    description: 'Share results or submit them as verified evidence for further use.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#f9fafe] text-center px-6" id="how-it-works-flow">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#0A0A0A]">
        How GenuinAI Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300 text-left"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
