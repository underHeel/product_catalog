import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

import './styles/utils/main.scss';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
