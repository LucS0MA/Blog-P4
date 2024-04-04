import { Link } from "react-router-dom";
import Logo from "../assets/Logo2.png";
import "../styles/navbar.scss";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

function NavBar() {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbars">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          {currentUser && (
            <span className="write">
              <Link to="/write" className="link">
                Write
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
