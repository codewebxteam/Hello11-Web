import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Car, Key, User, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/hello11.logo-2.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navVisible, setNavVisible] = useState(true);
  const [showTopNav, setShowTopNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const observerRef = useRef(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Hide bottom nav when footer is in view
  useEffect(() => {
    // Add small delay to ensure footer has rendered after route changes
    const timer = setTimeout(() => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setNavVisible(!entry.isIntersecting);
        },
        { root: null, rootMargin: '0px', threshold: 0 }
      );

      observerRef.current.observe(footer);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [location.pathname]);

  // Handle Top Header Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show at the very top
      if (currentScrollY < 50) {
        setShowTopNav(true);
      } 
      // scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowTopNav(false);
      } 
      // scrolling up
      else if (currentScrollY < lastScrollY) {
        setShowTopNav(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={22} strokeWidth={1.8} /> },
    { name: 'Ride', path: '/ride', icon: <Car size={22} strokeWidth={1.8} /> },
    { name: 'Rent', path: '/rent', icon: <Key size={22} strokeWidth={1.8} /> },
    { name: 'About', path: '/about', icon: <User size={22} strokeWidth={1.8} /> },
  ];

  return (
    <>
      {/* ── TOP HEADER ── */}
      <motion.header 
        initial={{ y: 0 }}
        animate={{ y: showTopNav ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 w-full z-[60] px-4 py-3 md:px-6 md:py-4 pointer-events-none"
      >
        <div className="container mx-auto flex justify-between items-center bg-gradient-to-r from-yellow-400/90 to-yellow-400/90 backdrop-blur-xl border border-yellow-300/50 p-2.5 px-4 md:p-3 md:px-6 rounded-2xl pointer-events-auto shadow-2xl">
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img src={logo} alt="Hello11" className="h-8 md:h-10 w-auto object-contain" />
          </motion.div>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: '#222' }}
            whileTap={{ scale: 0.95 }}
            href="tel:+919628911211"
            className="flex items-center gap-2 bg-black px-4 py-2 rounded-xl text-yellow-400 font-black text-[11px] uppercase tracking-wider transition-all duration-300"
          >
            <Phone size={13} fill="currentColor" /> Call Now
          </motion.a>
        </div>
      </motion.header>

      {/* ── BOTTOM NAVIGATION ── */}
      <AnimatePresence>
        {navVisible && (
          <motion.nav
            key="bottom-nav"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-[420px]"
          >
            <div className="relative bg-[#0a0a0a] backdrop-blur-3xl rounded-[2.8rem] border border-white/[0.08] flex justify-between items-center p-1.5 px-2 gap-1 overflow-hidden">

              {/* Subtle inner gradient */}
              <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <button
                    key={item.name}
                    onClick={() => navigate(item.path)}
                    className={`relative flex flex-col items-center gap-1 py-3 flex-1 transition-all duration-400 rounded-[2.2rem] z-10 ${isActive ? 'text-black' : 'text-gray-600 hover:text-gray-300'
                      }`}
                  >
                    {/* Active background pill */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-b from-yellow-300 to-yellow-500"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}

                    {/* Hover glow for inactive */}
                    {!isActive && (
                      <div className="absolute inset-0 rounded-[2.2rem] bg-white/0 hover:bg-white/[0.04] transition-colors duration-300" />
                    )}

                    <span className={`relative z-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
                      {item.icon}
                    </span>
                    <span className={`relative z-10 text-[8px] font-black uppercase tracking-[0.18em] transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40'
                      }`}>
                      {item.name}
                    </span>
                  </button>
                );
              })}

              {/* Top glow accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1.5px] bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* No spacer needed — each page has its own top padding */}
    </>
  );
};

export default Header;