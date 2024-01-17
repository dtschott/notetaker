import React from "react";
import logo from "../assets/Logo.svg";

export default function Logo({ height }) {
  return (
    <div className={`absolute left-0 top-0 pl-4 text-4xl h-${height}`}>
      <img src={logo} className="w-full h-full"></img>
    </div>
  );
}
