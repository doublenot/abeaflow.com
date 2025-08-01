import React, { useEffect, useRef, useState } from 'react';

const Benefits: React.FC = () => {
  const [tasksCount, setTasksCount] = useState(0);
  const [timeSaved, setTimeSaved] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current || hasAnimated.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        hasAnimated.current = true;
        animateCounter(0, 15470, setTasksCount, 3000);
        animateCounter(0, 1200, setTimeSaved, 2000);
      }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function animateCounter(
    start: number,
    end: number,
    setter: (val: number) => void,
    duration: number
  ) {
    const range = end - start;
    let startTime: number | null = null;
    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setter(Math.floor(start + range * progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setter(end);
      }
    }
    requestAnimationFrame(step);
  }

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="section-padding bg-white"
      data-name="benefits"
      data-file="components/Benefits.tsx"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Stop wasting time on repetitive tasks. Our automation solutions
              help you focus on what matters most - growing your business and
              serving your customers better.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="icon-dollar-sign text-sm text-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                    Reduce Operational Costs
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Cut labor costs by automating routine tasks and eliminating
                    human errors that lead to expensive mistakes.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="icon-zap text-sm text-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                    Increase Productivity
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Free up your team to focus on strategic initiatives while
                    automation handles the routine work.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="icon-heart text-sm text-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                    Improve Customer Experience
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Deliver faster, more consistent service with automated
                    customer support and communication workflows.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="icon-target text-sm text-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                    Scale Without Limits
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Handle increased business volume without proportionally
                    increasing your workforce or overhead costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Business automation dashboard"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[var(--accent-green)] rounded-full"></div>
                  <span className="text-sm font-medium">
                    Tasks Automated: {tasksCount.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Time Saved: {timeSaved.toLocaleString()} hrs/week
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
