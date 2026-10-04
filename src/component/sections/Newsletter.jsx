import React from 'react';
import { FaFacebookF, FaInstagram, FaChevronRight } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Newsletter = () => {
  return (
    <section className="w-full border-b border-t border-gray-300 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-5 lg:px-8 py-16">

        <div className="hidden lg:flex flex-row items-center justify-between w-full">
          <div className="w-[30%]">
            <h2 className="text-[36px] xl:text-[42px] font-serif text-[#1e1e1e] font-normal leading-none">
              Stay in the know
            </h2>
          </div>

          <div className="w-[25%] pr-4">
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Subscribe to our newsletter and stay updated on latest offers, discounts and events near you.
            </p>
          </div>

          <div className="flex flex-row items-center gap-6 xl:gap-8 justify-end flex-1">
            <form className="relative flex-1 max-w-[450px] h-[52px] bg-[#f7f7f7] rounded-full overflow-hidden flex items-center border border-gray-200 focus-within:border-black transition-colors">
              <input
                type="email"
                placeholder="Email id"
                className="w-full h-full bg-transparent pl-6 pr-32 outline-none text-gray-700 text-[14px]"
                required
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#008139] font-bold text-[13px] xl:text-[14px] flex items-center gap-1.5 hover:text-green-800 transition-colors"
              >
                Subscribe <FaChevronRight className="text-[10px]" />
              </button>
            </form>

            <div className="flex items-center gap-2.5 shrink-0">
              <a href="#" className="w-[42px] h-[42px] rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-[42px] h-[42px] rounded-full bg-black flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="w-[42px] h-[42px] rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:hidden w-full gap-5">
          <h2 className="text-[32px] sm:text-[38px] font-serif text-[#1e1e1e] font-normal leading-none">
            Stay in the know
          </h2>

          <p className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed max-w-md">
            Subscribe to our newsletter and stay updated on latest offers, discounts and events near you.
          </p>

          <form className="w-full bg-[#f7f7f7] rounded-[24px] flex flex-col mt-2 border border-gray-200 focus-within:border-black transition-colors overflow-hidden">
            <input
              type="email"
              placeholder="Email id"
              className="w-full h-[60px] bg-transparent px-6 outline-none text-gray-700 text-[14px]"
              required
            />
            <div className="w-full flex justify-center pb-5 pt-2">
              <button
                type="submit"
                className="text-[#008139] font-bold text-[14px] flex items-center gap-2 hover:text-green-800 transition-colors"
              >
                Subscribe <FaChevronRight className="text-[10px]" />
              </button>
            </div>
          </form>

          <div className="flex justify-end items-center gap-2.5 w-full mt-2">
            <a href="#" className="w-[42px] h-[42px] rounded-full bg-[#1877f2] flex items-center justify-center text-white shadow-sm">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="w-[42px] h-[42px] rounded-full bg-black flex items-center justify-center text-white shadow-sm">
              <FaXTwitter size={18} />
            </a>
            <a href="#" className="w-[42px] h-[42px] rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-sm">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
