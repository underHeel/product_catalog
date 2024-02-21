/* eslint-disable no-console */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './styles/utils/main.scss';
import { PhotosBlock } from './components/PhotosBlock';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <PhotosBlock />
      <Footer />
    </div>
  );
};

export default App;
