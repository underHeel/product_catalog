import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './styles/utils/main.scss';

const App: React.FC = () => {
  return (
    <div>
      <GetPagination />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
