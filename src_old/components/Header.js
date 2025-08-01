function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <header
        className="bg-white shadow-sm fixed w-full top-0 z-50"
        data-name="header"
        data-file="components/Header.js"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <div className="icon-zap text-xl text-white"></div>
              </div>
              <span className="ml-3 text-2xl font-bold text-[var(--text-primary)]">
                AbeaFlow
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] px-3 py-2 text-sm font-medium transition-colors"
                >
                  Benefits
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] px-3 py-2 text-sm font-medium transition-colors"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] p-2"
              >
                <div
                  className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl`}
                ></div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <button
                  onClick={() => {
                    scrollToSection('features');
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
                >
                  Features
                </button>
                <button
                  onClick={() => {
                    scrollToSection('benefits');
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
                >
                  Benefits
                </button>
                <button
                  onClick={() => {
                    scrollToSection('testimonials');
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMenuOpen(false);
                  }}
                  className="btn-primary w-full mt-4"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
