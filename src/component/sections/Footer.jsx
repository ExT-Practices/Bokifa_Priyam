import React from 'react';
import payImg from '../../assets/pay.avif';

const logoUrl = '/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-10 md:pt-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-5 lg:px-8">
        
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-6 text-center lg:text-left">
          
          <div className="w-full lg:max-w-[320px] flex flex-col items-center lg:items-start">
            <a href="#" className="inline-block mb-6 md:mb-8">
              <img src={logoUrl} alt="Bokifa" className="h-[35px] md:h-[40px] w-auto object-contain" />
            </a>
            <p className="text-[14px] leading-relaxed mb-6 lg:max-w-[280px]">
              Bokifa draws book lovers of all ages into a community, engage with booklovers and meet their favourite literary personalities.
            </p>
            <div className="mb-2">
              <a href="tel:+8418004635" className="text-[#c59d5f] font-bold text-[22px] md:text-[24px] hover:text-[#008139] transition-colors">
                +(84) - 1800 - 4635
              </a>
            </div>
            <div>
              <a href="mailto:contact@example.com" className="text-[14px] hover:text-[#008139] transition-colors">
                contact@example.com
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-serif text-[20px] mb-5 md:mb-8">
              Category
            </h3>
            <ul className="flex flex-col gap-1">
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Action Books</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Comedy</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Drama</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Horror</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Kids Books</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Top 50 Books</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-serif text-[20px] mb-5 md:mb-8">
              Useful links
            </h3>
            <ul className="flex flex-col gap-1">
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Secure Shopping</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Returns Policy</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Payment Option</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-serif text-[20px] mb-5 md:mb-8">
              Explore
            </h3>
            <ul className="flex flex-col gap-1">
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">About us</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Store Locator</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Kids Club</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Blogs</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-serif text-[20px] mb-5 md:mb-8">
              Get in touch
            </h3>
            <ul className="flex flex-col gap-1">
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Careers</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Become a Franchisee</a></li>
              <li><a href="#" className="text-[16px] hover:text-[#008139] transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center py-10 mt-10 md:mt-16 border-t border-gray-300 gap-4">
          <p className="text-gray-700 text-[13px] text-center md:text-left">
            Copyright © 2025 <a href="#" className="text-[#008139] hover:underline">Bokifa</a>. All rights reserved
          </p>
          <div className="h-[24px]">
            <img src={payImg} alt="Payment Methods" className="h-full w-auto object-contain" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
