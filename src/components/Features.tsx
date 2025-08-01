import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: 'workflow',
    title: 'Custom Workflow Design',
    description:
      'Tailored automation solutions designed specifically for your business processes and requirements.',
  },
  {
    icon: 'clock',
    title: 'Time-Saving Solutions',
    description:
      'Reduce manual work by up to 80% with intelligent automation that handles repetitive tasks seamlessly.',
  },
  {
    icon: 'shield-check',
    title: 'Reliable & Secure',
    description:
      'Enterprise-grade security and 99.9% uptime ensure your automated processes run smoothly 24/7.',
  },
  {
    icon: 'trending-up',
    title: 'Scalable Growth',
    description:
      'Automation solutions that grow with your business, adapting to increased volume and complexity.',
  },
  {
    icon: 'users',
    title: 'Team Collaboration',
    description:
      'Streamline team workflows and improve collaboration with automated task distribution and tracking.',
  },
  {
    icon: 'chart-column-increasing',
    title: 'Analytics & Insights',
    description:
      'Detailed reporting and analytics to track performance and identify optimization opportunities.',
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="section-padding bg-[var(--secondary-color)]"
      data-name="features"
      data-file="components/Features.tsx"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
            Powerful Automation Features
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Our comprehensive automation platform offers everything you need to
            streamline your business operations and boost productivity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="w-16 h-16 bg-[var(--primary-color)] rounded-lg flex items-center justify-center mb-6">
                <div
                  className={`icon-${feature.icon} feature-icon text-white`}
                ></div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
