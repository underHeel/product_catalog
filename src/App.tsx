import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import './styles/utils/main.scss';
import { IconButton } from './components/ui/buttons/IconButton';
import { ArrowUpIcon } from './components/ui/icons/ArrowUpIcon';

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
