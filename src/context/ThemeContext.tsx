import React, { createContext, useContext, useState, useEffect } from 'react';
import { getItemFromStorage, setItemToStorage } from '../services/storage';
import { Theme } from '../types/Theme';

const initialTheme = getItemFromStorage('theme', 'light');

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: initialTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
    setItemToStorage('theme', newTheme);
  };

  useEffect(() => {
    setTheme(initialTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
