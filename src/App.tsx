import { useEffect, useState } from 'react';
import { SecurityBanner } from './components/SecurityBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Demo } from './components/Demo';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Affiliates } from './components/Affiliates';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppSupport } from './components/WhatsAppSupport';
import { Terms } from './components/Terms';
import { Privacy } from './components/Privacy';

export function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '';
  };

  const renderContent = () => {
    switch (route) {
      case '#/terms':
        return <Terms onBack={navigateToHome} />;
      case '#/privacity':
      case '#/privacy':
        return <Privacy onBack={navigateToHome} />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Demo />
            <Testimonials />
            <Pricing />
            <Affiliates />
            <FAQ />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-darker text-white overflow-x-hidden pt-9">
      <SecurityBanner />
      {route === '' || route === '#' ? <Navbar /> : null}
      {renderContent()}
      <WhatsAppSupport />
    </div>
  );
}

