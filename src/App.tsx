/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import * as api from './api/phones';
import { Phone } from './types/Phone';

import './styles/utils/main.scss';
import { CartItem } from './components/CartItem';

const App: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const phone = phones[70];

  useEffect(() => {
    api.getPhones().then(setPhones);
  }, []);

  console.log(phone);

  return (
    <div>
      <Header />
      {!!phones.length && <CartItem phone={phone} />}
      <Footer />
    </div>
  );
};

export default App;
