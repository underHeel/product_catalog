import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import './styles/utils/main.scss';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Footer />
      <Outlet />
    </div>
  );
};

export default App;
