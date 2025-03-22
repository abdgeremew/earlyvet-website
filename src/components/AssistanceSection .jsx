import barImage from "./../ass/one.jpg";
import logoImage from "./../ass/two.jpg";

const AssistanceSection = () => {
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden" style={{ paddingTop: '64px' }}> 
      {/* Background Image with Overlay */}
      <img 
        src={barImage}
        alt="Background image" 
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>

      {/* Content Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 py-12 h-full max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6 p-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            We have <span className="text-white-400">Veterinarians</span> always ready to help and provide 
            <span className="text-white-400"> Support</span>
          </h2>
        
          <ul className="text-white list-none pl-0">
            <li className="mb-2">✅ Real-time health tracking – Monitor temperature, heart rate, and movement.</li>
            <li className="mb-2">✅ Early disease detection – AI-powered alerts for potential health issues.</li>
            <li>✅ Seamless integration – Works with the EarlyVet app for remote access.</li>
          </ul>
{/* Download Button */}
<div className="mt-6 flex justify-center">
  <a 
    href="https://play.google.com/store/apps/details?id=com.example" // Replace with the actual app link
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-[#5F9A49] to-[#1E4D2B] text-white text-lg font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:from-[#4C8A3E] hover:to-[#163C22]"
  >
    Download Our App
  </a>
</div>

        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center h-full">
          <img
            src={logoImage}
            alt="EarlyVet Mobile App"
            className="rounded-3xl shadow-2xl -rotate-6 lg:-rotate-12 h-full max-h-[600px] w-auto object-contain transition-all duration-500 hover:scale-105"
          />
        </div>
      </section>
    </div>
  );
};

export default AssistanceSection;
