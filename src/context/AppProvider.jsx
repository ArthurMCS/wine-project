/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [wines, setWines] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');

  const fetchWines = async () => {
    const res = await axios.get('http://localhost:3000/api/wines');
    const items = await res.data;
    setWines(items.wines);
  };

  useEffect(() => {
    fetchWines();
    const CartLs = JSON.parse(localStorage.getItem('cart'));
    if (CartLs) {
      setCart(CartLs);
    }
  }, []);

  useEffect(() => {
    if (search.length > 3) {
      const winesFiltered = wines.filter((wine) => wine.name.toLowerCase().includes(search));
      setWines(winesFiltered);
    }

    if (search.length < 3 && search.length > 0) {
      fetchWines();
    }
  }, [search]);

  return (
    <AppContext.Provider value={{
      wines, cart, setCart, search, setSearch,
    }}
    >
      {children}
    </AppContext.Provider>
  );
}
