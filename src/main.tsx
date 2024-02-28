import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Root } from './root';
import { store } from './redux/store';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider>
      <React.StrictMode>
        <Root />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
);
