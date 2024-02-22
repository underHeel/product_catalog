import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import App from './App';
import { Accessories } from './pages/Accessories';
import { Home } from './pages/Home/Home';
import { Phones } from './pages/Phones/Phones';
import { Tablets } from './pages/Tablets/Tablets';
import { NotFoundPage } from './pages/NotFoundPage';
import { Cart } from './pages/Cart';
import { Favourites } from './pages/Favourites';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to=".." />} />
          <Route path="/phones">
            <Route index element={<Phones />} />
          </Route>
          <Route path="/tablets">
            <Route index element={<Tablets />} />
          </Route>
          <Route path="/accessories">
            <Route index element={<Accessories />} />
          </Route>
          <Route path="/cart">
            <Route index element={<Cart />} />
          </Route>
          <Route path="/favourites">
            <Route index element={<Favourites />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>
);
