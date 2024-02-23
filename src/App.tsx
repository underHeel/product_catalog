/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './styles/utils/main.scss';

const App: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleThemeHandler = () => {
    setDarkTheme((prevState) => !prevState);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkTheme ? 'dark' : 'light',
    );
  }, [darkTheme]);

  return (
    <div>
      <Header />
      <button type="button" onClick={toggleThemeHandler}>
        toggle
      </button>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
