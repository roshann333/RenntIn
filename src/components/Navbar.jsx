import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          RoomFinder
        </Link>

        {/* Desktop Links */}
        <div className="space-x-6 hidden sm:flex">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/rooms" className="text-gray-700 hover:text-blue-600 transition">
            Rooms
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-40 py-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/rooms"
            className="text-gray-700 hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Rooms
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
