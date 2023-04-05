import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import CadastroUsuario from "./cadastro/CadastroUsuario";
import Dashboard from "./dashboard";
import Home from "./home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
};

export default App;
