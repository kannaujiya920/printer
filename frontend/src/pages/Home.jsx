import React from "react";
import { useNavigate } from "react-router-dom";
import heroPrinter from "../assets/hero.png"; 
import homeTeam from "../assets/home.png";    

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[calc(100vh-85px)] bg-white overflow-hidden pb-36">
      
      {/* MAIN CONTENT GRID */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-3 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-3 pt-2 lg:pt-8">
          
          <div className="text-slate-800 text-[13px] sm:text-[14px] font-extrabold tracking-tight uppercase border-l-4 border-[#F26522] pl-3">
            Laser Multifunction Printers
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-900 tracking-tight leading-[1.15] font-sans">
            Making printing <br />
            more convenient <br />
            <span className="text-slate-950">and affordable.</span>
          </h1>

          <p className="text-[12px] sm:text-[13px] text-slate-700 font-normal leading-relaxed max-w-md">
            Ideally suited for home and enterprise users. The new OM series delivers fast and 
            high quality printouts, scans and copies through convenient features all at an 
            affordable cost.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-7 relative w-full flex flex-col items-center lg:items-end mt-20 lg:mt-28">
          
          <div className="absolute top-0 right-0 z-30 bg-[#F26522] text-white px-4 py-2 rounded-bl-2xl shadow-md text-right min-w-[160px] -mt-14 lg:-mt-28">
            <div className="text-base sm:text-lg font-black tracking-tight">OM Series/MFP</div>
            <div className="text-[8px] sm:text-[9px] font-medium tracking-wide opacity-90 uppercase mt-0.5">
              Laser Printer
            </div>
          </div>

          <div className="w-full max-w-[880px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
            <img 
              src={homeTeam} 
              alt="Professional Team Work" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </main>

      {/* ORANGE BAND */}
      <div className="absolute bottom-16 left-0 right-0 bg-[#F26522] h-24 z-20 flex items-center justify-between px-8 sm:px-16 overflow-visible">
        
        {/* halka upar + halka chhota */}
        <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] -mt-32 sm:-mt-36 lg:-mt-40 z-30 drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)] pl-4 lg:-ml-16 xl:-ml-20 transition-all duration-300">
          <img 
            src={heroPrinter} 
            alt="acxxel OM Series Printer View" 
            className="w-4/5 h-auto object-contain mx-auto"
          />
        </div>

        <button 
          type="button"
          onClick={() => navigate("/specifications")}
          className="bg-white text-[#F26522] font-sans font-extrabold text-sm sm:text-base px-7 py-3 rounded-xl shadow-xl uppercase tracking-wider hover:bg-slate-50 transition-all duration-300 transform active:scale-95 z-30 ml-auto cursor-pointer border border-transparent whitespace-nowrap"
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default Home;