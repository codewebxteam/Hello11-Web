import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Search, User, Car, ArrowRight, Star, Play } from 'lucide-react';
import mainImg from '../../assets/cars/mainimg.jpeg';
import { useBooking } from '../../context/BookingContext';

const WA = '919628911211';

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

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-6 pt-20 md:pt-28 lg:pt-32">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-3 py-1 mb-4 text-[11px] font-black tracking-[0.3em] text-black uppercase bg-yellow-400 rounded-sm">
                Elite Transport
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-6xl font-black text-white leading-tight uppercase italic tracking-tighter mb-3 md:mb-4">
                Duri Pata <br />
                <span className="text-yellow-400">Na Chale</span>
              </h1>
              <p className="text-gray-400 text-base md:text-xl max-w-lg mb-6 leading-relaxed mx-auto lg:mx-0">
                Premium Khalilabad taxi service. Your comfort is our priority, every single mile.
              </p>

              {/* Trust badges - mobile */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-5 lg:hidden">
                {['Safe Rides', '24/7 Service', '₹199 Starts'].map((badge) => (
                  <span key={badge} className="flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-gray-400">
                    <Star size={9} className="text-yellow-400" fill="#facc15" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Selected Car Badge (desktop) */}
              {selectedCar && (
                <div className="flex items-center gap-2 mb-3 bg-yellow-400/10 border border-yellow-400/30 px-4 py-2 rounded-xl w-fit mx-auto lg:mx-0">
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
                  <button onClick={openWhatsApp} className="bg-yellow-400 text-black font-black py-3 rounded-xl hover:bg-yellow-300 transition-colors shadow-lg uppercase text-sm tracking-wider flex items-center justify-center gap-2">
                    <MessageCircle size={16} /> Find Best Ride
                  </button>
                </div>
              </div>

              {/* Desktop App Download CTA */}
              <div className="hidden lg:flex flex-col items-start gap-3 mt-4">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.25em]">Available on Mobile</p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.hello11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-yellow-400/30 hover:scale-[1.02] active:scale-95 border border-yellow-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76a2 2 0 0 0 2.13-.22l11.44-6.6-2.82-2.82L3.18 23.76ZM21.4 10.35l-2.95-1.7-3.16 3.16 3.16 3.16 2.98-1.72a1.7 1.7 0 0 0 0-2.9ZM1.14.77A2 2 0 0 0 .75 1.8v20.38a2 2 0 0 0 .39 1.03l.1.1 11.42-11.42v-.26L1.24.66l-.1.11ZM13.93 9.18l-2.68-2.68-8.07-4.65 10.75 7.33Z" />
                  </svg>
                  Download Hello11 App
                  <span className="bg-black/10 group-hover:bg-black/20 text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-wider transition-colors">Play Store</span>
                </a>
              </div>

              {/* ===== MOBILE FORM & CTA (Moved below Headings) ===== */}
              <div className="flex flex-col gap-5 mt-6 lg:hidden">
                {/* Mobile Search Card */}
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl">
                  {selectedCar && (
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-3 bg-yellow-400/10 border border-yellow-400/30 px-3 py-1.5 rounded-xl w-fit mx-auto">
                      <Car size={13} className="text-yellow-400" />
                      <span className="text-yellow-400 text-[11px] font-black uppercase tracking-wider">{selectedCar} selected</span>
                      <button onClick={() => setSelectedCar('')} className="text-yellow-400/50 hover:text-yellow-400 ml-1 text-xs font-bold">✕</button>
                    </div>
                  )}
                  <div className="grid grid-cols-1 gap-3">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={15} />
                      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className={inp + " py-2.5 text-xs bg-white/[0.05]"} />
                    </div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={15} />
                      <input type="text" value={pickup} onChange={e => setPickup(e.target.value)} placeholder="Pickup Location" className={inp + " py-2.5 text-xs bg-white/[0.05]"} />
                    </div>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={15} />
                      <input type="text" value={drop} onChange={e => setDrop(e.target.value)} placeholder="Where to?" className={inp + " py-2.5 text-xs bg-white/[0.05]"} />
                    </div>
                    <button onClick={openWhatsApp} className="w-full bg-yellow-400 text-black font-black py-4 rounded-xl hover:bg-yellow-300 transition-colors shadow-[0_0_20px_rgba(250,204,21,0.3)] uppercase tracking-[0.1em] text-xs flex items-center justify-center gap-2">
                      <Search size={16} /> Find Best Ride
                    </button>
                  </div>
                </div>

                {/* Distinct Mobile Front Page CTA */}
                <div className="w-full flex flex-col items-center gap-3 mb-8">
                  <p className="text-gray-500 text-[9px] font-bold uppercase tracking-[0.25em]">Available on Mobile</p>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.hello11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full justify-center items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 hover:scale-[1.02] active:scale-95 border border-yellow-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.18 23.76a2 2 0 0 0 2.13-.22l11.44-6.6-2.82-2.82L3.18 23.76ZM21.4 10.35l-2.95-1.7-3.16 3.16 3.16 3.16 2.98-1.72a1.7 1.7 0 0 0 0-2.9ZM1.14.77A2 2 0 0 0 .75 1.8v20.38a2 2 0 0 0 .39 1.03l.1.1 11.42-11.42v-.26L1.24.66l-.1.11ZM13.93 9.18l-2.68-2.68-8.07-4.65 10.75 7.33Z" />
                    </svg>
                    Download Hello11 App
                    <span className="bg-black/10 group-hover:bg-black/20 text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider transition-colors hidden sm:inline-block">Play Store</span>
                  </a>
                </div>
              </div>
              {/* ==================================================== */}

            </div>
          </div>

          {/* RIGHT SIDE (Only Video on Mobile, order-1 so it's top) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 order-1 lg:order-2">

            {/* Image instead of Video */}
            <div className="relative w-full h-[200px] sm:h-[260px] lg:h-full lg:min-h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={mainImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
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