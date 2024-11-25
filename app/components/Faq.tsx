"use client"

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ: React.FC = () => {
  // State for toggling FAQ items
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Handle toggling of FAQ items
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        {/* FAQ Heading */}
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Frequently Asked Questions</h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {/* FAQ 1 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleFAQ(0)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-blue-900">What is NVOCC?</h3>
              {openFAQ === 0 ? (
                <FaChevronUp className="text-blue-900" />
              ) : (
                <FaChevronDown className="text-blue-900" />
              )}
            </div>
            {openFAQ === 0 && (
              <p className="text-gray-700 mt-4">
                NVOCC stands for Non-Vessel Operating Common Carrier. It is a company that provides
                ocean freight services, but does not own the ships used for shipping goods.
              </p>
            )}
          </div>

          {/* FAQ 2 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleFAQ(1)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-blue-900">What are One-Way Containers?</h3>
              {openFAQ === 1 ? (
                <FaChevronUp className="text-blue-900" />
              ) : (
                <FaChevronDown className="text-blue-900" />
              )}
            </div>
            {openFAQ === 1 && (
              <p className="text-gray-700 mt-4">
                One-way containers are containers that are rented for a one-way trip to a destination,
                often used for international shipping where the container is not needed for a return.
              </p>
            )}
          </div>

          {/* FAQ 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleFAQ(2)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-blue-900">How can I lease containers?</h3>
              {openFAQ === 2 ? (
                <FaChevronUp className="text-blue-900" />
              ) : (
                <FaChevronDown className="text-blue-900" />
              )}
            </div>
            {openFAQ === 2 && (
              <p className="text-gray-700 mt-4">
                You can lease containers from G&P Logistics. We offer container leasing services to
                businesses for both short-term and long-term use.
              </p>
            )}
          </div>

          {/* FAQ 4 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleFAQ(3)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-blue-900">What is the benefit of partnering with G&P?</h3>
              {openFAQ === 3 ? (
                <FaChevronUp className="text-blue-900" />
              ) : (
                <FaChevronDown className="text-blue-900" />
              )}
            </div>
            {openFAQ === 3 && (
              <p className="text-gray-700 mt-4">
                G&P Logistics provides reliable, cost-effective, and timely logistics solutions
                through a strong global network, ensuring high customer satisfaction.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
