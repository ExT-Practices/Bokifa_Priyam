import React from 'react';
import { FaStar, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { bookstoreBestsellersBooks } from '../../data/books';

const BookstoreBestsellers = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-5 lg:px-8 py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-serif text-[#1e1e1e] font-normal leading-none">
          Bookstore bestsellers
        </h2>
        <a 
          href="#" 
          className="inline-flex items-center gap-2 border border-gray-200 rounded-full py-2.5 px-6 text-[14px] font-bold text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors shrink-0"
        >
          Browse All <FaChevronRight className="text-[10px]" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {bookstoreBestsellersBooks.map((book) => (
          <div 
            key={book.id} 
            className="flex flex-row items-center p-3 lg:p-4 bg-white rounded-2xl md:rounded-[24px] border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-gray-100 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-[85px] h-[125px] shrink-0 mr-4 md:mr-5">
              <Link to={`/product/${book.id}`} className="block w-full h-full">
              <img 
                src={book.img} 
                alt={book.title} 
                className="w-full h-full object-cover rounded-xl"
              />
              </Link>
            </div>
            
            <div className="flex flex-col justify-center py-1">
              <div className="flex items-center gap-[2px] mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`text-[10px] ${i < book.rating ? 'text-[#f5c518]' : 'text-gray-200'}`} />
                ))}
                <span className="text-gray-400 text-[11px] ml-1">({book.rating})</span>
              </div>
              
              <Link to={`/product/${book.id}`} className="block w-full h-full">
              <h3 className="font-serif text-[16px] leading-tight text-gray-900 group-hover:text-[#115c2d] transition-colors line-clamp-2 mb-1.5">
                {book.title}
              </h3>
              </Link>
              
              <p className="text-[#115c2d] text-[12px] mb-2 hover:underline inline-block w-fit">
                {book.author}
              </p>
              
              <div className="font-bold text-[#008139] text-[16px]">
                ${book.price.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookstoreBestsellers;
