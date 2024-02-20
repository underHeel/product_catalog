import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

import './styles/utils/main.scss';

const App: React.FC = () => {
<<<<<<<<< Temporary merge branch 1
=========
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    phonesAPI.getPhones(1, 10).then(setPhones);
  }, []);

>>>>>>>>> Temporary merge branch 2
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
