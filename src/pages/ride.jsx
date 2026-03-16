import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Navigation,
  User,
  Calendar,
  ArrowRight,
  ChevronRight,
  Phone,
  MessageCircle,
} from "lucide-react";

const WA = "919628911211";

// --- IMAGES IMPORT ---
import car1 from "../assets/cars/car1.webp";
import car2 from "../assets/cars/car2.webp";
import quickcar1 from "../assets/cars/quickcar1.webp";
import quickcar2 from "../assets/cars/quickcar2.webp";

const rideCategories = [
  {
    id: "local",
    title: "Local Ride",
    desc: "Within Khalilabad City",
    img: car1,
    price: "Starts @ ₹199",
  },
  {
    id: "outstation",
    title: "Outstation",
    desc: "Lucknow, GKP, Basti & More",
    img: car2,
    price: "Starts @ ₹9/km",
  },
];

const Ride = () => {
  const [selected, setSelected] = useState("local");
  const [name, setName] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");

  const handleBookRide = () => {
    if (!name || !pickup || !drop) {
      alert("Please fill in Name, Pickup, and Drop.");
      return;
    }
    const pkg = selected.charAt(0).toUpperCase() + selected.slice(1);
    const msg =
      `🚖 *${pkg} Ride Booking*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📍 *Pickup:* ${pickup}\n` +
      `🏁 *Drop:* ${drop}\n` +
      (date ? `📅 *Date:* ${date}\n` : "") +
      `🚗 *Package:* ${pkg}\n\n` +
      `Hello11 Team, please confirm my booking.`;
    window.open(
      `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  const getHeroImage = () => {
    if (selected === "outstation") return quickcar2;
    return quickcar1;
  };

  return (
    <div className="bg-[#fafafa] min-h-screen pt-28 md:pt-40 pb-20 px-3 md:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-20 px-2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4 justify-center md:justify-start"
          >
            <div className="h-[2px] w-12 bg-yellow-500"></div>
            <span className="text-yellow-600 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs">
              Elite Booking Engine
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-black leading-[0.8] tracking-tighter uppercase italic"
          >
            SELECT <br />{" "}
            <span className="text-yellow-500 underline decoration-black/5 decoration-8 underline-offset-[-5px]">
              YOUR RIDE
            </span>
          </motion.h1>
        </div>

        {/* Category Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-24">
          {rideCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(cat.id)}
              className={`relative rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 cursor-pointer transition-all duration-500 border group ${
                selected === cat.id
                  ? "border-yellow-400 bg-white shadow-2xl"
                  : "border-gray-100 bg-white shadow-sm"
              }`}
            >
              <div className="relative z-10">
                <h3
                  className={`text-3xl md:text-5xl font-black italic uppercase tracking-tighter transition-colors ${selected === cat.id ? "text-black" : "text-gray-300"}`}
                >
                  {cat.title}
                </h3>
                <p className="text-yellow-600/60 text-[10px] font-black uppercase tracking-[0.4em] mt-2">
                  {cat.desc}
                </p>
                <div
                  className={`mt-8 inline-block px-6 py-2 rounded-xl font-black text-sm transition-all shadow-sm ${selected === cat.id ? "bg-black text-yellow-400" : "bg-gray-50 text-gray-300"}`}
                >
                  {cat.price}
                </div>
              </div>

              <div className="absolute -bottom-2 -right-4 md:right-4 overflow-visible">
                <motion.img
                  src={cat.img}
                  alt={cat.title}
                  className={`w-48 md:w-80 h-auto object-contain transition-all duration-700 pointer-events-none ${
                    selected === cat.id
                      ? "opacity-100 scale-110 translate-x-0"
                      : "opacity-10 grayscale translate-x-4 group-hover:opacity-20"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking Interface */}
        <div className="bg-black rounded-[4rem] md:rounded-[6rem] p-8 md:p-20 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)] border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center relative">
            {/* Left: Car Display - No Shadows or Glows */}
            <div className="relative h-64 md:h-[450px] flex flex-col items-center justify-center order-2 lg:order-1 px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full flex flex-col items-center justify-center relative"
                >
                  <img
                    src={getHeroImage()}
                    className="w-full h-auto max-h-full object-contain relative z-10"
                    alt="Quick Booking Car"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Action Form */}
            <div className="flex flex-col gap-8 order-1 lg:order-2">
              <div className="space-y-6">
                <div>
                  <span className="bg-yellow-400 text-black text-[10px] font-black tracking-[0.3em] px-4 py-1.5 rounded-full uppercase mb-4 block w-fit">
                    {selected} Premium
                  </span>
                  <h4 className="text-white text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
                    QUICK <span className="text-yellow-400">ENTRY</span>
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white/[0.03] p-5 rounded-2xl border border-white/5 focus-within:border-yellow-400/50 transition-all group">
                    <User
                      className="text-gray-500 group-focus-within:text-yellow-400 shrink-0"
                      size={18}
                    />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      className="bg-transparent outline-none text-white text-base w-full placeholder:text-gray-700 font-bold uppercase tracking-tight"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 bg-white/[0.03] p-5 rounded-2xl border border-white/5 focus-within:border-yellow-400/50 transition-all group">
                      <MapPin
                        className="text-gray-500 group-focus-within:text-yellow-400 shrink-0"
                        size={18}
                      />
                      <input
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder="Pickup Location"
                        className="bg-transparent outline-none text-white text-base w-full placeholder:text-gray-700 font-bold uppercase tracking-tight"
                      />
                    </div>
                    <div className="flex items-center gap-4 bg-white/[0.03] p-5 rounded-2xl border border-white/5 focus-within:border-yellow-400/50 transition-all group">
                      <Navigation
                        className="text-gray-500 group-focus-within:text-yellow-400 shrink-0"
                        size={18}
                      />
                      <input
                        type="text"
                        value={drop}
                        onChange={(e) => setDrop(e.target.value)}
                        placeholder="Drop Location"
                        className="bg-transparent outline-none text-white text-base w-full placeholder:text-gray-700 font-bold uppercase tracking-tight"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/[0.03] p-5 rounded-2xl border border-white/5 focus-within:border-yellow-400/50 transition-all group">
                    <Calendar
                      className="text-gray-500 group-focus-within:text-yellow-500 shrink-0"
                      size={18}
                    />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-transparent outline-none text-white text-base w-full placeholder:text-gray-700 font-bold appearance-none"
                      style={{ colorScheme: "dark" }}
                    />
                  </div>
                </div>
              </div>

              <motion.button
                onClick={handleBookRide}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-400 py-6 rounded-[2rem] text-black font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-white transition-all duration-500 group shadow-[0_20px_50px_rgba(250,204,21,0.3)]"
              >
                CONFIRM {selected.toUpperCase()} RIDE
                <ArrowRight
                  size={24}
                  strokeWidth={3}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-20 md:mt-32 border border-gray-100 rounded-[4rem] p-10 md:p-20 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.03)] text-center relative overflow-hidden group">
          <h3 className="text-4xl md:text-7xl font-black italic text-black uppercase tracking-tighter mb-8 leading-none">
            NEED <span className="text-yellow-500">ASSISTANCE?</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-black text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-yellow-400 hover:text-black transition-all duration-500 shadow-xl"
            >
              <MessageCircle size={20} /> CHAT SUPPORT
            </a>
            <a
              href="tel:+919628911211"
              className="flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-black border border-gray-200 hover:border-yellow-400 transition-all duration-500 text-xs uppercase tracking-[0.2em] shadow-lg"
            >
              <Phone size={20} className="text-yellow-400" /> +91 96289 11211
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ride;
