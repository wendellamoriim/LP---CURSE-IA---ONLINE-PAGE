import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Demo } from './components/Demo';
import { Modules } from './components/Modules';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Affiliates } from './components/Affiliates';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-darker text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Demo />
      <Modules />
      <Testimonials />
      <Pricing />
      <Affiliates />
      <FAQ />
      <Footer />
    </div>
  );
}
