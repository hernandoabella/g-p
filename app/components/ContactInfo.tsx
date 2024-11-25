import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo: React.FC = () => {
  return (
    <section id="contact-info" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Contact Information</h2>
        <p className="text-gray-700 mb-12">Get in touch with us through any of the following methods.</p>

        {/* Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Phone */}
          <div className="flex flex-col items-center bg-blue-100 p-8 rounded-lg shadow-lg">
            <FaPhoneAlt className="text-4xl text-blue-800 mb-4" />
            <h3 className="text-xl font-semibold text-blue-800">Phone</h3>
            <p className="text-gray-600 mt-2">+123-456-7890</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center bg-blue-100 p-8 rounded-lg shadow-lg">
            <FaEnvelope className="text-4xl text-blue-800 mb-4" />
            <h3 className="text-xl font-semibold text-blue-800">Email</h3>
            <p className="text-gray-600 mt-2">contact@gnplogistics.com</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center bg-blue-100 p-8 rounded-lg shadow-lg">
            <FaMapMarkerAlt className="text-4xl text-blue-800 mb-4" />
            <h3 className="text-xl font-semibold text-blue-800">Address</h3>
            <p className="text-gray-600 mt-2">
              123 Logistics Avenue, Suite 456, Cityname, Country
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
