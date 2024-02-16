import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import './styles/utils/reset.scss';
import { Footer } from './components/Footer';
import { ArrowUpIcon } from './components/ui/icons/ArrowUpIcon';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Footer />
      <ArrowUpIcon />
      <Outlet />
    </div>
  );
};

export default App;
