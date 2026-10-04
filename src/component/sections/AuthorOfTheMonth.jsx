import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaRegHeart, FaRegEye, FaExchangeAlt, FaStar, FaChevronRight } from 'react-icons/fa';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import 'swiper/css';

import leftImage from '../../assets/4_1.png';
import authorImage from '../../assets/Rectangle_302_1.webp';

import { authorOfTheMonthBooks } from '../../data/books';

const AuthorOfTheMonth = () => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-5 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-[45%] shrink-0">
          <img
            src={leftImage}
            alt="The Safekeep"
            className="w-full h-[600px] md:h-[900px] lg:h-[800px] object-cover rounded-2xl shadow-sm"
          />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-10 md:mb-16">
            <img
              src={authorImage}
              alt="Camelia Doe"
              className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-full object-cover shadow-sm shrink-0"
            />
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-2">
              <p className="text-gray-400 font-semibold tracking-[0.15em] text-[11px] md:text-[12px] uppercase mb-2">
                Author of the month
              </p>
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-serif text-[#1e1e1e] mb-3 md:mb-4">
                Camelia Doe
              </h2>
              <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mb-6 max-w-[450px]">
                Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum.
                Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper.
                Proin sed ultrices erat.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-gray-200 rounded-full py-2.5 md:py-3 px-5 md:px-6 text-[13px] md:text-[14px] font-bold text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors"
              >
                View Full Bio <FaChevronRight className="text-[10px]" />
              </a>
            </div>
          </div>

          <div className="w-full relative flex-1">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 10 },
                1024: { slidesPerView: 2, spaceBetween: 20 },
                1280: { slidesPerView: 3, spaceBetween: 20 },
              }}
              className="author-swiper !pb-12 lg:h-[600px]"
            >
              {authorOfTheMonthBooks.map((book) => (
                <SwiperSlide key={book.id} className="h-auto">
                  <div className="relative h-full flex flex-col">
                    <div className="group bg-transparent rounded-sm transition-all duration-300 lg:hover:bg-white lg:hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] lg:hover:border-gray-100 border border-transparent z-10 lg:hover:z-50 p-2 md:p-3 lg:absolute lg:top-[-12px] lg:left-[-12px] lg:right-[-12px] lg:bottom-[-12px] flex flex-col cursor-pointer h-full">

                      <div className="relative w-full aspect-[2/3] bg-gray-100 rounded-[10px] overflow-hidden mb-4 shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                        <Link to={`/product/${book.id}`} className="block w-full h-full">
                          <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
                        </Link>
                        <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-[#e21a22] text-white text-[10px] md:text-[12px] font-bold px-1.5 md:px-2 py-0.5 rounded-full z-10 shadow-sm">
                          -15%
                        </div>

                        <div className="absolute top-2 right-2 md:top-3 md:right-3 flex flex-col gap-1.5 md:gap-2 z-10">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleWishlist(book);
                            }}
                            className={`w-[28px] h-[28px] md:w-[32px] md:h-[32px] bg-white rounded-full flex items-center justify-center shadow-sm transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-1 lg:group-hover:translate-y-0 delay-75 ${isInWishlist(book.id) ? 'text-red-500 border border-red-500' : 'text-gray-500 hover:bg-black hover:text-white border border-transparent'}`}
                          >
                            <FaRegHeart className="text-[12px] md:text-[14px]" />
                          </button>
                          <button className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-black hover:text-white shadow-sm transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-1 lg:group-hover:translate-y-0 delay-100">
                            <FaRegEye className="text-[12px] md:text-[14px]" />
                          </button>
                          <button className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-black hover:text-white shadow-sm transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-1 lg:group-hover:translate-y-0 delay-150">
                            <FaExchangeAlt className="text-[12px] md:text-[14px]" />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col items-center text-center flex-1">
                        <div className="flex gap-[1px] md:gap-[2px] text-gray-300 text-[9px] md:text-[11px] mb-1 md:mb-2">
                          <FaStar className="text-gray-300" />
                          <FaStar className="text-gray-300" />
                          <FaStar className="text-gray-300" />
                          <FaStar className="text-gray-300" />
                          <FaStar className="text-gray-300" />
                          <span className="text-gray-400 ml-1">(0)</span>
                        </div>
                        <Link to={`/product/${book.id}`} className="block w-full h-full">
                        <h3 className="text-[14px] md:text-[16px] font-serif leading-tight text-gray-900 mb-1 line-clamp-2">{book.title}</h3>
                        </Link>
                        <p className="text-[12px] md:text-[13px] text-[#115c2d] hover:underline mb-1 md:mb-2">{book.author}</p>
                        <div className="mt-auto font-bold text-[14px] md:text-[16px] text-[#115c2d]">${book.price.toFixed(2)}</div>
                      </div>

                      <div className="w-full opacity-100 max-h-[50px] lg:opacity-0 lg:max-h-0 lg:group-hover:max-h-[50px] lg:group-hover:opacity-100 transition-all duration-300 overflow-hidden shrink-0 mt-2 md:mt-3">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(book);
                          }}
                          className="w-full py-2 md:py-2.5 bg-[#008139] lg:hover:bg-black text-white text-[12px] md:text-[13px] font-bold rounded-full transition-colors duration-300 flex justify-center items-center gap-1.5 shadow-sm cursor-pointer"
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
      </div>
    </section>
  );
};

export default AuthorOfTheMonth;
