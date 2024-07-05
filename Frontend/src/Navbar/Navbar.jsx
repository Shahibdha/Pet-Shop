import { useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const { pathname } = useLocation();
  const excludedRoutes = ["/","/signin","/signup","/table","/add","/edit/:id","/error"]; 

  if (excludedRoutes.includes(pathname) || pathname.startsWith("/edit/")) {
    return null; 
  }

  if (excludedRoutes.includes(pathname)) {
    return null; 
  }
  return (
    <div className="nav">
      <div className="nav-logo">Whiskers</div>
      <ul className="nav-menu">
        <li><a href="/Home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/product">Explore</a></li>
      </ul>
      <button className='button'><a href="/signin">LogOut</a></button>
    </div>
  );
};

export default Navbar;
