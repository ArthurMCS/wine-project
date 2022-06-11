/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import AppProvider from '../context/AppProvider';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <AppProvider>
    <Component {...pageProps} />
    <GlobalStyle />
  </AppProvider>
);

export default MyApp;
