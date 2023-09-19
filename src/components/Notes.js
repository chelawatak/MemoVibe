import React, { useContext, useEffect, useRef, useState } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNotes, editNote } = context;
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: ""
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/signup");
    }

    // eslint-disable-next-line
  }, []);

  const refStart = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    refStart.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag
    });
  };

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />
      <button
        type="button"
        ref={refStart}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content noteitem-styling">
            <div className="modal-header" >
              <h5
                className="modal-title editnote-text-gradient"
                style={{ fontSize: "2rem" }}
                id="staticBackdropLabel"
              >
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control input"
                    id="etitle"
                    name="etitle"
                    aria-label="With textarea"
                    value={note.etitle}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    type="text"
                    style={{ height: "10rem"}}
                    className="form-control input"
                    id="edescription"
                    name="edescription"
                    aria-label="With textarea"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control input"
                    id="etag"
                    name="etag"
                    aria-label="With textarea"
                    value={note.etag}
                    onChange={onChange}
                    minLength={5}
                    maxLength={20}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer card-bkgnd">
              <button
                type="button"
                ref={refClose}
                className="close-btn"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="close-btn" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row md-3 ">
          <div className="noteadder-inside">
            <p className="gradientText my-3 mx-3" style={{ textAlign: "left" }}>
              My Notes<span style={{ color: "white" }}>.</span>
            </p>
          </div>

          <div className="container">
            {notes.length === 0 && "No Notes to display"}
          </div>

          {notes.map((note) => {
            return (
              <NoteItem key={note._id} updateNote={updateNote} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
