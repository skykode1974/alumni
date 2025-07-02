'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SendHorizonal } from 'lucide-react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#0072ff] to-[#00c6ff] overflow-hidden text-white">
      {/* 💠 Background decoration blob */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl opacity-30 z-0 animate-ping" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-2xl opacity-20 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with GenuinAI</h2>
        <p className="mb-8 text-white/80">
          Subscribe to our newsletter to get the latest updates on deepfake detection, AI tools, and platform features.
        </p>

        <form
          className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-full shadow-lg border border-white/20"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="bg-white text-[#0057B7] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-100 transition"
          >
            <SendHorizonal size={18} /> Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
}
