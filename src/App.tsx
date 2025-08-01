import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
