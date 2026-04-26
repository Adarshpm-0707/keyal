import React from 'react';

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-20 pb-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-dark mb-8">
          About <span className="text-olive-green italic">KYEAL</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          Kyeal is more than just a healthcare provider. We are a movement dedicated to biological optimization and the pursuit of human vitality.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-20">
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary-dark mb-4 border-b border-olive-green/20 pb-2">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To redefine the standard of care by shifting from reactive symptom management to proactive physiological optimization.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary-dark mb-4 border-b border-olive-green/20 pb-2">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A world where every individual has the tools and knowledge to live their most vibrant, healthy life through science-backed protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
