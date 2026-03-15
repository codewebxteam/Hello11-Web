import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Fuel, Gauge, ChevronRight, X, User, MapPin, Navigation, Calendar, Phone, MessageCircle } from 'lucide-react';

import car1 from '../assets/cars/car1.png';
import car2 from '../assets/cars/car2.png';
import car3 from '../assets/cars/car3.png';
import car4 from '../assets/cars/car4.png';
import car5 from '../assets/cars/car5.png';
import car6 from '../assets/cars/car6.png';

const WA = '919628911211';

const cars = [
  { id: 1, name: "Swift Dzire", price: "10", img: car1, seats: "5", fuel: "CNG/Pet", gear: "Manual", darkBg: false },
  { id: 2, name: "Toyota Innova", price: "18", img: car2, seats: "7", fuel: "Diesel", gear: "Manual", darkBg: false },
  { id: 3, name: "Ertiga ZXI", price: "14", img: car3, seats: "7", fuel: "CNG", gear: "Manual", darkBg: false },
  { id: 4, name: "Mahindra XUV", price: "16", img: car4, seats: "7", fuel: "Diesel", gear: "Auto", darkBg: true },
  { id: 5, name: "Honda City", price: "15", img: car5, seats: "5", fuel: "Petrol", gear: "Auto", darkBg: true },
  { id: 6, name: "Fortuner", price: "22", img: car6, seats: "7", fuel: "Diesel", gear: "Auto", darkBg: true },
];

const inp = "w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm";

const Rent = () => {
  const [modal, setModal] = useState(null);   // selected car object
  const [form, setForm] = useState({ name: '', pickup: '', drop: '', date: '' });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const closeModal = () => { setModal(null); setForm({ name: '', pickup: '', drop: '', date: '' }); };

  const sendEnquiry = () => {
    if (!form.name || !form.pickup || !form.drop || !form.date) {
      alert('Please fill all fields before sending.'); return;
    }
    const msg =
      `\ud83d\ude97 *Self-Drive Rental Enquiry*\n\n` +
      `\ud83d\udc64 *Name:* ${form.name}\n` +
      `\ud83d\ude99 *Vehicle:* ${modal.name}\n` +
      `\ud83d\udcb0 *Rate:* \u20b9${modal.price} / km\n` +
      `\ud83d\udccd *Pickup:* ${form.pickup}\n` +
      `\ud83c\udfc1 *Drop:* ${form.drop}\n` +
      `\ud83d\udcc5 *Date:* ${form.date}\n\n` +
      `Hello11 Team, I'd like to rent this car!`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');
    closeModal();
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-20 md:pt-32 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 md:mb-12 px-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-[2px] w-8 md:w-12 bg-yellow-500" />
            <span className="text-yellow-600 font-bold tracking-[0.3em] text-[10px] uppercase">Self Drive</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-black leading-none tracking-tighter uppercase italic">
            ELITE <span className="text-yellow-500">FLEET</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[9px] md:text-xs mt-3">
            Premium selection for your next journey
          </p>
        </div>

        {/* Cars Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cars.map((car) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white border-2 border-yellow-400 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-7 group transition-all duration-500"
            >
              <div className="relative mb-4 flex flex-col items-center">
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: car.darkBg ? 'rgba(250,200,10,0.15)' : 'rgba(250,200,10,0.1)' }} />
                <img src={car.img} alt={car.name} className="w-full h-40 md:h-52 object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

              </div>

              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-black italic uppercase tracking-tight leading-tight group-hover:text-yellow-600 transition-colors">{car.name}</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-yellow-500 font-black text-xl italic">₹{car.price}</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">/ km</span>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setModal(car)}
                  className="bg-black text-white p-3.5 md:p-4 rounded-2xl group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300"
                >
                  <ChevronRight size={18} strokeWidth={3} />
                </motion.button>
              </div>

              <div className="grid grid-cols-3 gap-1 py-4 border-t border-yellow-100 bg-yellow-50/30 rounded-2xl px-2">
                <div className="flex flex-col items-center gap-1 border-r border-yellow-100">
                  <Users size={14} className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
                  <span className="text-[9px] text-black font-black uppercase tracking-tighter">{car.seats} Seats</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-r border-yellow-100">
                  <Fuel size={14} className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
                  <span className="text-[9px] text-black font-black uppercase tracking-tighter">{car.fuel}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Gauge size={14} className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
                  <span className="text-[9px] text-black font-black uppercase tracking-tighter">{car.gear}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block px-6 py-2 bg-white border-2 border-yellow-400 rounded-full">
            <p className="text-black text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">
              *Conditions Apply • No Fuel Included • ID Proof Required
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 md:mt-10 bg-black rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full" />
          <p className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-3">Want to Rent a Car?</p>
          <h3 className="text-white text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
            Drive in <span className="text-yellow-400">Style</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-yellow-300 transition-all hover:scale-105"
            >
              <MessageCircle size={20} /> Enquire on WhatsApp
            </a>
            <a
              href="tel:+919628911211"
              className="flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-2xl font-bold border border-white/20 hover:bg-white/20 transition-all text-sm uppercase tracking-wider"
            >
              <Phone size={20} className="text-yellow-400" /> Call +91 96289 11211
            </a>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#111] border border-white/10 rounded-3xl p-6 w-full max-w-md"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-5">
              <div>
                <span className="text-yellow-400 text-[10px] font-black tracking-widest uppercase">Rental Enquiry</span>
                <h3 className="text-white text-2xl font-black italic uppercase tracking-tight">{modal.name}</h3>
                <p className="text-yellow-500 font-black text-lg">₹{modal.price} <span className="text-gray-500 text-xs font-bold">/ km</span></p>
              </div>
              <button onClick={closeModal} className="text-gray-500 hover:text-white transition-colors p-1">
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-3">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={16} />
                <input value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your Name" className={inp} />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={16} />
                <input value={form.pickup} onChange={e => set('pickup', e.target.value)} placeholder="Pickup Location" className={inp} />
              </div>
              <div className="relative">
                <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" size={16} />
                <input value={form.drop} onChange={e => set('drop', e.target.value)} placeholder="Drop Location" className={inp} />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input type="date" value={form.date} onChange={e => set('date', e.target.value)} className={inp + " appearance-none"} style={{ colorScheme: 'dark' }} />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={sendEnquiry}
                className="w-full bg-yellow-400 text-black font-black py-4 rounded-2xl hover:bg-yellow-500 transition-colors uppercase tracking-wider mt-1"
              >
                Send via WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Rent;