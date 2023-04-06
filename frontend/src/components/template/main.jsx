import "./main.css";
import React from "react";
import Header from "./header";

export default function Main(props) {
  return (
    <>
      <Header />
      <main className="content">Conteudo</main>
    </>
  );
}
