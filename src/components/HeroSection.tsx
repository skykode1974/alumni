'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import heroBg from '../assets/images/hero-bg.jpg';
import logo from '../assets/images/GenuinAI_Logo_no_bg.png';
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden text-white">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        <Image
          src={heroBg}
          alt="Animated Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <Image src={logo} alt="GenuinAI Logo" width={120} height={50} />

        {/* Typing Animated Headline */}
        <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-snug">
          <Typewriter
            words={[
              'Real-Time Deepfake Detection',
            'Advanced AI Deepfake Protection Platform',
              'Trust Every Frame, Every Pixel',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          Our AI-powered platform detects and prevents deepfake threats in healthcare safeguarding patient data, clinical communications, and medical imagery.
        </p>

      
      </div>
    </section>
  );
}
