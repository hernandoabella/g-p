import React from 'react';
import { FaStar } from 'react-icons/fa';

interface Testimonial {
  name: string;
  role: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    role: 'CEO, Example Corp.',
    review: 'G&P Logistics has been an amazing partner. Their efficiency and attention to detail have made our shipping operations much smoother.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    role: 'Supply Chain Manager, Global Tech',
    review: 'We trust G&P Logistics with our most critical shipments. They’ve always delivered on time and with excellent customer service.',
    rating: 5,
  },
  {
    name: 'Alice Johnson',
    role: 'Operations Lead, International Freight',
    review: 'Great experience! Their team is responsive and always ready to go the extra mile to ensure our cargo is delivered efficiently.',
    rating: 4,
  },
  {
    name: 'Bob White',
    role: 'Logistics Director, MegaSupply',
    review: 'Fantastic service! The team at G&P Logistics always provides solutions that exceed our expectations, especially with their global network.',
    rating: 5,
  },
  {
    name: 'Sophia Davis',
    role: 'Procurement Manager, GlobalTrade',
    review: 'We’ve been working with G&P Logistics for several years, and they never disappoint. Always timely, reliable, and excellent value for money.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">What Our Clients Say</h2>
        <p className="text-gray-700 text-center mb-12">
          Here’s what our satisfied clients say about our services.
        </p>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Client Review */}
              <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>

              {/* Client Info */}
              <div className="flex flex-col items-center mb-4">
                <div className="font-semibold text-blue-800">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>

              {/* Rating */}
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className={`text-lg ${index < testimonial.rating ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
