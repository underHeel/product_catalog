import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import './styles/utils/main.scss';
// import { IconButton } from './components/ui/buttons/IconButton';
// import { ArrowUpIcon } from './components/ui/icons/ArrowUpIcon';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      {/* <IconButton onClick={() => {}}>
        <ArrowUpIcon />
      </IconButton> */}
      <Outlet />
    </div>
  );
};

export default App;
