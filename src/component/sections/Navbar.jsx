import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import mega1 from '../../assets/ap_bo_megahome_1.png';
import mega2 from '../../assets/ap_bo_megahome_2.png';
import mega3 from '../../assets/ap_bo_megahome_3.png';
import mega4 from '../../assets/ap_bo_megahome_4.png';
import mega5 from '../../assets/ap_bo_megahome_5.png';
import shopBanner from '../../assets/Rectangle_6863_1.png';

const bannerMessages = [
    "All books at least 50% off list prices every day",
    "Free shipping on all orders over $50",
    "Discover this week's most popular new releases"
];

const ChevronDown = () => (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5 opacity-70">
        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Navbar = () => {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHomeExpanded, setIsHomeExpanded] = useState(false);
    const [isShopExpanded, setIsShopExpanded] = useState(false);
    const [isShopLayoutsExpanded, setIsShopLayoutsExpanded] = useState(false);
    const [isProductLayoutsExpanded, setIsProductLayoutsExpanded] = useState(false);
    const [isProductTypesExpanded, setIsProductTypesExpanded] = useState(false);
    const [isBlogsExpanded, setIsBlogsExpanded] = useState(false);
    const [isPagesExpanded, setIsPagesExpanded] = useState(false);
    const [isMobileCurrencyExpanded, setIsMobileCurrencyExpanded] = useState(false);
    const [isMobileLanguageExpanded, setIsMobileLanguageExpanded] = useState(false);
    const { isCartOpen, openCart, closeCart, cartItems, cartCount, cartTotal, removeFromCart, updateQuantity } = useCart();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBannerIndex((prev) => (prev + 1) % bannerMessages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextBanner = () => {
        setCurrentBannerIndex((prev) => (prev + 1) % bannerMessages.length);
    };

    const prevBanner = () => {
        setCurrentBannerIndex((prev) => (prev - 1 + bannerMessages.length) % bannerMessages.length);
    };

    return (
        <header className="fixed top-0 w-full font-sans z-50">
            <div className="bg-[#113221] text-white py-2 px-6 flex justify-between items-center text-lg md:justify-center md:gap-x-12">
                <button onClick={prevBanner} className="cursor-pointer focus-visible:outline-white p-2">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 9L1 5L5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className="w-full md:w-[450px] text-center overflow-hidden">
                    <p className="tracking-wide font-light transition-opacity duration-300">
                        {bannerMessages[currentBannerIndex]}
                    </p>
                </div>
                <button onClick={nextBanner} className="cursor-pointer focus-visible:outline-white p-2">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <nav className="bg-white px-6 xl:px-30 py-10 flex items-center justify-between relative">

                <div className="flex xl:hidden items-center gap-x-6">
                    <button onClick={() => setIsMobileMenuOpen(true)} className="text-text-inverse hover:text-[#00A859] transition-colors cursor-pointer">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                    <button className="text-text-inverse hover:text-[#00A859] transition-colors cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                </div>

                <ul className="hidden xl:flex items-center gap-x-12 text-2xl font-bold text-text-inverse">
                    <li className="group flex items-center cursor-pointer text-[#00A859] hover:text-[#f04f23] transition-colors duration-normal py-4">
                        Home <ChevronDown />

                        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 before:absolute before:-top-10 before:left-0 before:w-full before:h-10 before:bg-transparent before:content-['']">
                            <div className="flex justify-between items-start px-12 py-10 gap-x-6 w-full max-w-[1920px] mx-auto">

                                <div className="flex flex-col items-center group/item cursor-pointer w-full">
                                    <div className="w-full overflow-hidden border border-gray-100 shadow-sm rounded-sm">
                                        <img src={mega1} alt="Homepage 01" className="w-full h-auto object-cover" />
                                    </div>
                                    <span className="mt-5 text-[15px] font-bold text-text-inverse border-b-2 border-transparent group-hover/item:border-text-inverse transition-colors pb-1 hover:tracking-widest">Homepage 01</span>
                                </div>

                                <div className="flex flex-col items-center group/item cursor-pointer w-full">
                                    <div className="w-full overflow-hidden border border-gray-100 shadow-sm rounded-sm">
                                        <img src={mega2} alt="Homepage 02" className="w-full h-auto object-cover" />
                                    </div>
                                    <span className="mt-5 text-[15px] font-bold text-text-inverse border-b-2 border-transparent group-hover/item:border-text-inverse transition-colors pb-1 hover:tracking-widest">Homepage 02</span>
                                </div>

                                <div className="flex flex-col items-center group/item cursor-pointer w-full">
                                    <div className="w-full overflow-hidden border border-gray-100 shadow-sm rounded-sm">
                                        <img src={mega3} alt="Homepage 03" className="w-full h-auto object-cover" />
                                    </div>
                                    <span className="mt-5 text-[15px] font-bold text-text-inverse border-b-2 border-transparent group-hover/item:border-text-inverse transition-colors pb-1 hover:tracking-widest">Homepage 03</span>
                                </div>

                                <div className="flex flex-col items-center group/item cursor-pointer w-full">
                                    <div className="w-full overflow-hidden border border-gray-100 shadow-sm rounded-sm">
                                        <img src={mega4} alt="Homepage 04" className="w-full h-auto object-cover" />
                                    </div>
                                    <span className="mt-5 text-[15px] font-bold text-text-inverse border-b-2 border-transparent group-hover/item:border-text-inverse transition-colors pb-1 hover:tracking-widest">Homepage 04</span>
                                </div>

                                <div className="flex flex-col items-center group/item cursor-pointer w-full">
                                    <div className="w-full overflow-hidden border border-gray-100 shadow-sm rounded-sm">
                                        <img src={mega5} alt="Homepage 05" className="w-full h-auto object-cover" />
                                    </div>
                                    <span className="mt-5 text-[15px] font-bold text-text-inverse border-b-2 border-transparent group-hover/item:border-text-inverse transition-colors pb-1 hover:tracking-widest">Homepage 05</span>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li className="group flex items-center cursor-pointer hover:text-[#f04f23] transition-colors duration-normal py-4">
                        Shop <ChevronDown />

                        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 before:absolute before:-top-10 before:left-0 before:w-full before:h-10 before:bg-transparent before:content-['']">
                            <div className="flex justify-between items-start px-30 py-10 w-full max-w-[1920px] mx-auto text-text-inverse cursor-default">

                                <div className="flex flex-col mt-2">
                                    <h3 className="font-bold text-[15px] mb-6 uppercase tracking-wider">Shop Layouts</h3>
                                    <ul className="flex flex-col gap-y-4 text-[14px] text-gray-500 font-medium">
                                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Left Sidebar</li>
                                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Collection Top</li>
                                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors">List Collection</li>
                                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Coupon</li>
                                    </ul>
                                </div>

                                <div className="flex flex-col mt-2">
                                    <h3 className="font-bold text-[15px] mb-6 uppercase tracking-wider">Product Layouts</h3>
                                    <ul className="flex flex-col gap-y-4 text-[14px] text-gray-500 font-medium">
                                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Classic</li>
                                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Scroll Fixed</li>
                                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Left Thumbnail</li>
                                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Right Thumbnail</li>
                                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Without Thumbnail</li>
                                    </ul>
                                </div>

                                <div className="flex flex-col mt-2">
                                    <h3 className="font-bold text-[15px] mb-6 uppercase tracking-wider">Product Types</h3>
                                    <ul className="flex flex-col gap-y-4 text-[14px] text-gray-500 font-medium">
                                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors">With Video</li>
                                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Upsell</li>
                                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Crosssell</li>
                                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Soldout - In Coming</li>
                                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Product Countdown</li>
                                    </ul>
                                </div>

                                <div className="w-[480px] h-[280px] relative overflow-hidden shadow-sm flex-shrink-0">
                                    <img src={shopBanner} alt="Sale Banner" className="absolute inset-0 w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10 text-white">
                                        <p className="text-[15px] font-semibold mb-2 text-gray-100">Five day sale!</p>
                                        <h2 className="text-[40px] font-bold mb-4 tracking-tight leading-none">Save 50%</h2>
                                        <p className="text-[14px] mb-8 max-w-[320px] leading-relaxed text-gray-200">Your first repeat delivery order! Use code BIGSALE50 at checkout</p>
                                        <button className="bg-white text-black font-bold py-3 px-8 rounded-full w-max hover:bg-[#00A859] hover:text-white transition-colors duration-300 cursor-pointer shadow-md">
                                            Shop Now
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li className="group relative flex items-center cursor-pointer hover:text-[#f04f23] transition-colors duration-normal py-4">
                        Blogs <ChevronDown />

                        <div className="absolute top-[calc(100%+38px)] left-0 w-[240px] bg-white border border-gray-200 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 before:absolute before:-top-[24px] before:left-0 before:w-full before:h-[24px] before:bg-transparent before:content-['']">
                            <ul className="flex flex-col text-[14px] text-gray-500 font-normal">
                                <li className="px-6 py-4 border-b border-gray-100 hover:text-[#f04f23] transition-colors">Blog - Standard</li>
                                <li className="px-6 py-4 border-b border-gray-100 hover:text-[#f04f23] transition-colors">Blog - Grid</li>
                                <li className="px-6 py-4 hover:text-[#f04f23] transition-colors">Single Post</li>
                            </ul>
                        </div>
                    </li>
                    <li className="group relative flex items-center cursor-pointer hover:text-[#f04f23] transition-colors duration-normal py-4">
                        Pages <ChevronDown />

                        <div className="absolute top-[calc(100%+38px)] left-0 w-[240px] bg-white border border-gray-200 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 before:absolute before:-top-[24px] before:left-0 before:w-full before:h-[24px] before:bg-transparent before:content-['']">
                            <ul className="flex flex-col text-[14px] text-gray-500 font-normal">
                                <li className="px-6 py-4 border-b border-gray-100 hover:text-[#f04f23] transition-colors">About Us</li>
                                <li className="px-6 py-4 border-b border-gray-100 hover:text-[#f04f23] transition-colors">Contact Us</li>
                                <li className="px-6 py-4 border-b border-gray-100 hover:text-[#f04f23] transition-colors">Our Team</li>
                                <li className="px-6 py-4 border-b border-gray-100 hover:text-[#f04f23] transition-colors">Faqs</li>
                                <li className="px-6 py-4 border-b border-gray-100 hover:text-[#f04f23] transition-colors">Lookbook</li>
                                <li className="px-6 py-4 hover:text-[#f04f23] transition-colors">404 Error</li>
                            </ul>
                        </div>
                    </li>
                    <li className="cursor-pointer hover:text-[#f04f23] hover:opacity-80 transition-opacity duration-normal">
                        Contact
                    </li>
                </ul>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img src="/logo.png" alt="bokifa" className="h-8 md:h-10 object-contain" />
                </div>

                <div className="flex items-center gap-x-8">

                    <div className="flex items-center gap-x-8 text-text-inverse">
                        <div className="hidden xl:flex flex-row items-center gap-x-6 text-xs font-semibold text-text-secondary tracking-wider">
                            <div className="group relative flex items-center cursor-pointer hover:text-text-inverse transition-colors py-4">
                                USD $ <ChevronDown />
                                <div className="absolute top-[calc(100%-10px)] left-0 w-[100px] bg-white border border-gray-200 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 max-h-[160px] overflow-y-auto before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent before:content-[''] styled-scrollbar">
                                    <ul className="flex flex-col text-[13px] text-gray-500 font-normal">
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer">USD $</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer">EUR €</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer">GBP £</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer">JPY ¥</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer">CZK Kč</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer">DKK kr.</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer">HKD HK$</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer">HUF Ft</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="group relative flex items-center cursor-pointer hover:text-text-inverse transition-colors py-4">
                                ENGLISH <ChevronDown />
                                <div className="absolute top-[calc(100%-10px)] left-0 w-[110px] bg-white border border-gray-200 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent before:content-['']">
                                    <ul className="flex flex-col text-[13px] text-gray-500 font-normal">
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer">English</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer">Français</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer">Deutsch</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer">Italiano</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer">日本語</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button className="hidden xl:block hover:text-[#00A859] transition-colors duration-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00A859] rounded-xs cursor-pointer">
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                        <button className="hover:text-[#00A859] transition-colors duration-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00A859] rounded-xs cursor-pointer">
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </button>
                        <Link to="/wishlist" className="hover:text-[#00A859] transition-colors duration-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00A859] rounded-xs cursor-pointer">
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </Link>
                        <button
                            className="relative hover:text-[#00A859] transition-colors duration-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00A859] rounded-xs cursor-pointer"
                            onClick={openCart}
                        >
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            <span className="absolute -top-1.5 -right-2 bg-[#f04f23] text-white text-[13px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-lg">
                                {cartCount}
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

            <div className={`fixed top-0 left-0 h-full w-[350px] max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col shadow-2xl`}>
                <div className="flex justify-end p-6">
                    <button onClick={() => setIsMobileMenuOpen(false)} className="text-text-inverse hover:text-[#f04f23] transition-colors cursor-pointer">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                <div className="flex flex-col px-8 py-2 overflow-y-auto flex-grow">
                    <ul className="flex flex-col gap-y-6 font-bold text-text-inverse">
                        <li className="flex flex-col border-b border-gray-200 pb-2">
                            <div
                                className="flex justify-between items-center cursor-pointer hover:text-[#f04f23] transition-colors"
                                onClick={() => setIsHomeExpanded(!isHomeExpanded)}
                            >
                                Home <span className="text-4xl font-bold leading-none">{isHomeExpanded ? '-' : '+'}</span>
                            </div>
                            {isHomeExpanded && (
                                <ul className="flex flex-col gap-y-1 mt-5 mb-2 pl-4 text-[15px] font-semibold text-text-secondary">
                                    <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Home 1</li>
                                    <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Home 2</li>
                                    <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Home 3</li>
                                    <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Home 4</li>
                                    <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Home 5</li>
                                </ul>
                            )}
                        </li>
                        <li className="flex flex-col border-b border-gray-200 pb-2">
                            <div
                                className="flex justify-between items-center cursor-pointer hover:text-[#f04f23] transition-colors"
                                onClick={() => setIsShopExpanded(!isShopExpanded)}
                            >
                                Shop <span className="text-4xl font-bold leading-none">{isShopExpanded ? '-' : '+'}</span>
                            </div>
                            {isShopExpanded && (
                                <ul className="flex flex-col mt-5 pl-4">
                                    <li className="flex flex-col">
                                        <div
                                            className="flex justify-between items-center cursor-pointer text-[15px] text-gray-500 font-semibold hover:text-[#f04f23] transition-colors"
                                            onClick={() => setIsShopLayoutsExpanded(!isShopLayoutsExpanded)}
                                        >
                                            Shop Layouts <span className="text-4xl font-bold leading-none">{isShopLayoutsExpanded ? '-' : '+'}</span>
                                        </div>
                                        {isShopLayoutsExpanded && (
                                            <ul className="flex flex-col mt-3 mb-2 pl-4 text-[14px] text-gray-400 font-medium">
                                                <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Left Sidebar</li>
                                                <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Collection Top</li>
                                                <li className="cursor-pointer hover:text-[#f04f23] transition-colors">List Collection</li>
                                                <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Coupon</li>
                                            </ul>
                                        )}
                                    </li>

                                    <li className="flex flex-col mt-2">
                                        <div
                                            className="flex justify-between items-center cursor-pointer text-[15px] text-gray-500 font-semibold hover:text-[#f04f23] transition-colors"
                                            onClick={() => setIsProductLayoutsExpanded(!isProductLayoutsExpanded)}
                                        >
                                            Product Layouts <span className="text-4xl font-bold leading-none">{isProductLayoutsExpanded ? '-' : '+'}</span>
                                        </div>
                                        {isProductLayoutsExpanded && (
                                            <ul className="flex flex-col mt-3 mb-2 pl-4 text-[14px] text-gray-400 font-medium">
                                                <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Classic</li>
                                                <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Scroll Fixed</li>
                                                <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Left Thumbnail</li>
                                                <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Right Thumbnail</li>
                                                <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Without Thumbnail</li>
                                            </ul>
                                        )}
                                    </li>

                                    <li className="flex flex-col mt-2 mb-2">
                                        <div
                                            className="flex justify-between items-center cursor-pointer text-[15px] text-gray-500 font-semibold hover:text-[#f04f23] transition-colors"
                                            onClick={() => setIsProductTypesExpanded(!isProductTypesExpanded)}
                                        >
                                            Product Types <span className="text-4xl font-bold leading-none">{isProductTypesExpanded ? '-' : '+'}</span>
                                        </div>
                                        {isProductTypesExpanded && (
                                            <ul className="flex flex-col mt-3 mb-2 pl-4 text-[14px] text-gray-400 font-medium">
                                                <li className="cursor-pointer hover:text-[#f04f23] transition-colors">With Video</li>
                                                <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Upsell</li>
                                                <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Crosssell</li>
                                                <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Soldout - In Coming</li>
                                                <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Product Countdown</li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="flex flex-col border-b border-gray-200 pb-2">
                            <div
                                className="flex justify-between items-center cursor-pointer hover:text-[#f04f23] transition-colors"
                                onClick={() => setIsBlogsExpanded(!isBlogsExpanded)}
                            >
                                Blogs <span className="text-4xl font-bold leading-none">{isBlogsExpanded ? '-' : '+'}</span>
                            </div>
                            {isBlogsExpanded && (
                                <ul className="flex flex-col mt-5 pl-4 text-[15px] font-semibold text-text-secondary">
                                    <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Blog - Standard</li>
                                    <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Blog - Grid</li>
                                    <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Single Post</li>
                                </ul>
                            )}
                        </li>
                        <li className="flex flex-col border-b border-gray-200 pb-2">
                            <div
                                className="flex justify-between items-center cursor-pointer hover:text-[#f04f23] transition-colors"
                                onClick={() => setIsPagesExpanded(!isPagesExpanded)}
                            >
                                Pages <span className="text-4xl font-bold leading-none">{isPagesExpanded ? '-' : '+'}</span>
                            </div>
                            {isPagesExpanded && (
                                <ul className="flex flex-col mt-5 pl-4 text-[15px] font-semibold text-text-secondary">
                                    <li className="cursor-pointer hover:text-[#f04f23] transition-colors">About Us</li>
                                    <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Contact Us</li>
                                    <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Our Team</li>
                                    <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Faqs</li>
                                    <li className="cursor-pointer hover:text-[#f04f23] transition-colors">Lookbook</li>
                                    <li className="cursor-pointer hover:text-[#f04f23] transition-colors">404 Error</li>
                                </ul>
                            )}
                        </li>
                        <li className="cursor-pointer hover:text-[#f04f23] transition-colors border-b border-gray-200 pb-2">
                            Contact
                        </li>
                    </ul>

                    <div className="flex items-center gap-x-6 text-xs font-semibold text-text-secondary mt-10 tracking-wider">

                        <div className="relative">
                            <div
                                className="flex items-center cursor-pointer hover:text-text-inverse transition-colors"
                                onClick={() => {
                                    setIsMobileCurrencyExpanded(!isMobileCurrencyExpanded);
                                    setIsMobileLanguageExpanded(false);
                                }}
                            >
                                USD $ <ChevronDown />
                            </div>
                            {isMobileCurrencyExpanded && (
                                <div className="absolute bottom-[calc(100%+10px)] left-0 w-[100px] bg-white border border-gray-200 shadow-md transition-all duration-300 z-50 max-h-[160px] overflow-y-auto">
                                    <ul className="flex flex-col text-[13px] text-gray-500 font-normal">
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer" onClick={() => setIsMobileCurrencyExpanded(false)}>USD $</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer" onClick={() => setIsMobileCurrencyExpanded(false)}>EUR €</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer" onClick={() => setIsMobileCurrencyExpanded(false)}>GBP £</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer" onClick={() => setIsMobileCurrencyExpanded(false)}>JPY ¥</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer" onClick={() => setIsMobileCurrencyExpanded(false)}>CZK Kč</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer" onClick={() => setIsMobileCurrencyExpanded(false)}>DKK kr.</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer" onClick={() => setIsMobileCurrencyExpanded(false)}>HKD HK$</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer" onClick={() => setIsMobileCurrencyExpanded(false)}>HUF Ft</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <div
                                className="flex items-center cursor-pointer hover:text-text-inverse transition-colors"
                                onClick={() => {
                                    setIsMobileLanguageExpanded(!isMobileLanguageExpanded);
                                    setIsMobileCurrencyExpanded(false);
                                }}
                            >
                                ENGLISH <ChevronDown />
                            </div>
                            {isMobileLanguageExpanded && (
                                <div className="absolute bottom-[calc(100%+10px)] left-0 w-[110px] bg-white border border-gray-200 shadow-md transition-all duration-300 z-50">
                                    <ul className="flex flex-col text-[13px] text-gray-500 font-normal">
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer" onClick={() => setIsMobileLanguageExpanded(false)}>English</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer" onClick={() => setIsMobileLanguageExpanded(false)}>Français</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer" onClick={() => setIsMobileLanguageExpanded(false)}>Deutsch</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer" onClick={() => setIsMobileLanguageExpanded(false)}>Italiano</li>
                                        <li className="px-4 py-2 hover:text-[#1e1e1e] transition-colors cursor-pointer" onClick={() => setIsMobileLanguageExpanded(false)}>日本語</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="p-8 border-t border-gray-100 mt-auto">
                    <button className="flex items-center gap-x-3 text-lg font-semibold text-text-inverse hover:text-[#00A859] transition-colors cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Account
                    </button>
                </div>
            </div>

            {isCartOpen && (
                <div
                    className="fixed inset-0 z-[60] bg-black/50 transition-opacity"
                    onClick={closeCart}
                ></div>
            )}

            <div className={`fixed top-0 right-0 h-full w-[500px] max-w-[85vw] bg-white z-[70] transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col shadow-2xl`}>
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <div className="flex items-center gap-3 text-[#1e1e1e] font-serif text-[18px] md:text-[20px]">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        {cartCount} item{cartCount !== 1 ? 's' : ''}
                    </div>
                    <button onClick={closeCart} className="text-gray-500 hover:text-red-500 transition-colors cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                <div className="flex flex-col flex-grow overflow-y-auto">
                    <div className="p-6 pb-4 flex flex-col items-center">
                        <p className="text-[16px] mb-3 text-center">
                            {cartTotal >= 1000 
                                ? "You are eligible for free shipping!" 
                                : `Spend $${(1000 - cartTotal).toFixed(2)} more and get free shipping!`}
                        </p>
                        <div className="w-[90%] h-2 border rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-[#1e1e1e] transition-all duration-300"
                                style={{ width: `${Math.min((cartTotal / 1000) * 100, 100)}%` }}
                            ></div>
                        </div>
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center p-8 text-center mt-10">
                            <p className="text-[#1e1e1e] text-[15px] mb-6">Your cart is empty</p>
                            <button
                                className="bg-[#008139] text-white font-bold py-3 px-8 rounded-full text-[14px] hover:bg-green-800 transition-colors cursor-pointer"
                                onClick={closeCart}
                            >
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col px-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex py-6 border-b border-gray-100 last:border-0">
                                    <img src={item.img} alt={item.title} className="w-[80px] h-[120px] object-cover rounded shadow-sm" />
                                    <div className="ml-5 flex flex-col flex-grow text-[20px]">
                                        <div className="flex justify-between items-start gap-4">
                                            <h4 className="font-serif text-[#1e1e1e] leading-snug">{item.title}</h4>
                                            <span className="font-bold text-[#008139]">${item.price.toFixed(2)}</span>
                                        </div>
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center border border-gray-200 rounded h-9">
                                                <button onClick={() => updateQuantity(item.id, -1)} className="px-3 h-full hover:bg-gray-50 rounded-l-full">-</button>
                                                <span className="px-2 font-medium min-w-[20px] text-center">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)} className="px-3 h-full hover:bg-gray-50 rounded-r-full">+</button>
                                            </div>
                                            <button onClick={() => removeFromCart(item.id)} className="text-[12px] text-gray-500 hover:text-red-500 hover:underline transition-all cursor-pointer">remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.03)] flex flex-col">
                        <div className="flex gap-4 mb-4 border-b border-gray-100 pb-4">
                            <button className="flex items-center gap-2 text-[18px] font-medium text-[#1e1e1e] hover:text-[#008139] transition-colors cursor-pointer">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                Add note
                            </button>
                            <button className="flex items-center gap-2 text-[18px] font-medium text-[#1e1e1e] hover:text-[#008139] transition-colors cursor-pointer">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                Shipping
                            </button>
                        </div>
                        <div className="flex mb-2">
                            <span className="text-[18px] text-[#1e1e1e]">Subtotal:</span>
                            <span className="text-[25px] font-bold text-[#1e1e1e]">${cartTotal.toFixed(2)} USD</span>
                        </div>
                        <p className="text-[18px] mb-6">Taxes and shipping calculated at checkout</p>
                        
                        <div className="w-full overflow-hidden mb-5 flex border-t border-b border-dashed py-5 border-gray-400">
                            <div className="animate-marquee flex shrink-0 whitespace-nowrap">
                                <p className="text-[18px] text-gray-600 px-4">
                                    All charges are billed in USD. While the content of your cart is currently displayed in VND, the checkout will use USD at the most current exchange rate.
                                </p>
                                <p className="text-[18px] text-gray-600 px-4">
                                    All charges are billed in USD. While the content of your cart is currently displayed in VND, the checkout will use USD at the most current exchange rate.
                                </p>
                            </div>
                        </div>

                        <button className="w-full bg-[#008139] hover:bg-[#1e1e1e] text-white font-bold py-3.5 rounded-full text-[14px] transition-colors cursor-pointer shadow-md mb-3">
                            Checkout
                        </button>
                        <button className="w-full bg-[#008139] hover:bg-[#1e1e1e] text-white font-bold py-3.5 rounded-full text-[14px] transition-colors cursor-pointer shadow-md" onClick={closeCart}>
                            Cart
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar;