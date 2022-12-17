import { Fragment, useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './components/layout/nav/Nav';
import Welcome from './pages/Welcome';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectView from './pages/ProjectView';

const rootEl = document.querySelector('#root');

const themes = ['light-theme', 'dark-theme', 'jedi-theme'];

const App = (props) => {
  // initial functionality to toggle through themes, while creating portfolio
  // const [themes, setThemes] = useState([
  //   'light-theme',
  //   'dark-theme',
  //   'jedi-theme',
  // ]);
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);

  useEffect(() => {
    rootEl.classList.remove(rootEl.classList.value || '*');

    rootEl.classList.add(themes[activeThemeIndex]);
  }, [activeThemeIndex]);

  const changeThemesHandler = () => {
    rootEl.classList.remove(rootEl.cl);
    console.log(rootEl.classList.value);
    setActiveThemeIndex((prevState) =>
      prevState >= themes.length - 1 ? 0 : activeThemeIndex + 1
    );
    console.log(activeThemeIndex);
  };

  return (
    <Fragment>
      <nav>
        <Nav
          onChangeTheme={changeThemesHandler}
          theme={themes[activeThemeIndex]}
        />
      </nav>
      <main>
        <Switch>
          <Route path='/welcome'>
            <Welcome
              onChangeTheme={changeThemesHandler}
              theme={themes[activeThemeIndex]}
            />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/projects' exact>
            <Projects />
          </Route>
          <Route path='projects/:id' exact>
            <ProjectView />
          </Route>
          <Route path='/'>
            <Redirect to='/welcome' />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
};

export default App;
