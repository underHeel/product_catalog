import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { actions as themeActions } from './redux/slices/themeSlice';

import './styles/utils/main.scss';
import { useAppDispatch, useAppSelector } from './redux/hooks';

const App: React.FC = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const toggleThemeHandler = () => {
    dispatch(themeActions.changeTheme());
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
