import { Link } from "react-router-dom";
import "../styles/login.scss";

function Register() {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="text" placeholder="email" />
        <input required type="text" placeholder="password" />
        <button>Register</button>
        <p>This is an error!</p>
        <span>
          Do you have an account ? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
