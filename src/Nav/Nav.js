import { NavLink } from 'react-router-dom';
import '../Nav/Nav.css';

const Nav = () => {
  return (
    <nav className="nav-bar">
      <p>to be img icon</p>
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
