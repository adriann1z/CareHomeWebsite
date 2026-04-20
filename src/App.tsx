import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { MobileCallBtn } from './components/MobileCallBtn';
import Home from './pages/Home';
import About from './pages/About';
import Care from './pages/Care';
import TheHome from './pages/TheHome';
import Funding from './pages/Funding';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Basic meta title update
    const pageTitles: Record<string, string> = {
      'home': 'The Meadows Grimsby | Premium Care Home in Scartho',
      'about': 'About Us | The Meadows Grimsby',
      'care': 'Our Care Services | The Meadows Grimsby',
      'home-life': 'The Home & Facilities | The Meadows Grimsby',
      'funding': 'Funding & Support | The Meadows Grimsby',
      'contact': 'Contact Us | The Meadows Grimsby',
    };
    document.title = pageTitles[currentPage] || 'The Meadows Grimsby';
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'about': return <About />;
      case 'care': return <Care setPage={setCurrentPage} />;
      case 'home-life': return <TheHome />;
      case 'funding': return <Funding setPage={setCurrentPage} />;
      case 'contact': return <Contact />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative w-full selection:bg-sage-light selection:text-white">
      <Navigation currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-1 w-full">
        {renderPage()}
      </main>

      <Footer setPage={setCurrentPage} />
      <MobileCallBtn />
    </div>
  );
}
