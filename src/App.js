import { useEffect, useContext, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ThemeContext from './store/theme-context';
import Nav from './components/nav/Nav';
import Welcome from './pages/Welcome';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectView from './pages/ProjectView';

const rootEl = document.querySelector('#root');

const App = (props) => {
  const themeCtx = useContext(ThemeContext);
  const { activeTheme } = themeCtx;

  useEffect(() => {
    rootEl.classList.remove(rootEl.classList.value || '*');
    if (activeTheme) {
      rootEl.classList.add(activeTheme);
    }
  }, [activeTheme]);

  return (
    <Fragment>
      <Nav />
      <main>
        <Switch>
          <Route path='/welcome'>
            <Welcome />
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
