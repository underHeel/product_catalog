import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import App from './App';
import { Accessories } from './pages/Accessories';
import { Home } from './pages/Home';
import { Phones } from './pages/Phones';
import { Tablets } from './pages/Tablets';

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
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
