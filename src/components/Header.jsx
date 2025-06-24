import React from 'react';
import { FaDollarSign, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/join.jpg';

const Header = () => {
  return (
    <section className="bg-[#f3eae3] flex items-center justify-center px-6 py-20 border-b-4 border-[#a07656]">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16 font-serif">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="p-10 rounded-lg shadow-inner relative">
            <FaClock className="text-[#7d5a4f] text-3xl absolute -top-6 -left-6 animate-pulse" />
            <FaDollarSign className="text-[#4a7c59] text-3xl absolute -top-4 right-4 animate-bounce" />
            <img
              src={bannerImg}
              alt="Vintage Document"
              className="h-100 mx-auto sepia"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-sm text-[#7d5a4f] font-bold uppercase tracking-widest">
            Rate & Term Refinance
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#3e3e3e] leading-snug drop-shadow-md">
            Quickly Increase <br className="hidden md:block" /> Your Home Equity
          </h1>
          <p className="text-[#4b4b4b] text-md leading-relaxed md:pr-6 italic">
            Refinance your mortgage and save money the classic way — lower your interest, shorten your term, and build equity faster.
          </p>
          <Link
            to="/reflection"
            className="mt-4 px-7 py-3 border border-[#a07656] text-[#a07656] bg-transparent hover:bg-[#a07656] hover:text-white transition-all duration-300 rounded-md uppercase tracking-wide shadow-sm"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
