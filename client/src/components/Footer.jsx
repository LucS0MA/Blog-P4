import { Link } from "react-router-dom";
import Logo1 from "../assets/logo51.png";
import "../styles/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <img src={Logo1} alt="" />
      <span>
        Made to train <b>react and backend</b>
      </span>
    </div>
  );
}

export default Footer;
