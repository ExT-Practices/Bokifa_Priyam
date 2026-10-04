import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-[50px] h-[50px] bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1 z-50 hover:bg-gray-800"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="text-[14px]" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
