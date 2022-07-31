
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import {useState} from 'react'

const Header = () => {

     const [click, setClick] =useState(false);

     const handleClick = () => setClick(!click);
     const Close = () => setClick(false);
  return (
      <div className={styles.NavContainer}>
          <ul className={click ? `${styles.nav_menu} ${styles.active} `: `${styles.nav_menu}`}>
              <li className={styles.nav_item}>
                  <NavLink
                      exact
                      to="/"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                  >
                      Home
                  </NavLink>
              </li>
              <li className={styles.nav_item}>
                  <NavLink
                      exact
                      to="/about"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                  >
                      About
                  </NavLink>
              </li>
              <li className={styles.nav_item}>
                  <NavLink
                      exact
                      to="/blog"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                  >
                      Blog
                  </NavLink>
              </li>
              <li className={styles.nav_item}>
                  <NavLink
                      exact
                      to="/contact"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                  >
                      Contact Us
                  </NavLink>
              </li>
          </ul>
      </div>
  );
}

export default Header;