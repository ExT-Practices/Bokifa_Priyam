import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { FaRegHeart, FaStar, FaRegEye, FaExchangeAlt } from 'react-icons/fa';
import Navbar from '../component/sections/Navbar';
import Newsletter from '../component/sections/Newsletter';
import Footer from '../component/sections/Footer';

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <main>
      <Navbar />
      
      <div className="w-full bg-[#2b2b2b] py-16 md:py-20 flex flex-col items-center justify-center text-white mt-40">
        <h1 className="text-[40px] md:text-[50px] font-serif font-bold mb-4 tracking-wide">Wishlist</h1>
        <div className="flex items-center gap-2 text-[14px] font-medium text-gray-300">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Home <span className="mx-1">/</span> Wishlist
        </div>
      </div>

      <div className="w-full py-16 md:py-24 px-5 max-w-[1400px] mx-auto bg-white min-h-[400px]">
        {wishlist.length === 0 ? (
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-gray-500 text-[15px] md:text-[16px]">Don't have product in Wishlist</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {wishlist.map(book => (
              <div key={book.id} className="relative h-full flex flex-col">
                <div className="group bg-transparent rounded-sm transition-all duration-300 lg:hover:bg-white lg:hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] lg:hover:border-gray-100 border border-transparent z-10 p-2 md:p-4 flex flex-col cursor-pointer h-full">
                  
                  <div className="relative w-full aspect-[2/3] bg-gray-100 rounded-[10px] overflow-hidden mb-4 shrink-0 shadow-sm">
                    <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
                    
                    <div className="absolute top-3 left-3 bg-[#e21a22] text-white text-[12px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm">
                      -15%
                    </div>

                    <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(book);
                        }}
                        className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 text-red-500 border border-red-500 hover:bg-red-50"
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
                      <FaStar className="text-gray-300" /><FaStar className="text-gray-300" /><FaStar className="text-gray-300" /><FaStar className="text-gray-300" /><FaStar className="text-gray-300" />
                      <span className="text-gray-400 ml-1">(0)</span>
                    </div>
                    <h3 className="text-[16px] font-serif leading-tight text-gray-900 mb-1 line-clamp-2">{book.title}</h3>
                    <p className="text-[13px] text-[#115c2d] hover:underline mb-2">{book.author}</p>
                    <div className="mt-auto font-bold text-[16px] text-[#115c2d]">${book.price.toFixed(2)}</div>
                  </div>

                  <div className="w-full opacity-100 max-h-[60px] lg:opacity-0 lg:max-h-0 lg:group-hover:max-h-[60px] lg:group-hover:opacity-100 transition-all duration-300 overflow-hidden shrink-0 mt-3">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(book);
                      }}
                      className="w-full py-2.5 bg-[#008139] lg:hover:bg-black text-white text-[14px] font-bold rounded-full transition-colors duration-300 flex justify-center items-center gap-2 shadow-md cursor-pointer"
                    >
                      + Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Newsletter />
      <Footer />
    </main>
  );
};

export default Wishlist;
