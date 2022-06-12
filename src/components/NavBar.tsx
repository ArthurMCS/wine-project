/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import NavBarStyledComponent from '../styles/NavBar';

export default function NavBar() {
  const [displaySearchBar, setDisplaySetBar] = useState(false);
  const { search, setSearch, cart } = useContext(AppContext);

  const handleClick = (e: any) => {
    e.classList.toggle('active');
    setDisplaySetBar(!displaySearchBar);
  };

  return (
    <NavBarStyledComponent>
      <img alt="Wine" className="Logo-image" src="https://img.wine.com.br/logo/wine/black/wine.svg" />

      <div className="Searcher-Wrap">
        {
        displaySearchBar && (
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          value={search}
          placeholder="Procure seu vinho"
          className="input"
        />
        )
      }
      </div>

      <div className="Icons-wrap">
        <button
          className="MainMenu-search-icon"
          type="button"
          onClick={(e) => handleClick(e.target)}
        />

        <div className="UserMenu-toggler">
          <div className="UserMenu-togglerPhoto">
            <img src="https://img.wine.com.br/fenix/image/_big_bang/icons/header-sprite.svg" alt="Minha Conta" />
          </div>
        </div>

        <div className="WineboxButton">
          <div className="WineboxButton-image-wrap">
            <img
              alt="Winebox"
              src="https://img.wine.com.br/fenix/image/_big_bang/icons/header-sprite.svg"
              className="WineboxButton-image"
            />
            <span className="WineboxButton-quantity">{cart.length}</span>
          </div>
        </div>
      </div>

    </NavBarStyledComponent>
  );
}
