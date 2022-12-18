import React, { useReducer } from 'react';

import ThemeContext from './theme-context';

const initialThemeState = {
  themes: ['light-theme', 'dark-theme', 'jedi-theme'],
  activeThemeIndex: 0,
  activeTheme: 'light-theme',
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'ROTATE':
      const currentIndex = state.activeThemeIndex;
      const newIndex =
        currentIndex === state.themes.length - 1
          ? 0
          : state.activeThemeIndex + 1;
      const newTheme = state.themes[newIndex];
      console.log(newTheme);

      return { ...state, activeThemeIndex: newIndex, activeTheme: newTheme };
    default:
      return state;
  }
};

const ThemeProvider = (props) => {
  const [themeState, dispatchThemeAction] = useReducer(
    themeReducer,
    initialThemeState
  );

  const rotateActiveThemeHandler = () => {
    dispatchThemeAction({ type: 'ROTATE' });
  };

  const themeContext = {
    themes: themeState.themes,
    activeThemeIndex: themeState.activeThemeIndex,
    activeTheme: themeState.activeTheme,
    rotateActiveTheme: rotateActiveThemeHandler,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
