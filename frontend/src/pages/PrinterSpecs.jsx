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
     
      type: "Duplex Mono Laser Printer",
      tag: "Printer Series",
      color: false,
      specs: [
        { label: "Acxxel", value: "OM035" },
        { label: "Function", value: "Print" },
        { label: "Duplex Printing", value: "Yes" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "NA" },
        { label: "Composite / Separate Toner", value: "Separate Toner Drum" },
        { label: "Print Speed ppm (A4)", value: "35" },
        { label: "First Print Out Time", value: "<8s" },
        { label: "Processor Speed (MHz)", value: "350" },
        { label: "Memory (MB)", value: "256" },
        { label: "USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "Network", value: "Yes" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "Yes" },
        { label: "Auto Duplex", value: "NA" },
        { label: "Yield Per Toner", value: "1,800" },
        { label: "Paper Tray (pages)", value: "250" },
        { label: "Bypass Tray Facility", value: "Yes" },
        { label: "Bypass Tray Capacity", value: "1" },
        { label: "Duty Cycle (Prints/Month)", value: "60,000" },
        { label: "Feeder Cap. (Sheets)", value: "NA" },
        { label: "Max Prints (Warranty)", value: "600,000" },
        { label: "A4 Scan Speed Colour (IPM)", value: "NA" },
        { label: "Printer Technology", value: "Laser" },
        { label: "Fax Available", value: "NA" },
        { label: "Page Size", value: "A4/Legal" },
        { label: "Scan Area", value: "NA" },
        { label: "No. Of Paper Tray", value: "1" },
        { label: "Warranty", value: "1 Year (Add on Options Available)" },
        { label: "USB Direct Printer", value: "NA" },
        { label: "OS", value: "Linux/Windows" },
        { label: "LCD", value: "NA" },
        { label: "Reduction Env. Feature", value: "NA" },
      ],
    },
    {
      id: "OM050",
      name: "OM050",
      folderKey: "OM050",
  
      type: "Professional Colour Laser Printer",
      tag: "Printer Series",
      color: true,
      specs: [
        { label: "Acxxel", value: "OM050" },
        { label: "Function", value: "Print" },
        { label: "Duplex Printing", value: "Yes" },
        { label: "Mono", value: "NA" },
        { label: "Colour", value: "Yes" },
        { label: "Composite / Separate Toner", value: "Composite Cartridge" },
        { label: "Print Speed ppm (A4)", value: "25" },
        { label: "First Print Out Time", value: "10s" },
        { label: "Processor Speed (MHz)", value: "500" },
        { label: "Memory (MB)", value: "512" },
        { label: "USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "Network", value: "Yes" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "NA" },
        { label: "Auto Duplex", value: "NA" },
        { label: "Yield Per Toner", value: "2,000" },
        { label: "Paper Tray (pages)", value: "250" },
        { label: "Bypass Tray Facility", value: "Yes" },
        { label: "Bypass Tray Capacity", value: "1" },
        { label: "Duty Cycle (Prints/Month)", value: "30,000" },
        { label: "Feeder Cap. (Sheets)", value: "NA" },
        { label: "Max Prints (Warranty)", value: "300,000" },
        { label: "A4 Scan Speed Colour (IPM)", value: "NA" },
        { label: "Printer Technology", value: "Laser" },
        { label: "Fax Available", value: "NA" },
        { label: "Page Size", value: "A4/Legal" },
        { label: "Scan Area", value: "NA" },
        { label: "No. Of Paper Tray", value: "1" },
        { label: "Warranty", value: "1 Year (Add on Options Available)" },
        { label: "USB Direct Printer", value: "NA" },
        { label: "OS", value: "Linux/Windows" },
        { label: "LCD", value: "NA" },
        { label: "Reduction Env. Feature", value: "NA" },
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
        { label: "Acxxel", value: "OM052" },
        { label: "Function", value: "Print" },
        { label: "Duplex Printing", value: "NA" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "NA" },
        { label: "Composite / Separate Toner", value: "Composite Cartridge" },
        { label: "Print Speed ppm (A4)", value: "25" },
        { label: "First Print Out Time", value: "<7s" },
        { label: "Processor Speed (MHz)", value: "600" },
        { label: "Memory (MB)", value: "128" },
        { label: "USB", value: "Yes" },
        { label: "Wi-Fi", value: "NA" },
        { label: "Network", value: "NA" },
        { label: "Mobile Printing", value: "NA" },
        { label: "NFC", value: "NA" },
        { label: "Auto Duplex", value: "NA" },
        { label: "Yield Per Toner", value: "1,800" },
        { label: "Paper Tray (pages)", value: "150" },
        { label: "Bypass Tray Facility", value: "NA" },
        { label: "Bypass Tray Capacity", value: "NA" },
        { label: "Duty Cycle (Prints/Month)", value: "15,000" },
        { label: "Feeder Cap. (Sheets)", value: "NA" },
        { label: "Max Prints (Warranty)", value: "120,000" },
        { label: "A4 Scan Speed Colour (IPM)", value: "NA" },
        { label: "Printer Technology", value: "Laser" },
        { label: "Fax Available", value: "NA" },
        { label: "Page Size", value: "A4/Legal" },
        { label: "Scan Area", value: "NA" },
        { label: "No. Of Paper Tray", value: "1" },
        { label: "Warranty", value: "1 Year (Add on Options Available)" },
        { label: "USB Direct Printer", value: "NA" },
        { label: "OS", value: "Linux/Windows" },
        { label: "LCD", value: "Available" },
        { label: "Reduction Env. Feature", value: "NA" },
      ],
    },
    {
      id: "OM52",
      name: "OM52",
      folderKey: "OM52",
     
      type: "Professional All-in-One Laser Printer",
      tag: "All-in-One Series",
      color: false,
      specs: [
        { label: "Acxxel", value: "OM52" },
        { label: "Function", value: "Print/Copy/Scan" },
        { label: "Duplex Printing", value: "NA" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "NA" },
        { label: "Composite / Separate Toner", value: "Composite Cartridge" },
        { label: "Print Speed ppm (A4)", value: "25" },
        { label: "First Print Out Time", value: "<7s" },
        { label: "Processor Speed (MHz)", value: "600" },
        { label: "Memory (MB)", value: "128" },
        { label: "USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "Network", value: "Yes" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "NA" },
        { label: "Auto Duplex", value: "NA" },
        { label: "Yield Per Toner", value: "2,000" },
        { label: "Paper Tray (pages)", value: "150" },
        { label: "Bypass Tray Facility", value: "NA" },
        { label: "Bypass Tray Capacity", value: "NA" },
        { label: "Duty Cycle (Prints/Month)", value: "20,000" },
        { label: "Feeder Cap. (Sheets)", value: "NA" },
        { label: "Max Prints (Warranty)", value: "220,000" },
        { label: "A4 Scan Speed Colour (IPM)", value: "NA" },
        { label: "Printer Technology", value: "Laser" },
        { label: "Fax Available", value: "NA" },
        { label: "Page Size", value: "A4/Legal" },
        { label: "Scan Area", value: "A4" },
        { label: "No. Of Paper Tray", value: "1" },
        { label: "Warranty", value: "1 Year (Add on Options Available)" },
        { label: "USB Direct Printer", value: "NA" },
        { label: "OS", value: "Linux/Windows" },
        { label: "LCD", value: "NA" },
        { label: "Reduction Env. Feature", value: "Yes" },
      ],
    },
    {
      id: "OM221",
      name: "OM221",
      folderKey: "OM221",
      
      type: "Professional All-in-One Laser Printer",
      tag: "All-in-One Series",
      color: false,
      specs: [
        { label: "Acxxel", value: "OM221" },
        { label: "Function", value: "Print/Copy/Scan" },
        { label: "Duplex Printing", value: "NA" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "NA" },
        { label: "Composite / Separate Toner", value: "Composite Cartridge" },
        { label: "Print Speed ppm (A4)", value: "22" },
        { label: "First Print Out Time", value: "<7s" },
        { label: "Processor Speed (MHz)", value: "600" },
        { label: "Memory (MB)", value: "128" },
        { label: "USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "Network", value: "Yes" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "NA" },
        { label: "Auto Duplex", value: "NA" },
        { label: "Yield Per Toner", value: "1,600" },
        { label: "Paper Tray (pages)", value: "150" },
        { label: "Bypass Tray Facility", value: "NA" },
        { label: "Bypass Tray Capacity", value: "NA" },
        { label: "Duty Cycle (Prints/Month)", value: "20,000" },
        { label: "Feeder Cap. (Sheets)", value: "NA" },
        { label: "Max Prints (Warranty)", value: "200,000" },
        { label: "A4 Scan Speed Colour (IPM)", value: "NA" },
        { label: "Printer Technology", value: "Laser" },
        { label: "Fax Available", value: "NA" },
        { label: "Page Size", value: "A4/Legal" },
        { label: "Scan Area", value: "A4" },
        { label: "No. Of Paper Tray", value: "1" },
        { label: "Warranty", value: "1 Year (Add on Options Available)" },
        { label: "USB Direct Printer", value: "NA" },
        { label: "OS", value: "Linux/Windows" },
        { label: "LCD", value: "NA" },
        { label: "Reduction Env. Feature", value: "Yes" },
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
        { label: "Acxxel", value: "OM235" },
        { label: "Function", value: "Print/Copy/Scan" },
        { label: "Duplex Printing", value: "Yes" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "NA" },
        { label: "Composite / Separate Toner", value: "Separate Toner Drum" },
        { label: "Print Speed ppm (A4)", value: "35" },
        { label: "First Print Out Time", value: "<8s" },
        { label: "Processor Speed (MHz)", value: "525" },
        { label: "Memory (MB)", value: "256" },
        { label: "USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "Network", value: "Yes" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "NA" },
        { label: "Auto Duplex", value: "ADF" },
        { label: "Yield Per Toner", value: "2,000" },
        { label: "Paper Tray (pages)", value: "250" },
        { label: "Bypass Tray Facility", value: "Yes" },
        { label: "Bypass Tray Capacity", value: "1" },
        { label: "Duty Cycle (Prints/Month)", value: "60,000" },
        { label: "Feeder Cap. (Sheets)", value: "50 Pages" },
        { label: "Max Prints (Warranty)", value: "22,000" },
        { label: "A4 Scan Speed Colour (IPM)", value: "24" },
        { label: "Printer Technology", value: "Laser" },
        { label: "Fax Available", value: "NA" },
        { label: "Page Size", value: "A4/Legal" },
        { label: "Scan Area", value: "A4" },
        { label: "No. Of Paper Tray", value: "1" },
        { label: "Warranty", value: "1 Year (Add on Options Available)" },
        { label: "USB Direct Printer", value: "NA" },
        { label: "OS", value: "Linux/Windows" },
        { label: "LCD", value: "Available" },
        { label: "Reduction Env. Feature", value: "Yes" },
      ],
    },
    {
      id: "OM240",
      name: "OM240",
      folderKey: "OM240",
     
      type: "Advanced Office Multifunction Printer",
      tag: "All-in-One Series",
      color: false,
      specs: [
        { label: "Acxxel", value: "OM240" },
        { label: "Function", value: "Print/Copy/Scan" },
        { label: "Duplex Printing", value: "Yes" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "NA" },
        { label: "Composite / Separate Toner", value: "Separate Toner Drum" },
        { label: "Print Speed ppm (A4)", value: "42" },
        { label: "First Print Out Time", value: "<6s" },
        { label: "Processor Speed (MHz)", value: "1.2 GHz" },
        { label: "Memory (MB)", value: "512" },
        { label: "USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "Network", value: "Yes" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "Yes" },
        { label: "Auto Duplex", value: "SPDF" },
        { label: "Yield Per Toner", value: "3,000" },
        { label: "Paper Tray (pages)", value: "250" },
        { label: "Bypass Tray Facility", value: "Yes" },
        { label: "Bypass Tray Capacity", value: "60" },
        { label: "Duty Cycle (Prints/Month)", value: "100,000" },
        { label: "Feeder Cap. (Sheets)", value: "50 Pages" },
        { label: "Max Prints (Warranty)", value: "84,000" },
        { label: "A4 Scan Speed Colour (IPM)", value: "24" },
        { label: "Printer Technology", value: "Laser" },
        { label: "Fax Available", value: "NA" },
        { label: "Page Size", value: "A4/Legal" },
        { label: "Scan Area", value: "A4" },
        { label: "No. Of Paper Tray", value: "2 Additional Tray Can be Added" },
        { label: "Warranty", value: "1 Year (Add on Options Available)" },
        { label: "USB Direct Printer", value: "Yes" },
        { label: "OS", value: "Linux/Windows/MAC (iOS)" },
        { label: "LCD", value: "Available" },
        { label: "Reduction Env. Feature", value: "Yes" },
      ],
    },
    {
      id: "OM249",
      name: "OM249",
      folderKey: "OM249",
      
      type: "Smart Touch Enterprise MFP",
      tag: "All-in-One Series",
      color: false,
      specs: [
        { label: "Acxxel", value: "OM249" },
        { label: "Function", value: "Print/Copy/Scan" },
        { label: "Duplex Printing", value: "Yes" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "NA" },
        { label: "Composite / Separate Toner", value: "Separate Toner Drum" },
        { label: "Print Speed ppm (A4)", value: "45" },
        { label: "First Print Out Time", value: "<5s" },
        { label: "Processor Speed (MHz)", value: "1.2 GHz" },
        { label: "Memory (MB)", value: "1 GB" },
        { label: "USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "Network", value: "Yes" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "Yes (excl. iOS)" },
        { label: "Auto Duplex", value: "SPDF" },
        { label: "Yield Per Toner", value: "3,000" },
        { label: "Paper Tray (pages)", value: "250" },
        { label: "Bypass Tray Facility", value: "Yes" },
        { label: "Bypass Tray Capacity", value: "60" },
        { label: "Duty Cycle (Prints/Month)", value: "100,000" },
        { label: "Feeder Cap. (Sheets)", value: "50 Pages" },
        { label: "Max Prints (Warranty)", value: "840,000" },
        { label: "A4 Scan Speed Colour (IPM)", value: "24" },
        { label: "Printer Technology", value: "Laser" },
        { label: "Fax Available", value: "NA" },
        { label: "Page Size", value: "A4/Legal" },
        { label: "Scan Area", value: "A4" },
        { label: "No. Of Paper Tray", value: "2 Additional Tray Can be Added" },
        { label: "Warranty", value: "1 Year (Add on Options Available)" },
        { label: "USB Direct Printer", value: "Yes" },
        { label: "OS", value: "Linux/Windows/MAC (iOS)" },
        { label: "LCD", value: "Available" },
        { label: "Reduction Env. Feature", value: "Yes" },
      ],
    },
    {
      id: "OM271",
      name: "OM271",
      folderKey: "OM271",
     
      type: "Commercial Workgroup Colour MFP",
      tag: "All-in-One Series",
      color: true,
      specs: [
        { label: "Acxxel", value: "OM271" },
        { label: "Function", value: "Print/Copy/Scan" },
        { label: "Duplex Printing", value: "Yes" },
        { label: "Mono", value: "Yes" },
        { label: "Colour", value: "Yes" },
        { label: "Composite / Separate Toner", value: "Composite Cartridge" },
        { label: "Print Speed ppm (A4)", value: "25" },
        { label: "First Print Out Time", value: "12s" },
        { label: "Processor Speed (MHz)", value: "500" },
        { label: "Memory (MB)", value: "512" },
        { label: "USB", value: "Yes" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "Network", value: "Yes" },
        { label: "Mobile Printing", value: "Yes" },
        { label: "NFC", value: "NA" },
        { label: "Auto Duplex", value: "No" },
        { label: "Yield Per Toner", value: "3,000" },
        { label: "Paper Tray (pages)", value: "250" },
        { label: "Bypass Tray Facility", value: "Yes" },
        { label: "Bypass Tray Capacity", value: "1" },
        { label: "Duty Cycle (Prints/Month)", value: "30,000" },
        { label: "Feeder Cap. (Sheets)", value: "NA" },
        { label: "Max Prints (Warranty)", value: "300,000" },
        { label: "A4 Scan Speed Colour (IPM)", value: "NA" },
        { label: "Printer Technology", value: "Laser" },
        { label: "Fax Available", value: "NA" },
        { label: "Page Size", value: "A4/Legal" },
        { label: "Scan Area", value: "A4" },
        { label: "No. Of Paper Tray", value: "1" },
        { label: "Warranty", value: "1 Year (Add on Options Available)" },
        { label: "USB Direct Printer", value: "NA" },
        { label: "OS", value: "Linux/Windows" },
        { label: "LCD", value: "Available" },
        { label: "Reduction Env. Feature", value: "Yes" },
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

  const seriesGroups = modelsData.reduce((acc, model, idx) => {
    const tag = model.tag;
    if (!acc[tag]) acc[tag] = [];
    acc[tag].push({ ...model, idx });
    return acc;
  }, {});

  const getImagePath = (folderKey, view) => {
    const viewMap = { front: "front_view.png", left: "left_view.png", top: "top_view.png" };
    const capMap = { front: "Front_view.png", left: "Left_view.png", top: "Top_view.png" };
    const capitalised = ["OM240", "OM249"];
    if (capitalised.includes(folderKey)) return `/Printer_image/${folderKey}/${capMap[view]}`;
    return `/Printer_image/${folderKey}/${viewMap[view]}`;
  };

  const handleNext = () => {
    setActiveView("front");
    if (currentIndex < modelsData.length) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setActiveView("front");
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleModelClick = (idx) => {
    setActiveView("front");
    setCurrentIndex(idx);
  };

  const renderValueBadge = (value) => {
    if (!value || value === "—") return <span className="text-slate-400">—</span>;
    if (value === "Yes" || value === "YES") return <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold tracking-wide">YES</span>;
    if (value === "NA") return <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-bold tracking-wide">NA</span>;
    if (value.includes("Colour")) return <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[10px] font-bold tracking-wide">COLOUR</span>;
    if (value.includes("Mono")) return <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-200 text-slate-800 text-[10px] font-bold tracking-wide">MONO</span>;
    return <span className="font-medium text-slate-900">{value}</span>;
  };

  const summaryColumns = [
    { key: "Acxxel", header: <span>Acxxel</span> },
    { key: "Function", header: <span>Function</span> },
    { key: "Duplex Printing", header: <span>Duplex<br/>Printing</span> },
    { key: "Mono", header: <span>Mono</span> },
    { key: "Colour", header: <span>Colour</span> },
    { key: "Composite / Separate Toner", header: <span>Composite/<br/>Separate Toner</span> },
    { key: "Print Speed ppm (A4)", header: <span>Print Speed<br/>ppm (A4)</span> },
    { key: "First Print Out Time", header: <span>First Print<br/>Out Time</span> },
    { key: "Processor Speed (MHz)", header: <span>Processor<br/>Speed (MHz)</span> },
    { key: "Memory (MB)", header: <span>Memory<br/>(MB)</span> },
    { key: "USB", header: <span>USB</span> },
    { key: "Wi-Fi", header: <span>Wi-Fi</span> },
    { key: "Network", header: <span>Network</span> },
    { key: "Mobile Printing", header: <span>Mobile<br/>Printing</span> },
    { key: "NFC", header: <span>NFC</span> },
    { key: "Auto Duplex", header: <span>Auto Duplex</span> },
    { key: "Yield Per Toner", header: <span>Yield Per<br/>Toner</span> },
    { key: "Paper Tray (pages)", header: <span>Paper Tray<br/>(pages)</span> },
    { key: "Bypass Tray Facility", header: <span>Bypass Tray<br/>Facility</span> },
    { key: "Bypass Tray Capacity", header: <span>Bypass Tray<br/>Capacity</span> },
    { key: "Duty Cycle (Prints/Month)", header: <span>Duty Cycle<br/>(Prints/Month)</span> },
    { key: "Feeder Cap. (Sheets)", header: <span>Feeder Cap.<br/>(Sheets)</span> },
    { key: "Max Prints (Warranty)", header: <span>Max Prints<br/>(Warranty)</span> },
    { key: "A4 Scan Speed Colour (IPM)", header: <span>A4 Scan Speed<br/>Colour (IPM)</span> },
    { key: "Printer Technology", header: <span>Printer<br/>Technology</span> },
    { key: "Fax Available", header: <span>Fax<br/>Available</span> },
    { key: "Page Size", header: <span>Page<br/>Size</span> },
    { key: "Scan Area", header: <span>Scan<br/>Area</span> },
    { key: "No. Of Paper Tray", header: <span>No. Of<br/>Paper Tray</span> },
    { key: "Warranty", header: <span>Warranty</span> },
    { key: "USB Direct Printer", header: <span>USB Direct<br/>Printer</span> },
    { key: "OS", header: <span>OS</span> },
    { key: "LCD", header: <span>LCD</span> },
    { key: "Reduction Env. Feature", header: <span>Reduction Env.<br/>Feature</span> },
  ];

  const badgeCols = new Set([
    "Duplex Printing","Mono","Colour","USB",
    "Wi-Fi","Network","Mobile Printing","Bypass Tray Facility",
    "USB Direct Printer","Fax Available","Reduction Env. Feature",
  ]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-8 font-sans">
      <div className="mx-auto max-w-7xl">

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
            <p className="mt-1 text-xs font-bold tracking-[0.2em] text-[#F26522]">
              acxxel Printer / MFA Catalogue
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {seriesGroups["Printer Series"]?.map(({ name, idx }) => (
            <button
              key={name}
              type="button"
              onClick={() => handleModelClick(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                idx === currentIndex
                  ? "border-[#F26522] bg-[#F26522] text-white shadow-lg shadow-orange-500/20 scale-105"
                  : "border-slate-200 bg-white text-slate-500 hover:border-[#F26522] hover:text-[#F26522] hover:shadow-md"
              }`}
            >
              {name}
            </button>
          ))}
          {seriesGroups["All-in-One Series"]?.map(({ name, idx }) => (
            <button
              key={name}
              type="button"
              onClick={() => handleModelClick(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                idx === currentIndex
                  ? "border-[#F26522] bg-[#F26522] text-white shadow-lg shadow-orange-500/20 scale-105"
                  : "border-slate-200 bg-white text-slate-500 hover:border-[#F26522] hover:text-[#F26522] hover:shadow-md"
              }`}
            >
              {name}
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

        {!isLastPage ? (
          <div key={currentIndex} className="animate-fade-in overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-start">

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
                <h2 className="text-2xl sm:text-3xl font-black text-[#F26522]">Printer/MFP Datasheet</h2>
              </div>
              <span className="rounded-full bg-slate-900 px-5 py-2 text-xs font-black uppercase tracking-widest text-white shadow-md">
                End of Catalogue
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse text-[10px] lg:text-xs" style={{ minWidth: "3200px" }}>
                <thead>
                  <tr className="bg-slate-900 text-white">
                    {summaryColumns.map((col, i) => (
                      <th
                        key={i}
                        className="border border-slate-700 p-2 text-left font-bold uppercase tracking-wide align-top sticky top-0 bg-slate-900 z-10"
                        style={{ whiteSpace: "normal", minWidth: "90px" }}
                      >
                        {col.header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {modelsData.map((model, idx) => {
                    const g = (label) => model.specs.find((s) => s.label === label)?.value ?? "—";
                    return (
                      <tr key={model.id} className={`hover:bg-slate-50 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                        {summaryColumns.map((col, ci) => {
                          const val = g(col.key);
                          const isAcxxelCol = col.key === "Acxxel";
                          return (
                            <td
                              key={ci}
                              className={`border border-slate-200 p-2 whitespace-nowrap ${
                                isAcxxelCol ? "font-black text-[#F26522]" : ""
                              }`}
                            >
                              {badgeCols.has(col.key) ? renderValueBadge(val) : <span className="font-medium text-slate-800">{val}</span>}
                            </td>
                          );
                        })}
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