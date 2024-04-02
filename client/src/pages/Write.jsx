import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/write.scss";

function Write() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label htmlFor="file" className="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" />
            <label htmlFor="art">science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="cinema" />
            <label htmlFor="art">cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="design" />
            <label htmlFor="art">design</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="food" />
            <label htmlFor="art">food</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
