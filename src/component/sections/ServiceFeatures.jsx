import React from 'react';

import iconBox from '../../assets/box_1.png';
import iconGift from '../../assets/gift-box_1.png';
import iconFire from '../../assets/fire_1.png';
import iconBook from '../../assets/book6_1.png';

const features = [
  {
    id: 1,
    title: "FAST DELIVERY",
    desc: "Free standard delivery",
    icon: iconBox
  },
  {
    id: 2,
    title: "BEST PRICES & OFFERS",
    desc: "Multiple gift options available",
    icon: iconGift
  },
  {
    id: 3,
    title: "GREAT DAILY DEAL",
    desc: "Orders $50 or more",
    icon: iconFire
  },
  {
    id: 4,
    title: "CLICK & COLLECT",
    desc: "Check your local stores now",
    icon: iconBook
  }
];

const ServiceFeatures = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-5 lg:px-8 py-10 md:py-16 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 lg:gap-0">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center text-center px-4 py-6 sm:py-0 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] mb-4 flex items-center justify-center">
              <img 
                src={feature.icon} 
                alt={feature.title} 
                className="w-full h-full object-contain opacity-80"
              />
            </div>
            <h4 className="text-[13px] md:text-[14px] font-bold text-gray-900 tracking-wider mb-1.5 md:mb-2">
              {feature.title}
            </h4>
            <p className="text-[13px] md:text-[14px] text-gray-500 font-light">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeatures;
