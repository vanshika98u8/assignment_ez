export default function AboutTeam() {
  const teamMembers = [
    {
      id: 2,
      name: 'Producer',
      role: 'Executive Producer',
      image: '/team-member-2.png',
      description: 'Expert in project management and brand storytelling',
    },
    {
      id: 3,
      name: 'Cinematographer',
      role: 'Director of Photography',
      image: '/team-member-3.png',
      description: 'Award-winning visual composer and technical expert',
    },
    {
      id: 4,
      name: 'Editor',
      role: 'Lead Editor',
      image: '/team-member-4.png',
      description: 'Master of narrative pacing and visual effects',
    },
    {
      id: 5,
      name: 'Art Director',
      role: 'Art & Design Director',
      image: '/team-member-5.png',
      description: 'Creative visionary specializing in brand aesthetics',
    },
  ];

  return (
    <div className="w-full relative">
      <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-start gap-10">
        
        
        <div className="w-48 h-auto flex-shrink-0">
          <img
            src="/indiagate.png"
            alt="India Gate"
            className="w-full h-auto object-contain rounded-md shadow-md"
          />
        </div>

        {/* 🌟 Team Section */}
        <div className="flex-1">
          <p
            className="text-right font-serif text-[40px] text-gray-800 mb-12 leading-tight"
          >
            Take a closer look at the stories V bring to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="overflow-hidden rounded-lg shadow-lg mb-4 h-64 bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#ff5722] font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 font-serif text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          {/* 🧠 About Team Section */}
          <div className="mt-20 bg-white/50 backdrop-blur-sm rounded-lg p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">
              Why Our Team Matters
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-serif max-w-3xl mx-auto">
              Each member of our team brings unique expertise and perspective.
              Together, we create a synergy that transforms visions into reality.
              Our collaborative approach ensures every project benefits from diverse
              talents and combined excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
