import React, {createContext, useContext, ReactNode, useState} from 'react';
import {lightTheme, darkTheme, Theme} from './theme';

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const useTheme = (): {theme: Theme; toggleTheme: () => void} =>
  useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
