import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import App from './App';
import { Accessories } from './pages/Accessories';
import { Home } from './pages/Home/Home';
import { Phones } from './pages/Phones/Phones';
import { Tablets } from './pages/Tablets/Tablets';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductPage } from './pages/ProductPage';
import { Cart } from './pages/Cart';
import { Favourites } from './pages/Favourites';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to=".." />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>
);
