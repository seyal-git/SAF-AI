
import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import ChatSection, { ChatSectionHandle } from './components/ChatSection';
import ThreatCarousel from './components/ThreatCarousel';
import Showcase from './components/Showcase';
import SocialProof from './components/SocialProof';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const chatRef = useRef<ChatSectionHandle>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChatAndSend = () => {
    const chatElement = document.getElementById('chat-demo-section');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' });
      // Give some small time for scrolling to settle before starting the animation
      setTimeout(() => {
        chatRef.current?.sendMessage('איך זה עובד?');
      }, 600);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="top" className="min-h-screen bg-[#0B0F19] selection:bg-[#FF8C00] selection:text-white">
      {/* Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'bg-[#0B0F19]/90 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="חזרה לראש העמוד"
            className="cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8C00]"
          >
            <img
              src="/saf-ai-logo.svg"
              alt="SAF.AI by Cambium"
              className="h-11 w-auto rounded-md shadow-sm"
            />
          </button>
          
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-[#FF8C00] transition-colors">בית</a>
            <a href="#chat-demo-section" className="hover:text-[#FF8C00] transition-colors">פתרונות</a>
            <a href="#contact-section" className="hover:text-[#FF8C00] transition-colors">צור קשר</a>
          </div>

          <button 
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#FF8C00] hover:bg-[#e67e00] text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            תיאום דמו
          </button>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main>
        <Hero onHowItWorksClick={scrollToChatAndSend} />
        <ChatSection ref={chatRef} />
        <ThreatCarousel />
        <Showcase />
        <SocialProof />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
