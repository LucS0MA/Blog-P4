import { Link } from "react-router-dom";
import Logo from "../assets/Logo2.png";
import "../styles/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <img src={Logo} alt="" />
      <span>
        Made to train <b>react and backend</b>
      </span>
    </div>
  );
}

export default Footer;
