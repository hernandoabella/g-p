import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
          About Us
        </h2>

        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold text-blue-800">
            G&P Logistics Management
          </h3>
          <p className="mt-4 text-gray-700">
            Established in 2002, G&P Logistics Management is a prominent market leader in the NVOCC sector in Southeast Asia. 
            Our international network boasts a reach of over 600 destinations worldwide, complemented by more than 120 partnering agents.
            We are committed to delivering world-class services in technical, financial, and business excellence, while optimizing the value chain for our customers and stakeholders.
          </p>
          <img
            src="/welcome.webp"
            alt="G&P Welcome"
            className="mx-auto mt-6 rounded-lg shadow-lg w-full max-w-lg"
          />
        </div>

        {/* Our Story */}
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-800">Our Story</h3>
            <p className="mt-4 text-gray-700">
              Since 2002, G&P Logistics Management has grown from an unknown company into a trusted name in the logistics industry in Southeast Asia. 
              We serve businesses of all sizes, from small establishments to multinational corporations, delivering integrated logistics and supply chain solutions that optimize the value chain.
            </p>
            <p className="mt-4 text-gray-700">
              We are committed to the principles of sustainable development and act as a socially and ethically responsible corporate company.
            </p>
          </div>
          <img
            src="/history.webp"
            alt="Our Story"
            className="md:w-1/2 rounded-lg"
          />
        </div>

        {/* Global Network */}
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <img
            src="/global.webp"
            alt="Global Network"
            className="md:w-1/2 rounded-lg"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-800">Global Network</h3>
            <p className="mt-4 text-gray-700">
              G&P operates in around 50 countries through subsidiaries in Malaysia and well-connected overseas partners and agents. 
              We support a diverse customer base globally, providing one-way services to major international carriers, leasing companies, and NVOCC businesses.
            </p>
            <p className="mt-4 text-gray-700">
              Our focus is on balancing container surpluses with demand worldwide, particularly in Asia.
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold text-blue-800">Overview</h3>
          <p className="mt-4 text-gray-700">
            G&P Logistics Management is a market leader in the NVOCC business. Our international network spans ASEAN, North & South Asia, 
            North & South America, Europe, Africa, and Australia, handling both specialized project cargo and large-scale shipments.
          </p>
          <p className="mt-4 text-gray-700">
            We offer comprehensive services, including ocean freight forwarding, transshipment, project cargo management, customs clearance, and land transportation.
          </p>
          <img
            src="/overview.webp"
            alt="Overview"
            className="mx-auto mt-6  w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
