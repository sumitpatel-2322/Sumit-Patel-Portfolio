import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    // Define all animation types and their corresponding classes
    const animationTypes = [
      { selector: '.scroll-reveal-right', className: 'reveal-from-right' },
      { selector: '.scroll-reveal-left', className: 'reveal-from-left' },
      { selector: '.scroll-reveal-up', className: 'reveal-from-up' },
      { selector: '.scroll-reveal-down', className: 'reveal-from-down' },
      { selector: '.scroll-reveal', className: 'reveal-from-right' } // Default
    ];

    const observers = [];

    animationTypes.forEach(({ selector, className }) => {
      const elements = document.querySelectorAll(selector);
      
      if (elements.length > 0) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                // Element is entering viewport - add reveal class
                entry.target.classList.add(className);
              } else {
                // Element is leaving viewport - remove reveal class for re-animation
                entry.target.classList.remove(className);
              }
            });
          },
          { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
          }
        );

        elements.forEach(el => observer.observe(el));
        observers.push(observer);
      }
    });

    // Cleanup function
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []); // Empty dependency array is fine for this use case
};

export default useScrollReveal;
