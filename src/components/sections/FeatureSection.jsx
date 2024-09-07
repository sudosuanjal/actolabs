import React from "react";
import featureData from "../../services/FeatureData";
import Card from "../ui/Card";

const FeatureSection = () => {
  return (
    <div className="relative bg-black text-white py-16 px-8 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 255, 102, 0.05) 50%, rgba(0, 0, 0, 1) 100%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      ></div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Best solutions for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {featureData.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
