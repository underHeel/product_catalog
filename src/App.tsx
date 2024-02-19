import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles/utils/main.scss';
import { GetPagination } from './api/getPhones';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

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
