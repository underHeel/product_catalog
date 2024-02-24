/* eslint-disable no-console */
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import * as api from './api/phones';

import './styles/utils/main.scss';
import { PhotosBlock } from './components/PhotosBlock';
import { Phone } from './types/Phone';

const App: React.FC = () => {
  const [phone, setPhone] = useState<Phone>({} as Phone);

  useEffect(() => {
    api
      .getPhone('apple-iphone-xs-max-256gb-spacegray')
      .then((res) => setPhone(res));
  }, []);

  console.log(phone);
=======
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
>>>>>>> 973cc27ed3b37342c35c23a1c772a2c6caff5bfa

  return (
    <div>
      <Header onThemeChange={toggleThemeHandler} />
      <Outlet />
      {phone?.images?.length > 0 && <PhotosBlock phone={phone} />}
      <Footer />
    </div>
  );
};

export default App;
