/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import * as api from './api/phones';

import './styles/utils/main.scss';
import { PhotosBlock } from './components/PhotosBlock';
import { Product } from './types/Product';

const App: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);

  useEffect(() => {
    api.getPhones().then((res) => setPhones(res));
  }, []);

  console.log(phones[0]);

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
