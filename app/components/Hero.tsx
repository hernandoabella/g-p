import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/cargo.mp4" // Replace this with your video file path
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Text */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Providing You the Best Logistics Solutions
        </h1>
      </div>
    </section>
  );
};

export default Hero;
