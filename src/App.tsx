import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { PhonesPage } from './components/Pagination/PhonesPage';
import { Footer } from './components/Footer';

import './styles/utils/main.scss';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <PhonesPage />
      <Footer />
    </div>
  );
};

export default App;
