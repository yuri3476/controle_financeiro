import React from 'react';

import { Itens } from './styles';

function ResumoItens({Valor, titulo, color, borderColor}) {
  return (
    <Itens color={color} borderColor={borderColor}>
      <h2>{titulo}</h2>
      <span>R${Valor}</span>
    </Itens>
  );
}

export default ResumoItens;