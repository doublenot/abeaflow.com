import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setShowModal(false);
  };

  return (
    <section
      className="pt-[120px] pb-20 gradient-bg"
      data-name="hero"
      data-file="components/Hero.tsx"
    >
      <div className="pt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl text-white lg:text-6xl font-bold leading-tight mb-6">
              Automate Your Business,
              <span className="block text-[var(--accent-color)]">
                Amplify Your Success
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Transform repetitive tasks into seamless workflows. Our expert
              team designs custom automation solutions that save you time,
              reduce errors, and scale your business efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-primary bg-[var(--accent-color)] hover:bg-[var(--accent-green)]"
              >
                Start Your Automation Journey
              </button>
              <button
                className="btn-secondary text-[var(--primary-dark)] border-white hover:bg-white hover:text-[var(--accent-color)]"
                onClick={handleOpenModal}
              >
                See How It Works
              </button>
            </div>
          </div>
          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white/20 rounded-lg">
                  <div className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center">
                    <div className="icon-check text-sm text-white"></div>
                  </div>
                  <span className="text-white">Email Marketing Automated</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/20 rounded-lg">
                  <div className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center">
                    <div className="icon-check text-sm text-white"></div>
                  </div>
                  <span className="text-white">
                    Customer Support Streamlined
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/20 rounded-lg">
                  <div className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center">
                    <div className="icon-check text-sm text-white"></div>
                  </div>
                  <span className="text-white">Data Processing Optimized</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/30 rounded-lg animate-pulse">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <div className="icon-clock text-sm text-white"></div>
                  </div>
                  <span className="text-white">
                    Inventory Management In Progress...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-blue-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--accent-color)]">
              500+
            </div>
            <div className="text-blue-100 text-sm">Businesses Automated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--accent-color)]">
              80%
            </div>
            <div className="text-blue-100 text-sm">Time Saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--accent-color)]">
              24/7
            </div>
            <div className="text-blue-100 text-sm">Automated Operations</div>
          </div>
        </div>
      </div>
      {/* Modal Overlay */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div className="relative w-full max-w-2xl mx-4 bg-transparent rounded-lg shadow-lg flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={() => setShowModal(false)}
              aria-label="Close video"
            >
              &times;
            </button>
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-black">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="How It Works"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
