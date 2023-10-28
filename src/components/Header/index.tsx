import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Country Finder</div>

        {/* Hamburger Menu */}
        <div className="block md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
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
              ></path>
            </svg>
          </button>
        </div>

        {/* Horizontal Menu */}
        <div className={`hidden md:flex items-center ${isOpen && "flex"}`}>
          <a href="#" className="text-white text-sm mx-2 hover:underline">
            Home
          </a>
          <a href="#" className="text-white text-sm mx-2 hover:underline">
            About
          </a>
          <a href="#" className="text-white text-sm mx-2 hover:underline">
            Services
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a
            href="#"
            className="block py-2 px-4 text-white text-sm hover:bg-gray-600"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-white text-sm hover:bg-gray-600"
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-white text-sm hover:bg-gray-600"
          >
            Services
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-white text-sm hover:bg-gray-600"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Header;
