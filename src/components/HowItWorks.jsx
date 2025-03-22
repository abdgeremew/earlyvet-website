import React, { useState, useEffect } from 'react';

const howItWorksData = [
  {
    id: 1,
    title: "Attach & Activate",
    description:
      "Securely place the Collar on your cattle and turn it on. It immediately starts tracking health status and location",
  },
  {
    id: 2,
    title: "Real-Time Monitoring & Alerts",
    description:
      "The collar continuously monitors temperature, heart rate, and blood pressure. AI-powered alerts notify you if health risks or unusual activity are detected.",
  },
  {
    id: 3,
    title: "GPS Tracking & Security",
    description:
      "Track your cattle’s live location and set up safe zones. Get instant alerts if an animal wanders off or shows inactivity.",
  },
  {
    id: 4,
    title: "Veterinary Assistance & Reports",
    description:
      "If health issues arise, receive recommendations and connect with veterinarians. Access detailed health reports to make informed decisions for your herd.",
  },
];

const StepItem = ({ step, isLast }) => {
  const { id, title, description } = step;
  return (
    <div className="relative flex flex-col items-center group">
      {/* Step Content */}
      <div className="p-4 bg-white rounded-lg shadow-md transform transition group-hover:scale-105 group-hover:shadow-xl text-center w-full">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      {/* Timeline Indicator */}
      <div className="mt-4 flex items-center">
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
          {id}
        </div>
        {!isLast && (
          <div className="flex-1 w-24 h-px bg-gray-300 mx-4" />
        )}
      </div>
    </div>
  );
};

const HowItWorksPage = () => {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async data fetch
    const timer = setTimeout(() => {
      setSteps(howItWorksData);
      setLoading(false);
    }, 1000); // 1-second delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-gray-800">
        Loading steps...
      </div>
    );
  }

  return (
    <div id='howitworks' className="min-h-screen bg-gradient-to-r pt-16 from-purple-100 to-blue-100 px-6">
      <h1 className="text-4xl font-bold text-center text-[#5F9A49] mb-10">
        How It Works
      </h1>

      <div className="max-w-5xl mx-auto flex flex-row justify-center space-x-4">
        {steps.map((step, index) => (
          <StepItem key={step.id} step={step} isLast={index === steps.length - 1} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorksPage;