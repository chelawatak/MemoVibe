import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { note, updateNote } = props;
  const { deleteNote } = context;
  return (
    <div className=" col-md-3 mx-3 my-2 cards-style">
      <button className="close-btn">{note.tag}</button>
      <div className="card-body my-2 ">
        <label htmlFor="description" className="form-label">
          {note.title}
        </label>
        <p className="card-text">{note.description}</p>

        <div className="container">
          <i
            className="fa-solid fa-trash mx-3"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-3"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() => {
              updateNote(note);
            }}
          >
            {" "}
          </i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
