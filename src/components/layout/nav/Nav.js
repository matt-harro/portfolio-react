import { NavLink, Link } from 'react-router-dom';
import Button from '../../ui/Button';

import classes from './Nav.module.css';

const Nav = (props) => {
  const themeBtnText = props.theme.split('-').join(' ').toUpperCase();
  return (
    <nav className={classes.nav}>
      <div className={classes['nav--content']}>
        <ul>
          <li>
            <Link className={classes.logo} to='/'>
              Logo
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
            <Button onClickHandler={props.onChangeTheme}>{themeBtnText}</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
