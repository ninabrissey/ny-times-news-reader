import { NavLink, Link } from 'react-router-dom';
import logo from '../images/ny-times-reader-logo.png';
import '../Nav/Nav.css';

const Nav = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={logo} alt="NY Times Reader logo" />
      </Link>
      <ul className="nav-links">
        <NavLink to="/home">
          <li>Home</li>
        </NavLink>
        <NavLink to="/arts">
          <li>Arts</li>
        </NavLink>
        <NavLink to="/science">
          <li>Science</li>
        </NavLink>
        <NavLink to="/us">
          <li>US</li>
        </NavLink>
        <NavLink to="/world">
          <li>World</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
