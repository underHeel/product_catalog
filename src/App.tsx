import React, { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import './styles/utils/main.scss';
import { BurgerMenu } from './components/BurgerMenu';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <div>
      {isMenuOpen ? (
        <BurgerMenu toggleMenu={toggleMenu} />
      ) : (
        <>
          <Header toggleMenu={toggleMenu} />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default App;
