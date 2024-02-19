import React, { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { BurgerMenu } from './components/BurgerMenu';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './styles/utils/main.scss';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }, []);

  return (
    <div>
      {isMenuOpen ? (
        <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      ) : (
        <>
          <Header toggleMenu={toggleMenu} />
          <Outlet />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
