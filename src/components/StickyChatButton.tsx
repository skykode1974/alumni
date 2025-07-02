'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StickyChatButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/2348123456789?text=Hi%20GenuinAI%20team%2C%20I%20need%20assistance%20with%20deepfake%20verification."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#0057B7] text-white px-5 py-3 rounded-full shadow-xl hover:bg-blue-800 transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5 animate-bounce" />
        Chat with GeniunAI
      </a>
    </motion.div>
  );
}
