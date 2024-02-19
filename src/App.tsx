import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles/utils/main.scss';
import { Header } from './components/Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
