import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProductCard } from './components/ProductCard';
import { NavBar } from './components/NavBar/NavBar';
import './styles/utils/main.scss';
import { IconButton } from './components/ui/buttons/IconButton';
import { ArrowUpIcon } from './components/ui/icons/ArrowUpIcon';
import { Phone } from './types/Phone';

const Props: Phone = {
  id: '12',
  category: 'Phones',
  phoneId: '213',
  itemId: '4',
  name: 'Iphone 13 Pro Max Titanium Black',
  fullPrice: 879,
  price: 699,
  screen: '699 cm',
  capacity: '5000 mAh',
  color: 'Black',
  ram: '32 gb',
  year: 2021,
  image:
    'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-13-midnight-select-2021.534x728_m_5.jpg',
};

const App: React.FC = () => {
  return (
    <div>
      <ProductCard phone={Props} />
      <NavBar />
      <IconButton onClick={() => {}}>
        <ArrowUpIcon />
      </IconButton>
      <Outlet />
    </div>
  );
};

export default App;
