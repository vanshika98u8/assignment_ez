import { Film, Palette, Clapperboard, Sparkles, Users, Target } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Film,
      title: 'Commercial Production',
      description: 'Compelling commercials that captivate audiences and drive engagement for your brand.',
    },
    {
      id: 2,
      icon: Clapperboard,
      title: 'Corporate Videos',
      description: 'Professional content that communicates your message clearly and effectively.',
    },
    {
      id: 3,
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete visual branding solutions that define your unique market presence.',
    },
    {
      id: 4,
      icon: Sparkles,
      title: 'Motion Graphics',
      description: 'Dynamic visual effects and animations that bring concepts to vibrant life.',
    },
    {
      id: 5,
      icon: Users,
      title: 'Documentary Filmmaking',
      description: 'Authentic stories told with depth, artistry, and genuine human connection.',
    },
    {
      id: 6,
      icon: Target,
      title: 'Content Strategy',
      description: 'Tailored content plans that align with your goals and resonate with audiences.',
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h1 className="text-5xl font-serif font-bold text-gray-800 mb-4 text-center">
          Our Services
        </h1>
        <p className="text-center text-lg text-gray-600 mb-16 font-serif">
          Comprehensive creative solutions tailored to your vision
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white/60 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 border border-white/20"
              >
                <div className="mb-4 inline-block p-3 bg-[#ff5722]/10 rounded-lg group-hover:bg-[#ff5722]/20 transition-colors">
                  <IconComponent className="text-[#ff5722]" size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-serif">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-[#ff5722] text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-lg mb-8 leading-relaxed font-serif">
            Every project is an opportunity to push creative boundaries and deliver exceptional results.
          </p>
          <button className="bg-white text-[#ff5722] px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
        <img src="Frame 33.png" alt="Creative Illustration" className="width: 1920;
height: 113.47335052490234;
top: 966px;
angle: 0 deg;
opacity: 1;
" />
      </div>
    </div>
  );
}
