import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const WishlistContext = createContext();

export const useWishlist = () => {
    return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = (book) => {
        const exists = wishlist.find((item) => item.id === book.id);
        
        if (exists) {
            toast.success("Product removed from wishlist!");
            setWishlist((prev) => prev.filter((item) => item.id !== book.id));
        } else {
            toast.success("Product added to wishlist!");
            setWishlist((prev) => [...prev, book]);
        }
    };

    const isInWishlist = (bookId) => {
        return wishlist.some((item) => item.id === bookId);
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
