import { Fragment, useState, useEffect, useReducer } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/layout/nav/Nav';
import Projects from './components/pages/Projects';

const rootEl = document.querySelector('#root');
const THEMES = ['default', 'theme--dark'];

const App = (props) => {
  const [themes, setThemes] = useState(null);
  // TODO
  // initial functionality to toggle through themes, while creating portfolio
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);

  // init themes
  useEffect(() => {
    setThemes(THEMES);
  });

  useEffect(() => {
    // add theme class
    if (themes) rootEl.classList.add(themes[activeThemeIndex]);
  }, [themes, activeThemeIndex]);

  const changeThemesHandler = () => {
    // remove old class
    rootEl.classList.remove(themes[activeThemeIndex]);

    // rotate to next theme or start at default
    if (activeThemeIndex !== themes.length - 1) {
      setActiveThemeIndex((prevState) => prevState + 1);
      rootEl.classList.add(themes[activeThemeIndex]);
    } else {
      setActiveThemeIndex(0);
    }
  };

  return (
    <Fragment>
      <nav>
        <Nav onChangeTheme={changeThemesHandler} />
      </nav>
      <main>
        <Route path='/welcome'>Welcome</Route>
        <Route path='/projects'>
          <Projects />
        </Route>
      </main>
    </Fragment>
  );
};

export default App;
