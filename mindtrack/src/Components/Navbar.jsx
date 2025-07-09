import { Link } from "react-router-dom";
import Logo from "../assets/mindtrack-logo.png";  

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4   ">
      
      {/* Left: Logo */}
      <Link to="/">
        <img src={Logo} alt="MindTrack Logo" className="h-12 w-auto" />
      </Link>
      
      {/* Center: Navigation Links */}
      <div className="flex-1 flex justify-center space-x-12 font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">Know more</Link>
        <Link to="/resources" className="hover:text-blue-600">Resources</Link>
        <Link to="/test" className="hover:text-blue-600">Test</Link>
      </div>
      
      {/* Right: (optional empty placeholder for symmetry) */}
      <div className="w-12"></div>
      
    </nav>
  );
}
