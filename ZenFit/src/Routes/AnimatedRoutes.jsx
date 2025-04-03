import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Home } from '../Pages/Home';
import { Testimonials } from '../Pages/Testimonials';
import { Contact } from '../Pages/Contact';
import { About } from '../Pages/About';
import { PageNotFound } from '../Pages/PageNotFound';

export const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <div className="h-full w-full">
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>} exact />
                <Route path="/sponsorship" element={<Methods/>} />
                <Route path="/updates" element={<Testimonials/>} />
                <Route path="/resources" element={<Contact/>} />
                <Route path="/payments" element={<About/>} />
                <Route path="*" element={<PageNotFound/>} /> 
            </Routes>
      </AnimatePresence>
      </div>
    )
}
