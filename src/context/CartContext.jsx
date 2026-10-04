import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const addToCart = (book) => {
        setCartItems((prev) => {
            const exists = prev.find((item) => item.id === book.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...book, quantity: 1 }];
        });
        toast.success("Product added to cart!");
        openCart();
    };

    const removeFromCart = (bookId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== bookId));
    };

    const updateQuantity = (bookId, delta) => {
        setCartItems((prev) =>
            prev.map((item) => {
                if (item.id === bookId) {
                    const newQuantity = item.quantity + delta;
                    return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
                }
                return item;
            })
        );
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                isCartOpen,
                openCart,
                closeCart,
                addToCart,
                removeFromCart,
                updateQuantity,
                cartCount,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
