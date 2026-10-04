import React from 'react';

import book1 from '../../assets/1_10.avif';
import book2 from '../../assets/1_11_1.avif';
import book3 from '../../assets/1_11_2.avif';
import book4 from '../../assets/1_11.avif';

const categories = [
  {
    id: 1,
    title: "Mystery, Thriller Books",
    img: book1,
    bgColor: "bg-[#be2126]"
  },
  {
    id: 2,
    title: "Fiction & Fantasy Books",
    img: book2,
    bgColor: "bg-[#ae7855]"
  },
  {
    id: 3,
    title: "Romance Books",
    img: book3,
    bgColor: "bg-[#e893c5]"
  },
  {
    id: 4,
    title: "Biographies Books",
    img: book4,
    bgColor: "bg-[#d4b150]"
  }
];

const TopCategories = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-5">
      <div className="w-full h-[1px] bg-gray-200 mb-16 hidden md:block"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
        {categories.map((cat) => (
          <div key={cat.id} className="relative w-full">
            <div className={`w-full ${cat.bgColor} rounded-[16px] h-[220px] md:h-[200px] flex items-center shadow-sm hover:shadow-md transition-shadow cursor-pointer`}>
              
              <div className="pl-[30%] md:pl-[50%] pr-4 flex flex-col justify-center">
                <span className="inline-block bg-white text-gray-800 font-bold text-[15px] md:text-[10px] tracking-wider uppercase px-3 py-1 rounded-full w-fit mb-2 md:mb-3 shadow-sm">
                  TOP 10
                </span>
                <h3 className="text-white font-serif text-[20px] leading-[1.2] pr-2">
                  {cat.title}
                </h3>
              </div>
            </div>

            <div className="absolute left-[-5px] lg:left-[-25px] top-1/2 -translate-y-1/2 w-[40%] md:w-[45%] max-w-[100px] h-[120%] flex items-center z-10 pointer-events-none">
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="w-full h-auto max-h-full object-contain"
              />
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
