import React from "react";
import Note from "./Note";

export default function NotesList({ name, notes, onDeleteNote, ...props }) {
  function handleDeleteNote(id) {
    onDeleteNote(id);
  }

  return (
    <div {...props}>
      <h1 className="text-6xl text-center mb-10">{name}'s Notes</h1>
      <ul className="flex flex-wrap justify-left">
        {notes.map((note, index) => (
          <li className="w-1/3 p-8" key={index}>
            <Note
              title={note.title}
              subject={note.subject}
              body={note.body}
              id={note.id}
              className="bg-amber-500 rounded h-72 p-2"
              onDelete={handleDeleteNote}
            />
          </li>
        ))}
      </ul>
      {notes.length === 0 && (
        <h3 className="text-4xl text-center mt-28 mb-10 italic text-stone-700">
          No notes yet...
        </h3>
      )}
    </div>
  );
}
