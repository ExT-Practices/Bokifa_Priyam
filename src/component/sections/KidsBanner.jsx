import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import bgImage from '../../assets/Mask_group_9_1.png';

const KidsBanner = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 pb-10">
      <div 
        className="w-full relative flex items-center min-h-[350px] md:min-h-[450px] lg:min-h-[500px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-sm"
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-md lg:max-w-lg">
            <p className="text-[#008139] font-medium text-[14px] md:text-[16px] mb-2 md:mb-3">
              Best Collection.
            </p>
            <h2 className="text-[#1e1e1e] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-serif leading-[1.1] font-bold tracking-tight mb-3 md:mb-4">
              TOP FAVOURITE<br />KIDS STORIES
            </h2>
            <p className="text-gray-700 text-[14px] md:text-[16px] mb-6 md:mb-8">
              Find our take on the best books of all time.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-white text-black py-3 px-6 md:py-3.5 md:px-8 rounded-full font-bold text-[13px] md:text-[14px] transition duration-300 hover:bg-[#008139] hover:text-white shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
            >
              Discover Now <FaChevronRight className="text-[10px] md:text-[12px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsBanner;
