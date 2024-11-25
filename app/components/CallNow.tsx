import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const CallUsNow: React.FC = () => {
  return (
    <div className="bg-blue-800 text-white py-4">
      <div className="container mx-auto px-6 flex items-center gap-5 justify-end">
        {/* Left Side - Call Us Text and Icon */}
        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-white text-3xl animate-bounce" />
          <span className="text-lg sm:text-xl font-semibold">Call Us Now:</span>
        </div>

        {/* Right Side - Phone Number Button */}
        <a
          href="tel:+1234567890"
          className="bg-yellow-500 text-lg sm:text-xl font-bold text-black py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300"
        >
          +1 234 567 890
        </a>
      </div>
    </div>
  );
};

export default CallUsNow;
