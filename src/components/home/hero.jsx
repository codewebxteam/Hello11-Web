import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Search, User, Car, ArrowRight, Star, Play, Gauge, Settings } from 'lucide-react';
import aura from '../../assets/cars/car2.png';
import swift from '../../assets/cars/car3.png';
import scorpio from '../../assets/cars/car4.png';
import { useBooking } from '../../context/BookingContext';
import { motion, AnimatePresence } from 'framer-motion';

const WA = '919628911211';

const Hero = () => {
  const [name, setName] = useState('');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const { selectedCar, setSelectedCar } = useBooking();

  const openWhatsApp = () => {
    const carLine = selectedCar ? `🚗 *Vehicle:* ${selectedCar}\n` : '🚗 *Vehicle:* Hyundai Aura\n';
    const msg =
      `🚖 *Ride Enquiry*\n\n` +
      `👤 *Name:* ${name || 'Not provided'}\n` +
      `📍 *Pickup:* ${pickup || 'Not specified'}\n` +
      `🏁 *Drop:* ${drop || 'Not specified'}\n` +
      carLine +
      `\nHello11 Team, I need a ride!`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const labelClass = "text-[10px] md:text-[10px] font-black text-yellow-500 uppercase tracking-widest mb-1 block";
  const inpField = "w-full bg-transparent border-none p-0 text-white font-bold placeholder:text-white/20 focus:outline-none text-sm md:text-sm cursor-text";

  return (
    <section id="hero-booking" className="relative min-h-screen w-full bg-[#050505] flex flex-col items-center pt-28 md:pt-40 pb-12 md:pb-20 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#fbbf2405_0%,transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl flex flex-col items-center">
        
        {/* 1. HEADING SECTION */}
        <div className="mb-6 md:mb-10 shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-4 text-[10px] font-black tracking-[0.25em] text-black uppercase bg-yellow-400 rounded-lg shadow-[0_4px_20px_rgba(250,204,21,0.3)]"
          >
            Elite Transport Service
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter uppercase italic md:whitespace-nowrap"
          >
            Duri Pata <br className="md:hidden" /> <span className="text-yellow-400">Na Chale</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-xs md:text-base md:max-w-none mt-3 font-medium leading-relaxed max-w-[280px] mx-auto md:max-w-none md:whitespace-nowrap"
          >
            Premium Khalilabad taxi service. Your comfort is our priority, every single mile.
          </motion.p>
        </div>

        {/* 2. FORM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#0f0f0f]/80 backdrop-blur-xl p-2 md:p-2 rounded-3xl md:rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.8)] mb-10 md:mb-12 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-stretch border border-white/10 shrink-0"
        >
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {/* Field: Name */}
            <div className="px-6 py-4 md:py-3 text-left group">
              <label className={labelClass}>Booking For</label>
              <div className="relative flex items-center gap-3">
                <User className="text-yellow-400 group-focus-within:scale-110 transition-transform shrink-0" size={14} />
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className={inpField} />
              </div>
            </div>
            {/* Field: Pickup */}
            <div className="px-6 py-4 md:py-3 text-left group">
              <label className={labelClass}>Pick up location</label>
              <div className="relative flex items-center gap-3">
                <MapPin className="text-yellow-400 group-focus-within:scale-110 transition-transform shrink-0" size={14} />
                <input type="text" value={pickup} onChange={e => setPickup(e.target.value)} placeholder="Ex: Khalilabad" className={inpField} />
              </div>
            </div>
            {/* Field: Drop */}
            <div className="px-6 py-4 md:py-3 text-left group">
              <label className={labelClass}>Drop location</label>
              <div className="relative flex items-center gap-3">
                <Search className="text-yellow-400 group-focus-within:scale-110 transition-transform shrink-0" size={14} />
                <input type="text" value={drop} onChange={e => setDrop(e.target.value)} placeholder="Ex: Lucknow" className={inpField} />
              </div>
            </div>
          </div>

          <button 
            onClick={openWhatsApp} 
            className="bg-yellow-400 text-black p-4 md:p-5 rounded-2xl md:rounded-full hover:bg-white transition-all flex items-center justify-center m-1 shadow-2xl active:scale-95 group relative overflow-hidden"
          >
            <span className="font-black text-xs uppercase tracking-widest px-4 md:px-2">Find Ride</span>
            <Search size={18} strokeWidth={3} className="hidden md:block group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>

        <div className="relative w-full max-w-4xl mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 w-full"
          >
            <motion.img
              src={aura}
              alt="Hyundai Aura"
              className="w-full h-auto max-h-[50vh] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] mx-auto"
            />
          </motion.div>

          {/* Background Highlight behind the car */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120px] md:h-[200px] bg-yellow-400/10 blur-[60px] md:blur-[100px] rounded-full -z-10" />
        </div>
      </div>

      {/* YELLOW GROUND WAVE SECTION */}
      <div className="absolute bottom-0 left-0 w-full h-[8vh] md:h-[12vh] bg-yellow-400 z-0 pointer-events-none"
        style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }} />
    </section>
  );
};

export default Hero;