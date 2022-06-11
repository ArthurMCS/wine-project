/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import NavBarStyledComponent from '../styles/NavBar';

export default function NavBar() {
  const [displaySearchBar, setDisplaySetBar] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <NavBarStyledComponent>
      <span>
        Wine
      </span>
      <div>
        {
        displaySearchBar && (
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Procure seu vinho"
          className="input"
        />
        )
      }
        <button
          type="button"
          onClick={() => setDisplaySetBar(!displaySearchBar)}
        >
          <IoMdSearch />
        </button>
      </div>
    </NavBarStyledComponent>
  );
}