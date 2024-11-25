"use client"
import React, { useState } from 'react';
import { FaShip, FaExchangeAlt, FaBox } from 'react-icons/fa';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaShip className="text-violet-500 text-3xl" />,
      title: 'Non-Vessel Operating Common Carrier (NVOCC)',
      description:
        'We provide reliable and efficient NVOCC services, leveraging a global network for seamless logistics solutions. Our specialized team ensures secure and timely delivery to destinations worldwide, offering unmatched expertise in cargo handling and management.',
      extraInfo: 'Our NVOCC services include contract negotiation, carrier selection, and customized logistics plans to suit your specific needs.',
    },
    {
      icon: <FaExchangeAlt className="text-green-600 text-3xl" />,
      title: 'One-Way Containers',
      description:
        'Optimize your container utilization with our one-way container services. We ensure balance in global trade demands by strategically repositioning containers to areas with higher demand.',
      extraInfo: 'This service helps reduce empty repositioning costs, enhancing your supply chain efficiency.',
    },
    {
      icon: <FaBox className="text-yellow-500 text-3xl" />,
      title: 'Trading and Leasing of Containers',
      description:
        'We offer flexible trading and leasing options for container management at major ports worldwide. Whether you need short-term leasing or outright purchases, we have the solution for you.',
      extraInfo: 'Our container fleet includes standard, refrigerated, and specialized units to cater to diverse industry requirements.',
    },
  ];

  const [activeTab, setActiveTab] = useState(0); // Track active service

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:flex lg:space-x-12">
        {/* Tabs Section */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Services</h2>
          <div className="flex flex-col space-y-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-4 p-4 text-left border rounded-lg transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-blue-900 hover:bg-blue-100'
                }`}
              >
                <div>{service.icon}</div>
                <div className="font-semibold">{service.title.split('(')[0]}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">{services[activeTab].title}</h3>
          <p className="text-gray-700 mb-4">{services[activeTab].description}</p>
          <p className="text-gray-600 italic">{services[activeTab].extraInfo}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
