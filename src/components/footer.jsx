import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Home, Car, Key, User, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/hello11.logo-2.png';

const WA_NUMBER = '919628911211';
const INSTAGRAM_URL = 'https://www.instagram.com/hello11.in?igsh=MWd2cTR6dzd0anJjZg==';
const FACEBOOK_URL = 'https://www.facebook.com/share/1HTgy1DoMm/';

const Footer = () => {
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={12} /> },
    { name: 'Ride', path: '/ride', icon: <Car size={12} /> },
    { name: 'Rent', path: '/rent', icon: <Key size={12} /> },
    { name: 'About', path: '/about', icon: <User size={12} /> },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={16} />,
      href: FACEBOOK_URL,
      label: 'Facebook',
    },
    {
      icon: <Instagram size={16} />,
      href: INSTAGRAM_URL,
      label: 'Instagram',
    },
    {
      icon: <MessageCircle size={16} />,
      href: `https://wa.me/${WA_NUMBER}`,
      label: 'WhatsApp',
    },
  ];

  return (
    <footer className="bg-black text-white pt-8 pb-10 px-6 border-t border-white/5 relative overflow-hidden">

      {/* Background Glow */}


      <div className="container mx-auto max-w-6xl relative z-10">

        {/* 1. Company Logo - Center aligned */}
        <div className="text-center mb-8 md:mb-12">
          <img
            src={logo}
            alt="Hello11 Logo"
            className="h-12 md:h-16 w-auto object-contain mx-auto cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          />
          <p className="text-gray-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-2">
            The Gold Standard of Khalilabad
          </p>
        </div>

        {/* 2. Main Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10">

          {/* Navigation Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-black uppercase italic tracking-widest text-[9px] mb-4 border-b border-yellow-400/30 pb-1 w-full text-center md:text-left">
              Navigation
            </h4>
            <ul className="space-y-3 w-full">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-500 hover:text-yellow-400 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center md:justify-start gap-2 group transition-all w-full"
                  >
                    <span className="text-yellow-400/30 group-hover:text-yellow-400 transition-colors">
                      {link.icon}
                    </span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-black uppercase italic tracking-widest text-[9px] mb-4 border-b border-yellow-400/30 pb-1 w-full text-center md:text-left">
              Reach Us
            </h4>
            <div className="space-y-4 w-full">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3 group">
                <MapPin size={14} className="text-yellow-400 shrink-0" />
                <span className="text-gray-500 text-[9px] font-bold uppercase text-center md:text-left">Khalilabad, UP</span>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3 group">
                <Mail size={14} className="text-yellow-400 shrink-0" />
                <span className="text-gray-500 text-[9px] font-bold uppercase text-center md:text-left">support@hello11.in</span>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3 group">
                <Phone size={14} className="text-yellow-400 shrink-0" />
                <a
                  href="tel:+919628911211"
                  className="text-gray-500 hover:text-yellow-400 text-[9px] font-bold uppercase text-center md:text-left transition-colors"
                >
                  +91 96289 11211
                </a>
              </div>
            </div>
          </div>

          {/* Socials - Desktop Column */}
          <div className="hidden md:flex flex-col items-start">
            <h4 className="text-white font-black uppercase italic tracking-widest text-[9px] mb-4 border-b border-yellow-400/30 pb-1 w-full">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  whileHover={{ y: -3, color: '#facc15' }}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all hover:border-yellow-400/30 hover:text-yellow-400"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Bottom Section */}
        <div className="border-t border-white/5 pt-8 flex flex-col items-center gap-6">

          {/* Socials for Mobile */}
          <div className="flex md:hidden gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-gray-500 hover:text-yellow-400 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Play Store CTA */}
          <div className="w-full flex flex-col items-center gap-3 mb-2">
            <p className="text-gray-500 text-[9px] font-bold uppercase tracking-[0.25em]">Available on Mobile</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.hello11"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76a2 2 0 0 0 2.13-.22l11.44-6.6-2.82-2.82L3.18 23.76ZM21.4 10.35l-2.95-1.7-3.16 3.16 3.16 3.16 2.98-1.72a1.7 1.7 0 0 0 0-2.9ZM1.14.77A2 2 0 0 0 .75 1.8v20.38a2 2 0 0 0 .39 1.03l.1.1 11.42-11.42v-.26L1.24.66l-.1.11ZM13.93 9.18l-2.68-2.68-8.07-4.65 10.75 7.33Z" />
              </svg>
              Download Hello11 App
              <span className="bg-black/10 group-hover:bg-black/20 text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider transition-colors">Play Store</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-3">
            <p className="text-gray-600 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em]">
              © 2026 HELLO11. Built for the Elite.
            </p>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-600 text-[8px] font-black uppercase tracking-[0.1em]">All Systems Live</span>
            </div>
          </div>

          {/* Developer Credit - fixed visibility */}
          <p className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.2em] text-center w-full border-t border-white/5 pt-4">
            Developed by <span className="text-yellow-400 font-black">CodeWebX</span> with <span className="text-red-400">❤️</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;