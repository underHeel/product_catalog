import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './styles/utils/main.scss';
import { useTheme } from './context/ThemeContext';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

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
