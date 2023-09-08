import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/work">
          <div>Work</div>
        </Link>
        <a href="https://github.com/hxnnahlee">
          <div>Code</div>
        </a>
        <a href="./resume-new.pdf">
          <div>Resume</div>
        </a>
      </div>
    </>
  );
};

export default NavBar;
