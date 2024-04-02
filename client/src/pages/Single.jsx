import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import Flopa from "../assets/flopa1.jpg";
import "../styles/single&menu.scss";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img src={Flopa} alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link className="link" to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
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
      <Menu />
    </div>
  );
}

export default Single;
