import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import './styles/utils/main.scss';
import { GetPagination } from './api/getPhones';

const App: React.FC = () => {
  return (
    <div>
      <GetPagination />
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
