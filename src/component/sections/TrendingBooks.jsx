import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaRegHeart, FaRegEye, FaExchangeAlt, FaStar } from 'react-icons/fa';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import 'swiper/css';
import { Link } from 'react-router-dom';

import { trendingBooks } from '../../data/books';

const TrendingBooks = () => {
  const [displayBooks, setDisplayBooks] = useState([]);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  useEffect(() => {
    const shuffled = [...trendingBooks].sort(() => 0.5 - Math.random());
    setDisplayBooks(shuffled.slice(0, 10));
  }, []);

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-16">
      <div className="w-full min-w-0">
        <Swiper
          modules={[Navigation]}
          spaceBetween={5}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 5 },
            1024: { slidesPerView: 4, spaceBetween: 5 },
            1280: { slidesPerView: 5, spaceBetween: 5 },
          }}
          className="picks-swiper !pb-20 !pt-4"
        >
          {displayBooks.map((book) => (
            <SwiperSlide key={book.id} className="h-auto">
              
              <div className="relative h-full flex flex-col">
                
                <div className="w-full flex flex-col p-2 md:p-4 invisible pointer-events-none hidden lg:flex" aria-hidden="true">
                  <div className="w-full aspect-[2/3] mb-4"></div>
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="flex gap-[2px] text-[11px] mb-2">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span className="ml-1">(0)</span>
                    </div>
                    <h3 className="text-[17px] font-serif leading-tight mb-1 line-clamp-2">{book.title}</h3>
                    <p className="text-[13px] mb-2">{book.author}</p>
                    <div className="font-bold text-[16px]">${book.price.toFixed(2)}</div>
                  </div>
                </div>

                <div className="group bg-transparent rounded-sm transition-all duration-300 lg:hover:bg-white lg:hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] lg:hover:border-gray-100 border border-transparent z-10 lg:hover:z-50 p-2 md:p-4 lg:absolute lg:top-0 lg:left-0 lg:right-0 flex flex-col cursor-pointer h-full lg:h-auto">
                  
                  <div className="relative w-full aspect-[2/3] bg-gray-100 rounded-[10px] overflow-hidden mb-4 shrink-0 shadow-sm">
                  <Link to={`/product/${book.id}`} className="block w-full h-full">
                    <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
                  </Link>
                    
                    <div className="absolute top-3 left-3 bg-[#e01414] text-white text-[12px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm">
                      -15%
                    </div>

                    <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
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
                    <Link to={`/product/${book.id}`} className="block w-full h-full">
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
    </section>
  );
};

export default TrendingBooks;
