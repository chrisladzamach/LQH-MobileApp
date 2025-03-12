import { createContext, useState, useEffect, useContext } from "react";
import { Appearance } from "react-native";

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  useSystemTheme: true,
  toggleUseSystemTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");
  const [useSystemTheme, setUseSystemTheme] = useState(true);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (useSystemTheme) {
        setIsDark(colorScheme === "dark");
      }
    });

    return () => subscription.remove();
  }, [useSystemTheme]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    if (useSystemTheme) {
      setUseSystemTheme(false);
    }
  };

  const toggleUseSystemTheme = () => {
    setUseSystemTheme((prev) => !prev);
    if (!useSystemTheme) {
      // When switching back to system theme, immediately adopt system preference
      setIsDark(Appearance.getColorScheme() === "dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
        useSystemTheme,
        toggleUseSystemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
