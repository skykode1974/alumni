'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Dr. Sarah Mensah',
    role: 'Digital Health Director, HealWell Clinics',
    quote: 'GenuinAI’s real-time verification has significantly improved our patient onboarding process. It’s fast, reliable, and secure.',
  },
  {
    name: 'Tomislav Petrovic',
    role: 'CTO, SecureMed Insurance',
    quote: 'The API integration was seamless. Our fraud detection rate improved by 70% since adopting GenuinAI.',
  },
  {
    name: 'Fatima Al-Hassan',
    role: 'Founder, MentalCore Health App',
    quote: 'As a startup, finding compliant AI tools is hard—GenuinAI is compliant, powerful, and highly customizable.',
  },
];

export default function ClientTestimonials() {
  return (
    <section className="py-20 bg-[#fdfdfd] px-4" id="testimonials">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12">What Our Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <p className="italic text-gray-700">“{t.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-[#0057B7]">{t.name}</div>
              <div className="text-xs text-muted">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
