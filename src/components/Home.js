import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image from "../assets/image.png";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-[80px] space-y-10">
      {/* Main Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl w-full bg-[#83C5BE] rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch"
      >
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 md:p-12 text-center md:text-left text-black flex flex-col justify-center p-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Buy Jewellery, Moti-Designs and Sarees
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            100+
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
            Happy Customers
          </p>
          <button className="bg-black text-white py-3 px-4 w-[220px] sm:w-[250px] rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 mx-auto md:mx-0">
            Explore collection!
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Image Section (Hidden on mobile) */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center items-end p-6 md:p-0">
          <img
            src={image}
            alt="Jewellery Collection"
            className="w-[85%] h-auto object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
