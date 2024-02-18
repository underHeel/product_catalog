import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import './styles/utils/main.scss';
import { Phone } from './types/Phone';

import * as phonesAPI from './api/phones';

const App: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    phonesAPI.getPhones(1, 10).then(setPhones);
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      {phones.map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
};

export default App;
