import React from "react";

const partners = [
  { name: "Partner 1", logoUrl: "/partner1.jpg" },
  { name: "Partner 2", logoUrl: "/partner2.jpg" },
  { name: "Partner 3", logoUrl: "/partner3.jpg" },
  { name: "Partner 4", logoUrl: "/partner4.jpg" },
];

const OurPartners: React.FC = () => {
  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Our Trusted Partners
        </h2>
        <p className="text-gray-700 mb-12">
          We work with some of the best in the business to provide you with
          world-class logistics solutions.
        </p>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 bg-white "
            >
              <img
                src={partner.logoUrl}
                alt={partner.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
