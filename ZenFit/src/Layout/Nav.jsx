import React, { useEffect } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from '../Components/Ui/Button';
import { Link, useLocation } from 'react-router-dom';

export const Nav = () => {
  const [ShowNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Methods", path: "/methods" },
    { name: "About Us", path: "/about" },
    { name: "Success Stories", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < lastScrollY || currentY < 10);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: ShowNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full fixed top-0 z-50"
    >
      <nav className="mx-auto flex justify-between items-center p-4 bg-black/20 backdrop-blur-sm">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-4xl text-white font-bold">ZENFIT</h1>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-white font-semibold hover:text-blue-600 transition-colors ${
                location.pathname === item.path ? 'text-blue-600' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button>Login</Button>
          <Button variant="secondary">Sign up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-1.5 md:hidden z-50"
        >
          <motion.span
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 8 : 0,
            }}
            className="w-6 h-1 rounded-full bg-white block"
          />
          <motion.span
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
            className="w-6 h-1 rounded-full bg-white block"
          />
          <motion.span
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -10 : 0,
            }}
            className="w-6 h-1 rounded-full bg-white block"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 flex items-center justify-center bg-black/95 pt-24 px-4 md:hidden"
          >
            <div className="flex flex-col gap-8 items-center">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-white font-semibold text-2xl hover:text-primary transition-colors ${
                    location.pathname === item.path ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 w-full max-w-xs">
                <Button>Login</Button>
                <Button variant="secondary">Sign up</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

