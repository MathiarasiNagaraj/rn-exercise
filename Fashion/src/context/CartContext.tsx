import React, { createContext, useState } from 'react';

interface CartContextProps {
  addToCart: (product: Product) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

interface Product {
  name: string;
  quantity: number;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.name === product.name);

    if (existingItem) {
      // If the product is already in the cart, update the quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
