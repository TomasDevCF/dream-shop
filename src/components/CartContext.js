import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function Cart(props) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};