import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import "../styles/single&menu.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

function Single() {
  const { currentUser } = useContext(AuthContext);
  const [post, setPost] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postId]);

  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:8800/api/posts/${postId}`)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          <img src={post.userImg} alt="" />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
            <div className="edit">
              <Link className="link" to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p>{getText(post.desc)}</p>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
}

export default Single;
