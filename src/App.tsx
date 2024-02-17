import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import './styles/utils/main.scss';
import { Footer } from './components/Footer';
import { Button } from './components/ui/buttons/Button';
import { ArrowLeftIconBlack } from './components/ui/icons/ ArrowLeftIconBlack';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <IconButton onClick={() => {}}>
        <ArrowUpIcon />
      </IconButton>
      <Outlet />
    </div>
  );
};

export default App;
