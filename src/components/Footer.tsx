'use client';

import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-10 pb-4 w-full mt-auto relative">
      {/* Top Gradient Ribbon */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0057B7] via-[#006EFF] to-[#3388FF]" />

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm px-6">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/images/GenuinAI_Logo_transparent.png" alt="GenuinAI Logo" className="w-8 h-8" />
            <span className="text-white text-lg font-bold">GenuinAI</span>
          </div>
          <p className="text-gray-400">Real-time AI deepfake protection platform</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#technology" className="hover:underline">Technology</a></li>
            <li><a href="#solution" className="hover:underline">Solutions</a></li>
            <li><a href="#blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-gray-400">
            LinkedIn: <a href="https://www.linkedin.com/company/genuinai" target="_blank" rel="noopener noreferrer" className="hover:underline">GenuinAI</a>
          </p>
          <p className="text-gray-400">Email: Contact@genuinai.com</p>
          <p className="text-gray-400">Phone: +1 (470) 478-0587</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-6 flex justify-center gap-6 text-gray-400">
        <a href="https://www.linkedin.com/company/genuinai" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C2FF] transition-transform duration-300 transform hover:scale-110">
          <Linkedin className="w-7 h-7" />
        </a>
        <a href="#" className="hover:text-[#00C2FF] transition-transform duration-300 transform hover:scale-110">
          <Twitter className="w-7 h-7" />
        </a>
        <a href="#" className="hover:text-[#00C2FF] transition-transform duration-300 transform hover:scale-110">
          <Facebook className="w-7 h-7" />
        </a>
        <a href="#" className="hover:text-[#00C2FF] transition-transform duration-300 transform hover:scale-110">
          <Youtube className="w-7 h-7" />
        </a>
      </div>

      {/* Footer Note */}
      <div className="mt-6 text-center text-gray-500 text-xs px-4">
        &copy; {new Date().getFullYear()} GenuinAI. All rights reserved.
        <br />
        <span className="text-[10px] text-gray-600">Designed by SkyKode</span>
      </div>
    </footer>
  );
}
