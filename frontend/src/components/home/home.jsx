import React from "react";
import Main from "../template/main";

export default function Home() {
  return (
    <Main
      icon="home"
      title="Inicio"
      subtitle="Segundo projeto do caputlo de react"
    >
      <div className="display-4">Bem Vindo!</div>
      <hr />
      <p className="mb-0">
        Sistema desenvolvido para exemplificar a construção de um cadastro
        desenvolvido em react!
      </p>
    </Main>
  );
}
