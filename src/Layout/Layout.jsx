import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import EffectsBackground from "../Components/EffectsBackground/EffectsBackground";
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import ScrollUp from '../Components/Scroll-Up/ScrollUp';
import './Layout.css';
const sections = ['home', 'about', 'projects', 'contact'];

const Layout = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 60;
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="main">
      <EffectsBackground />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <Outlet/>
      <Footer />
      <ScrollUp setActiveSection={setActiveSection} />
    </div>
  );
};

export default Layout;
