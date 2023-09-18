import { createContext, useContext, useEffect, useState } from 'react';

const KEY = 'theme';

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    () => JSON.parse(window.localStorage.getItem(KEY)) ?? false
  );

  useEffect(() => {
    if (isDark) {
      document.body.setAttribute('dark', '');
    } else {
      document.body.removeAttribute('dark');
    }
    window.localStorage.setItem(KEY, JSON.stringify(isDark));
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
