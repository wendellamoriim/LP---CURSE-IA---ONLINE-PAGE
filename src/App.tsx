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

export function App() {
  return (
    <div className="min-h-screen bg-darker text-white overflow-x-hidden pt-9">
      <SecurityBanner />
      <Navbar />
      <Hero />
      <About />
      <Demo />
      <Testimonials />
      <Pricing />
      <Affiliates />
      <FAQ />
      <Footer />
      <WhatsAppSupport />
    </div>
  );
}
