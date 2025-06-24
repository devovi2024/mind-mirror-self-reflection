import React, { useState } from 'react';
import { FaCircle, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let timeoutId = null;

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutId);
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const menuItems = [
    {
      label: 'What we offer',
      items: ['Home Loans', 'Refinancing', 'Investment Loans'],
    },
    {
      label: 'Resources',
      items: ['Blog', 'FAQs', 'Guides'],
    },
    {
      label: 'About us',
      items: ['Our Story', 'Team', 'Contact'],
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaCircle className="text-purple-600 text-lg" />
              <span className="text-xl font-bold text-gray-900">Mind Mirror</span>
            </div>
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((menu, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 text-gray-800 font-medium hover:text-purple-600 transition duration-200">
                  {menu.label}
                  <FaChevronDown className="text-xs mt-1" />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute top-full mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg transition-all duration-200 ease-in-out origin-top transform z-20 ${
                    openDropdown === index
                      ? 'opacity-100 scale-100 visible'
                      : 'opacity-0 scale-95 invisible'
                  }`}
                >
                  <ul className="py-3 bg-amber-50 rounded-lg">
                    {menu.items.map((item, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href="#"
                          className="block px-5 py-2 text-sm text-gray-800 hover:bg-purple-100 hover:text-purple-700 transition rounded-md"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-purple-100 text-purple-700 border border-purple-300 px-5 py-2 rounded-full hover:bg-purple-200 font-medium transition-all duration-200">
              Get started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 text-xl"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white shadow-lg rounded-lg">
            {menuItems.map((menu, index) => (
              <div key={index} className="border-t border-gray-200">
                <details className="group">
                  <summary className="flex justify-between items-center px-5 py-3 cursor-pointer text-gray-800 font-semibold hover:text-purple-600">
                    {menu.label}
                    <FaChevronDown className="group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <ul className="px-5 pb-3">
                    {menu.items.map((item, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href="#"
                          className="block py-2 text-sm text-gray-700 hover:text-purple-600"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            ))}
            <div className="p-4">
              <button className="w-full bg-purple-100 text-purple-700 border border-purple-300 py-2 rounded-full hover:bg-purple-200 font-medium transition">
                Get started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
