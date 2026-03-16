import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Gauge,
  Settings,
  Droplets,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";
import { useBooking } from "../../context/BookingContext";

import car1 from "../../assets/cars/car1.png";
import car2 from "../../assets/cars/car2.png";
import car3 from "../../assets/cars/car3.png";
import car4 from "../../assets/cars/car4.png";
import car5 from "../../assets/cars/car5.png";
import car6 from "../../assets/cars/car6.png";

const cars = [
  {
    id: 1,
    name: "Innova Crysta",
    type: "Premium MPV",
    img: car1,
    rate: "18",
    seats: "7+1",
    transmission: "Auto",
    speed: "180 km/h",
    mileage: "12 km/l",
  },
  {
    id: 2,
    name: "Hyundai Aura",
    type: "Premium Sedan",
    img: car2,
    rate: "12",
    seats: "4+1",
    transmission: "Manual",
    speed: "160 km/h",
    mileage: "20 km/l",
  },
  {
    id: 3,
    name: "Maruti Swift",
    type: "Economy Hatch",
    img: car3,
    rate: "10",
    seats: "4+1",
    transmission: "Manual",
    speed: "150 km/h",
    mileage: "22 km/l",
  },
  {
    id: 4,
    name: "Mahindra Scorpio",
    type: "Power SUV",
    img: car4,
    rate: "16",
    seats: "6+1",
    transmission: "Manual",
    speed: "170 km/h",
    mileage: "14 km/l",
  },
  {
    id: 5,
    name: "Hyundai i10",
    type: "City Compact",
    img: car5,
    rate: "9",
    seats: "4+1",
    transmission: "Manual",
    speed: "145 km/h",
    mileage: "19 km/l",
  },
  {
    id: 6,
    name: "Mahindra Bolero",
    type: "Rugged MUV",
    img: car6,
    rate: "13",
    seats: "6+1",
    transmission: "Manual",
    speed: "140 km/h",
    mileage: "15 km/l",
  },
];

const Fleet = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { setSelectedCar } = useBooking();

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % cars.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + cars.length) % cars.length);
  }, []);

  // Auto Scroll Logic
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(handleNext, 4000); // 4 seconds mein car change
      return () => clearInterval(interval);
    }
  }, [isPaused, handleNext]);

  const handleSelectCar = (car) => {
    setSelectedCar(car.name);
    const heroSection = document.getElementById("hero-booking");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Drag handler for finger swipe
  const onDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x;
    if (swipe < -50) handleNext();
    else if (swipe > 50) handlePrev();
  };

  return (
    <section className="bg-white py-16 md:py-32 overflow-hidden relative">
      {/* Background Decor - Subtle for White Theme */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="text-yellow-500 font-black tracking-widest uppercase text-[10px]">
              Premium Fleet
            </span>
          </motion.div>
          <motion.h2 className="text-4xl md:text-8xl font-black text-gray-950 leading-tight uppercase italic tracking-tighter">
            Our <span className="text-yellow-500">Garage</span>
          </motion.h2>
        </div>

        {/* COVERFLOW CAROUSEL */}
        <div
          className="relative h-[450px] md:h-[650px] flex items-center justify-center touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
            {cars.map((car, index) => {
              let position = index - activeIndex;
              if (position < -1) position += cars.length;
              if (position > 1) position -= cars.length;

              const isActive = position === 0;
              const isVisible = Math.abs(position) <= 1;

              return (
                <AnimatePresence key={car.id}>
                  {isVisible && (
                    <motion.div
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={onDragEnd}
                      animate={{
                        x: position * (window.innerWidth < 768 ? 280 : 500),
                        scale: isActive ? 1.1 : 0.7,
                        opacity: isActive ? 1 : 0.3,
                        zIndex: isActive ? 50 : 20,
                        rotateY: position * -25,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                      }}
                      className={`absolute w-[300px] md:w-[650px] flex flex-col items-center ${isActive ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"}`}
                    >
                      {/* Car Image */}
                      <div className="relative">
                        <img
                          src={car.img}
                          alt={car.name}
                          className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                        {isActive && (
                          <motion.div
                            layoutId="glow"
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-4 bg-yellow-400/20 blur-xl rounded-full"
                          />
                        )}
                      </div>

                      {/* Active Car Info - Optimized for Mobile */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 md:mt-10 text-center w-full px-2"
                        >
                          <h3 className="text-2xl md:text-6xl font-black text-gray-900 uppercase italic tracking-tighter mb-4">
                            {car.name}
                          </h3>

                          {/* Specs Grid - Scrollable or Compact on mobile */}
                          <div className="grid grid-cols-4 gap-2 md:gap-6 max-w-4xl mx-auto overflow-hidden">
                            {[
                              { icon: Gauge, label: "Speed", val: car.speed },
                              {
                                icon: Settings,
                                label: "Gear",
                                val: car.transmission,
                              },
                              { icon: Users, label: "Seats", val: car.seats },
                              {
                                icon: Droplets,
                                label: "Fuel",
                                val: car.mileage,
                              },
                            ].map((spec, i) => (
                              <div
                                key={i}
                                className="bg-gray-50 border border-gray-100 p-2 md:p-4 rounded-xl flex flex-col items-center shadow-sm"
                              >
                                <spec.icon
                                  size={14}
                                  className="text-yellow-500 mb-1"
                                />
                                <span className="text-[8px] md:text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                                  {spec.label}
                                </span>
                                <span className="text-gray-900 font-black text-[9px] md:text-sm">
                                  {spec.val}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Action Bar */}
                          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
                            <div className="flex flex-col items-center md:items-start">
                              <span className="text-gray-400 text-[9px] font-black uppercase tracking-widest">
                                Rate
                              </span>
                              <div className="flex items-baseline gap-1">
                                <span className="text-gray-900 text-xl md:text-3xl font-black">
                                  ₹{car.rate}
                                </span>
                                <span className="text-gray-400 text-[10px] font-bold">
                                  / KM
                                </span>
                              </div>
                            </div>
                            <button
                              onClick={() => handleSelectCar(car)}
                              className="w-full md:w-auto bg-gray-950 text-white px-12 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-yellow-500 hover:text-black transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg"
                            >
                              Confirm {car.name} <ArrowRight size={16} />
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

          {/* Side Controls - Hidden on Mobile, Visible on Desktop */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full hidden md:flex justify-between px-10 z-[60] pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-5 bg-white shadow-xl text-gray-900 rounded-full border border-gray-100 transition-all pointer-events-auto hover:bg-yellow-400 active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-5 bg-white shadow-xl text-gray-900 rounded-full border border-gray-100 transition-all pointer-events-auto hover:bg-yellow-400 active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Hint for Mobile */}
      <div className="md:hidden text-center mt-2">
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest animate-pulse">
          Swipe to change car
        </p>
      </div>
    </section>
  );
};

export default Fleet;
