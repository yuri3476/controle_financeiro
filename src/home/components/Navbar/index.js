import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Navbar.css";
import "../../../img/icon.png";

const Navbar = ({ income, expense, total }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark nav">
      <a class="navbar-brand brand" href="/">
        Meu Financeiro
      </a>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="true"
        aria-label="Alterna navegação"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link brand" href="/">
              Início
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link brand" href="/login">
              Login
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link brand" href="/cadastro">
              Cadastro
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link brand" href="/dashboard">
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
