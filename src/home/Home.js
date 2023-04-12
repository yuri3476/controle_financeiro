import React from "react";
import "./Home.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import { FaMoneyBillWave, FaMoneyCheckAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <main role="main">
        <div class="jumbotron card-principal">
          <div class="container">
            {/* <h1 class="display-3">Hello, world!</h1>
            <p>
              This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content. Use it as a starting point to create
              something more unique.
            </p>
            <p>
              <a
                class="btn btn-primary btn-lg"
                href="https://getbootstrap.com/docs/4.0/examples/jumbotron/#"
                role="button"
              >
                Learn more »
              </a>
            </p> */}
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h2>Visão Geral</h2>
              <p>
              Bem-vindo à nossa página 
              de controle financeiro! 
              Nosso objetivo é ajudá-lo 
              a tomar o controle de suas 
              finanças pessoais, economizar 
              dinheiro e alcançar seus objetivos
              financeiros. Aqui você encontrará
              dicas e conselhos práticos, notícias
              financeiras atualizadas, ferramentas
              de planejamento e muito mais. Nós acreditamos
              que todo mundo pode ter uma vida financeira saudável
              e estamos aqui para ajudá-lo a alcançar esse objetivo.
              </p>
            </div>
            <div class="col-md-4">
              <h2>Ferramentas</h2>
              <p>
              Aqui em nossa página de controle financeiro, 
              temos uma variedade de ferramentas de planejamento
              financeiro para ajudá-lo a gerenciar seu dinheiro com
              mais eficiência. Nossas calculadoras de orçamento são
              uma ótima maneira de começar a planejar suas finanças.
              Elas ajudam a descobrir o quanto você gasta em diferentes
              categorias, como alimentação, transporte, entre outros, e 
              a fazer ajustes para economizar mais dinheiro.
              </p>
            </div>
            <div class="col-md-4">
              <h2>Sobre Nós</h2>
              <p>
              Somos uma equipe de especialistas em finanças pessoais,
              comprometidos em ajudar as pessoas a controlar suas finanças
              e alcançar seus objetivos financeiros. Nossa equipe é formada
              por profissionais experientes e qualificados em finanças, que 
              entendem as necessidades de nossos usuários e se dedicam a fornecer
              as melhores soluções de controle financeiro. Nós acreditamos que a 
              educação financeira é fundamental para uma vida financeira saudável 
              e estamos comprometidos em fornecer as melhores informações e recursos
              para ajudar nossos usuários a tomar decisões informadas sobre seu dinheiro.
              </p>
            </div>
          </div>

          <hr />
        </div>
      </main>
    </div>
  );
};

export default Home;
