import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ text, id, date, handleNoteDelete }) => {
  const handleDelete = () => {
    handleNoteDelete(id);
  };

  return (
    <div className="notes">
      <p>{text}</p>
      <div className="noteFooter">
        <small className="date">{date}</small>
        <MdDeleteForever
          className="icon"
          fontSize="1.2rem"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Note;
