/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [wines, setWines] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [displayBarCart, setDisplayBarCart] = useState(false);
  const [bottles, setBottles] = useState(0);

  const fetchWines = async () => {
    const res = await axios.get('https://wine-back-test.herokuapp.com/products?page=1&limit=50');
    const items = await res.data;
    setWines(items.items);
  };

  useEffect(() => {
    fetchWines();
    const CartLs = JSON.parse(localStorage.getItem('cart'));
    if (CartLs) {
      setCart(CartLs);
    }
  }, []);

  useEffect(() => {
    if (search.length > 2) {
      const winesFiltered = wines.filter((wine) => wine.name.toLowerCase().includes(search));
      setWines(winesFiltered);
    }

    if (search.length < 2) {
      fetchWines();
    }
  }, [search]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    if (cart.length > 0) {
      const numberBottles = cart
        .map((item) => item.quantity)
        .reduce((acc, item) => acc + item);
      setBottles(numberBottles);
    } else {
      setBottles(0);
    }
  }, [cart]);

  return (
    <AppContext.Provider value={{
      wines,
      cart,
      setCart,
      search,
      setSearch,
      displayBarCart,
      setDisplayBarCart,
      bottles,
    }}
    >
      {children}
    </AppContext.Provider>
  );
}
