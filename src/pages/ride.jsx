import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, User, Calendar, ArrowRight, ChevronRight, Phone, MessageCircle } from 'lucide-react';

const WA = '919628911211';

// --- IMAGES IMPORT ---
import car1 from '../assets/cars/car1.webp';
import car2 from '../assets/cars/car2.webp';
import car3 from '../assets/cars/car3.webp';
import car4 from '../assets/cars/car4.webp';
import car5 from '../assets/cars/car5.webp';
import car6 from '../assets/cars/car6.webp';

const rideCategories = [
  {
    id: 'local',
    title: "Local Ride",
    desc: "Within Khalilabad City",
    img: car1,
    price: "Starts @ ₹199",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    id: 'outstation',
    title: "Outstation",
    desc: "Lucknow, GKP, Basti & More",
    img: car2,
    price: "Starts @ ₹9/km",
    color: "from-black to-gray-800"
  },
];

const Ride = () => {
  const [selected, setSelected] = useState('local');
  const [name, setName] = useState('');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [date, setDate] = useState('');

  const handleBookRide = () => {
    if (!name || !pickup || !drop) {
      alert('Please fill in Name, Pickup, and Drop.');
      return;
    }
    const pkg = selected.charAt(0).toUpperCase() + selected.slice(1);
    const msg =
      `🚖 *${pkg} Ride Booking*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📍 *Pickup:* ${pickup}\n` +
      `🏁 *Drop:* ${drop}\n` +
      (date ? `📅 *Date:* ${date}\n` : '') +
      `🚗 *Package:* ${pkg}\n\n` +
      `Hello11 Team, please confirm my booking.`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const getHeroImage = () => {
    if (selected === 'outstation') return car5;
    return car4;
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-20 md:pt-32 pb-10 px-3 md:px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 md:mb-12 px-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-[2px] w-8 bg-yellow-500"></div>
            <span className="text-yellow-600 font-bold tracking-widest uppercase text-[10px] md:text-xs">
              Booking Engine
            </span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-black leading-[0.9] tracking-tighter uppercase">
            SELECT <br /> <span className="text-yellow-500">YOUR RIDE</span>
          </h1>
        </div>

        {/* Category Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-8 md:mb-16">
          {rideCategories.map((cat) => (
            <motion.div
              key={cat.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(cat.id)}
              className={`relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 cursor-pointer transition-all duration-500 border-2 ${selected === cat.id
                ? 'border-yellow-400 bg-white shadow-xl translate-y-[-5px]'
                : 'border-gray-100 bg-white hover:border-yellow-200'
                }`}
            >
              <div className="relative z-10">
                <h3 className={`text-xl md:text-2xl font-black italic uppercase tracking-tight ${selected === cat.id ? 'text-black' : 'text-gray-400'}`}>
                  {cat.title}
                </h3>
                <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mt-1">{cat.desc}</p>
                <div className={`mt-4 font-black text-lg ${selected === cat.id ? 'text-yellow-500' : 'text-gray-300'}`}>
                  {cat.price}
                </div>
              </div>

              {/* Background Car Image + Shadow */}
              <div className="absolute bottom-[-10px] md:bottom-2 -right-4 flex flex-col items-end">
                <motion.img
                  src={cat.img}
                  alt={cat.title}
                  className={`w-32 md:w-48 h-auto object-contain transition-all duration-700 pointer-events-none ${selected === cat.id ? 'opacity-100 scale-110' : 'opacity-10 grayscale'
                    }`}
                />
                <div className={`cat-car-shadow transition-all duration-700 ${selected === cat.id ? 'opacity-100 scale-110' : 'opacity-0'}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking Interface */}
        <div className="bg-black rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-[100px] rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

            {/* Left: Car Display */}
            <div className="relative h-48 md:h-80 flex flex-col items-center justify-center order-2 lg:order-1">
              <style dangerouslySetInnerHTML={{
                __html: `
                .ride-road-shadow {
                  width: 95%;
                  height: 40px;
                  background: radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, transparent 90%);
                  border-radius: 50%;
                  margin-top: -85px;
                  flex-shrink: 0;
                  filter: blur(6px);
                }
                .cat-car-shadow {
                  width: 85%;
                  height: 20px;
                  background: radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, transparent 85%);
                  border-radius: 50%;
                  margin-top: -15px;
                  margin-left: auto;
                  filter: blur(3px);
                }
              `}} />
              <div className="absolute inset-0 bg-yellow-400/5 blur-[80px] rounded-full" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <img
                    src={getHeroImage()}
                    className="w-full h-full object-contain relative z-10"
                  />
                  <div className="ride-road-shadow relative z-0" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Action Form */}
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-yellow-400 text-black text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase mb-2 block w-fit">
                    {selected} package
                  </span>
                  <h4 className="text-white text-3xl md:text-5xl font-black italic uppercase tracking-tighter">
                    Quick Booking
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 focus-within:border-yellow-400 transition-all">
                    <User className="text-yellow-400 shrink-0" size={17} />
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className="bg-transparent outline-none text-white text-sm w-full placeholder:text-gray-600 font-medium" />
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 focus-within:border-yellow-400 transition-all">
                    <MapPin className="text-yellow-400 shrink-0" size={17} />
                    <input type="text" value={pickup} onChange={e => setPickup(e.target.value)} placeholder="Pickup Point" className="bg-transparent outline-none text-white text-sm w-full placeholder:text-gray-600 font-medium" />
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 focus-within:border-yellow-400 transition-all">
                    <Navigation className="text-yellow-400 shrink-0" size={17} />
                    <input type="text" value={drop} onChange={e => setDrop(e.target.value)} placeholder="Drop Point" className="bg-transparent outline-none text-white text-sm w-full placeholder:text-gray-600 font-medium" />
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 focus-within:border-yellow-400 transition-all">
                    <Calendar className="text-yellow-400 shrink-0" size={17} />
                    <input type="date" value={date} onChange={e => setDate(e.target.value)} className="bg-transparent outline-none text-white text-sm w-full placeholder:text-gray-600 font-medium appearance-none" style={{ colorScheme: 'dark' }} />
                  </div>
                </div>
              </div>

              <motion.button
                onClick={handleBookRide}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-400 py-5 md:py-7 rounded-[1.5rem] md:rounded-2xl text-black font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:bg-white transition-all duration-300 group"
              >
                Confirm {selected} Ride
                <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>

              <div className="flex items-center justify-center gap-6 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                <span className="flex items-center gap-1"><ChevronRight size={10} className="text-yellow-400" /> Instant</span>
                <span className="flex items-center gap-1"><ChevronRight size={10} className="text-yellow-400" /> Secure</span>
                <span className="flex items-center gap-1"><ChevronRight size={10} className="text-yellow-400" /> 24/7</span>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 bg-black rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-[100px] rounded-full" />
          <p className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-3">Ready to Go?</p>
          <h3 className="text-white text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
            Book Your <span className="text-yellow-400">Ride Now</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-yellow-300 transition-all shadow-xl hover:scale-105"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
            <a
              href="tel:+919628911211"
              className="flex items-center justify-center gap-3 bg-white/5 text-white px-8 py-4 rounded-2xl font-bold border border-white/10 hover:bg-white/10 transition-all text-sm uppercase tracking-wider"
            >
              <Phone size={20} className="text-yellow-400" /> Call +91 96289 11211
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Ride;