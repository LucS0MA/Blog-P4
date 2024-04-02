import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/write.scss";

function Write() {
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
      </div>
      <div className="menu">
        <div className="item">item1</div>
        <div className="item">item2</div>
      </div>
    </div>
  );
}

export default Write;
