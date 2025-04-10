import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Home } from '../Pages/Home';
import { Testimonials } from '../Pages/Testimonials';
import { Contact } from '../Pages/Contact';
import { About } from '../Pages/About';
import { PageNotFound } from '../Pages/PageNotFound';
import { Methods } from '../Pages/Methods';

export const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <div className="h-full w-full">
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>} exact />
                <Route path="/methods" element={<Methods/>} />
                <Route path="/testimonials" element={<Testimonials/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/about" element={<About/>} />
                <Route path="*" element={<PageNotFound/>} /> 
            </Routes>
      </AnimatePresence>
      </div>
    )
}
