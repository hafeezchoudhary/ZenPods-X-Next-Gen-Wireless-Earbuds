import React, { useState, useRef, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full border-b bg-[#def0fd] backdrop-blur-md fixed top-0 left-0 z-50 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">

        <div className="text-2xl font-bold text-gray-900">ZenPods X</div>

        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#testimonials" className="hover:text-gray-900 transition">Reviews</a>
          <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#pricing" className="hidden cursor-pointer md:inline-block px-4 py-2 rounded-lg bg-[#1976D2] text-white text-sm hover:bg-[#0D47A1]">Buy Now</a>
        </div>

        <button className="md:hidden p-2 border rounded text-gray-700" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>

      </div>

      {open && (
        <div ref={menuRef} className="md:hidden bg-gray-50 border-t px-4 pb-4">
          <a href="#features" className="block py-2 text-gray-800" onClick={() => setOpen(false)}>Features</a>
          <a href="#testimonials" className="block py-2 text-gray-800" onClick={() => setOpen(false)}>Reviews</a>
          <a href="#pricing" className="block py-2 text-gray-800" onClick={() => setOpen(false)}>Pricing</a>
        </div>
      )}
    </nav>
  );
};

export default Header;
