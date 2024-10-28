import React, { createContext, useState } from 'react';

// Create a context for the cart
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(0);

  const addItemToCart = () => {
    setItems(items + 1);
  };

  const removeItemFromCart = () => {
    setItems(items > 0 ? items - 1 : 0);
  };

  return (
    <CartContext.Provider value={{ items, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};