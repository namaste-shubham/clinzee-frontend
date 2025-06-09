import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-100 to-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo with link to home */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={"clinzee-logo.webp"}
            alt="Clinzee Logo"
            className="h-16 w-auto drop-shadow-sm"
          />
          <span className="text-4xl font-bold tracking-wide drop-shadow-md">
            <span className="text-blue-800">CLIN</span>
            <span className="text-green-600">ZEE</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-gray-700 hover:text-blue-600 transition ${
                location.pathname === link.href ? "font-semibold text-blue-800" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white shadow-md px-4 py-3 space-y-3"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-gray-700 hover:text-blue-600 transition ${
                location.pathname === link.href ? "font-semibold text-blue-800" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
