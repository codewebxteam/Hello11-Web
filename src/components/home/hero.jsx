import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Search, User, Car } from 'lucide-react';
import bgVideo from '../../assets/cars/bgcar.mp4';
import { useBooking } from '../../context/BookingContext';

const WA = '918878139942';

const Hero = () => {
  const [name, setName] = useState('');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const { selectedCar, setSelectedCar } = useBooking();

  const openWhatsApp = () => {
    const carLine = selectedCar ? `🚗 *Vehicle:* ${selectedCar}\n` : '';
    const msg =
      `🚖 *Ride Enquiry*\n\n` +
      `👤 *Name:* ${name || 'Not provided'}\n` +
      `📍 *Pickup:* ${pickup || 'Not specified'}\n` +
      `🏁 *Drop:* ${drop || 'Not specified'}\n` +
      carLine +
      `\nHello11 Team, I need a ride!`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const inp = "w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm";

  return (
    <section id="hero-booking" className="relative min-h-screen w-full bg-[#0a0a0a] flex items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#fbbf2415_0%,transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 py-12 lg:pt-28">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 order-3 lg:order-1 flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-3 py-1 mb-6 text-[11px] font-black tracking-[0.3em] text-black uppercase bg-yellow-400 rounded-sm">
                Elite Transport
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-6xl font-black text-white leading-tight uppercase italic tracking-tighter mb-4">
                Duri Pata <br />
                <span className="text-yellow-400">Na Chale</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0">
                Premium Khalilabad taxi service. Your comfort is our priority, every single mile.
              </p>

              {/* Selected Car Badge (desktop) */}
              {selectedCar && (
                <div className="flex items-center gap-2 mb-3 bg-yellow-400/10 border border-yellow-400/30 px-4 py-2 rounded-xl w-fit">
                  <Car size={14} className="text-yellow-400" />
                  <span className="text-yellow-400 text-xs font-black uppercase tracking-wider">{selectedCar} selected</span>
                  <button onClick={() => setSelectedCar('')} className="text-yellow-400/50 hover:text-yellow-400 ml-1 text-xs font-bold">✕</button>
                </div>
              )}

              {/* Desktop Search Card */}
              <div className="hidden lg:block bg-white/[0.03] backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl mb-8 w-full max-w-xl">
                <div className="flex flex-col gap-3">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={16} />
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className={inp} />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={16} />
                    <input type="text" value={pickup} onChange={e => setPickup(e.target.value)} placeholder="Pickup Location" className={inp} />
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={16} />
                    <input type="text" value={drop} onChange={e => setDrop(e.target.value)} placeholder="Where to?" className={inp} />
                  </div>
                  <button onClick={openWhatsApp} className="bg-yellow-400 text-black font-black py-3 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg uppercase text-sm tracking-wider">
                    Find Ride
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={openWhatsApp} className="flex items-center justify-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-black hover:scale-105 transition-all shadow-xl">
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </button>
                <a href="tel:+918878139942" className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold border border-white/10 hover:bg-white/10 transition-all">
                  <Phone size={20} className="text-yellow-400" />
                  Quick Call
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2">

            {/* Mobile Search Card */}
            <div className="block lg:hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl">

              {/* Selected Car Badge (mobile) */}
              {selectedCar && (
                <div className="flex items-center gap-2 mb-3 bg-yellow-400/10 border border-yellow-400/30 px-3 py-1.5 rounded-xl w-fit">
                  <Car size={13} className="text-yellow-400" />
                  <span className="text-yellow-400 text-[11px] font-black uppercase tracking-wider">{selectedCar}</span>
                  <button onClick={() => setSelectedCar('')} className="text-yellow-400/50 hover:text-yellow-400 ml-1 text-xs">✕</button>
                </div>
              )}
              <div className="grid grid-cols-1 gap-3">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={16} />
                  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className={inp} />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={16} />
                  <input type="text" value={pickup} onChange={e => setPickup(e.target.value)} placeholder="Pickup Location" className={inp} />
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={16} />
                  <input type="text" value={drop} onChange={e => setDrop(e.target.value)} placeholder="Where to?" className={inp} />
                </div>
                <button onClick={openWhatsApp} className="w-full bg-yellow-400 text-black font-black py-4 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg uppercase tracking-wider">
                  Find Best Ride
                </button>
              </div>
            </div>

            {/* Video */}
            <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src={bgVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" /> Live Fleet
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;