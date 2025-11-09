import React from 'react';

type Section = 'home' | 'aboutUs' | 'aboutTeam' | 'services' | 'contact';

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const items: { id: Section; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'aboutUs', label: 'About Us' },
    { id: 'aboutTeam', label: 'Our Team' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md flex justify-center space-x-8 py-4 z-50">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`text-lg transition ${
            activeSection === item.id ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-500'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
