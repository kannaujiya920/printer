import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PrinterSpecs from "./pages/PrinterSpecs";

const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen bg-white font-sans antialiased flex flex-col">
        {/* Navbar hamesha top par rahega */}
        <Navbar />

        {/* Dynamic Pages Selection */}
        <div className="flex-1">
          <Routes>
            {/* Jab URL '/' par ho, toh Home page dikhega */}
            <Route path="/" element={<Home />} />

            {/* Jab URL '/specifications' par ho, toh specifications wala alag page open hoga */}
            <Route path="/specifications" element={<PrinterSpecs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;