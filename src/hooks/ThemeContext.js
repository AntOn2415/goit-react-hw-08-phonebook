import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { LIGHT, DARK } from 'constants';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme === 'dark' ? DARK : LIGHT);

  const onChangeTheme = () => {
    const newTheme = theme === LIGHT ? DARK : LIGHT;
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme === DARK ? 'dark' : 'light');
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onChangeTheme,
      }}
    >
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
