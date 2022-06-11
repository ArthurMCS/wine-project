import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [wines, setWines] = useState([]);

  const fetchWines = async () => {
    const res = await axios.get('http://localhost:3000/api/wines');
    const items = await res.data;
    return items;
  };

  useEffect(() => {
    fetchWines().then((result) => setWines(result.wines));
  }, []);

  return (
    <AppContext.Provider value={wines}>
      {children}
    </AppContext.Provider>
  );
}
