import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeContext } from './context/ThemeContext';

import './styles/utils/main.scss';

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleThemeHandler = () => {
    toggleTheme();
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <Header onThemeChange={toggleThemeHandler} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
