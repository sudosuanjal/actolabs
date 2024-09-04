import React, {useState} from "react";
import Image from "../../assets/Image";
import HamburgerMenu from "../../assets/HamburgerMenu";


const HeroSection = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    // <header className="bg-gray-900 h-16 flex items-center justify-center">
    //   <div className="bg-black-300 h-12 flex items-center justify-between w-screen mx-6">
    //     <div className="bg-black-300 flex items-center h-full">
    //       <Image/>
    //       <p className="ml-1 bg-black-300 ">aocto labs</p>
    //     </div>
    //     <div>
    //       <HamburgerMenu/>
    //     </div>
    //   </div>
    // </header>

    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-white">Logo</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </nav>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white p-4 transition-transform ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
      >
        <nav>
          <a href="#home" className="block py-2 hover:bg-gray-700">Home</a>
          <a href="#about" className="block py-2 hover:bg-gray-700">About</a>
          <a href="#services" className="block py-2 hover:bg-gray-700">Services</a>
          <a href="#contact" className="block py-2 hover:bg-gray-700">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default HeroSection;