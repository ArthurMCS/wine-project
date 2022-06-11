/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
/* import type { NextPage } from 'next'; */
import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { Wine } from '../interfaces/wineInterface';
import WineCard from '../components/WineCard';
import WineSectionStyledComponent from '../styles/WineSection';

export type DataType = {
 data: {
  wines: Array<Wine>;
 }
};

const Home = ({ data }: DataType) => {
  const { wines } = data;
  return (
    <div>
      <Head>
        <title>Wine</title>
      </Head>

      <main>
        <NavBar />
        <WineSectionStyledComponent>
          {wines.map((w) => <WineCard wine={w} key={w.id} />)}
        </WineSectionStyledComponent>
      </main>

      <footer />
    </div>
  );
};

export const getServerSideProps:GetServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/wines');
  const items: Wine[] = await res.data;
  return {
    props: { data: items },
  };
};

export default Home;
