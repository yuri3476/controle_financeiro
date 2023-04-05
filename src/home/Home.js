import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FaMoneyBillWave, FaMoneyCheckAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Controle Financeiro</h1>
        <nav className="navigation">
          <Link className="link" to="/expenses">Despesas</Link>
          <Link className="link" to="/income">Renda</Link>
          <Link className="link" to="/reports">Relatórios</Link>
          <Link className="link" to="/">Login</Link>
        </nav>
      </header>
      <main className="main">
        <section className="card">
          <div className="card-icon">
            <FaMoneyBillWave />
          </div>
          <div className="card-text">
            <h2 className="card-title">Despesas</h2>
            <p className="card-description">Veja suas despesas e gerencie seu dinheiro.</p>
          </div>
        </section>
        <section className="card">
          <div className="card-icon">
            <FaMoneyCheckAlt />
          </div>
          <div className="card-text">
            <h2 className="card-title">Renda</h2>
            <p className="card-description">Acompanhe sua renda e mantenha-se organizado financeiramente.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
