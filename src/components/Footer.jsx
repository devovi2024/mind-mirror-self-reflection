import { FaInstagram, FaTwitter, FaFeatherAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#fdf7f1] text-[#3e3e3e] border-t-4 border-[#a07656] py-10 px-6 font-serif relative overflow-hidden">

      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Quote Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#7d5a4f]">Quote of the Day</h3>
          <p className="text-sm italic leading-relaxed">
            "In stillness, the mirror reflects truth."  
          </p>
          <span className="text-xs mt-2 block text-[#a07656]">— Mind Mirror Philosophy</span>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className="text-lg font-semibold mb-2 text-[#7d5a4f]">Follow Us</h3>
          <div className="flex justify-center gap-4 text-[#5c4f44] text-xl">
            <a href="#" className="hover:text-[#a07656] transition-all duration-300"><FaInstagram /></a>
            <a href="#" className="hover:text-[#a07656] transition-all duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-[#a07656] transition-all duration-300"><FaFeatherAlt /></a>
          </div>
        </div>

        {/* Branding Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#7d5a4f]">Mind Mirror</h3>
          <p className="text-sm text-[#4b4b4b]">
            Mind self-reflection tools for modern calm.  
          </p>
          <p className="text-xs mt-2 text-[#a07656]">© 2025 Mind Mirror. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
