/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import AppContext from '../context/AppContext';
import SidebarCartStyledComponent from '../styles/SideBarCart';
import { Wine } from '../interfaces/wineInterface';
import SideCard from './SideCard';

export default function SidebarCart() {
  const { setDisplayBarCart, cart, bottles } = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const subTotal = cart
      .reduce((total:number, item:Wine) => total + (item.priceMember * item.quantity), 0);
    setTotalPrice(subTotal);
  }, [cart]);

  return (
    <SidebarCartStyledComponent>
      <header className="Sidebar-cart-header">
        <BsArrowLeft onClick={() => setDisplayBarCart(false)} />
        <span>{`WineBox (${bottles})`}</span>
      </header>
      <section>
        {cart.map((cartItem: Wine) => (
          <SideCard cartItem={cartItem} key={cartItem.id} />
        ))}
      </section>
      <footer>
        <div className="Subtotal-wrap">
          <div className="Subtotal-text">Total</div>
          <div className="Subtotal-price">{`R$ ${totalPrice.toFixed(2)}`}</div>
        </div>
        <button
          type="button"
          className="Button-shop"
        >
          Finalizar pedido
        </button>
      </footer>
    </SidebarCartStyledComponent>
  );
}
