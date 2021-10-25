import React, { useState } from "react";

const NewNote = ({ handleNewNoteText }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSaveClick = () => {
    if (text.trim().length > 0) {
      handleNewNoteText(text);
    }

    setText("");
  };

  return (
    <div className="notes new">
      <textarea
        rows="10"
        cols="50"
        placeholder="Type to add note..."
        onChange={handleChange}
        value={text}
      ></textarea>

      <div className="noteFooter">
        <small className="date">800 Characters Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewNote;
