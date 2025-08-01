import React, { useState } from 'react';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding gradient-bg"
      data-name="cta"
      data-file="components/CTA.tsx"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Automate Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
          Join hundreds of successful businesses that have transformed their
          operations with our automation solutions. Get started today with a
          free consultation.
        </p>
        {!isSubmitted ? (
          <div className="max-w-4xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email"
                className="flex-1 px-6 py-3 rounded-lg border-0 bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                required
              />
              <button
                type="submit"
                className="btn-primary bg-[var(--accent-color)] hover:bg-[var(--accent-green)] whitespace-nowrap"
              >
                Get Free Consultation
              </button>
            </form>
            <p className="text-blue-200 text-sm mt-4">
              No spam, just consultation along with valuable automation insights
              and tips.
            </p>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-[var(--accent-color)] rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="icon-check text-2xl text-white"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-blue-100">
              We've received your request and will contact you within 24 hours
              to discuss your automation needs.
            </p>
          </div>
        )}
        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-blue-400">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="icon-phone text-xl text-white"></div>
            </div>
            <h4 className="font-semibold text-white mb-2">Free Consultation</h4>
            <p className="text-blue-100 text-sm">
              30-minute strategy session to identify automation opportunities
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="icon-settings text-xl text-white"></div>
            </div>
            <h4 className="font-semibold text-white mb-2">Custom Solutions</h4>
            <p className="text-blue-100 text-sm">
              Tailored automation workflows designed for your specific needs
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="icon-shield-check text-xl text-white"></div>
            </div>
            <h4 className="font-semibold text-white mb-2">Secure & Reliable</h4>
            <p className="text-blue-100 text-sm">
              Your data is protected with enterprise-grade security
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
