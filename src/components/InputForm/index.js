import React,{useState} from 'react';

import { Container, RadioGroup } from './styles';

function InputForm({handleSave}) {

  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState(0);

  function Salvar(event){
    event.preventDefault();

    const dadosFinanceiro ={
      'descricao': descricao,
      'valor': valor,
      'tipo': tipo
    }

    handleSave(dadosFinanceiro);
    event.target.reset();
  }

  return (
    <Container>
      <form onSubmit={Salvar}>
        <input type="text" placeholder='Informe a descrição' onChange={e => setDescricao(e.target.value)}/>
        <input type="text" placeholder='Informe o valor' onChange={e=> setValor(e.target.value)} />
        <RadioGroup>
          <input type="radio"
          id="rblEntrada"
          defaultChecked
          name="group1"
          onChange={() => setTipo(0)} />
          <label htmlFor="rblEntrada">Entrada</label>

          <input type="radio"
          id="rblSaida"
          name="group1"
          onChange={() => setTipo(1)} />
          <label htmlFor="rblEntrada">Saída</label>
        </RadioGroup>
        <button type='submit'>Cadastrar</button>
      </form>
    </Container>
  );
}

export default InputForm;