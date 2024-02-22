/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import * as api from './api/phones';

import './styles/utils/main.scss';
import { PhotosBlock } from './components/PhotosBlock';
import { Phone } from './types/Phone';

const App: React.FC = () => {
  const [phone, setPhone] = useState<Phone>({} as Phone);

  useEffect(() => {
    api
      .getPhone('apple-iphone-xs-max-256gb-spacegray')
      .then((res) => setPhone(res));
  }, []);

  console.log(phone);

  return (
    <div>
      <Header />
      <Outlet />
      {phone?.images?.length > 0 && <PhotosBlock phone={phone} />}
      <Footer />
    </div>
  );
};

export default App;
