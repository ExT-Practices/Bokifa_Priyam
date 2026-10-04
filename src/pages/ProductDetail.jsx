import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { 
  FaRegHeart, FaRegEye, FaExchangeAlt, FaStar, 
  FaMinus, FaPlus, FaSearchPlus, FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn 
} from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import 'swiper/css';
import 'swiper/css/navigation';

import Navbar from '../component/sections/Navbar';
import Footer from '../component/sections/Footer';
import Newsletter from '../component/sections/Newsletter';

import payImg from '../assets/pay.avif';
import { allBooks } from '../data/books';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const [product, setProduct] = useState(allBooks[0]);
  const [quantity, setQuantity] = useState(1);
  const [format, setFormat] = useState('Hardcover');
  const [activeTab, setActiveTab] = useState('Description');
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = allBooks.find(b => b.id === parseInt(id));
    if (found) setProduct(found);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuantity = (type) => {
    if (type === 'dec' && quantity > 1) setQuantity(quantity - 1);
    if (type === 'inc') setQuantity(quantity + 1);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({ ...product, quantity, format });
  };

  return (
    <div className="w-full bg-white relative pb-20">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-5 pt-45 pb-4">
        <div className="text-[14px] text-gray-500 flex items-center gap-2">
          <Link to="/" className="hover:text-black transition flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            Home
          </Link> 
          <span>/</span>
          <span className="text-gray-900">{product.title}</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 py-6">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
          
          <div className="w-full lg:w-[45%] flex gap-4">
            <div className="hidden lg:flex flex-col gap-4 w-[100px]">
              <div className="border border-gray-300 rounded cursor-pointer overflow-hidden p-1">
                <img src={product.img} alt="thumb" className="w-full h-auto object-cover" />
              </div>
            </div>
            
            <div className="flex-1 relative bg-[#f7f7f7] rounded-[10px] overflow-hidden group cursor-crosshair">
              <img src={product.img} alt={product.title} className="w-full h-auto object-cover" />
              <button className="absolute bottom-4 right-4 w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                <FaSearchPlus className="text-gray-600 text-lg" />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[55%] flex flex-col pt-2 lg:pl-5">
            <h1 className="text-[36px] md:text-[45px] font-serif leading-[1.1] text-gray-900 mb-3">{product.title}</h1>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-[2px] text-gray-300 text-[14px]">
                <FaStar className="text-gray-300" /><FaStar className="text-gray-300" /><FaStar className="text-gray-300" /><FaStar className="text-gray-300" /><FaStar className="text-gray-300" />
                <span className="text-gray-400 ml-1">(0)</span>
              </div>
              <span className="text-[#008139] font-medium text-[14px]">{product.stock}</span>
            </div>

            <div className="border-b border-gray-200 pb-6 mb-6">
              <div className="text-[28px] md:text-[32px] text-[#008139] font-bold mb-4">${product.price.toFixed(2)}</div>

              <p className="text-[15px] text-gray-600 leading-relaxed">
                From the author of The Longest Ride and The Return comes a novel about the enduring legacy of first love, and the decisions that haunt us forever. 1996 was the year that changed everything for Maggie Dawes. Sent away at sixteen to live with an aunt she barely knew in...
              </p>
            </div>

            <div className="mb-8 border-b border-gray-200 pb-8">
              <div className="text-[13px] font-bold text-gray-900 tracking-wider uppercase mb-3 font-serif">Format: <span className="font-sans text-gray-600 font-normal normal-case ml-2">{format}</span></div>
              <div className="flex flex-wrap gap-3">
                {['Hardcover', 'Paperback', 'Ebook', 'Audio cd'].map((fmt) => (
                  <button 
                    key={fmt} 
                    onClick={() => setFormat(fmt)}
                    className={`px-5 py-2.5 text-[14px] border transition-colors ${format === fmt ? 'border-gray-900 text-gray-900 font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-400'}`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-6">
              <div className="flex items-center border border-gray-200 rounded-sm h-[50px] w-full sm:w-[130px] bg-[#f9f9f9]">
                <button onClick={() => handleQuantity('dec')} className="px-4 h-full text-gray-500 hover:text-black flex items-center justify-center w-1/3"><FaMinus className="text-[12px]" /></button>
                <span className="px-2 font-bold min-w-[20px] text-center w-1/3">{quantity}</span>
                <button onClick={() => handleQuantity('inc')} className="px-4 h-full text-gray-500 hover:text-black flex items-center justify-center w-1/3"><FaPlus className="text-[12px]" /></button>
              </div>
              
              <button onClick={handleAddToCart} className="flex-1 bg-[#008139] hover:bg-[#1e1e1e] text-white font-bold h-[50px] rounded-full text-[15px] transition-colors shadow-md">
                Add To Cart
              </button>
              <button className="flex-1 bg-[#008139] hover:bg-[#1e1e1e] text-white font-bold h-[50px] rounded-full text-[15px] transition-colors shadow-md">
                Buy It Now
              </button>
            </div>

            <div className="flex gap-6 mb-8 border-b border-gray-200 pb-8">
              <button onClick={() => toggleWishlist(product)} className={`flex items-center gap-2 text-[14px] font-medium transition-colors ${isInWishlist(product.id) ? 'text-red-500' : 'text-gray-600 hover:text-[#008139]'}`}>
                <FaRegHeart className={isInWishlist(product.id) ? 'text-red-500' : ''} /> {isInWishlist(product.id) ? 'Remove From Wishlist' : 'Add To Wishlist'}
              </button>
              <button className="flex items-center gap-2 text-[14px] text-gray-600 font-medium hover:text-[#008139] transition-colors">
                <FaExchangeAlt /> Add To Compare
              </button>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center gap-3 text-gray-600 text-[14px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>
                <span>2 years warranty</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-[14px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                <span>Delivery time: 1-2 business days</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-[14px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <span>Free 90 days return</span>
              </div>
            </div>

            <div className="bg-[#f9f9f9] py-5 flex flex-col items-center justify-center rounded-sm mb-6 max-w-[400px]">
              <p className="text-[13px] font-bold font-serif mb-3 uppercase tracking-wider">Payment Options</p>
              <img src={payImg} alt="Payment Options" className="h-[25px] object-contain" />
            </div>

            <div className="flex flex-col gap-2 text-[14px] text-gray-600 mb-6">
              <p><span className="text-gray-900 font-medium mr-1">Categories:</span> Books, Books New, Family, Fiction, Kids Books, Non Fiction</p>
              <p><span className="text-gray-900 font-medium mr-1">Tags:</span> Ebook</p>
            </div>

            <div className="flex gap-2">
              <a href="#" className="w-[32px] h-[32px] rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-80 transition"><FaFacebookF size={14} /></a>
              <a href="#" className="w-[32px] h-[32px] rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-80 transition"><FaTwitter size={14} /></a>
              <a href="#" className="w-[32px] h-[32px] rounded-full bg-[#bd081c] text-white flex items-center justify-center hover:opacity-80 transition"><FaPinterestP size={14} /></a>
              <a href="#" className="w-[32px] h-[32px] rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-80 transition"><FaLinkedinIn size={14} /></a>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 py-12 mt-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-14 border-b border-gray-200">
          {['Description', 'Additional Information', 'Reviews'].map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 text-[18px] md:text-[22px] font-serif transition-colors relative ${activeTab === tab ? 'text-[#005726] font-bold' : 'text-gray-600 hover:text-[#005726]'}`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#005726]" />
              )}
            </button>
          ))}
        </div>
        
        <div className="py-10 max-w-[1100px] mx-auto text-gray-600 text-[15px] leading-relaxed">
          {activeTab === 'Description' && (
            <div className="animate-fade-in">
              <p className="mb-6">
                From the author of The Longest Ride and The Return comes a novel about the enduring legacy of first love, and the decisions that haunt us forever. 1996 was the year that changed everything for Maggie Dawes. Sent away at sixteen to live with an aunt she barely knew in Ocracoke, a remote village on North Carolina's Outer Banks, she could think only of the friends and family she left behind... until she met Bryce Trickett, one of the few teenagers on the island.
              </p>
              <p className="mb-10">
                Handsome, genuine, and newly admitted to West Point, Bryce showed her how much there was to love about the wind-swept beach town—and introduced her to photography, a passion that would define the rest of her life. A collection of 10 well-researched board books to introduce a wide range of learning topics and everyday objects to the little scholars. The topics included in the set are - ABC, Numbers, Shapes, Colours, Wild Animals, Farm Animals and Pets, Birds, Fruits, Vegetables and Transport.
              </p>
              
              <div className="flex flex-wrap gap-8 justify-center border-t border-gray-200 pt-8">
                <div className="flex items-center gap-2 hover:text-[#008139] cursor-pointer transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                  <span className="font-medium text-[14px]">Shipping & Returns</span>
                </div>
                <div className="flex items-center gap-2 hover:text-[#008139] cursor-pointer transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>
                  <span className="font-medium text-[14px]">Warranty</span>
                </div>
                <div className="flex items-center gap-2 hover:text-[#008139] cursor-pointer transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <span className="font-medium text-[14px]">Secure Payment</span>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'Additional Information' && (
             <div className="animate-fade-in text-center">Additional information content here.</div>
          )}
          {activeTab === 'Reviews' && (
             <div className="animate-fade-in text-center">Reviews content here.</div>
          )}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 py-10">
        <h2 className="text-[36px] md:text-[45px] font-serif text-center mb-10 text-gray-900">You may also like</h2>
        
        <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              540: { slidesPerView: 2 },
              960: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="picks-swiper !pb-10"
          >
            {allBooks.map((book) => (
              <SwiperSlide key={book.id} className="h-auto pb-[20px]">
                <div className="relative h-full flex flex-col group bg-white rounded-sm transition-all duration-300 lg:hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] p-4">
                  <div className="relative w-full aspect-[2/3] bg-gray-100 rounded-[10px] overflow-hidden mb-4 shrink-0 shadow-sm cursor-pointer" onClick={() => window.location.href=`/product/${book.id}`}>
                    <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    <div className="absolute top-3 left-3 bg-[#e01414] text-white text-[12px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm">
                      -15%
                    </div>

                    <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleWishlist(book); }}
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
                      <FaStar className="text-gray-300" /><FaStar className="text-gray-300" /><FaStar className="text-gray-300" /><FaStar className="text-gray-300" /><FaStar className="text-gray-300" />
                      <span className="text-gray-400 ml-1">(0)</span>
                    </div>
                    <h3 className="text-[17px] font-serif leading-tight text-gray-900 mb-1 line-clamp-2 cursor-pointer hover:text-[#008139]" onClick={() => window.location.href=`/product/${book.id}`}>{book.title}</h3>
                    <p className="text-[13px] text-[#115c2d] hover:underline mb-2 cursor-pointer">{book.author}</p>
                    <div className="mt-auto font-bold text-[16px] text-[#115c2d]">${book.price.toFixed(2)}</div>
                  </div>

                  <div className="w-full opacity-100 max-h-[60px] lg:opacity-0 lg:max-h-0 lg:group-hover:max-h-[60px] lg:group-hover:opacity-100 transition-all duration-300 overflow-hidden shrink-0 mt-3">
                    <button 
                      onClick={(e) => { e.preventDefault(); addToCart(book); }}
                      className="w-full py-2.5 bg-[#115c2d] lg:hover:bg-black text-white text-[14px] font-bold rounded-full transition-colors duration-300 flex justify-center items-center gap-2 shadow-md cursor-pointer"
                    >
                      + Add To Cart
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>

      <Newsletter />
      <Footer />

      <div className={`fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.08)] border-t border-gray-100 z-50 transition-transform duration-300 px-5 py-3 ${showStickyBar ? 'translate-y-0' : 'translate-y-[150%]'}`}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-4 overflow-hidden">
            <img src={product.img} alt={product.title} className="w-[45px] h-[65px] object-cover rounded shadow-sm hidden sm:block" />
            <div className="flex flex-col min-w-0 hidden md:flex">
              <h3 className="text-[15px] font-serif text-gray-900 truncate max-w-[250px] lg:max-w-[400px]">{product.title}</h3>
              <div className="text-[14px] text-gray-500 flex items-center gap-2">
                 <span className="text-black font-bold">${product.price.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0 ml-auto">
            <div className="hidden md:block relative">
              <select 
                className="appearance-none border border-gray-200 rounded-full py-2.5 pl-4 pr-10 text-[13px] text-gray-700 bg-white cursor-pointer hover:border-gray-300 outline-none"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              >
                <option value="Hardcover">Hardcover</option>
                <option value="Paperback">Paperback</option>
                <option value="Ebook">Ebook</option>
                <option value="Audio cd">Audio cd</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            <button onClick={handleAddToCart} className="bg-black hover:bg-[#008139] text-white font-bold py-2.5 px-8 rounded-full text-[13px] transition-colors shadow-md whitespace-nowrap">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
