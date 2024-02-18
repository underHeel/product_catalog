import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import './styles/utils/main.scss';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  );
};

export default App;
