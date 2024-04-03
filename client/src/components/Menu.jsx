import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Menu({ cat }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/posts/?cat=${cat}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="" />
          <h2>{post.title}</h2>
          <Link
            className="link"
            to={{ pathname: `/post/${post.id}`, search: `?cat=${cat}` }}
          >
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Menu;
