import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, MessageCircle, Plus, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp Pre-defined Message
  const wpMessage = encodeURIComponent(
    "Hello Hello11 Team, I would like to make an enquiry regarding your taxi services. Please guide me with the booking process.",
  );
  const wpLink = `https://wa.me/919628911211?text=${wpMessage}`;

  const socialLinks = [
    {
      id: 1,
      name: "WhatsApp",
      icon: <MessageCircle size={18} strokeWidth={2.5} />,
      color: "bg-[#25D366]",
      link: wpLink,
    },
    {
      id: 2,
      name: "Instagram",
      icon: <Instagram size={18} strokeWidth={2.5} />,
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      link: "https://instagram.com/hello11_khalilabad",
    },
    {
      id: 3,
      name: "Play Store",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3.18 23.76a2 2 0 0 0 2.13-.22l11.44-6.6-2.82-2.82L3.18 23.76ZM21.4 10.35l-2.95-1.7-3.16 3.16 3.16 3.16 2.98-1.72a1.7 1.7 0 0 0 0-2.9ZM1.14.77A2 2 0 0 0 .75 1.8v20.38a2 2 0 0 0 .39 1.03l.1.1 11.42-11.42v-.26L1.24.66l-.1.11ZM13.93 9.18l-2.68-2.68-8.07-4.65 10.75 7.33Z" />
        </svg>
      ),
      color: "bg-[#00A1E4]",
      link: "https://play.google.com/store/apps/details?id=com.hello11",
    },
  ];

  return (
    <div className="fixed right-5 bottom-28 md:bottom-8 z-[9999] flex flex-col items-center gap-3 select-none">
      {/* Expanded Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col gap-3 mb-1">
            {socialLinks.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.8 }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                className={`${item.color} text-white w-10 h-10 md:w-11 md:h-11 rounded-xl shadow-lg flex items-center justify-center transition-transform active:scale-95`}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main FAB Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        className={`${isOpen ? "bg-gray-950 shadow-inner" : "bg-yellow-400 shadow-[0_10px_25px_rgba(250,204,21,0.4)]"} 
          text-black w-12 h-12 md:w-13 md:h-13 rounded-full flex items-center justify-center transition-all duration-300`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={18} strokeWidth={3} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Plus size={20} strokeWidth={3} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default Sidebar;
