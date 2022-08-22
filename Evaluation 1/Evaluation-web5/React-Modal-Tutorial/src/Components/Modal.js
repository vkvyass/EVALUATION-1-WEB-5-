import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Slides</h1>
          <h2>Intro to React</h2>
        </div>
        <div className="body">
          <p>React is a Javascript UI library</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
        Prev
          </button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
