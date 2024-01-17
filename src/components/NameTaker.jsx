import { useState } from "react";
import logo from "../assets/Logo.svg";

export default function NameTaker({ onSubmit }) {
  const [name, setName] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);

  function handleNameChange(event) {
    setName(event.target.value);
    setNameInvalid(false);
  }

  function handleSubmit() {
    if (name) {
      onSubmit(name);
    } else {
      setNameInvalid(true);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center align-middle mt-40">
        <h1 className="text-6xl text-center">
          Welcome to <img src={logo} className="inline-block h-28 pb-9"></img>
        </h1>
        <h2 className="text-4xl text-center mt-40">
          Enter your name to get started!
        </h2>
        <div className="mx-auto mt-8 flex gap-5">
          <input
            className={`text-3xl bg-amber-500 p-2 px-4 border-2 rounded-lg text-yellow-800 focus:text-stone-900 w-2/3 transition-all duration-300 ${
              nameInvalid ? "border-red-500" : "border-amber-500"
            }`}
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
          ></input>
          <button
            className="text-3xl bg-amber-500 p-2 pb-3 border-2 border-transparent rounded-lg text-stone-900 w-1/3 hover:bg-amber-600 focus:border-black transition-all duration-300"
            onClick={handleSubmit}
          >
            <i className="fa-solid fa-pencil text-2xl"></i>
            <span className="ml-2">Start</span>
          </button>
        </div>
        <h3
          className={`text-center text-2xl text-red-500 font-medium mt-2 transition-all duration-300 ${
            nameInvalid ? "text-opacity-100" : "text-opacity-0"
          }`}
        >
          Please input a name!
        </h3>
      </div>
    </>
  );
}
