import React from 'react';

const ThemeContext = React.createContext({
  themes: [],
  activeThemeIndex: 0,
  activeTheme: '',
  rotateActiveTheme: () => {},
});

export default ThemeContext;
