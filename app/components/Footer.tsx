import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        {/* Footer Content */}
        <div className="mb-6">
          <p className="text-xl font-semibold">G&P Logistics Management</p>
          <p className="text-gray-300 mt-2">Providing the best logistics solutions globally</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.facebook.com/gplogistics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://twitter.com/gplogistics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.linkedin.com/company/gplogistics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.instagram.com/gplogistics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400"
          >
            <FaInstagram size={30} />
          </a>
        </div>

        {/* Footer Copyright */}
        <p className="text-gray-300 text-sm">&copy; 2024 G&P Logistics Management. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
