import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import bgImage from '../../assets/Mask_group_8_1.png';

const PromoBanner = () => {
  return (
    <section className="w-full relative flex items-center min-h-[500px] md:min-h-[600px] lg:min-h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="max-w-xl lg:pl-16">
          <p className="text-[#facc15] font-medium text-[14px] md:text-[18px] mb-2 md:mb-3">
            Stunning debut. A true life story.
          </p>
          <h2 className="text-white text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-serif leading-[1.1] font-bold tracking-tight mb-3 md:mb-4">
            HARMONIC<br />SENSATION
          </h2>
          <p className="text-white text-[14px] md:text-[18px] mb-6 md:mb-8">
            Intro price: <span className="font-semibold">$18.99</span>
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-white text-black py-3 px-6 md:py-4 md:px-8 rounded-full font-semibold text-[14px] md:text-[16px] transition duration-300 hover:bg-[green] hover:text-white"
          >
            Pre-Order Now <FaChevronRight className="text-[10px] md:text-[12px]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
