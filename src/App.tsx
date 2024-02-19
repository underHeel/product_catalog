/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import * as api from './api/phones';
import { Phone } from './types/Phone';

import './styles/utils/main.scss';

const App: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phone, setPhone] = useState<Phone>({} as Phone);

  function loadPhones() {
    api
      .getPhones()
      .then((data) => {
        setPhones(data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        console.log('Finished');
        console.log(phones);
        setPhone(phones[54]);
      });
  }

  useEffect(loadPhones, []);

  console.log(phone?.name);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
