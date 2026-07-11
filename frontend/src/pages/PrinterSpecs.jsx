import { useState, useEffect } from "react";
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
        { label: "acxxel", value: "OM035" },
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
        { label: "Max Number of prints covered under product warranty", value: "600,000" },
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
        { label: "acxxel", value: "OM050" },
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
        { label: "Max Number of prints covered under product warranty", value: "300,000" },
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
        { label: "Reduction Env. Feature", value: "NA" },
      ],
    },
    {
      id: "OM052",
      name: "OM052",
      folderKey: "OM052",
      type: "Compact Mono Laser Printer",
      tag: "Printer Series",
      color: false,
      specs: [
        { label: "acxxel", value: "OM052" },
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
        { label: "Max Number of prints covered under product warranty", value: "120,000" },
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
        { label: "Reduction Env. Feature", value: "NA" },
      ],
    },
    {
      id: "OM010",
      name: "OM010",
      folderKey: "OM010",
      type: "Professional All-in-One Laser Printer",
      tag: "All-in-One Series",
      color: false,
      specs: [
        { label: "acxxel", value: "OM010" },
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
        { label: "Max Number of prints covered under product warranty", value: "220,000" },
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
        { label: "acxxel", value: "OM221" },
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
        { label: "Wi-Fi", value: "NA" },
        { label: "Network", value: "NA" },
        { label: "Mobile Printing", value: "NA" },
        { label: "NFC", value: "NA" },
        { label: "Auto Duplex", value: "NA" },
        { label: "Yield Per Toner", value: "1,600" },
        { label: "Paper Tray (pages)", value: "150" },
        { label: "Bypass Tray Facility", value: "NA" },
        { label: "Bypass Tray Capacity", value: "NA" },
        { label: "Duty Cycle (Prints/Month)", value: "20,000" },
        { label: "Feeder Cap. (Sheets)", value: "NA" },
        { label: "Max Number of prints covered under product warranty", value: "200,000" },
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
      type: "ADF Productivity Multifunction Printer",
      tag: "All-in-One Series",
      color: false,
      specs: [
        { label: "acxxel", value: "OM235" },
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
        { label: "Bypass Tray Facility", value: "NA" },
        { label: "Bypass Tray Capacity", value: "NA" },
        { label: "Duty Cycle (Prints/Month)", value: "60,000" },
        { label: "Feeder Cap. (Sheets)", value: "50 Pages" },
        { label: "Max Number of prints covered under product warranty", value: "500000" },
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
        { label: "acxxel", value: "OM240" },
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
        { label: "Auto Duplex", value: "DADF/RADF" },
        { label: "Yield Per Toner", value: "3,000" },
        { label: "Paper Tray (pages)", value: "250" },
        { label: "Bypass Tray Facility", value: "Yes" },
        { label: "Bypass Tray Capacity", value: "60" },
        { label: "Duty Cycle (Prints/Month)", value: "100,000" },
        { label: "Feeder Cap. (Sheets)", value: "50 Pages" },
        { label: "Max Number of prints covered under product warranty", value: "800000" },
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
        { label: "acxxel", value: "OM249" },
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
        { label: "Max Number of prints covered under product warranty", value: "100000" },
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
        { label: "acxxel", value: "OM271" },
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
        { label: "Auto Duplex", value: "ADF" },
        { label: "Yield Per Toner", value: "3,000" },
        { label: "Paper Tray (pages)", value: "250" },
        { label: "Bypass Tray Facility", value: "Yes" },
        { label: "Bypass Tray Capacity", value: "250" },
        { label: "Duty Cycle (Prints/Month)", value: "30,000" },
        { label: "Feeder Cap. (Sheets)", value: "50 Pages" },
        { label: "Max Number of prints covered under product warranty", value: "300,000" },
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

  const handleModelClick = (idx) => {
    setActiveView("front");
    setCurrentIndex(idx);
  };

  const wrapPdfText = (text, maxChars) => {
    const words = String(text ?? "").replace(/[^\x20-\x7E]/g, "-").split(/\s+/);
    const lines = [];
    let current = "";

    words.forEach((word) => {
      const next = current ? `${current} ${word}` : word;
      if (next.length > maxChars && current) {
        lines.push(current);
        current = word;
      } else {
        current = next;
      }
    });

    if (current) lines.push(current);
    return lines.length ? lines : [""];
  };

  const loadImageElement = (src) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });

  const createPdfBlob = (content, imageInfo) => {
    const encoder = new TextEncoder();
    const objects = [
      ["<< /Type /Catalog /Pages 2 0 R >>"],
      ["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"],
      ["<< /Type /Page /Parent 2 0 R /MediaBox [0 0 842 595] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> /XObject << /Im1 6 0 R >> >> /Contents 7 0 R >>"],
      ["<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"],
      ["<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>"],
      [
        `<< /Type /XObject /Subtype /Image /Width ${imageInfo.width} /Height ${imageInfo.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imageInfo.data.length} >>\nstream\n`,
        imageInfo.data,
        "\nendstream",
      ],
      [`<< /Length ${encoder.encode(content).length} >>\nstream\n${content}\nendstream`],
    ];

    const parts = [encoder.encode("%PDF-1.4\n")];
    const offsets = [0];
    let position = parts[0].length;

    objects.forEach((objectParts, index) => {
      offsets.push(position);
      const header = encoder.encode(`${index + 1} 0 obj\n`);
      parts.push(header);
      position += header.length;

      objectParts.forEach((part) => {
        const bytes = typeof part === "string" ? encoder.encode(part) : part;
        parts.push(bytes);
        position += bytes.length;
      });

      const footer = encoder.encode("\nendobj\n");
      parts.push(footer);
      position += footer.length;
    });

    const xrefStart = position;
    let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
    for (let i = 1; i <= objects.length; i += 1) {
      xref += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
    }
    xref += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
    parts.push(encoder.encode(xref));

    return new Blob(parts, { type: "application/pdf" });
  };

  const handleDownloadSpecs = async (model) => {
    const printerImage = await loadImageElement(getImagePath(model.folderKey, "front"));
    const canvas = document.createElement("canvas");
    canvas.width = 1684;
    canvas.height = 1190;
    const context = canvas.getContext("2d");

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#ef1b2d";
    context.font = "900 58px Arial";
    context.fillText("acxxel", 90, 112);
    context.fillStyle = "#f26522";
    context.font = "900 44px Arial";
    context.textAlign = "right";
    context.fillText(model.name, 1540, 106);
    context.fillStyle = "#475569";
    context.font = "700 18px Arial";
    context.fillText(model.type, 1540, 136);
    context.textAlign = "left";

    context.strokeStyle = "#f26522";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(90, 180);
    context.lineTo(1594, 180);
    context.stroke();

    context.strokeStyle = "#dbe3ef";
    context.lineWidth = 2;
    context.strokeRect(90, 230, 560, 690);

    const imageMaxWidth = 500;
    const imageMaxHeight = 520;
    const imageScale = Math.min(imageMaxWidth / printerImage.naturalWidth, imageMaxHeight / printerImage.naturalHeight);
    const imageWidth = printerImage.naturalWidth * imageScale;
    const imageHeight = printerImage.naturalHeight * imageScale;
    const imageX = 120 + (imageMaxWidth - imageWidth) / 2;
    const imageY = 300 + (imageMaxHeight - imageHeight) / 2;
    context.drawImage(printerImage, imageX, imageY, imageWidth, imageHeight);

    context.fillStyle = "#f26522";
    context.font = "900 32px Arial";
    context.textAlign = "center";
    context.fillText(model.name, 370, 982);
    context.fillStyle = "#475569";
    context.font = "700 18px Arial";
    context.fillText(model.tag, 370, 1014);
    context.textAlign = "left";

    context.fillStyle = "#061637";
    context.font = "900 30px Arial";
    context.fillText("FULL SPECIFICATIONS", 710, 252);

    const colX = [710, 1160];
    const labelWidth = 220;
    const valueWidth = 175;
    const topY = 300;
    const rowHeight = 38;

    model.specs.forEach((spec, index) => {
      const column = index < 17 ? 0 : 1;
      const row = column === 0 ? index : index - 17;
      const x = colX[column];
      const y = topY + row * rowHeight;
      const labelLines = wrapPdfText(spec.label, 23).slice(0, 2);
      const valueLines = wrapPdfText(spec.value, 18).slice(0, 2);

      context.strokeStyle = "#e2e8f0";
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(x, y + 22);
      context.lineTo(x + labelWidth + valueWidth, y + 22);
      context.stroke();
      context.beginPath();
      context.moveTo(x + labelWidth - 12, y - 20);
      context.lineTo(x + labelWidth - 12, y + 22);
      context.stroke();
      context.beginPath();
      context.moveTo(x + labelWidth + valueWidth, y - 20);
      context.lineTo(x + labelWidth + valueWidth, y + 22);
      context.stroke();

      context.fillStyle = "#475569";
      context.font = "700 15px Arial";
      labelLines.forEach((line, lineIndex) => {
        context.fillText(line, x, y - lineIndex * -15);
      });

      context.fillStyle = "#061637";
      context.font = "900 15px Arial";
      valueLines.forEach((line, lineIndex) => {
        context.fillText(line, x + labelWidth, y - lineIndex * -15);
      });
    });

    context.fillStyle = "#64748b";
    context.font = "14px Arial";
    context.fillText("Generated from acxxel Printer / MFA Catalogue", 90, 1125);

    const imageDataUrl = canvas.toDataURL("image/jpeg", 0.92);
    const imageInfo = {
      data: Uint8Array.from(atob(imageDataUrl.split(",")[1]), (char) => char.charCodeAt(0)),
      width: canvas.width,
      height: canvas.height,
    };
    const commands = ["q 842 0 0 595 0 0 cm /Im1 Do Q"];
    const blob = createPdfBlob(commands.join("\n"), imageInfo);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${model.name}-specs.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const renderValueBadge = (value) => {
    if (!value || value === "—") return <span className="text-slate-400">—</span>;
    if (value === "NA") return <span className="inline-flex items-center px-1.5 py-0 rounded bg-slate-100 text-slate-500 text-[9px] font-bold tracking-wide">NA</span>;
    if (value.includes("Colour")) return <span className="inline-flex items-center px-1.5 py-0 rounded bg-blue-100 text-blue-800 text-[9px] font-bold tracking-wide">COLOUR</span>;
    if (value.includes("Mono")) return <span className="inline-flex items-center px-1.5 py-0 rounded bg-slate-200 text-slate-800 text-[9px] font-bold tracking-wide">MONO</span>;
    return <span className="font-medium text-slate-900">{value}</span>;
  };

  const summaryColumns = [
    { key: "acxxel", header: <span>acxxel</span> },
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
    { key: "Max Number of prints covered under product warranty", header: <span>Max Number of prints covered <br/>under product warranty</span> },
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
    <section className="min-h-screen bg-white px-4 py-8 font-sans">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-4">
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

        {/* Model Selector */}
        <div className="mb-5 flex flex-wrap justify-center gap-2">
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

              {/* Left panel - image */}
              <div className="border-b border-slate-200 bg-white p-5 lg:border-b-0 lg:border-r lg:col-span-5 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col gap-1">
                    <span className="rounded-full bg-slate-900 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-md">
                      {currentModel.tag}
                    </span>
                    <span className="text-3xl font-black tracking-tight text-[#F26522] pl-1">
                      {currentModel.name}
                    </span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                    {currentIndex + 1} / {modelsData.length}
                  </span>
                </div>

                <div className="flex-1 flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-inner mb-4 min-h-[280px] lg:min-h-0 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 pointer-events-none"></div>
                  <img
                    key={`${currentModel.id}-${activeView}`}
                    src={getImagePath(currentModel.folderKey, activeView)}
                    alt={`${currentModel.name} ${activeView}`}
                    className="max-h-[380px] max-w-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 relative z-10"
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

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {views.map((view) => (
                    <button
                      key={view.key}
                      type="button"
                      onClick={() => setActiveView(view.key)}
                      className={`group flex flex-col items-center gap-1.5 rounded-xl border-2 p-1.5 transition-all duration-200 ${
                        activeView === view.key
                          ? "border-[#F26522] bg-[#F26522]/10 shadow-md"
                          : "border-slate-100 bg-white hover:border-[#F26522]/60 hover:shadow-sm"
                      }`}
                    >
                      <div className="w-full h-24 rounded-lg overflow-hidden bg-slate-50 flex items-center justify-center relative">
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
                  <p className="text-sm font-semibold text-slate-600">{currentModel.model}</p>
                  <p className="mt-1 text-base font-bold text-slate-800">{currentModel.type}</p>
                  {currentModel.color && (
                    <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-cyan-500 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-md">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      Colour Print
                    </span>
                  )}
                </div>
              </div>

              {/* Right panel - specs */}
              <div className="flex flex-col p-5 lg:p-6 lg:col-span-7">
                <div className="mb-3 flex flex-col gap-3 border-b-2 border-[#F26522] pb-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-slate-900">
                    Full Specifications
                  </h3>
                  <button
                    type="button"
                    onClick={() => handleDownloadSpecs(currentModel)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F26522] px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-[#d95316] hover:shadow-xl"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                    </svg>
                    Download
                  </button>
                </div>

                <div className="pr-1">
                  <table className="w-full border-collapse" style={{ fontSize: "11px", lineHeight: "1.15" }}>
                    <tbody>
                      {(() => {
                        const specs = currentModel.specs;
                        const rows = [];
                        for (let i = 0; i < specs.length; i += 3) {
                          const col1 = specs[i];
                          const col2 = specs[i + 1];
                          const col3 = specs[i + 2];
                          rows.push(
                            <tr
                              key={i}
                              className="hover:bg-slate-50/80 transition-colors bg-white"
                            >
                              {/* Col 1 */}
                              <td style={{ padding: "2px 4px 2px 0", verticalAlign: "middle" }} className="text-slate-500 font-semibold w-[20%] leading-none">
                                {col1.label}
                              </td>
                              <td style={{ padding: "2px 4px 2px 0", verticalAlign: "middle" }} className="font-bold text-slate-800 w-[11%]">
                                {renderValueBadge(col1.value)}
                              </td>
                              {/* Col 2 */}
                              {col2 ? (
                                <>
                                  <td style={{ padding: "2px 4px 2px 6px", verticalAlign: "middle" }} className="text-slate-500 font-semibold w-[20%] leading-none border-l border-slate-200">
                                    {col2.label}
                                  </td>
                                  <td style={{ padding: "2px 4px 2px 0", verticalAlign: "middle" }} className="font-bold text-slate-800 w-[11%]">
                                    {renderValueBadge(col2.value)}
                                  </td>
                                </>
                              ) : (
                                <>
                                  <td className="border-l border-slate-200 w-[20%]"></td>
                                  <td className="w-[11%]"></td>
                                </>
                              )}
                              {/* Col 3 */}
                              {col3 ? (
                                <>
                                  <td style={{ padding: "2px 4px 2px 6px", verticalAlign: "middle" }} className="text-slate-500 font-semibold w-[20%] leading-none border-l border-slate-200">
                                    {col3.label}
                                  </td>
                                  <td style={{ padding: "2px 0 2px 0", verticalAlign: "middle" }} className="font-bold text-slate-800 w-[18%]">
                                    {renderValueBadge(col3.value)}
                                  </td>
                                </>
                              ) : (
                                <>
                                  <td className="border-l border-slate-200 w-[20%]"></td>
                                  <td className="w-[18%]"></td>
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

              </div>
            </div>
          </div>
        ) : (
          /* Summary Page */
          <div key="summary" className="animate-fade-in rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/50">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-black text-[#F26522]">Printer/MFP Datasheet</h2>
              <span className="rounded-full bg-slate-900 px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-white shadow-md">
                End of Catalogue
              </span>
            </div>

            <div className="overflow-auto rounded-xl border border-slate-200">
              <table className="border-collapse" style={{ fontSize: "11px", lineHeight: "1.3", width: "max-content", minWidth: "100%" }}>
                <thead>
                  <tr className="bg-slate-900 text-white">
                    {summaryColumns.map((col, i) => (
                      <th
                        key={i}
                        className="border border-slate-700 font-bold uppercase tracking-wide text-center"
                        style={{
                          padding: "6px 7px",
                          whiteSpace: "normal",
                          minWidth: i === 0 ? "62px" : "70px",
                          maxWidth: "95px",
                          wordBreak: "break-word",
                          position: "sticky",
                          top: 0,
                          background: "#0f172a",
                          zIndex: 10,
                          verticalAlign: "middle",
                        }}
                      >
                        {col.header}
                      </th>
                    ))}
                    <th
                      className="border border-slate-700 font-bold uppercase tracking-wide text-center"
                      style={{
                        padding: "6px 7px",
                        minWidth: "110px",
                        position: "sticky",
                        top: 0,
                        right: 0,
                        background: "#0f172a",
                        zIndex: 12,
                        verticalAlign: "middle",
                      }}
                    >
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {modelsData.map((model) => {
                    const g = (label) => model.specs.find((s) => s.label === label)?.value ?? "—";
                    return (
                      <tr
                        key={model.id}
                        className="bg-white"
                        style={{ transition: "background 0.15s" }}
                        onMouseEnter={e => e.currentTarget.style.background = "#fff7ed"}
                        onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                      >
                        {summaryColumns.map((col, ci) => {
                          const val = g(col.key);
                          const isAcxxel = col.key === "acxxel";
                          return (
                            <td
                              key={ci}
                              className="border border-slate-200"
                              style={{
                                padding: "5px 7px",
                                whiteSpace: "nowrap",
                                fontWeight: isAcxxel ? 900 : 500,
                                color: isAcxxel ? "#F26522" : "#1e293b",
                              }}
                            >
                              {badgeCols.has(col.key)
                                ? renderValueBadge(val)
                                : <span>{val}</span>
                              }
                            </td>
                          );
                        })}
                        <td
                          className="border border-slate-200 bg-white text-center"
                          style={{
                            padding: "5px 7px",
                            position: "sticky",
                            right: 0,
                            zIndex: 5,
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => handleDownloadSpecs(model)}
                            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#F26522] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#d95316] hover:shadow-md"
                            aria-label={`Download ${model.name} specs`}
                          >
                            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                            </svg>
                            Specs
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default PrinterSpecs;
