import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
  icon: "users",
  title: "Usuarios",
  subtitle: "Cadastro de usuarios: incluor, listar, alterar e excluir",
};

export default class UserCrud extends Component {
  render() {
    return <Main {...headerProps}>Cadastro de usuario</Main>;
  }
}
