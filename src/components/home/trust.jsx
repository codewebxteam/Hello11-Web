import React, { useRef } from 'react';
import { Star, Quote, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const reviews = [
  { id: 1, name: "Rahul Singh", location: "Khalilabad", text: "Best taxi service in town. The Innova was super clean and the driver was professional.", rating: 5 },
  { id: 2, name: "Anjali Gupta", location: "Lucknow", text: "I book Hello11 every time I travel to Basti. Always on time and very safe for solo travelers.", rating: 5 },
  { id: 3, name: "Mohd. Zaid", location: "Gorakhpur", text: "Highly recommended for outstation trips. Affordable rates and no hidden charges.", rating: 5 },
  { id: 4, name: "Vicky Khanna", location: "Basti", text: "Elite experience indeed. The booking process was seamless and the car arrived exactly on time.", rating: 5 },
  { id: 5, name: "Sana Khan", location: "Khalilabad", text: "Safe and reliable. The driver was very polite and knew all the short routes.", rating: 5 },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  // Progress bar logic
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const cardWidth = window.innerWidth < 768 ? clientWidth * 0.85 : 450;
      const scrollTo = direction === 'left' 
        ? scrollLeft - cardWidth - 20 
        : scrollLeft + cardWidth + 20;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden relative">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />

      <div className="container mx-auto px-6 mb-12 md:mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 text-center md:text-left">
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-3 mb-3"
          >
            <div className="h-[2px] w-8 bg-black"></div>
            <h2 className="text-black font-bold uppercase tracking-[0.4em] text-[10px]">Wall of Fame</h2>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-7xl font-black text-black italic uppercase tracking-tighter"
          >
            Elite <span className="text-yellow-500 underline decoration-black decoration-4">Feedback</span>
          </motion.h3>
        </div>

         {/* Navigation Buttons (Desktop only, similar to garage) */}
         <div className="hidden md:flex gap-4 mb-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border-2 border-black hover:bg-yellow-400 hover:border-yellow-400 transition-all active:scale-90 group"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} className="text-black group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full bg-black hover:bg-yellow-400 transition-all active:scale-90 group"
              aria-label="Next review"
            >
              <ChevronRight size={24} className="text-white group-hover:text-black group-hover:scale-110 transition-transform" />
            </button>
         </div>
      </div>

      {/* DRAGGABLE CONTAINER */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-5 md:gap-8 px-6 md:px-[10%] pb-12 no-scrollbar cursor-grab active:cursor-grabbing relative z-10"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {reviews.map((rev, index) => (
          <motion.div
            key={index}
            className="w-[85vw] md:w-[450px] flex-shrink-0 relative group"
            style={{ scrollSnapAlign: 'center' }}
          >
            <div className="h-full bg-black p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border border-white/5 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <Quote className="absolute top-8 right-8 md:top-12 md:right-12 text-white/5 group-hover:text-yellow-400/10 transition-colors" size={64} />

              <div className="flex gap-1 mb-8 relative z-10">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#facc15" className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-base md:text-2xl leading-relaxed italic mb-10 md:mb-16 relative z-10 font-medium">
                "{rev.text}"
              </p>

              <div className="relative z-10 flex items-center gap-5 pt-8 border-t border-white/5">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-black font-black text-lg shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-black text-base md:text-xl italic uppercase tracking-wider leading-none mb-1">{rev.name}</h4>
                  <p className="text-yellow-400 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em]">{rev.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Progress Indicator */}
      <div className="container mx-auto px-6 mt-4 md:mt-8 max-w-[250px] md:max-w-md">
        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-black origin-left"
            style={{ scaleX }}
          />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default Testimonials;