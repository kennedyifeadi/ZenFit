import React from "react";
import { motion } from "framer-motion";
import Button from "./UI/Button";

const Nav = () => {
  const navItems = ["Fitopia Method","US", "success stories", "about"];
  return (
    <div className="max-w-screen overflow-x-hidden">
      <motion.nav className="flex justify-between items-center p-4 bg-transparent ">
        <div>
          <h1 className="text-4xl text-white font-bold">ZENFIT</h1>
        </div>
        <div className="flex items-center gap-4 sm:hidden md:flex">
          {navItems.map((item, index) => (
            <ul key={index} className="flex gap-4">
              <li className="text-white font-semibold text-lg cursor-pointer hover:text-gray-300">
                {item}
              </li>
            </ul>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2">
          <Button>Login</Button>
        <p className="text-white">Sign up</p>
        </div>
      </motion.nav>
    </div>
  );
};

export default Nav;
