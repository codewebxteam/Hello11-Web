import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Gauge, Settings, Droplets, ChevronRight, ChevronLeft, IndianRupee, ArrowRight } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

import car1 from '../../assets/cars/car1.png';
import car2 from '../../assets/cars/car2.png';
import car3 from '../../assets/cars/car3.png';
import car4 from '../../assets/cars/car4.png';
import car5 from '../../assets/cars/car5.png';
import car6 from '../../assets/cars/car6.png';

const cars = [
  { id: 1, name: "Innova Crysta", type: "Premium MPV", img: car1, rate: "18", seats: "7+1", transmission: "Auto/Manual", speed: "180 km/h", mileage: "12 km/l" },
  { id: 2, name: "Hyundai Aura", type: "Premium Sedan", img: car2, rate: "12", seats: "4+1", transmission: "Manual", speed: "160 km/h", mileage: "20 km/l" },
  { id: 3, name: "Maruti Swift", type: "Economy Hatch", img: car3, rate: "10", seats: "4+1", transmission: "Manual", speed: "150 km/h", mileage: "22 km/l" },
  { id: 4, name: "Mahindra Scorpio", type: "Power SUV", img: car4, rate: "16", seats: "6+1", transmission: "Manual", speed: "170 km/h", mileage: "14 km/l" },
  { id: 5, name: "Hyundai i10", type: "City Compact", img: car5, rate: "9", seats: "4+1", transmission: "Manual", speed: "145 km/h", mileage: "19 km/l" },
  { id: 6, name: "Mahindra Bolero", type: "Rugged MUV", img: car6, rate: "13", seats: "6+1", transmission: "Manual", speed: "140 km/h", mileage: "15 km/l" },
];

const Fleet = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setSelectedCar } = useBooking();

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cars.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const handleSelectCar = (car) => {
    setSelectedCar(car.name);
    const heroSection = document.getElementById('hero-booking');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#050505] py-20 md:py-32 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-yellow-400"></div>
            <span className="text-yellow-400 font-black tracking-[0.3em] uppercase text-[10px]">Premium Collection</span>
            <div className="h-[1px] w-8 bg-yellow-400"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white leading-tight uppercase italic tracking-tighter"
          >
            Modern <span className="text-yellow-400">Garage</span>
          </motion.h2>
        </div>

        {/* COVERFLOW CAROUSEL */}
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
            {cars.map((car, index) => {
              // Calculate relative position to active index
              let position = index - activeIndex;
              
              // Handle wrap-around for smooth infinite-feeling scroll
              if (position < -1) position += cars.length;
              if (position > 1) position -= cars.length;

              // Only render neighborhood of 3 cars
              const isVisible = Math.abs(position) <= 1;

              return (
                <AnimatePresence key={car.id}>
                  {isVisible && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{
                        x: position * (window.innerWidth < 768 ? 200 : 450),
                        scale: position === 0 ? 1 : 0.65,
                        opacity: position === 0 ? 1 : 0.4,
                        zIndex: position === 0 ? 50 : 20,
                        rotateY: position * -35,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="absolute w-[280px] md:w-[600px] flex flex-col items-center"
                    >
                      {/* Car Image with Glow/Shadow */}
                      <div className="relative group">
                        <img
                          src={car.img}
                          alt={car.name}
                          className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                        />
                        {position === 0 && (
                          <motion.div 
                            layoutId="car-shadow"
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-yellow-400/20 blur-xl rounded-full"
                          />
                        )}
                      </div>

                      {/* Active Car Info */}
                      {position === 0 && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-8 md:mt-12 text-center w-full"
                        >
                          <h3 className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
                            {car.name}
                          </h3>
                          
                          {/* Specs Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto px-4">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl flex flex-col items-center group hover:bg-yellow-400 transition-colors duration-300">
                              <Gauge size={20} className="text-yellow-400 group-hover:text-black mb-2" />
                              <span className="text-[10px] text-gray-500 group-hover:text-black/60 font-black uppercase tracking-widest">Max Speed</span>
                              <span className="text-white group-hover:text-black font-black text-sm md:text-base">{car.speed}</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl flex flex-col items-center group hover:bg-yellow-400 transition-colors duration-300">
                              <Settings size={20} className="text-yellow-400 group-hover:text-black mb-2" />
                              <span className="text-[10px] text-gray-500 group-hover:text-black/60 font-black uppercase tracking-widest">Transmission</span>
                              <span className="text-white group-hover:text-black font-black text-sm md:text-base">{car.transmission}</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl flex flex-col items-center group hover:bg-yellow-400 transition-colors duration-300">
                              <Users size={20} className="text-yellow-400 group-hover:text-black mb-2" />
                              <span className="text-[10px] text-gray-500 group-hover:text-black/60 font-black uppercase tracking-widest">Capacity</span>
                              <span className="text-white group-hover:text-black font-black text-sm md:text-base">{car.seats}</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl flex flex-col items-center group hover:bg-yellow-400 transition-colors duration-300">
                              <Droplets size={20} className="text-yellow-400 group-hover:text-black mb-2" />
                              <span className="text-[10px] text-gray-500 group-hover:text-black/60 font-black uppercase tracking-widest">Efficiency</span>
                              <span className="text-white group-hover:text-black font-black text-sm md:text-base">{car.mileage}</span>
                            </div>
                          </div>

                          {/* Action Bar */}
                          <div className="mt-8 flex items-center justify-center gap-6">
                            <div className="text-left">
                              <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] block mb-1">Starting from</span>
                              <div className="flex items-baseline gap-1">
                                <span className="text-yellow-400 text-2xl font-black">₹{car.rate}</span>
                                <span className="text-gray-600 text-[10px] font-bold">/ KM</span>
                              </div>
                            </div>
                            <button 
                              onClick={() => handleSelectCar(car)}
                              className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all active:scale-95 flex items-center gap-2"
                            >
                              Rent Now <ArrowRight size={18} />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              );
            })}
          </div>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-20 z-[60] pointer-events-none">
            <button 
              onClick={handlePrev}
              className="p-4 md:p-6 bg-white/5 hover:bg-yellow-400 text-white hover:text-black rounded-full backdrop-blur-xl border border-white/10 transition-all pointer-events-auto active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="p-4 md:p-6 bg-white/5 hover:bg-yellow-400 text-white hover:text-black rounded-full backdrop-blur-xl border border-white/10 transition-all pointer-events-auto active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Background Section Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-yellow-400/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default Fleet;