/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Wine } from '../interfaces/wineInterface';
import WineCardStyledComponent from '../styles/WineCard';

type Props = {
    wine: Wine
}

export default function WineCard(props: Props) {
  const { wine } = props;
  const { cart, setCart } = useContext(AppContext);

  const handleClick = () => {
    const exist = cart.find((item: Wine) => item.id === Number(wine.id));

    if (exist) {
      exist.quantity += 1;
    } else {
      cart.push({
        ...wine,
        quantity: 1,
      });
    }

    setCart([...cart]);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <WineCardStyledComponent data-testid={`wine-card-${wine.id}`}>
      <div>
        <img src={wine.image} alt="imagem do vinho" />
        <p className="WineName">{wine.name}</p>
        <div className="priceAndDiscount">
          <p>{`R$ ${wine.price}`}</p>
          <span>{`${wine.discount}% OFF`}</span>
        </div>
        <p className="socio">
          Sócio wine
          <span>{` R$ ${wine.priceMember}`}</span>
        </p>
        <p className="nonSocio">
          Não sócio
          <span>{` R$ ${wine.priceNonMember}`}</span>
        </p>
      </div>
      <button
        type="button"
        onClick={handleClick}
        data-testid={`add-to-cart-btn-${wine.id}`}
      >
        ADICIONAR
      </button>
    </WineCardStyledComponent>
  );
}
