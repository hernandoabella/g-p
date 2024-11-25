import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* CTA Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Ready to Optimize Your Logistics?
        </h2>
        <p className="text-lg mb-8">
          Partner with G&P Logistics for seamless, reliable, and cost-effective solutions. Let&apos;s take your business to the next level.
        </p>

        {/* CTA Button */}
        <a
          href="/contact" // You can link this to your contact page or any other relevant page
          className="inline-block bg-yellow-500 text-blue-900 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-400 hover:shadow-xl transition-all duration-300"
        >
          Schedule Meet
        </a>
      </div>
    </section>
  );
};

export default CTA;
