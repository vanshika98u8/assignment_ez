import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './section/Home';
import AboutTeam from './section/AboutTeam';
import AboutUs from './section/AboutUs';
import Services from './section/Services';
import Contact from './section/Contact';

function App() {
  // ✅ Define Section only once, covering all sections you actually use
  type Section = 'home' | 'aboutUs' | 'aboutTeam' | 'services' | 'contact';

  // ✅ Strongly type the state using Section
  const [activeSection, setActiveSection] = useState<Section>('home');

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const aboutTeamRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // ✅ scrollToSection uses the same Section type
  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    const refs = {
      home: homeRef,
      aboutUs: aboutUsRef,
      aboutTeam: aboutTeamRef,
      services: servicesRef,
      contact: contactRef,
    };
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'url(/BG.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <div ref={homeRef} className="min-h-screen flex items-center pt-20">
        <div className="w-full">
          <Home />
        </div>
      </div>

      <div ref={aboutUsRef} className="min-h-screen flex items-center">
        <div className="w-full">
          <AboutUs />
        </div>
      </div>

      <div ref={aboutTeamRef} className="min-h-screen flex items-center">
        <div className="w-full">
          <AboutTeam />
        </div>
      </div>

      <div ref={servicesRef} className="min-h-screen flex items-center">
        <div className="w-full">
          <Services />
        </div>
      </div>

      <div ref={contactRef} className="min-h-screen flex items-center">
        <div className="w-full">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
