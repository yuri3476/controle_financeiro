import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pageTitle] = useState("Controle Financeiro");
  const [forgotPassword, setForgotPassword] = useState(false);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('https://artemiswebapi.azurewebsites.net/api/auth/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('accessTokenExpiration', data.accessTokenExpiration)
    localStorage.setItem('refreshToken', data.refreshToken)
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  const handleCancelForgotPassword = () => {
    setForgotPassword(false);
  };

  const handleResetPassword = (email) => {
    // enviar solicitação para redefinir a senha do usuário com o e-mail fornecido
    console.log(`Redefinir senha para o e-mail: ${email}`);
    setForgotPassword(false);
  };


  if (forgotPassword) {
    return (
      <div className="login">
        <h2>Esqueceu sua senha?</h2>
        <p>Insira seu e-mail para redefinir sua senha:</p>
        <form onSubmit={(event) => { event.preventDefault(); handleResetPassword(event.target.email.value); }}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <button type="submit">Redefinir senha</button>
          <button className="forgot-password-button" onClick={handleCancelForgotPassword}>Cancelar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Usuário</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <Link to="/dashboard" className='submit-button'>Entrar</Link>
        {/* <button type="submit">Entrar</button> */}
        <button className="forgot-password-button" onClick={handleForgotPassword}>Esqueci minha senha</button>
        <Link to="/cadastro" className="register-link">Cadastre-se</Link>
      </form>
    </div>
  );
}

export default Login;
