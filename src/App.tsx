import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

import './styles/utils/main.scss';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
