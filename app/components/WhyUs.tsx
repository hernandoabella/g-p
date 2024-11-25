import React from 'react';
import { FaDollarSign, FaHandshake, FaThumbsUp, FaNetworkWired, FaClock } from 'react-icons/fa';

const WhyChooseUs: React.FC = () => {
  const strengths = [
    {
      icon: <FaDollarSign className="text-blue-600 text-4xl" />,
      title: 'Reasonable Prices',
      description: 'Providing cost-effective solutions without compromising on quality.',
    },
    {
      icon: <FaHandshake className="text-green-600 text-4xl" />,
      title: 'Trustworthy Transactions',
      description: 'Building relationships based on trust and integrity.',
    },
    {
      icon: <FaThumbsUp className="text-yellow-500 text-4xl" />,
      title: 'Credit Worthy',
      description: 'Ensuring financial reliability and accountability in every deal.',
    },
    {
      icon: <FaClock className="text-red-500 text-4xl" />,
      title: 'Efficient Service',
      description: 'Delivering timely and effective logistics solutions tailored to your needs.',
    },
    {
      icon: <FaNetworkWired className="text-purple-600 text-4xl" />,
      title: 'Extensive Network',
      description: 'Leveraging a global network for seamless operations worldwide.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">Why Choose Us?</h2>
        <p className="text-gray-700 text-center mb-12">
          Our strengths define our commitment to excellence in logistics management.
        </p>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{strength.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{strength.title}</h3>
              <p className="text-gray-600">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
