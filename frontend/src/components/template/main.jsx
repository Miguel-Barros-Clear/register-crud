import "./main.css";
import React from "react";
import Header from "./header";

export default function Main(props) {
  return (
    <>
      <Header {...props} />
      <main className="content conteiner-fluid">
        <div className="p-3 m-3">{props.children}</div>
      </main>
    </>
  );
}
