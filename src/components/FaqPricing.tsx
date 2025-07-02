'use client';

import { useState } from 'react';

const faqData = [
  {
    question: 'Is there a free trial?',
    answer:
      'We offer many examples in our showcase; however, given the high prices of GPUs, we’re not able to offer free video generation.',
  },
  {
    question: 'What is your refund policy?',
    answer:
      'If you purchased credits but didn’t generate a video, or your video generation failed, we offer a full refund. However, we cannot offer a refund once a video has been generated.',
  },
  {
    question: 'Can you handle 4K video?',
    answer: 'Yes, we handle 4K video, but video generation could take a bit longer.',
  },
  {
    question: 'What’s the difference between a deepfake, deepswap, and face swap?',
    answer:
      'They are essentially different terms for the same technology. All involve using AI to swap faces from one image or video to another.',
  },
];

export default function FaqPricing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0A0A0A]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white shadow-sm"
            >
              <button
                className="w-full text-left px-6 py-4 font-semibold text-[#0057B7] focus:outline-none"
                onClick={() => toggle(index)}
              >
                {item.question}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Pricing Subsection */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#0A0A0A]">
            Simple, Transparent Pricing
          </h3>
          <p className="text-gray-700 mb-6">
            Pay only for what you generate. No subscriptions, no hidden fees.
          </p>
          <a
            href="#demo"
            className="inline-block bg-[#0057B7] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
