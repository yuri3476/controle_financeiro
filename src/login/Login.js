import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pageTitle] = useState("Controle Financeiro");
  const [forgotPassword, setForgotPassword] = useState(false);
  // const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleRememberMeChange = (event) => {
  //   setRememberMe(event.target.checked);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
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
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
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
        {/* <div className="form-group">
          <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label className="checkbox-label" htmlFor="remember-me">
            Permanecer logado
          </label>
          </div>
        </div> */}
        <button type="submit">Entrar</button>
        <button className="forgot-password-button" onClick={handleForgotPassword}>Esqueci minha senha</button>
      </form>
    </div>
  );
}

export default Login;
