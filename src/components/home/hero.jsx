import React, { useState } from "react";
import {
  MapPin,
  Search,
  User,
  Phone,
  ArrowRight,
  ShieldCheck,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import aura from "../../assets/cars/car2.webp";
import { useBooking } from "../../context/BookingContext";

const WA = "919628911211";

const Hero = () => {
  const [name, setName] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const { selectedCar } = useBooking();

  const openWhatsApp = () => {
    const carLine = selectedCar
      ? `🚗 *Vehicle:* ${selectedCar}\n`
      : "🚗 *Vehicle:* Hyundai Aura\n";
    const msg = `🚖 *Ride Enquiry*\n\n👤 *Name:* ${name || "Not provided"}\n📍 *Pickup:* ${pickup || "Not specified"}\n🏁 *Drop:* ${drop || "Not specified"}\n${carLine}\nHello11 Team, I need a ride!`;
    window.open(
      `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <section className="relative w-full min-h-screen bg-[#FDFDFD] pt-24 pb-10 overflow-hidden font-sans">
      {/* Background soft elements - Aankhon ke liye sukoon */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100/40 blur-[100px] rounded-full" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-gray-100/50 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-5 relative z-10 max-w-5xl">
        {/* Short & Sweet Header */}
        <div className="text-center mb-8 md:mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase border-b-2 border-yellow-400 pb-1"
          >
            Premium Taxi Khalilabad
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-gray-900 mt-4 tracking-tight leading-tight uppercase italic"
          >
            Duri Pata <span className="text-yellow-500">Na Chale</span>
          </motion.h1>
          <p className="text-gray-500 text-sm md:text-base mt-3 max-w-md mx-auto font-medium">
            Comfortable, safe, and always on time. Your premium journey starts
            here.
          </p>
        </div>

        {/* Compact Mobile-First Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-4 md:p-3 rounded-3xl md:rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 w-full gap-2 md:gap-0 md:divide-x divide-gray-50">
              {/* Input Fields */}
              {[
                {
                  label: "Passenger",
                  icon: User,
                  val: name,
                  set: setName,
                  ph: "Your Name",
                },
                {
                  label: "Pickup",
                  icon: MapPin,
                  val: pickup,
                  set: setPickup,
                  ph: "From where?",
                },
                {
                  label: "Drop",
                  icon: Search,
                  val: drop,
                  set: setDrop,
                  ph: "Where to?",
                },
              ].map((field, i) => (
                <div key={i} className="px-5 py-2">
                  <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    {field.label}
                  </label>
                  <div className="flex items-center gap-2">
                    <field.icon
                      size={14}
                      className="text-yellow-500 shrink-0"
                    />
                    <input
                      type="text"
                      value={field.val}
                      onChange={(e) => field.set(e.target.value)}
                      placeholder={field.ph}
                      className="w-full bg-transparent border-none p-0 text-sm font-bold text-gray-800 focus:ring-0 placeholder:text-gray-300"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Compact Button */}
            <button
              onClick={openWhatsApp}
              className="w-full md:w-auto bg-gray-900 text-white px-8 py-4 md:py-4 rounded-2xl md:rounded-full flex items-center justify-center gap-2 hover:bg-yellow-500 hover:text-gray-950 transition-all active:scale-95 shadow-lg shadow-gray-200"
            >
              <span className="font-bold text-xs uppercase tracking-widest">
                Book Ride
              </span>
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* The Car - Optimized Size for Mobile */}
        <div className="relative mt-8 md:mt-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl"
          >
            <img
              src={aura}
              alt="Car"
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            />
            <div className="w-[80%] h-4 bg-black/5 blur-xl rounded-full mx-auto -mt-4" />
          </motion.div>
        </div>

        {/* Minimal Trust Section - Mobile Friendly */}
        <div className="flex justify-center gap-6 mt-10 opacity-70">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-gray-400" />
            <span className="text-[10px] font-bold text-gray-500 uppercase">
              Verified
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} className="text-gray-400" />
            <span className="text-[10px] font-bold text-gray-500 uppercase">
              4.9/5 Rated
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-gray-400" />
            <span className="text-[10px] font-bold text-gray-500 uppercase">
              24/7 Live
            </span>
          </div>
        </div>
      </div>

      {/* Thin Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400" />
    </section>
  );
};

export default Hero;
