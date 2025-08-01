function Footer() {
  try {
    const socialLinks = [
      {
        href: 'mailto:hello@abeaflow.com',
        iconClass: 'icon-mail',
        label: 'Email',
      },
    ];

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <footer
        className="bg-gray-900 text-white"
        data-name="footer"
        data-file="components/Footer.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <div className="icon-zap text-xl text-white"></div>
                </div>
                <span className="ml-3 text-2xl font-bold">AbeaFlow</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Transform your business with custom automation solutions. Save
                time, reduce errors, and scale efficiently with our expert
                automation services.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors"
                    aria-label={link.label}
                  >
                    <div className={`${link.iconClass} text-lg`}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-[var(--primary-color)]">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('benefits')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Benefits
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('testimonials')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Get Started
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-[var(--primary-color)]">
                Contact
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="icon-mail text-sm mr-2"></div>
                  hello@abeaflow.com
                </li>
                <li className="flex items-center">
                  <div className="icon-phone text-sm mr-2"></div>
                  +1 (704) 981-2491
                </li>
                <li className="flex items-center">
                  <div className="icon-map-pin text-sm mr-2"></div>
                  Charlotte, NC
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 AbeaFlow. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}

export default Footer;
