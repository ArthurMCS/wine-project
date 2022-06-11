/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [wines, setWines] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchWines = async () => {
    const res = await axios.get('http://localhost:3000/api/wines');
    const items = await res.data;
    return items;
  };

  useEffect(() => {
    fetchWines().then((result) => setWines(result.wines));
    const CartLs = JSON.parse(localStorage.getItem('cart'));
    if (CartLs) {
      setCart(CartLs);
    }
  }, []);

  return (
    <AppContext.Provider value={{ wines, cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
}
