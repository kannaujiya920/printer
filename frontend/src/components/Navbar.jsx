import React from "react";
// Src/assets se logos ka import
import acxxelLogo from "../assets/acxxel.png";
import gemLogo from "../assets/gem.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 sm:px-12 py-1 flex items-start justify-between sticky top-0 z-50 shadow-sm max-h-[85px]">
      
      {/* Left Side: Only acxxel Logo */}
      <div className="flex flex-col justify-start -mt-3">
        <img 
          src={acxxelLogo} 
          alt="acxxel Logo" 
          className="h-[150px] w-auto object-contain object-top block -my-4"
        />
      </div>

      {/* Right Side: GeM and Make In India Logos */}
      <div className="flex items-start gap-4 sm:gap-6 -mt-4">
        <img 
          src={gemLogo} 
          alt="GeM Logo" 
          className="h-[144px] w-auto object-contain object-top block -my-4"
        />
        
        
      </div>

    </nav>
  );
};

export default Navbar;