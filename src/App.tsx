import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import './styles/utils/main.scss';
import { IconButton } from './components/ui/buttons/IconButton';
import { ArrowUpIcon } from './components/ui/icons/ArrowUpIcon';
import { Button } from './components/ui/buttons/Button';
import { ArrowLeftIconBlack } from './components/ui/icons/ ArrowLeftIconBlack';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <IconButton onClick={() => {}}>
        <ArrowUpIcon />
      </IconButton>
      <Button onClick={() => {}} variant="text">
        <ArrowLeftIconBlack />
        Button
      </Button>
      <Outlet />
    </div>
  );
};

export default App;
