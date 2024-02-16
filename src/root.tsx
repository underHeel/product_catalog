import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import App from './App';
import { Accessories } from './pages/Accessories';
import { Home } from './pages/Home/Home';
import { Phones } from './pages/Phones/Phones';
import { Tablets } from './pages/Tablets/Tablets';

export const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="phones">
            <Route path="phones" element={<Phones />} />
          </Route>
          <Route path="Tablets">
            <Route path="tablets" element={<Tablets />} />
          </Route>
          <Route path="Accessories">
            <Route path="accessories" element={<Accessories />} />
          </Route>
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);