import React from "react";
import { useNavigate } from "react-router-dom";
// Src/assets se exact paths ke mutabik images ka import
import heroPrinter from "../assets/hero.png"; 
import homeTeam from "../assets/home.png";    

const Home = () => {
  const navigate = useNavigate(); // Navigation handler pointer

  return (
    <div className="relative min-h-[calc(100vh-85px)] bg-white overflow-hidden pb-48">
      
      {/* MAIN CONTENT GRID */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* LEFT COLUMN: Headings Only */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 pt-2 lg:pt-12">
          
          {/* Subheading branding */}
          <div className="text-slate-800 text-[16px] sm:text-[18px] font-extrabold tracking-tight uppercase border-l-4 border-[#F26522] pl-3 mb-1">
            Laser Multifunction Printers
          </div>

          {/* Main Heavy Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.1] font-sans">
            Making multifunction <br />
            more convenient <br />
            <span className="text-slate-950">and affordable.</span>
          </h1>

          {/* Sub description paragraph */}
          <p className="text-[15px] sm:text-[16px] text-slate-700 font-normal leading-relaxed max-w-md">
            Ideally suited for home and small business user. The new OM series delivers fast and 
            high quality printouts, scans and copies through convenient features all at an 
            affordable cost.
          </p>
        </div>

        {/* RIGHT COLUMN: Do Guna Badi Team Image & Maximum Elevated OM Series Card */}
        <div className="lg:col-span-7 relative w-full flex flex-col items-center lg:items-end mt-24 lg:mt-36">
          
          {/* OM Series Floating Card Badge - Positioned significantly higher */}
          <div className="absolute top-0 right-0 z-30 bg-[#F26522] text-white px-5 py-2.5 rounded-bl-2xl shadow-md text-right min-w-[180px] sm:min-w-[210px] -mt-20 lg:-mt-28">
            <div className="text-lg sm:text-xl font-black tracking-tight">OM Series</div>
            <div className="text-[9px] sm:text-[10px] font-medium tracking-wide opacity-90 uppercase mt-0.5">
              Monochrome Laser Printer
            </div>
          </div>

          {/* Corporate Team Image - Size bada aur position fixed */}
          <div className="w-full max-w-[880px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src={homeTeam} 
              alt="Professional Team Work" 
              className="w-full h-80 sm:h-[450px] object-cover object-center grayscale-[2%]"
            />
          </div>

        </div>

      </main>

      {/* SOLID BOTTOM ORANGE BAND WITH HERO PRINTER & DYNAMIC NAV BUTTON */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#F26522] h-28 z-20 flex items-center justify-between px-8 sm:px-16 overflow-visible">
        
        {/* HERO PRINTER (Size and left-alignment preserved) */}
        <div className="relative w-full max-w-[480px] sm:max-w-[550px] lg:max-w-[620px] -mt-36 sm:-mt-44 lg:-mt-48 z-30 drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)] pl-4 lg:-ml-24 xl:-ml-32 transition-all duration-300">
          <img 
            src={heroPrinter} 
            alt="acxxel OM Series Printer View" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* INSTANT REDIRECTION BUTTON CLICK */}
        <button 
          type="button"
          onClick={() => navigate("/specifications")}
          className="bg-white text-[#F26522] font-sans font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-xl uppercase tracking-wider hover:bg-slate-50 transition-all duration-300 transform active:scale-95 z-30 ml-auto translate-y-0 cursor-pointer border border-transparent whitespace-nowrap"
        >
          Modle 
        </button>
      </div>

    </div>
  );
};

export default Home;