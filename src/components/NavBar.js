import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='navbar'>
      <h1>Favourite Albums</h1>
      <div className='navbar-links'>
        <Link to='/'>Home</Link>
        <Link to='/create'>Add Album</Link>
      </div>
    </nav>
  );
};

export default NavBar;
