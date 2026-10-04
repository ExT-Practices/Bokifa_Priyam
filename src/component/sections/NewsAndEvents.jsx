import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronRight } from 'react-icons/fa';
import 'swiper/css';

import blog_2 from '../../assets/blog_i_2.jpg';
import blog_4 from '../../assets/blog_i_4.jpg';
import blog_5 from '../../assets/blog_i_5.jpg';
import blog_6 from '../../assets/blog_i_6.jpg';
import blog_7 from '../../assets/blog_i_7.jpg';
import blog_8 from '../../assets/blog_i_8.jpg';

const blogs = [
  { 
    id: 1, 
    title: "Behind the Scenes with Author Victoria Aveyard", 
    img: blog_2,
    category: "TIPS & TRICKS",
    date: "OCT 24, 2024",
    author: "HA EI"
  },
  { 
    id: 2, 
    title: "5 Attractive Bookstore WordPress Themes", 
    img: blog_4,
    category: "TIPS & TRICKS",
    date: "OCT 24, 2024",
    author: "HA EI"
  },
  { 
    id: 3, 
    title: "Top 10 Books to Make It a Great Year", 
    img: blog_5,
    category: "TIPS & TRICKS",
    date: "OCT 24, 2024",
    author: "HA EI"
  },
  { 
    id: 4, 
    title: "How to Build a Reading Habit This Summer", 
    img: blog_6,
    category: "TIPS & TRICKS",
    date: "OCT 24, 2024",
    author: "HA EI"
  },
  { 
    id: 5, 
    title: "The Ultimate Guide to Classic Literature", 
    img: blog_7,
    category: "TIPS & TRICKS",
    date: "OCT 24, 2024",
    author: "HA EI"
  },
  { 
    id: 6, 
    title: "Finding Your Next Favorite Fantasy Series", 
    img: blog_8,
    category: "TIPS & TRICKS",
    date: "OCT 24, 2024",
    author: "HA EI"
  }
];

const NewsAndEvents = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-5 lg:px-8 py-16 md:py-24">
      <div className="flex flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif text-[#1e1e1e] font-normal leading-none flex items-center gap-1">
          News <span className="font-serif italic text-gray-500 font-light">&</span> events
        </h2>
        <a 
          href="#" 
          className="inline-flex items-center gap-2 border border-gray-200 rounded-full py-2.5 px-6 text-[14px] font-bold text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors shrink-0"
        >
          Browse All <FaChevronRight className="text-[10px]" />
        </a>
      </div>

      <div className="w-full min-w-0">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="news-swiper !pb-10"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id} className="h-auto pb-4">
              <div className="group flex flex-col cursor-pointer h-full">
                <div className="relative mb-8">
                  <div className="w-full aspect-[1.5] rounded-xl overflow-hidden bg-gray-100">
                    <img 
                      src={blog.img} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white group-hover:bg-[#008139] transition-colors duration-300 px-4 md:px-5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.08)] whitespace-nowrap z-10 flex items-center justify-center">
                    <span className="text-[12px] md:text-[12px] font-bold tracking-wider uppercase flex items-center text-gray-400 group-hover:text-white transition-colors duration-300">
                      IN <span className="text-[#008139] group-hover:text-white transition-colors duration-300 mx-1">{blog.category}</span> / {blog.date} / BY {blog.author}
                    </span>
                  </div>
                </div>
                
                <div className="px-2 text-center md:text-left">
                  <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-serif leading-[1.3] text-[#1e1e1e] group-hover:text-[#008139] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewsAndEvents;
