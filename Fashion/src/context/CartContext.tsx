import { createContext, useState } from 'react';

const CartContext = createContext([]);

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (product) => {
      // Check if the product is already in the cart
      const existingItem = cartItems.find(item => item.name === product.name);
  
      if (existingItem) {
        // If the product is already in the cart, update the quantity
        setCartItems(prevItems => {
          return prevItems.map(item =>
            item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
          );
        });
      } else {
        // If the product is not in the cart, add it with quantity 1
        setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
      }
    };
  
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{addToCart,cartCount}}>
            {children}
        </CartContext.Provider>
    )
  
}
export { CartProvider, CartContext };