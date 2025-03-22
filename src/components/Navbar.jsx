import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle scrolling to a specific section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsOpen(false); // Close the mobile menu after scrolling
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-200 to-purple-200 shadow-lg fixed w-full top-0 z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
        {/* Image Logo */}
        <img src="/newlogo.png" alt="EarlyVet Logo" className="h-10 w-10 object-contain" /> 

        {/* Company Name */}
        <span  className="text-3xl font-bold text-[#5F9A49] hover:text-[#1E4D2B] active:text-green-700 transition-colors duration-300">
          EarlyVet
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
  <button 
    onClick={() => scrollToSection('ourproduct')} 
    className="text-[#5F9A49] text-lg font-bold hover:text-[#1E4D2B] active:text-green-700 transition-colors duration-300">
    Our Product
  </button>
  <button 
    onClick={() => scrollToSection('howitworks')} 
    className="text-[#5F9A49] text-lg font-bold hover:text-[#1E4D2B] active:text-green-700 transition-colors duration-300">
    How it Works
  </button>
  <button 
    onClick={() => scrollToSection('aboutus')} 
    className="text-[#5F9A49] text-lg font-bold hover:text-[#1E4D2B] active:text-green-700 transition-colors duration-300">
    About Us
  </button>
  <button 
    onClick={() => scrollToSection('contactus')} 
    className="text-[#5F9A49] text-lg font-bold hover:text-[#1E4D2B] active:text-green-700 transition-colors duration-300">
    Contact
  </button>
</div>



     {/* Mobile Menu Button */}
<button className="md:hidden text-[#5F9A49] text-xl font-bold hover:text-[#1E4D2B] transition-colors duration-300" 
  onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? <X size={32} /> : <Menu size={32} />}
</button>

{/* Mobile Menu */}
{isOpen && (
  <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col space-y-4 py-6 px-6 md:hidden">
    <button onClick={() => scrollToSection('home')} 
      className="text-[#5F9A49] text-lg font-bold hover:text-[#1E4D2B] active:text-green-700 transition-colors duration-300">
      Home
    </button>
    <button onClick={() => scrollToSection('ourproduct')} 
      className="text-[#5F9A49] text-lg font-bold hover:text-[#1E4D2B] active:text-green-700 transition-colors duration-300">
      Our Product
    </button>
    <button onClick={() => scrollToSection('howitworks')} 
      className="text-[#5F9A49] text-lg font-bold hover:text-[#1E4D2B] active:text-green-700 transition-colors duration-300">
      How it Works
    </button>
    <button onClick={() => scrollToSection('aboutus')} 
      className="text-[#5F9A49] text-lg font-bold hover:text-[#1E4D2B] active:text-green-700 transition-colors duration-300">
      About Us
    </button>
    <button onClick={() => scrollToSection('contactus')} 
      className="text-[#5F9A49] text-lg font-bold hover:text-[#1E4D2B] active:text-green-700 transition-colors duration-300">
      Contact
    </button>
  </div>
)}
    </nav>
  );
};

export default Navbar;
