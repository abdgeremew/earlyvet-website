import React, { useState, useEffect } from 'react';

const mockProductsData = [
  {
    id: 1,
    name: "EarlyVet Collar",
    description: "All in one monitoring solution that keeps track of health status and location of every cattle and the entire herd.",
    imageUrl: "/Cow_Image.jpg", // Ensure image paths are case-sensitive and consistent
    features: [
      "✅ Real-Time Health Monitoring ",
      "✅ Early Disease Detection",
      "✅ GPS Location Tracking",
      "✅ Seamless App Integration"
    ],
  },
  {
    id: 2,
    name: "EarlyVet Mobile App & SMS Service",
    description: "A comprehensive veterinary care app and sms service designed to connect farmers with veterinarians, monitor cattle health, and provide real-time insights.",
    imageUrl: "/health.png", // Ensure image paths are case-sensitive and consistent
    features: [
      "✅ Veterinarian On-Demand",
      "✅ AI-Powered Disease Detection",
      "✅ GPS Tracking & Herd Management",
      "✅ User-Friendly Dashboard",
    ],
  },
  {
    id: 3,
    name: "Vaccine Provider Network",
    description: "A network that connects farmers with reliable vaccine providers to ensure timely vaccinations for cattle, ensuring herd health and productivity.",
    imageUrl: "/vaccine.jpg", // Ensure image paths are case-sensitive and consistent
    features: [
      "✅ Trusted Vaccine Providers",
      "✅ Timely Vaccination Reminders",
      "✅ Vaccination Tracking",
      "✅ Easy Provider Search",
    ],
  }
];

const ProductCard = ({ product }) => {
  const { name, description, imageUrl, features } = product;
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-96 object-cover" // Increased height for larger images
        />
      )}
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{name}</h2>
        <p className="text-gray-700 mb-6">{description}</p>
        {features && features.length > 0 && (
          <ul className="list-none list-inside text-gray-600 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-lg">{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation with a delay
    const timer = setTimeout(() => {
      setProducts(mockProductsData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-3xl font-bold text-gray-800">
        Loading product details...
      </div>
    );
  }

  return (
    <div id='ourproduct' className="p-12 bg-gradient-to-br pt-16 from-blue-200 via-indigo-200 to-purple-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-[#5F9A49] mb-12">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
