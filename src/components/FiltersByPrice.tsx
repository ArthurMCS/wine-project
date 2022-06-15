/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import { Wine } from '../interfaces/wineInterface';
import FilterByPriceStyledComponent from '../styles/FiltersByPrice';

export default function FiltersByPrice() {
  const [filter, setFilter] = useState('');
  const { wines, setWinesByPrice, setSearch } = useContext(AppContext);

  const hanleChange = async (value: string) => {
    setFilter(value);
    setSearch('');

    let winesFiltered = wines;

    if (value === 'Até R$40') {
      winesFiltered = winesFiltered
        .filter((item: Wine) => item.priceMember <= 40);
    }

    if (value === 'R$40 A R$60') {
      winesFiltered = winesFiltered
        .filter((item: Wine) => item.priceMember > 40 && item.priceMember <= 60);
    }

    if (value === 'R$100 A R$200') {
      winesFiltered = winesFiltered
        .filter((item: Wine) => item.priceMember > 100 && item.priceMember <= 200);
    }

    if (value === 'R$200 A R$500') {
      winesFiltered = winesFiltered
        .filter((item: Wine) => item.priceMember > 200 && item.priceMember <= 500);
    }

    if (value === 'Acima de R$500') {
      winesFiltered = winesFiltered
        .filter((item: Wine) => item.priceMember > 500);
    }

    if (!winesFiltered.length) {
      alert('Desculpa, não há vinhos nesta faixa de preço');
    }
    setWinesByPrice(winesFiltered);
  };

  return (
    <FilterByPriceStyledComponent>
      <h4>Refine sua busca</h4>
      <div>
        <label htmlFor="filtersByPrice40">
          <input
            type="radio"
            id="filtersByPrice40"
            onChange={(e) => hanleChange(e.target.value)}
            value="Até R$40"
            checked={filter === 'Até R$40'}
          />
          Até R$40
        </label>
        <label htmlFor="filtersByPrice60">
          <input
            type="radio"
            id="filtersByPrice60"
            onChange={(e) => hanleChange(e.target.value)}
            value="R$40 A R$60"
            checked={filter === 'R$40 A R$60'}
          />
          R$40 A R$60
        </label>
        <label htmlFor="filtersByPrice200">
          <input
            type="radio"
            id="filtersByPrice200"
            onChange={(e) => hanleChange(e.target.value)}
            value="R$100 A R$200"
            checked={filter === 'R$100 A R$200'}
          />
          R$100 A R$200
        </label>
        <label htmlFor="filtersByPrice500">
          <input
            type="radio"
            id="filtersByPrice500"
            onChange={(e) => hanleChange(e.target.value)}
            value="R$200 A R$500"
            checked={filter === 'R$200 A R$500'}
            data-testid="filter-by-price-200-a-500"
          />
          R$200 A R$500
        </label>
        <label htmlFor="filtersByPriceAbove">
          <input
            type="radio"
            id="filtersByPriceAbove"
            onChange={(e) => hanleChange(e.target.value)}
            value="Acima de R$500"
            checked={filter === 'Acima de R$500'}
          />
          Acima de R$500
        </label>
      </div>
    </FilterByPriceStyledComponent>
  );
}
