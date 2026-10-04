import React from 'react';
import aboutBg from '../../assets/About_1.png';

const WhoWeAre = () => {
  return (
    <section 
      className="w-full relative py-20 md:py-32 flex flex-col items-center justify-center text-center px-4"
      style={{ 
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <p className="text-[10px] md:text-[12px] font-semibold tracking-[0.2em] text-[#9a9a9a] uppercase mb-4 md:mb-6">
        Who We Are
      </p>
      
      <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-serif leading-[1.2] text-[#282828] max-w-4xl mx-auto tracking-tight">
        We are world's largest and most<br className="hidden md:block" />
        recommended online bookstore offering<br className="hidden md:block" />
        <span className="text-[#115c2d]"> 40+ million</span> selections.
      </h2>
    </section>
  );
};

export default WhoWeAre;
