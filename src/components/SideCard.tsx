/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Wine } from '../interfaces/wineInterface';
import SideCardStyledComponent from '../styles/SideCard';
import AppContext from '../context/AppContext';

type Props = {
  cartItem: Wine
}

export default function SideCard(props: Props) {
  const { cartItem } = props;

  const {
    quantity,
    image,
    name,
    id,
    priceMember,
  } = cartItem;

  const { cart, setCart } = useContext(AppContext);

  const hanldeClicks = () => {
    const updateCart = cart.filter((item: Wine) => item.id !== id);
    setCart(updateCart);
    localStorage.setItem('cart', JSON.stringify(updateCart));
  };

  return (
    <SideCardStyledComponent>
      <AiFillCloseCircle
        role="button"
        onClick={() => hanldeClicks()}
      />
      <img src={image} alt="vinho" />
      <div>
        <p>{name}</p>
        <span>{quantity}</span>
      </div>
      <span>{`R$ ${(priceMember * quantity).toFixed(2)}`}</span>
    </SideCardStyledComponent>
  );
}
