import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaRegHeart, FaRegEye, FaExchangeAlt, FaStar, FaChevronRight } from 'react-icons/fa';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import 'swiper/css';

import { picksForYouBooks } from '../../data/books';
import banner_img from '../../assets/1_4_1.png';


const tabs = ["Popular Books", "On Sale", "Top Rated"];

const StarburstBadge = () => (
  <div className="absolute top-[35%] right-[5%] w-[80px] h-[80px] flex items-center justify-center z-20">
    <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-picks-spin" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fef041" d="M50,4.2 L55.3,13.8 L66.3,12 L68.8,22.4 L79.4,24.2 L78,35 L87,40 L81.6,49.6 L87,59.3 L78,64.2 L79.4,75 L68.8,76.8 L66.3,87.3 L55.3,85.5 L50,95 L44.7,85.5 L33.7,87.3 L31.2,76.8 L20.6,75 L22,64.2 L13,59.3 L18.4,49.6 L13,40 L22,35 L20.6,24.2 L31.2,22.4 L33.7,12 L44.7,13.8 Z" />
    </svg>
    <div className="relative text-black font-bold text-[12px] leading-tight text-center z-10 font-sans">
      <span className="line-through text-gray-500 text-[10px]">$9.49</span><br />
      $7.49
    </div>
  </div>
);

const PicksForYou = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  useEffect(() => {
    const numBooks = Math.floor(Math.random() * 4) + 7;
    const shuffled = [...picksForYouBooks].sort(() => 0.5 - Math.random());
    setDisplayBooks(shuffled.slice(0, numBooks));
  }, [activeTab]);

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-0 lg:px-0">
      <style>
        {`
          @keyframes picks-slow-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-picks-spin {
            animation: picks-slow-spin 10s linear infinite;
          }
        `}
      </style>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 px-5">
        <h2 className="text-[32px] md:text-[40px] font-serif leading-none text-[#282828] font-normal">
          Picks for you
        </h2>
        <div className="flex gap-6 border-b border-gray-200">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-[15px] transition-colors relative ${activeTab === tab
                ? 'text-black font-bold'
                : 'text-gray-500 font-medium hover:text-black'
                }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#115c2d]" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-5 px-5">

        <div className="w-full md:w-[45%] lg:w-[550px] shrink-0 rounded-xl overflow-hidden relative bg-[url('assets/1_4_1.png')] bg-cover bg-center bg-no-repeat min-h-[400px] md:h-[45%]">          
          <div className="absolute top-[28%] left-[45%] z-20 scale-75 md:scale-100 origin-top-left hidden lg:block">
            <div className="relative w-[75px] h-[75px] flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-picks-spin" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fef041" d="M50,4.2 L55.3,13.8 L66.3,12 L68.8,22.4 L79.4,24.2 L78,35 L87,40 L81.6,49.6 L87,59.3 L78,64.2 L79.4,75 L68.8,76.8 L66.3,87.3 L55.3,85.5 L50,95 L44.7,85.5 L33.7,87.3 L31.2,76.8 L20.6,75 L22,64.2 L13,59.3 L18.4,49.6 L13,40 L22,35 L20.6,24.2 L31.2,22.4 L33.7,12 L44.7,13.8 Z" />
              </svg>
              <div className="relative text-black font-bold text-[11px] leading-tight text-center z-10 font-sans">
                <span className="line-through text-gray-500 text-[9px]">$9.49</span><br/>
                $7.49
              </div>
            </div>
          </div>

          <div className="absolute lg:top-[48%] top-[20%] left-[48%] text-white z-10 w-[48%]">
            <p className="text-[#fef041] text-[11px] md:text-[13px] font-bold tracking-wider mb-1 md:mb-2">Latest Deal.</p>
            <h3 className="text-[22px] md:text-[32px] font-serif leading-[1.1] font-bold tracking-tight">THE ROOM<br/>OF WHITE<br/>FIRE</h3>
          </div>

          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 flex justify-between items-center z-10">
            <span className="text-[11px] md:text-[13px] text-white opacity-90 font-medium truncate pr-2">Buy online at bokifa.com</span>
            <a href="#" className="bg-white text-black text-[12px] md:text-[13px] font-bold py-2 md:py-2.5 px-4 md:px-5 rounded-full flex items-center gap-1 md:gap-2 hover:bg-gray-100 transition shrink-0">
              Shop Now <FaChevronRight className="text-[10px]" />
            </a>
          </div>
        </div>

        <div className="flex-1 w-full min-w-0">
          <Swiper
            modules={[Navigation]}
            spaceBetween={5}
            slidesPerView={1}
            breakpoints={{
              540: { slidesPerView: 2, spaceBetween: 15 },
              960: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="picks-swiper !pb-20 !pt-4 h-[800px] md:h-[500px] xl:h-[650px]"
          >
            {displayBooks.map((book) => (
              <SwiperSlide key={book.id} className="h-auto">
                
                <div className="relative h-full flex flex-col">
                  <div className="group bg-transparent rounded-sm transition-all duration-300 lg:hover:bg-white lg:hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] lg:hover:border-gray-100 border border-transparent z-10 lg:hover:z-50 p-2 md:p-4 lg:absolute lg:top-[-16px] lg:left-[-16px] lg:right-[-16px] lg:bottom-[-16px] flex flex-col cursor-pointer h-full">
                    
                    <div className="relative w-full aspect-[2/3] bg-gray-100 rounded-[10px] overflow-hidden mb-4 shrink-0 shadow-sm group/img">
                      <Link to={`/product/${book.id}`} className="block w-full h-full">
                        <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
                      </Link>
                      
                      <div className="absolute top-3 left-3 bg-[#e01414] text-white text-[12px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm pointer-events-none">
                        -15%
                      </div>

                      <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleWishlist(book);
                          }}
                          className={`w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${isInWishlist(book.id) ? 'text-red-500 border border-red-500' : 'text-gray-600 hover:bg-black hover:text-white'}`}
                        >
                          <FaRegHeart />
                        </button>
                        <button className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white shadow-md transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-2 lg:group-hover:translate-y-0 delay-75">
                          <FaRegEye />
                        </button>
                        <button className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white shadow-md transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-2 lg:group-hover:translate-y-0 delay-150">
                          <FaExchangeAlt />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="flex gap-[2px] text-gray-300 text-[11px] mb-2">
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                        <span className="text-gray-400 ml-1">(0)</span>
                      </div>
                      <Link to={`/product/${book.id}`} className="hover:text-[#008139]">
                        <h3 className="text-[17px] font-serif leading-tight text-gray-900 mb-1 line-clamp-2">{book.title}</h3>
                      </Link>
                      <p className="text-[13px] text-[#115c2d] hover:underline mb-2">{book.author}</p>
                      <div className="mt-auto font-bold text-[16px] text-[#115c2d]">${book.price.toFixed(2)}</div>
                    </div>

                    <div className="w-full opacity-100 max-h-[60px] lg:opacity-0 lg:max-h-0 lg:group-hover:max-h-[60px] lg:group-hover:opacity-100 transition-all duration-300 overflow-hidden shrink-0 mt-3">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(book);
                        }}
                        className="w-full py-2.5 bg-[#115c2d] lg:hover:bg-black text-white text-[14px] font-bold rounded-full transition-colors duration-300 flex justify-center items-center gap-2 shadow-md cursor-pointer"
                      >
                        + Add To Cart
                      </button>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default PicksForYou;
