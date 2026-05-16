import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrinterSpecs = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("front");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentIndex]);

  const modelsData = [
    {
      id: "OM035",
      name: "OM035",
      folderKey: "OM035",
      model: "P3308DW",
      type: "Duplex Mono Laser Printer",
      tag: "Printer Series",
      color: false,
      specs: [
        { label: "Model", value: "P3308DW" },
        { label: "Acxxel", value: "OM035" },
        { label: "Function (Print/Copy/Scan)", value: "Print" },
        { label: "Duplex Printing", value: "Yes" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "No" },
        { label: "Composite /Separate toner drum", value: "Separate toner drum" },
        { label: "Print Speed ppm (A4)", value: "33" },
        { label: "First Print Out Time", value: "<8.2s" },
        { label: "Processor Speed (MHz)", value: "350" },
        { label: "Memory (MB)", value: "256" },
        { label: "USB 2.0 / High-Speed USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "NW/LAN", value: "Yes" },
        { label: "BT", value: "No" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "Yes" },
        { label: "ADF/DADF", value: "No" },
        { label: "Yield per toner", value: "12000" },
        { label: "Total Main Paper Tray Combined Capacity (Number) at 75 GSM", value: "250" },
        { label: "Bypass Tray Facility", value: "YES" },
        { label: "Bypass Tray Capacity at 75 GSM", value: "1" },
        { label: "Duty Cycle (Number of Prints/Month)", value: "60000" },
        { label: "Feeder Capacity (Number of Sheets) (For Scanning and Copying)", value: "NOT APPLICABLE" },
        { label: "Maximum Number of Prints covered under Product warrantY", value: "480000" },
        { label: "A4 Scan Speed - Colour (Image Per Minute) @ 200 x 200 dpi", value: "NOT APPLICABLE" },
      ],
    },
    {
      id: "OM050",
      name: "OM050",
      folderKey: "OM050",
      model: "CP2100DW",
      type: "Professional Colour Laser Printer",
      tag: "Printer Series",
      color: true,
      specs: [
        { label: "Model", value: "CP2100DW" },
        { label: "Acxxel", value: "OM050" },
        { label: "Function (Print/Copy/Scan)", value: "Print" },
        { label: "Duplex Printing", value: "Yes" },
        { label: "Mono", value: "No" },
        { label: "Colour", value: "Yes" },
        { label: "Composite /Separate toner drum", value: "Composite Cartridge" },
        { label: "Print Speed ppm (A4)", value: "20" },
        { label: "First Print Out Time", value: "10s" },
        { label: "Processor Speed (MHz)", value: "500" },
        { label: "Memory (MB)", value: "512" },
        { label: "USB 2.0 / High-Speed USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "NW/LAN", value: "Yes" },
        { label: "BT", value: "Yes" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "No" },
        { label: "ADF/DADF", value: "No" },
        { label: "Yield per toner", value: "15000" },
        { label: "Total Main Paper Tray Combined Capacity (Number) at 75 GSM", value: "250" },
        { label: "Bypass Tray Facility", value: "YES" },
        { label: "Bypass Tray Capacity at 75 GSM", value: "1" },
        { label: "Duty Cycle (Number of Prints/Month)", value: "30000" },
        { label: "Feeder Capacity (Number of Sheets) (For Scanning and Copying)", value: "NOT APPLICABLE" },
        { label: "Maximum Number of Prints covered under Product warrantY", value: "240000" },
        { label: "A4 Scan Speed - Colour (Image Per Minute) @ 200 x 200 dpi", value: "NOT APPLICABLE" },
      ],
    },
    {
      id: "OM052",
      name: "OM052",
      folderKey: "OM052",
      model: "P2210",
      type: "Compact Mono Laser Printer",
      tag: "Printer Series",
      color: false,
      specs: [
        { label: "Model", value: "P2210" },
        { label: "Acxxel", value: "OM052" },
        { label: "Function (Print/Copy/Scan)", value: "Print" },
        { label: "Duplex Printing", value: "No" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "No" },
        { label: "Composite /Separate toner drum", value: "Composite Cartridge" },
        { label: "Print Speed ppm (A4)", value: "20" },
        { label: "First Print Out Time", value: "<7.8s" },
        { label: "Processor Speed (MHz)", value: "600" },
        { label: "Memory (MB)", value: "128" },
        { label: "USB 2.0 / High-Speed USB", value: "Yes" },
        { label: "Wi-Fi", value: "No" },
        { label: "NW/LAN", value: "No" },
        { label: "BT", value: "No" },
        { label: "Mobile Printing", value: "No" },
        { label: "NFC", value: "No" },
        { label: "ADF/DADF", value: "No" },
        { label: "Yield per toner", value: "1600" },
        { label: "Total Main Paper Tray Combined Capacity (Number) at 75 GSM", value: "150" },
        { label: "Bypass Tray Facility", value: "NO" },
        { label: "Bypass Tray Capacity at 75 GSM", value: "NOT APPLICABLE" },
        { label: "Duty Cycle (Number of Prints/Month)", value: "15000" },
        { label: "Feeder Capacity (Number of Sheets) (For Scanning and Copying)", value: "NOT APPLICABLE" },
        { label: "Maximum Number of Prints covered under Product warrantY", value: "120000" },
        { label: "A4 Scan Speed - Colour (Image Per Minute) @ 200 x 200 dpi", value: "NOT APPLICABLE" },
      ],
    },
    {
      id: "OM221",
      name: "OM221",
      folderKey: "OM221",
      model: "M6518",
      type: "Professional All-in-One Laser Printer",
      tag: "All-in-One Series",
      color: false,
      specs: [
        { label: "Model", value: "M6518" },
        { label: "Acxxel", value: "OM221" },
        { label: "Function (Print/Copy/Scan)", value: "Print/Copy/Scan" },
        { label: "Duplex Printing", value: "No" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "No" },
        { label: "Composite /Separate toner drum", value: "Composite Cartridge" },
        { label: "Print Speed ppm (A4)", value: "22" },
        { label: "First Print Out Time", value: "<7.8s" },
        { label: "Processor Speed (MHz)", value: "600" },
        { label: "Memory (MB)", value: "128" },
        { label: "USB 2.0 / High-Speed USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "NW/LAN", value: "Yes" },
        { label: "BT", value: "No" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "No" },
        { label: "ADF/DADF", value: "No" },
        { label: "Yield per toner", value: "1600" },
        { label: "Total Main Paper Tray Combined Capacity (Number) at 75 GSM", value: "150" },
        { label: "Bypass Tray Facility", value: "NO" },
        { label: "Bypass Tray Capacity at 75 GSM", value: "NOT APPLICABLE" },
        { label: "Duty Cycle (Number of Prints/Month)", value: "20000" },
        { label: "Feeder Capacity (Number of Sheets) (For Scanning and Copying)", value: "NOT APPLICABLE" },
        { label: "Maximum Number of Prints covered under Product warrantY", value: "240000" },
        { label: "A4 Scan Speed - Colour (Image Per Minute) @ 200 x 200 dpi", value: "NOT APPLICABLE" },
      ],
    },
    {
      id: "OM52",
      name: "OM52",
      folderKey: "OM52",
      model: "M6512NW",
      type: "Professional All-in-One Laser Printer",
      tag: "All-in-One Series",
      color: false,
      specs: [
        { label: "Model", value: "M6512NW" },
        { label: "Acxxel", value: "OM52" },
        { label: "Function (Print/Copy/Scan)", value: "Print/Copy/Scan" },
        { label: "Duplex Printing", value: "No" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "No" },
        { label: "Composite /Separate toner drum", value: "Composite Cartridge" },
        { label: "Print Speed ppm (A4)", value: "22" },
        { label: "First Print Out Time", value: "<7.8s" },
        { label: "Processor Speed (MHz)", value: "600" },
        { label: "Memory (MB)", value: "128" },
        { label: "USB 2.0 / High-Speed USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "NW/LAN", value: "Yes" },
        { label: "BT", value: "No" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "No" },
        { label: "ADF/DADF", value: "No" },
        { label: "Yield per toner", value: "1600" },
        { label: "Total Main Paper Tray Combined Capacity (Number) at 75 GSM", value: "150" },
        { label: "Bypass Tray Facility", value: "NO" },
        { label: "Bypass Tray Capacity at 75 GSM", value: "NOT APPLICABLE" },
        { label: "Duty Cycle (Number of Prints/Month)", value: "20000" },
        { label: "Feeder Capacity (Number of Sheets) (For Scanning and Copying)", value: "NOT APPLICABLE" },
        { label: "Maximum Number of Prints covered under Product warrantY", value: "240000" },
        { label: "A4 Scan Speed - Colour (Image Per Minute) @ 200 x 200 dpi", value: "NOT APPLICABLE" },
      ],
    },
    {
      id: "OM235",
      name: "OM235",
      folderKey: "OM235",
      model: "M7108DW",
      type: "ADF Productivity Multifunction Printer",
      tag: "All-in-One Series",
      color: false,
      specs: [
        { label: "Model", value: "M7108DW" },
        { label: "Acxxel", value: "OM235" },
        { label: "Function (Print/Copy/Scan)", value: "Print/Copy/Scan" },
        { label: "Duplex Printing", value: "Yes" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "No" },
        { label: "Composite /Separate toner drum", value: "Separate toner drum" },
        { label: "Print Speed ppm (A4)", value: "33" },
        { label: "First Print Out Time", value: "<8.2s" },
        { label: "Processor Speed (MHz)", value: "525" },
        { label: "Memory (MB)", value: "256" },
        { label: "USB 2.0 / High-Speed USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "NW/LAN", value: "Yes" },
        { label: "BT", value: "No" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "No" },
        { label: "ADF/DADF", value: "ADF" },
        { label: "Yield per toner", value: "12000" },
        { label: "Total Main Paper Tray Combined Capacity (Number) at 75 GSM", value: "250" },
        { label: "Bypass Tray Facility", value: "Yes" },
        { label: "Bypass Tray Capacity at 75 GSM", value: "1" },
        { label: "Duty Cycle (Number of Prints/Month)", value: "60000" },
        { label: "Feeder Capacity (Number of Sheets) (For Scanning and Copying)", value: "50" },
        { label: "Maximum Number of Prints covered under Product warrantY", value: "420000" },
        { label: "A4 Scan Speed - Colour (Image Per Minute) @ 200 x 200 dpi", value: "24" },
      ],
    },
    {
      id: "OM240",
      name: "OM240",
      folderKey: "OM240",
      model: "BM5100ADW",
      type: "Advanced Office Multifunction Printer",
      tag: "All-in-One Series",
      color: false,
      specs: [
        { label: "Model", value: "BM5100ADW" },
        { label: "Acxxel", value: "OM240" },
        { label: "Function (Print/Copy/Scan)", value: "Print/Copy/Scan" },
        { label: "Duplex Printing", value: "Yes" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "No" },
        { label: "Composite /Separate toner drum", value: "Separate toner drum" },
        { label: "Print Speed ppm (A4)", value: "40" },
        { label: "First Print Out Time", value: "<6.9s" },
        { label: "Processor Speed (MHz)", value: "1.2 GHz" },
        { label: "Memory (MB)", value: "512" },
        { label: "USB 2.0 / High-Speed USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "NW/LAN", value: "Yes" },
        { label: "BT", value: "No" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "Yes" },
        { label: "ADF/DADF", value: "SPDF" },
        { label: "Yield per toner", value: "30000" },
        { label: "Total Main Paper Tray Combined Capacity (Number) at 75 GSM", value: "250" },
        { label: "Bypass Tray Facility", value: "Yes" },
        { label: "Bypass Tray Capacity at 75 GSM", value: "60" },
        { label: "Duty Cycle (Number of Prints/Month)", value: "100000" },
        { label: "Feeder Capacity (Number of Sheets) (For Scanning and Copying)", value: "50" },
        { label: "Maximum Number of Prints covered under Product warrantY", value: "840000" },
        { label: "A4 Scan Speed - Colour (Image Per Minute) @ 200 x 200 dpi", value: "24" },
      ],
    },
    {
      id: "OM249",
      name: "OM249",
      folderKey: "OM249",
      model: "BM5220ADW",
      type: "Smart Touch Enterprise MFP",
      tag: "All-in-One Series",
      color: false,
      specs: [
        { label: "Model", value: "BM5220ADW" },
        { label: "Acxxel", value: "OM249" },
        { label: "Function (Print/Copy/Scan)", value: "Print/Copy/Scan" },
        { label: "Duplex Printing", value: "Yes" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "No" },
        { label: "Composite /Separate toner drum", value: "Separate toner drum" },
        { label: "Print Speed ppm (A4)", value: "42" },
        { label: "First Print Out Time", value: "<5.9s" },
        { label: "Processor Speed (MHz)", value: "1.2 GHz" },
        { label: "Memory (MB)", value: "1 GB" },
        { label: "USB 2.0 / High-Speed USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "NW/LAN", value: "Yes" },
        { label: "BT", value: "No" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "Yes (except iOS)" },
        { label: "ADF/DADF", value: "SPDF" },
        { label: "Yield per toner", value: "30000" },
        { label: "Total Main Paper Tray Combined Capacity (Number) at 75 GSM", value: "250" },
        { label: "Bypass Tray Facility", value: "Yes" },
        { label: "Bypass Tray Capacity at 75 GSM", value: "60" },
        { label: "Duty Cycle (Number of Prints/Month)", value: "100000" },
        { label: "Feeder Capacity (Number of Sheets) (For Scanning and Copying)", value: "50" },
        { label: "Maximum Number of Prints covered under Product warrantY", value: "840000" },
        { label: "A4 Scan Speed - Colour (Image Per Minute) @ 200 x 200 dpi", value: "24" },
      ],
    },
    {
      id: "OM271",
      name: "OM271",
      folderKey: "OM271",
      model: "CM2100DW",
      type: "Commercial Workgroup Colour MFP",
      tag: "All-in-One Series",
      color: true,
      specs: [
        { label: "Model", value: "CM2100DW" },
        { label: "Acxxel", value: "OM271" },
        { label: "Function (Print/Copy/Scan)", value: "Print/Copy/Scan" },
        { label: "Duplex Printing", value: "Yes" },
        { label: "Mono", value: "No" },
        { label: "Colour", value: "Yes" },
        { label: "Composite /Separate toner drum", value: "Composite Cartridge" },
        { label: "Print Speed ppm (A4)", value: "20" },
        { label: "First Print Out Time", value: "12s" },
        { label: "Processor Speed (MHz)", value: "500" },
        { label: "Memory (MB)", value: "512" },
        { label: "USB 2.0 / High-Speed USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "NW/LAN", value: "Yes" },
        { label: "BT", value: "Yes" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "No" },
        { label: "ADF/DADF", value: "No" },
        { label: "Yield per toner", value: "15000" },
        { label: "Total Main Paper Tray Combined Capacity (Number) at 75 GSM", value: "250" },
        { label: "Bypass Tray Facility", value: "Yes" },
        { label: "Bypass Tray Capacity at 75 GSM", value: "1" },
        { label: "Duty Cycle (Number of Prints/Month)", value: "30000" },
        { label: "Feeder Capacity (Number of Sheets) (For Scanning and Copying)", value: "NOT APPLICABLE" },
        { label: "Maximum Number of Prints covered under Product warrantY", value: "240000" },
        { label: "A4 Scan Speed - Colour (Image Per Minute) @ 200 x 200 dpi", value: "NOT APPLICABLE" },
      ],
    },
  ];

  const views = [
    { key: "front", label: "Front" },
    { key: "left", label: "Side" },
    { key: "top", label: "Top" },
  ];

  const currentModel = modelsData[currentIndex];
  const isLastPage = currentIndex === modelsData.length;

  const getImagePath = (folderKey, view) => {
    const viewMap = {
      front: "front_view.png",
      left: "left_view.png",
      top: "top_view.png",
    };
    const capMap = {
      front: "Front_view.png",
      left: "Left_view.png",
      top: "Top_view.png",
    };
    const capitalised = ["OM240", "OM249"];
    if (capitalised.includes(folderKey)) {
      return `/Printer_image/${folderKey}/${capMap[view]}`;
    }
    return `/Printer_image/${folderKey}/${viewMap[view]}`;
  };

  const handleNext = () => {
    setActiveView("front");
    if (currentIndex < modelsData.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setActiveView("front");
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleModelClick = (idx) => {
    setActiveView("front");
    setCurrentIndex(idx);
  };

  const renderValueBadge = (value) => {
    if (!value || value === "—") return <span className="text-slate-400">—</span>;
    if (value === "Yes" || value === "YES") return <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold tracking-wide">YES</span>;
    if (value === "No" || value === "NO") return <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 text-[10px] font-bold tracking-wide">NO</span>;
    if (value.includes("Colour")) return <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[10px] font-bold tracking-wide">COLOUR</span>;
    if (value.includes("Mono")) return <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-200 text-slate-800 text-[10px] font-bold tracking-wide">MONO</span>;
    return <span className="font-medium text-slate-900">{value}</span>;
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-8 font-sans">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-[#F26522] transition-colors"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Home
          </button>
          <div className="text-right">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-red-600">
  Laps N Tabs Technology Pvt. Ltd.
</h1>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-[#F26522]">
              ACXXEL Printer Catalogue
            </p>
          </div>
        </div>

        {/* Model Tabs */}
        <div className="mb-6 overflow-x-auto scrollbar-hide">
          <div className="flex flex-wrap justify-center gap-2 min-w-max">
            {modelsData.map((model, idx) => (
              <button
                key={model.id}
                type="button"
                onClick={() => handleModelClick(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                  idx === currentIndex
                    ? "border-[#F26522] bg-[#F26522] text-white shadow-lg shadow-orange-500/20 scale-105"
                    : "border-slate-200 bg-white text-slate-500 hover:border-[#F26522] hover:text-[#F26522] hover:shadow-md"
                }`}
              >
                {model.name}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setCurrentIndex(modelsData.length)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                isLastPage
                  ? "border-slate-900 bg-slate-900 text-white shadow-lg"
                  : "border-slate-200 bg-white text-slate-500 hover:border-slate-900 hover:text-slate-900 hover:shadow-md"
              }`}
            >
              Summary
            </button>
          </div>
        </div>

        {!isLastPage ? (
          <div key={currentIndex} className="animate-fade-in overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-start">
              
              {/* LEFT: Image Panel (5 cols) */}
              <div className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 lg:border-b-0 lg:border-r lg:col-span-5 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <span className="rounded-full bg-slate-900 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-md">
                    {currentModel.tag}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                    {currentIndex + 1} / {modelsData.length}
                  </span>
                </div>

                <div className="flex-1 flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 shadow-inner mb-5 min-h-[300px] lg:min-h-0 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 pointer-events-none"></div>
                  <img
                    key={`${currentModel.id}-${activeView}`}
                    src={getImagePath(currentModel.folderKey, activeView)}
                    alt={`${currentModel.name} ${activeView}`}
                    className="max-h-[420px] max-w-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 relative z-10"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden absolute inset-0 flex-col items-center justify-center bg-slate-50 text-center z-20">
                    <span className="text-3xl font-black text-[#F26522]">{currentModel.name}</span>
                    <span className="mt-2 text-sm text-slate-500 font-medium">Image not found</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {views.map((view) => (
                    <button
                      key={view.key}
                      type="button"
                      onClick={() => setActiveView(view.key)}
                      className={`group flex flex-col items-center gap-2 rounded-xl border-2 p-2 transition-all duration-200 ${
                        activeView === view.key
                          ? "border-[#F26522] bg-[#F26522]/10 shadow-md"
                          : "border-slate-100 bg-white hover:border-[#F26522]/60 hover:shadow-sm"
                      }`}
                    >
                      <div className="w-full h-28 rounded-lg overflow-hidden bg-slate-50 flex items-center justify-center relative">
                        <img
                          src={getImagePath(currentModel.folderKey, view.key)}
                          alt={`${currentModel.name} ${view.label}`}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling.style.display = "flex";
                          }}
                        />
                        <div className="hidden w-full h-full items-center justify-center text-xs font-bold text-slate-400">N/A</div>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${
                        activeView === view.key ? "text-[#F26522]" : "text-slate-500"
                      }`}>
                        {view.label}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-black tracking-tight text-[#F26522]">{currentModel.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-slate-600">{currentModel.model}</p>
                  <p className="mt-2 text-base font-bold text-slate-800">{currentModel.type}</p>
                  {currentModel.color && (
                    <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-cyan-500 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-md">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      Colour Print
                    </span>
                  )}
                </div>
              </div>

              {/* RIGHT: Full Specs Panel (7 cols) */}
              <div className="flex flex-col p-6 lg:p-8 lg:col-span-7">
                <div className="mb-6 flex items-center justify-between border-b-2 border-[#F26522] pb-3">
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-slate-900">
                    Full Specifications
                  </h3>
                  <span className="text-sm font-black text-[#F26522] bg-[#F26522]/10 px-3 py-1 rounded-md">
                    {currentModel.name}
                  </span>
                </div>

                <div className="pr-1">
                  <table className="w-full border-collapse text-xs lg:text-sm">
                    <tbody className="divide-y divide-slate-100">
                      {(() => {
                        const specs = currentModel.specs;
                        const rows = [];
                        for (let i = 0; i < specs.length; i += 2) {
                          const left = specs[i];
                          const right = specs[i + 1];
                          rows.push(
                            <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                              <td className="py-3 pr-4 text-slate-500 font-semibold w-[28%] align-top leading-snug">
                                {left.label}
                              </td>
                              <td className="py-3 pr-4 font-bold text-slate-800 w-[22%] align-top">
                                {renderValueBadge(left.value)}
                              </td>
                              {right ? (
                                <>
                                  <td className="py-3 pr-4 text-slate-500 font-semibold w-[28%] align-top leading-snug border-l border-slate-100 pl-4">
                                    {right.label}
                                  </td>
                                  <td className="py-3 font-bold text-slate-800 w-[22%] align-top">
                                    {renderValueBadge(right.value)}
                                  </td>
                                </>
                              ) : (
                                <>
                                  <td className="border-l border-slate-100 pl-4"></td>
                                  <td></td>
                                </>
                              )}
                            </tr>
                          );
                        }
                        return rows;
                      })()}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 flex gap-4 border-t border-slate-200 pt-5">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="flex-1 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-black uppercase tracking-wider text-slate-700 transition-all duration-300 hover:border-[#F26522] hover:text-[#F26522] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-700 disabled:hover:shadow-none"
                  >
                    ← Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 rounded-xl bg-gradient-to-r from-[#F26522] to-[#d95316] px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div key="summary" className="animate-fade-in rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl shadow-slate-200/50">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#F26522]">ACXXEL Model Summary Sheet</h2>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  Consolidated comparison of all printer models - All 26 specifications exactly as per official sheet.
                </p>
              </div>
              <span className="rounded-full bg-slate-900 px-5 py-2 text-xs font-black uppercase tracking-widest text-white shadow-md">
                End of Catalogue
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[2800px] border-collapse text-[10px] lg:text-xs">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Model</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Acxxel</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Function (Print/Copy/Scan)</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Duplex Printing</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Mono</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Colour</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Composite /Separate toner drum</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Print Speed ppm (A4)</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">First Print Out Time</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Processor Speed (MHz)</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Memory (MB)</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">USB 2.0 / High-Speed USB</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Wi-Fi</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">NW/LAN</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">BT</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Mobile Printing</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">NFC</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">ADF/DADF</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Yield per toner</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Total Main Paper Tray Combined Capacity (Number) at 75 GSM</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Bypass Tray Facility</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Bypass Tray Capacity at 75 GSM</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Duty Cycle (Number of Prints/Month)</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Feeder Capacity (Number of Sheets) (For Scanning and Copying)</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">Maximum Number of Prints covered under Product warrantY</th>
                    <th className="border border-slate-700 p-3 text-left font-bold uppercase tracking-wide whitespace-nowrap sticky top-0 bg-slate-900 z-10">A4 Scan Speed - Colour (Image Per Minute) @ 200 x 200 dpi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {modelsData.map((model, idx) => {
                    const g = (label) => model.specs.find((s) => s.label === label)?.value ?? "—";
                    return (
                      <tr key={model.id} className={`hover:bg-slate-50 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                        <td className="border border-slate-200 p-2 font-semibold text-slate-800 whitespace-nowrap">{model.model}</td>
                        <td className="border border-slate-200 p-2 font-black text-[#F26522] whitespace-nowrap">{model.name}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{g("Function (Print/Copy/Scan)")}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{renderValueBadge(g("Duplex Printing"))}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{renderValueBadge(g("Mono"))}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{renderValueBadge(g("Colour"))}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{g("Composite /Separate toner drum")}</td>
                        <td className="border border-slate-200 p-2 font-bold text-slate-800 whitespace-nowrap">{g("Print Speed ppm (A4)")}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{g("First Print Out Time")}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{g("Processor Speed (MHz)")}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{g("Memory (MB)")}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{renderValueBadge(g("USB 2.0 / High-Speed USB"))}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{renderValueBadge(g("Wi-Fi"))}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{renderValueBadge(g("NW/LAN"))}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{renderValueBadge(g("BT"))}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{renderValueBadge(g("Mobile Printing"))}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{g("NFC")}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{g("ADF/DADF")}</td>
                        <td className="border border-slate-200 p-2 font-medium whitespace-nowrap">{g("Yield per toner")}</td>
                        <td className="border border-slate-200 p-2 font-medium whitespace-nowrap">{g("Total Main Paper Tray Combined Capacity (Number) at 75 GSM")}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{renderValueBadge(g("Bypass Tray Facility"))}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{g("Bypass Tray Capacity at 75 GSM")}</td>
                        <td className="border border-slate-200 p-2 font-medium whitespace-nowrap">{g("Duty Cycle (Number of Prints/Month)")}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{g("Feeder Capacity (Number of Sheets) (For Scanning and Copying)")}</td>
                        <td className="border border-slate-200 p-2 font-medium whitespace-nowrap">{g("Maximum Number of Prints covered under Product warrantY")}</td>
                        <td className="border border-slate-200 p-2 whitespace-nowrap">{g("A4 Scan Speed - Colour (Image Per Minute) @ 200 x 200 dpi")}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex gap-4">
              <button
                type="button"
                onClick={handlePrevious}
                className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-black uppercase tracking-wider text-slate-700 transition-all hover:border-[#F26522] hover:text-[#F26522] hover:shadow-md"
              >
                ← Previous Page
              </button>
              <button
                type="button"
                disabled
                className="rounded-xl bg-slate-400 px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white cursor-not-allowed"
              >
                END
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PrinterSpecs;