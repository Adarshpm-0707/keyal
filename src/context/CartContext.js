import React, { createContext, useContext, useState, useEffect } from 'react';
import products from '../data/productsData';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize from localStorage if available
    const savedCart = localStorage.getItem('keyal_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sync with localStorage and ensure prices are up-to-date with productsData
  useEffect(() => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        const latestProduct = products.find(p => p.id === item.id);
        if (latestProduct && latestProduct.price !== item.price) {
          return { ...item, price: latestProduct.price };
        }
        return item;
      });
      
      // Only update state if something actually changed to avoid infinite loops
      const hasChanges = JSON.stringify(updatedItems) !== JSON.stringify(prevItems);
      if (hasChanges) {
        return updatedItems;
      }
      return prevItems;
    });
    
    localStorage.setItem('keyal_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const clearCart = () => setCartItems([]);

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      getCartTotal,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
