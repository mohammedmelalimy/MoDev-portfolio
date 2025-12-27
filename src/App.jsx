import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ScrollUp from './Components/Scroll-Up/ScrollUp';
import EffectsBackground from './Components/EffectsBackground/EffectsBackground';

const sections = ['home', 'about', 'work', 'contact'];

const App = () => {
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
    <>

      <EffectsBackground />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      {/* <section id="work"><Work /></section> */}
      <section id="contact"><Contact /></section>
      <Footer />
      <ScrollUp setActiveSection={setActiveSection} />
    </>
  );
};

export default App;
