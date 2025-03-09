import { createContext, useContext } from "react";

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
