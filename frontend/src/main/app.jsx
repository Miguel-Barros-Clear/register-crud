import "./app.css";
import React from "react";

import Logo from "../components/template/logo";
import Nav from "../components/template/nav";
import Main from "../components/template/main";
import Footer from "../components/template/footer";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
