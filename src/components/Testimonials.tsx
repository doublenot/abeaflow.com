import React from 'react';

interface Testimonial {
  name: string;
  position: string;
  avatar: string;
  content: string;
  rating: number;
}

interface TrustIndicator {
  name: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Solutions',
    avatar:
      'https://images.unsplash.com/photo-1697094967537-5459e6b2ff32?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content:
      'AbeaFlow transformed our customer service operations. We reduced response time by 70% and our team can now focus on complex customer needs instead of routine inquiries.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    position: 'Operations Director, GrowthCorp',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content:
      'The automation solutions saved us 30 hours per week on data entry and reporting. Our accuracy improved dramatically and our team morale is at an all-time high.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    position: 'Marketing Manager, InnovateLabs',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content:
      "Our email marketing campaigns are now fully automated and personalized. We've seen a 150% increase in engagement and our conversion rates have doubled.",
    rating: 5,
  },
];

const trustIndicators: TrustIndicator[] = [
  { name: 'TechStart' },
  { name: 'GrowthCorp' },
  { name: 'InnovateLabs' },
  { name: 'ScaleCo' },
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <div
      key={i}
      className={`icon-star text-sm ${
        i < rating ? 'text-yellow-400' : 'text-gray-300'
      }`}
    ></div>
  ));
};

const Testimonials: React.FC = () => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }
  return (
    <section
      id="testimonials"
      className="section-padding bg-[var(--secondary-color)]"
      data-name="testimonials"
      data-file="components/Testimonials.tsx"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Don't just take our word for it. See how businesses like yours have
            transformed their operations with our automation solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-[var(--border-color)]"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              {/* Content */}
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-[var(--text-primary)]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-[var(--text-secondary)] mb-8">
            Trusted by 500+ businesses worldwide
          </p>
          <div className="flex justify-start items-center space-x-12 opacity-60 overflow-auto sm:justify-center">
            {trustIndicators.map((indicator, idx) => (
              <div
                key={idx}
                className="text-2xl font-bold text-[var(--text-secondary)]"
              >
                {indicator.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
