import React, { useState } from "react";

const NeedHelpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);
  const [status, setStatus] = useState("");
  const maxChars = 180;

  // Validation functions
  const validateFullName = (name) => {
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    return nameRegex.test(name) ? "" : "Full name must be at least 3 characters and contain only letters and spaces.";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Please enter a valid email address.";
  };

  const validateContactNumber = (number) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Basic international/local phone number format
    return phoneRegex.test(number) ? "" : "Please enter a valid phone number (e.g., +251966404013 or 1234567890).";
  };

  const validateMessage = (message) => {
    return message.trim().length > 0 ? "" : "Message cannot be empty.";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message") {
      setCharCount(value.length);
    }
    setFormData({ ...formData, [name]: value });

    // Validate on change and update errors
    let error = "";
    switch (name) {
      case "fullName":
        error = validateFullName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "contactNumber":
        error = validateContactNumber(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {
      fullName: validateFullName(formData.fullName),
      email: validateEmail(formData.email),
      contactNumber: validateContactNumber(formData.contactNumber),
      message: validateMessage(formData.message),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    try {
      const response = await fetch('http://localhost:4000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ fullName: "", email: "", contactNumber: "", message: "" });
        setCharCount(0);
        setErrors({}); // Clear errors on success
        setTimeout(() => setStatus(""), 5000); // Clear status after 5 seconds
      } else {
        setStatus(result.message || "Failed to send message.");
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center items-stretch flex-1 p-4 space-y-8 md:space-y-0 md:space-x-8">
        {/* Need Help Form */}
        <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-2/5 flex flex-col">
          <h1 className="text-2xl font-bold text-center mb-6 text-[#5F9A49]">
            Need Help?
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 flex-1">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                  errors.fullName ? "border-red-500" : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-gray-700 mb-1">Contact Number *</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                  errors.contactNumber ? "border-red-500" : ""
                }`}
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-1">How can we help you? *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={maxChars}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                  errors.message ? "border-red-500" : ""
                }`}
                placeholder="Enter your message..."
              ></textarea>
              <p className="text-right text-sm text-gray-500">{charCount} / {maxChars}</p>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Status Message */}
            {status && (
              <p className={`text-center ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>
                {status}
              </p>
            )}

            {/* Submit Button */}
            <div className="text-center mt-auto">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#5F9A49] to-[#1E4D2B] text-white text-lg font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:from-[#4C8A3E] hover:to-[#163C22]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Us Section */}
        <div id="contactus" className="bg-white shadow-md rounded-lg p-4 w-full md:w-2/5 flex flex-col">
          <h2 className="text-2xl font-bold text-center mb-4 text-[#5F9A49]">Contact Us</h2>
          <p className="text-gray-600 text-center">
            Have more questions? Reach out to us!
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Support Email</h3>
            <p className="text-blue-500 underline">support@earlyvet.com</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Phone Number</h3>
            <p className="text-gray-600">+251-966-404-013</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Office Address</h3>
            <p className="text-gray-600">
              Bole St,<br />
              Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
      </div>

      {/* Footer with Copyright Notice */}
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600 text-sm">
          © 2025 EarlyVet. All rights reserved. Unauthorized reproduction, distribution, or modification of any content, designs, trademarks, or software associated with EarlyVet is strictly prohibited.
        </p>
      </footer>
    </div>
  );
};

export default NeedHelpPage;