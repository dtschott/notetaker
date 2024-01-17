import { useState } from "react";
import NameTaker from "./components/NameTaker";
import NoteAdder from "./components/NoteAdder";
import NotesList from "./components/NotesList";
import Logo from "./components/Logo";

let name = "";

function App() {
  const [isSubmittingName, setIsSubmittingName] = useState(true);
  const [notes, setNotes] = useState([]);

  function handleNameSubmit(username) {
    setIsSubmittingName(false);
    name = username;
  }

  function handleAddNote(note) {
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  function handleDeleteNote(id) {
    setNotes((prevNotes) => {
      const curNotes = prevNotes.filter((note) => note.id !== id);
      return curNotes;
    });
  }

  return (
    <>
      {isSubmittingName && <NameTaker onSubmit={handleNameSubmit} />}
      {!isSubmittingName && (
        <>
          <Logo height="48" />
          <NoteAdder onAddNote={handleAddNote} />
          <NotesList
            name={name}
            notes={notes}
            className="mt-12 mx-auto w-11/12"
            onDeleteNote={handleDeleteNote}
          />
        </>
      )}
    </>
  );
}

export default App;
