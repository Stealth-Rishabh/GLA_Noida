import React from "react";

const teamMembers = [
  {
    name: "Prof. Asim Kumar Mishra",
    role: "IIM, Lucknow",
    image: "/Prof_Asim.jpg",
  },
  {
    name: "Prof. Swatantra",
    role: "IIM, Indore", 
    image: "/Prof_Swatantra.jpg",
  },
  {
    name: "Prof. Manoj Srivastava",
    role: "MDI, Gurgaon",
    image: "/Prof_Manoj.jpeg",
  },
  {
    name: "Prof. Anil Singh",
    role: "Fore School of Management",
    image: "/prof-anil-kumar.jpeg",
  },
  {
    name: "Prof. Gaurav Gupta",
    role: "Fore School of Management",
    image: "/prof-gaurav.jpeg",
  },
  {
    name: "Prof. Kirti Sharma",
    role: "MDI, Gurgaon",
    image: "/prof_kirti_sharma.jpeg",
  },
];

const TeamMemberCard = ({ member }) => {
  const cardClasses = `
    bg-white rounded-xl p-4 text-center border border-gray-200
    relative shadow-lg
  `;

  return (
    <div className={cardClasses}>
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <img
          src={member.image}
          alt={member.name}
          className="w-20 h-20 rounded-full object-cover object-top ring-2 ring-cusSecondary"
        />
      </div>
      <div className="mt-6">
        <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
        <p className="text-green-600 mt-1 font-medium text-sm">{member.role}</p>
      </div>
    </div>
  );
};

const LearningResources = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Exceptional Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Empowered by passion and skill, our Exceptional Team turns
            challenges into opportunities for growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-8 gap-y-20">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningResources;
