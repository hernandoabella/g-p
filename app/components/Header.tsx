import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          G&P Logistics Managment 🚢
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <a href="#about-us" className="hover:underline">
            About Us
          </a>
          <a href="#business-division" className="hover:underline">
            Business Division
          </a>
          <a href="#book-now" className="hover:underline">
            Book Now
          </a>
          <a href="#contact-us" className="hover:underline">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
