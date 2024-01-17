import React, { useState, useEffect } from "react";

let DEFAULT_INPUTS = { title: "", subject: "", body: "" };

export default function NoteAdder({ onAddNote }) {
  const [inputs, setInputs] = useState(DEFAULT_INPUTS);
  const [validationErrors, setValidationErrors] = useState({
    title: false,
    subject: false,
    body: false,
  });
  const [submitAttempted, setSubmitAttempted] = useState(false);

  function handleInputChange(event, inputName) {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [inputName]: event.target.value,
    }));

    // Reset validation errors when the user starts typing again
    if (submitAttempted) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [inputName]: false,
      }));
    }
  }

  function handleNoteSubmit() {
    // Validate inputs
    const newErrors = {
      title: !inputs.title,
      subject: !inputs.subject,
      body: !inputs.body,
    };

    // Check for validation errors
    const hasValidationErrors = Object.values(newErrors).some((value) => value);

    // Set submitAttempted to true
    setSubmitAttempted(true);

    if (!hasValidationErrors) {
      // If no validation errors, proceed with adding the note
      const newInputs = { ...inputs, id: Date.now() };
      onAddNote(newInputs);
      setInputs(DEFAULT_INPUTS); // Reset inputs
      setSubmitAttempted(false); // Reset submitAttempted after successful submission
    } else {
      // If there are validation errors, update the state to trigger re-render and apply error styles
      setValidationErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
    }
  }

  return (
    <div className="flex flex-col justify-center align-middle mt-8 h-96 gap-4">
      <h1 className="text-4xl text-center mb-4">Add a New Note</h1>
      <div className="flex justify-center align-middle w-1/2 mx-auto gap-6">
        <input
          className={`text-3xl bg-amber-500 p-2 px-4 border-2 rounded-lg text-stone-900 hover:bg-amber-600 focus:bg-amber-500 w-3/4 transition-all duration-300 ${
            validationErrors.title ? "border-red-500" : "border-transparent"
          }`}
          type="text"
          placeholder="Title"
          value={inputs && inputs.title}
          onChange={(event) => handleInputChange(event, "title")}
        ></input>
        <input
          type="text"
          className={`text-3xl bg-amber-500 p-2 px-4 border-2  rounded-lg text-stone-900 w-1/4 hover:bg-amber-600 focus:border-black focus:bg-amber-500 transition-all duration-300 ${
            validationErrors.subject ? "border-red-500" : "border-transparent"
          }`}
          placeholder="Subject"
          value={inputs && inputs.subject}
          onChange={(event) => handleInputChange(event, "subject")}
        ></input>
      </div>
      <textarea
        className={`text-2xl bg-amber-500 p-3 py-2 border-2 rounded-lg text-stone-900 hover:bg-amber-600 focus:bg-amber-500 w-1/2 mx-auto h-4/6 resize-none transition-all duration-300 ${
          validationErrors.body ? "border-red-500" : "border-transparent"
        }`}
        placeholder="Enter a note..."
        value={inputs && inputs.body}
        onChange={(event) => handleInputChange(event, "body")}
      ></textarea>
      <button
        className="text-3xl bg-amber-500 p-2 pb-3 border-2 w-64 border-transparent rounded-lg text-stone-900 hover:bg-amber-600 focus:border-black transition-all duration-300 mx-auto"
        onClick={handleNoteSubmit}
      >
        <i className="fa-solid fa-file text-2xl font-light"></i>
        <span className="ml-4">Add Note</span>
      </button>
    </div>
  );
}
