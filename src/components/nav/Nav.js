import { NavLink, Link } from 'react-router-dom';
import ThemeButton from '../ui/ThemeButton';

import classes from './Nav.module.css';

const Nav = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes['nav--content']}>
        <ul>
          <li>
            <Link className={classes.logo} to='/'>
              MATT
            </Link>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              className={classes.navlink}
              to='/welcome'
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              className={classes.navlink}
              to='/contact'
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              className={classes.navlink}
              to='/projects'
            >
              Projects
            </NavLink>
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
