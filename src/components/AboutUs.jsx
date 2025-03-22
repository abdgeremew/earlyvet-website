import React, { useState, useEffect } from 'react';

const aboutUsMockData = {
  companyName: "Our Mission & Vision ",
  description: "Revolutionizing livestock healthcare with smart technology.",
  mission: "Enhancing animal health and farm productivity through AI-driven monitoring and real-time veterinary support.",
  vision: "A world where every farmer has instant access to smart, data-driven animal healthcare solutions.",
  team: [
    { id: 1, name: "Bisrat Kebere", role: "Machine Learning Engineer", photoUrl: "./bisrat-modified.png" },
    { id: 2, name: "Biyaol Mesay", role: "Product Design", photoUrl: "/byya-modified.png" },
    { id: 3, name: "Abdi Geremew", role: "Web Developer", photoUrl: "/abdi.jpg" },
    { id: 4, name: "Firaol Tesfaye", role: "Mobile Application Developer", photoUrl: "/firaool-modified.png" },
    { id: 5, name: "Lidya Mamo", role: "Team Lead/Software Engineer", photoUrl: "/lidyaaa-modified.png" },
  ],
};

const TeamMemberCard = ({ member }) => {
  const { name, role, photoUrl } = member;
  return (
    <div className="text-center">
      {photoUrl && (
        <img 
          src={photoUrl} 
          alt={name} 
          className="w-32 h-32 object-cover rounded-full mx-auto" 
        />
      )}
      <h3 className="text-lg font-bold text-gray-800 mt-2">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p> {/* Added role here */}
    </div>
  );
};

const AboutUsPage = () => {
  const [aboutUsData, setAboutUsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAboutUsData(aboutUsMockData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="text-center text-lg mt-10">Loading...</div>;

  const { companyName, description, mission, vision, team } = aboutUsData;

  return (
    <div id='aboutus' className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center mb-6 pt-16 text-[#5F9A49]">{companyName}</h1>

      <div className="max-w-2xl mx-auto text-gray-700 mb-6">
        <p className="text-center text-xl font-semibold">{description}</p>
        <p className="mt-2">✅ <strong>Mission:</strong> {mission}</p>
        <p>✅ <strong>Vision:</strong> {vision}</p>
      </div>

      <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800"> Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* First row with 3 members */}
        <div className="grid grid-cols-3 gap-3 md:col-span-3">
          {team.slice(0, 3).map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Second row with 2 members */}
        <div className="grid grid-cols-2 gap-2 md:col-span-3">
          {team.slice(3, 5).map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
