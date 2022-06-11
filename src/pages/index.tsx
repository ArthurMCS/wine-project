/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
/* import type { NextPage } from 'next'; */
import React, { useContext } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import { Wine } from '../interfaces/wineInterface';
import WineCard from '../components/WineCard';
import WineSectionStyledComponent from '../styles/WineSection';
import AppContext from '../context/AppContext';

const Home = () => {
  const wines = useContext(AppContext);
  return (
    <div>
      <Head>
        <title>Wine</title>
      </Head>

      <main>
        <NavBar />
        <WineSectionStyledComponent>
          {wines.map((w: Wine) => <WineCard wine={w} key={w.id} />)}
        </WineSectionStyledComponent>
      </main>

      <footer />
    </div>
  );
};

export default Home;
