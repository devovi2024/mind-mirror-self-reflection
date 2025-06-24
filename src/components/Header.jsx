import React from 'react';
import { FaDollarSign, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/join.jpg';

const Header = () => {
  return (
    <section className="bg-[#f3eae3] px-4 sm:px-6 py-16 border-b-4 border-[#a07656]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 font-serif">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-sm text-[#7d5a4f] font-bold uppercase tracking-widest">
            Rate & Term Refinance
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3e3e3e] leading-snug drop-shadow-md">
            Quickly Increase <br className="hidden md:block" /> Your Home Equity
          </h1>
          <p className="text-[#4b4b4b] text-md leading-relaxed italic md:pr-6">
            Refinance your mortgage and save money the classic way — lower your interest, shorten your term, and build equity faster.
          </p>
          <Link
            to="/reflection"
            className="inline-block mt-2 px-6 py-3 border border-[#a07656] text-[#a07656] bg-transparent hover:bg-[#a07656] hover:text-white transition-all duration-300 rounded-md uppercase tracking-wide shadow-md"
          >
            Get Started
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative p-6 sm:p-10 rounded-lg shadow-lg bg-white">
            <FaClock className="text-[#7d5a4f] text-2xl sm:text-3xl absolute -top-4 -left-4 animate-pulse" />
            <FaDollarSign className="text-[#4a7c59] text-2xl sm:text-3xl absolute -top-4 right-4 animate-bounce" />
            <img
              src={bannerImg}
              alt="Vintage Document"
              className="max-h-80 sm:max-h-96 mx-auto object-contain sepia rounded-md"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Header;
