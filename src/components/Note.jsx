import React from "react";

export default function Note({ title, subject, body, id, onDelete, ...props }) {
  function handleDeleteNote() {
    onDelete(id);
  }

  return (
    <div {...props}>
      <div className="flex justify-between pt-4 px-5">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="text-2xl italic">{subject}</h2>
      </div>
      <hr className="w-11/12 mx-auto border-black m-4" />
      <div className="flex flex-col justify-between h-2/3 p-5 pt-0">
        <div className="text-lg">{body}</div>
        <button
          className="bg-orange-200 rounded w-1/5 p-1 mx-auto hover:bg-red-700 hover:text-white"
          onClick={handleDeleteNote}
        >
          <i className="fa-solid fa-trash"></i>
          <span className="ml-2 text-lg font-bold">Delete</span>
        </button>
      </div>
    </div>
  );
}
