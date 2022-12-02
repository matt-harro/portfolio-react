import { NavLink, Link } from 'react-router-dom';
import Button from '../../ui/Button';

import classes from './Nav.module.css';

const Nav = (props) => {
  console.log(NavLink);
  return (
    <nav className={classes.nav}>
      <div className={classes['nav--content']}>
        <Link to='/'>Logo</Link>
        <ul>
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
        </ul>
        <Button onClickHandler={props.onChangeTheme} />
      </div>
    </nav>
  );
};

export default Nav;
