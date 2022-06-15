/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  render, cleanup, screen, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as axios from 'axios';
import { act } from 'react-dom/test-utils';
import mockWines from './mockData';
import '@testing-library/jest-dom';
import Index from '../pages/index';
import AppProvider from '../context/AppProvider';

jest.mock('axios');

const mockAxios = () => {
  axios.get.mockImplementation(() => Promise.resolve({
    data: {
      items: mockWines,
    },
  }));
};

describe('Testes', () => {
  beforeAll(mockAxios);
  beforeEach(cleanup);

  it('Testa se o contador de produtos está funcionando corretamente ', async () => {
    await act(async () => {
      render(
        <AppProvider>
          <Index />
        </AppProvider>,
      );
    });
    const navBar = await screen.findByText('2 produtos encontrados');
    expect(navBar).toBeInTheDocument();
  });

  it('Testa o filtro por nome do vinho funciona corretamente', async () => {
    await act(async () => {
      render(
        <AppProvider>
          <Index />
        </AppProvider>,
      );
    });
    const searchButton = await screen.findByTestId('search-icon');
    expect(searchButton).toBeInTheDocument();
    fireEvent.click(searchButton);

    const searchInput = await screen.findByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'Bacalhôa Quinta da Garrida Colheita Selecionada 2015' } });

    const navBar = await screen.findByText('1 produtos encontrados');
    expect(navBar).toBeInTheDocument();

    const wineCard = await screen.findByTestId('wine-card-0');
    expect(wineCard).toBeInTheDocument();
  });

  it('Testa se os filtros por faixa do preço funcionam corretamente', async () => {
    await act(async () => {
      render(
        <AppProvider>
          <Index />
        </AppProvider>,
      );
    });

    const filterByPrice500 = await screen.getByTestId('filter-by-price-200-a-500');
    expect(filterByPrice500).toBeInTheDocument();

    fireEvent.click(filterByPrice500);
    const wineCard = await screen.findByTestId('wine-card-1');
    expect(wineCard).toBeInTheDocument();
  });

  it('Testa se o botão de adicionar ao carrinho funciona corretamente', async () => {
    await act(async () => {
      render(
        <AppProvider>
          <Index />
        </AppProvider>,
      );
    });

    const btnAdd = await screen.getByTestId('add-to-cart-btn-0');
    expect(btnAdd).toBeInTheDocument();

    const btnWinebox = await screen.getByTestId('Winebox-btn');

    fireEvent.click(btnAdd);
    fireEvent.click(btnWinebox);

    const cartItem = await screen.findByTestId('cart-item-0');
    expect(cartItem).toBeInTheDocument();
  });
});
