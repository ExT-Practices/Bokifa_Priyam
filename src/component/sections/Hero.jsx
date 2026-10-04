import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative, Autoplay } from 'swiper/modules';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import slide1 from '../../assets/ap_bo_slide_1.jpg';
import slide2 from '../../assets/ap_bo_slide_2.jpg';
import slide3 from '../../assets/ap_bo_slide_3.jpg';

const Starburst = ({ color, className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill={color} d="M50,4.2 L55.3,13.8 L66.3,12 L68.8,22.4 L79.4,24.2 L78,35 L87,40 L81.6,49.6 L87,59.3 L78,64.2 L79.4,75 L68.8,76.8 L66.3,87.3 L55.3,85.5 L50,95 L44.7,85.5 L33.7,87.3 L31.2,76.8 L20.6,75 L22,64.2 L13,59.3 L18.4,49.6 L13,40 L22,35 L20.6,24.2 L31.2,22.4 L33.7,12 L44.7,13.8 Z" />
  </svg>
);

const Hero = () => {
  return (
    <section className="w-full relative hero-section overflow-hidden mt-40">
      <style>
        {`
          .hero-section .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #fff;
            opacity: 1;
            border-radius: 50%;
            transition: all 0.3s ease;
          }
          .hero-section .swiper-pagination-bullet-active {
            width: 24px;
            border-radius: 10px;
            background: #115c2d;
          }
          @keyframes slow-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-slow-spin {
            animation: slow-spin 10s linear infinite;
          }
        `}
      </style>
      <Swiper
        modules={[Pagination, EffectCreative]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [0, 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img src={slide1} alt="Slide 1" className="w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover" />
          <div className='flex flex-col items-center justify-center text-center gap-3 md:gap-4 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-full px-4'>
            <p className="text-[#e2384a] text-[14px] md:text-[18px] font-medium">Fiction addiction.</p>
            <h2 className='text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-serif leading-[1.1] text-black font-bold tracking-tight'>YOUR ULTIMATE<br />PAGE-TO-SCREEN<br />READING LIST</h2>
            <p className="text-[14px] md:text-[16px] text-gray-800 mt-1 md:mt-2">Save over $24 with the Booker prize shortlist collection</p>
            <a href="#" className='mt-2 md:mt-4 flex flex-row items-center gap-2 bg-white text-black py-3 px-6 md:py-4 md:px-8 rounded-full font-semibold text-[14px] md:text-[16px] transition hover:bg-[green] hover:text-white'>Discover Now <FaChevronRight className="text-[10px] md:text-[12px]" /></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Slide 2" className="w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover" />
          <div className='flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4 absolute top-[50%] left-[50%] md:left-[10%] -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-[90%] md:max-w-lg'>
            <p className="text-[#5c928b] text-[14px] md:text-[18px] font-medium">A brand new series.</p>
            <h2 className='text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-serif leading-[1.1] text-black font-bold tracking-tight'>THE WORLD OF<br/>YOUNG ADULT<br/>BOOKS</h2>
            <p className="text-[14px] md:text-[16px] text-gray-800 mt-1 md:mt-2">Save up to 15% on new releases.</p>
            <a href="#" className='mt-2 md:mt-4 flex flex-row items-center gap-2 bg-white text-black py-3 px-6 md:py-4 md:px-8 rounded-full font-semibold text-[14px] md:text-[16px] transition hover:bg-[green] hover:text-white'>Discover Now <FaChevronRight className="text-[10px] md:text-[12px]"/></a>
          </div>
          <div className="absolute hidden xl:flex top-[20%] md:top-[50%] left-[80%] md:left-[45%] w-[90px] md:w-[160px] h-[90px] md:h-[160px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Starburst color="#f97316" className="absolute w-full h-full animate-slow-spin" />
            <div className="relative text-white font-bold text-[16px] md:text-[28px] leading-tight text-center z-10 font-sans">
              15%<br/>OFF
            </div>
          </div>
        </SwiperSlide>  
        <SwiperSlide>
          <img src={slide3} alt="Slide 3" className="w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover" />
          <div className='flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4 absolute top-[50%] left-[50%] md:left-[55%] -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-[90%] md:max-w-lg'>
            <p className="text-[#e2384a] text-[14px] md:text-[18px] font-medium">In-store and online.</p>
            <h2 className='text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-serif leading-[1.1] text-black font-bold tracking-tight'>MORE HORROR<br/>NOVELS FROM<br/>STAR AUTHORS</h2>
            <p className="text-[14px] md:text-[16px] text-gray-800 mt-1 md:mt-2">Stay up-to-date with the most exciting new books.</p>
            <a href="#" className='mt-2 md:mt-4 flex flex-row items-center gap-2 bg-white text-black py-3 px-6 md:py-4 md:px-8 rounded-full font-semibold text-[14px] md:text-[16px] transition hover:bg-[green] hover:text-white'>Discover Now <FaChevronRight className="text-[10px] md:text-[12px]"/></a>
          </div>
          <div className="absolute hidden xl:flex top-[20%] md:top-[55%] left-[20%] md:left-[42%] w-[90px] md:w-[160px] h-[90px] md:h-[160px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Starburst color="#f6071fff" className="absolute w-full h-full animate-slow-spin" />
            <div className="relative text-white font-bold text-[16px] md:text-[28px] leading-tight text-center z-10 font-sans">
              15%<br/>OFF
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;