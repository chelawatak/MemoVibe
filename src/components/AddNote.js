import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="noteadder">
      <div className=" container noteadder-inside">
        <p className="gradientText my-3" style={{ textAlign: "center" }}>
          Add Note<span style={{ color: "white" }}>.</span>
        </p>
        <form className="  my-4">
          <div
            className="mb-3 "
            style={{
              borderBottom: "1px solid #1eff00",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px"
            }}
          >
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              placeholder="Please enter note title"
              style={{ backgroundColor: "rgba(1,42,31)", color: "white" }}
              className="form-control input"
              id="title"
              name="title"
              aria-label="With textarea"
              value={note.title}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div
            className="mb-3"
            style={{
              borderBottom: "1px solid #1eff00",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px"
            }}
          >
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              placeholder="Please enter note description"
              style={{
                backgroundColor: "rgba(1,42,31)",
                height: "120px",
                color: "white"
              }}
              className="form-control input"
              id="description"
              name="description"
              aria-label="With textarea"
              value={note.description}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div
            className="mb-3"
            style={{
              borderBottom: "1px solid #1eff00",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px"
            }}
          >
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              placeholder="Please enter note tag"
              style={{ backgroundColor: "rgba(1,42,31)", color: "white" }}
              className="form-control input"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
              minLength={5}
              maxLength={20}
              required
            />
          </div>

          <div>
            <button
              disabled={note.title.length < 5 || note.description.length < 5}
              type="submit"
              className="btn my-3 logout-btn"
              onClick={handleClick}
              
              style={{ width: "50%" }}
            >
              Add Note
            </button>
          </div>

          <div className="mb-3">
            <label htmlFor="tag" className="form-label"></label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
