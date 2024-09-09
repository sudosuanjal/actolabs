import React, {useState} from "react";
import Logo from "../../assets/Logo";
import HamburgerMenu from "../../assets/HamburgerMenu";
import Close from "../../assets/Close";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header className="border-b border-b-white h-16 flex items-center justify-center">
        <div className="h-12 flex items-center justify-between w-screen mx-6">
          <div className="flex items-center h-full">
            <Logo/>
            <p className="ml-1 ">aoctolabs</p>
          </div>
          {/* desktop view */}
          <div className="hidden md:flex md:space-x-6 px-4 lg:space-x-10">
            <a href="#services" className="hover:text-gray-400">Services</a>
            <a href="#pricing" className="hover:text-gray-400">Pricing</a>
            <a href="#howItWorks" className="hover:text-gray-400">How it Works</a>
            <a href="#client" className="hover:text-gray-400">Clients</a>
            <a href="#team" className="hover:text-gray-400">Team</a>
          </div>
          <div className="hidden md:flex space-x-3 mr-3">
            <button>
              <a href="#login" className="hover:text-gray-400">Login</a>
            </button>
            <button className="border border-white h-9 px-2.5 rounded-3xl hover:text-gray-400">
              <a href="#contact" className="">Contact Us</a>
            </button>
          </div>
          {/* mobile view */}
          <button className={`md:hidden transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`} onClick={toggleMenu}>
            {isOpen ? <Close/> : <HamburgerMenu/>}
          </button>
        </div>
      </header>
      <div className={`md:hidden fixed h-full w-full text-white p-4 backdrop-blur-xl z-50 transition-transform duration-500 ${isOpen? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="mx-1">
          <a href="#services" className="block rounded-lg py-3 px-2 hover:bg-gray-700">Services</a>
          <a href="#pricing" className="block rounded-lg py-3 px-2 hover:bg-gray-700">Pricing</a>
          <a href="#howItWorks" className="block rounded-lg py-3 px-2 hover:bg-gray-700">How it Works</a>
          <a href="#client" className="block rounded-lg py-3 px-2 hover:bg-gray-700">Client</a>
          <a href="#team" className="block rounded-lg py-3 px-2 hover:bg-gray-700">Team</a>
        </nav>
      </div>
      <div className="mt-10 w-screen h-80 flex justify-center">
        <div className="w-4/5 flex flex-col items-center justify-center gap-4">
          <div className="w-full flex justify-center">
            <h1 className="text-center text-3xl md:text-5xl flex jusify-center items-center font-bold">Just One Platform,<br/>More Digital Options</h1>
          </div>
          <p className="hidden md:block">Navigating the digital landscape for success by Creating solutions for creative designings</p>
          <button className="bg-[rgba(71,28,195,1)] w-36 h-12 mt-3 rounded-md font-semibold">Get on the call</button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;