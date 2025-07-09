import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: Lucide icons (or you can use any icons you prefer)
import Logo from "../assets/mindtrack-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white  relative z-50">
      
      {/* Left: Logo */}
      <Link to="/">
        <img src={Logo} alt="MindTrack Logo" className="h-12 w-auto" />
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-700 focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex flex-1 justify-center space-x-12 font-medium">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">Know more</Link>
        <Link to="/resources" className="hover:text-blue-400">Resources</Link>
        <Link to="/test" className="hover:text-blue-400">Test</Link>
      </div>

      {/* Right Empty for spacing */}
      <div className="hidden md:block w-12"></div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link to="/" className="hover:text-blue-400" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="hover:text-blue-400" onClick={toggleMenu}>Know more</Link>
          <Link to="/resources" className="hover:text-blue-400" onClick={toggleMenu}>Resources</Link>
          <Link to="/test" className="hover:text-blue-400" onClick={toggleMenu}>Test</Link>
        </div>
      )}
    </nav>
  );
}
