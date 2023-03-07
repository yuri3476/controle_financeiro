import Login from './login/Login';
import CadastroUsuario from './cadastro/CadastroUsuario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<CadastroUsuario/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
