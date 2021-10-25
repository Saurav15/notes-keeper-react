import React from "react";
import NewNote from "./NewNote";
import Note from "./Note";

const NotesList = ({ notes, handleNewNoteText, handleNoteDelete }) => {
  return (
    <div className="notesList">
      {notes.map((note) => {
        return (
          <Note
            text={note.text}
            id={note.id}
            date={note.date}
            handleNoteDelete={handleNoteDelete}
          />
        );
      })}
      <NewNote handleNewNoteText={handleNewNoteText} />
    </div>
  );
};

export default NotesList;
