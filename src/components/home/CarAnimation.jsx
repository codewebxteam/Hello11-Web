import React from 'react';
import { motion } from 'framer-motion';

// Image ko import karein taaki Vite deployment ke waqt iska path fix kar sake
import blueCar from '../../assets/cars/bluecar4.webp';

const CarAnimation = () => {
  const letters = "HELLO".split("");
  const numbers = "11".split("");

  return (
    <section className="relative w-full h-[15vh] md:h-[25vh] bg-[#050505] flex items-center justify-center overflow-hidden m-0 p-0 border-y border-white/5 select-none">

      {/* 1. Background Grid - Very subtle */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* 2. REVEALING TEXT - Sharp & Solid (No Blur) */}
      <div className="flex gap-1 md:gap-4 relative z-10">
        {/* HELLO - White */}
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.15, 0.22, 0.78, 0.88, 1],
              repeat: Infinity,
              delay: i * 0.04,
            }}
            className="text-4xl md:text-[8rem] font-black italic text-white leading-none tracking-tighter uppercase"
          >
            {char}
          </motion.span>
        ))}
        {/* 11 - Yellow */}
        {numbers.map((char, i) => (
          <motion.span
            key={i + 5}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.2, 0.28, 0.78, 0.88, 1],
              repeat: Infinity,
              delay: (i + 5) * 0.04,
            }}
            className="text-4xl md:text-[8rem] font-black italic text-yellow-400 leading-none tracking-tighter"
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* 3. THE CAR - Complete Left to Right Movement */}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{
          duration: 2.5,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute z-20 w-36 md:w-80 flex items-center justify-center pointer-events-none"
      >
        {/* Headlights Focus (Right Side) */}
        <div className="absolute right-[-120px] md:right-[-320px] flex flex-col gap-4 md:gap-8 opacity-80">
          <div
            className="w-[140px] md:w-[450px] h-[50px] md:h-[140px] bg-gradient-to-l from-yellow-400/40 to-transparent blur-2xl transform rotate-[15deg]"
            style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}
          ></div>
          <div
            className="w-[140px] md:w-[450px] h-[50px] md:h-[140px] bg-gradient-to-l from-yellow-400/40 to-transparent blur-2xl transform -rotate-[15deg] -mt-8"
            style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}
          ></div>
        </div>

        {/* Car Image with imported source */}
        <div className="relative rotate-[360deg] flex flex-col items-center">
          <img
            src={blueCar}
            alt="Hello11 Car"
            className="w-full h-auto scale-110 md:scale-125 relative z-10"
          />
          {/* Moving Ground Shadow */}
          <div
            className="w-full h-[45px] bg-gradient-to-r from-transparent via-black to-transparent blur-2xl rounded-full mt-[-35px] md:mt-[-65px] relative z-0 opacity-100"
          />
        </div>

        {/* Tail Lights (Left Side) */}
        <div className="absolute left-[-5px] md:left-[-15px] top-1/2 -translate-y-1/2 flex flex-col gap-6 md:gap-12 opacity-50">
          <div className="w-1.5 md:w-3 h-4 md:h-10 bg-red-600 blur-sm rounded-full"></div>
          <div className="w-1.5 md:w-3 h-4 md:h-10 bg-red-600 blur-sm rounded-full"></div>
        </div>
      </motion.div>

      {/* Subtle Speed Line */}
      <div className="absolute w-full h-[1px] bg-white/5 top-1/2 -translate-y-1/2"></div>

    </section>
  );
};

export default CarAnimation;