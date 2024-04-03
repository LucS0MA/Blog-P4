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

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          <img src={post.userImg} alt="" />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link className="link" to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cum
          perferendis officiis facilis id labore excepturi vero dolore inventore
          facere. Fugit similique exercitationem architecto laboriosam vel quia
          expedita reiciendis delectus!
          <br />
          <br />
          Delectus quas esse doloribus facilis quia dolorum perspiciatis atque
          quibusdam molestiae, iure architecto, iusto cum eos commodi. Qui non
          inventore illo officia quod impedit hic eligendi quam, blanditiis
          maxime veritatis? Non cum mollitia minus iste temporibus repudiandae
          maiores quas autem totam vero quam, labore inventore nihil, officiis
          commodi!
          <br />
          <br />
          Nobis quis eos beatae sit! Similique voluptatum minima inventore
          officia fuga labore. Laboriosam officiis architecto vero. Iure aut
          saepe consectetur laudantium eveniet, consequatur similique libero a!
          Velit magni nesciunt nemo fugit iste earum dicta, eveniet illum,
          deleniti quam magnam explicabo laborum ipsum. Laborum distinctio ipsum
          repellat ex voluptas eos optio obcaecati, qui velit sit saepe
          cupiditate nisi. Iusto nulla rem ab excepturi eius quae adipisci at
          saepe ducimus, autem ut ex.
        </p>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
}

export default Single;
