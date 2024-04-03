import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.scss";
import { AuthContext } from "../context/authContext";

// Configuration globale d'Axios pour envoyer les cookies avec chaque requête
axios.defaults.withCredentials = true;

function Login() {
  const { currentUser, login } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(userInfo)
      .then((response) => {
        navigate("/");
        console.log(response);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>
          Don't you have an account ? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
