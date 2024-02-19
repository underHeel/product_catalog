import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import './styles/utils/main.scss';
import { Phone } from './types/Phone';

import * as phonesAPI from './api/phones';

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    phonesAPI.getPhones(1, 10).then(setPhones);
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
