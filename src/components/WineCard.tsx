/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { Wine } from '../interfaces/wineInterface';
import WineCardStyledComponent from '../styles/WineCard';

type Props = {
    wine: Wine
}

export default function WineCard(props: Props) {
  const { wine } = props;
  return (
    <WineCardStyledComponent>
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
      >
        ADICIONAR
      </button>
    </WineCardStyledComponent>
  );
}
