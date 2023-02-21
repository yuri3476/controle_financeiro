import React from 'react';
import {MdDelete, MdArrowCircleUp, MdArrowCircleDown} from 'react-icons/md';

import { Table, Th, Td } from './styles';

function Grid({dadosFin, onDelete}) {
  return (
    <Table>
      <thead>
        <tr>
          <Th width={40}>Descricao</Th>
          <Th width={40}>Valor</Th>
          <Th width={10} alignCenter>Tipo</Th>
          <Th width={10}></Th>
        </tr>
      </thead>
      <tbody>
        {dadosFin?.map((dadosFin, index) => (
          <tr key={index}>
          <Td>{dadosFin.descricao}</Td>
          <Td>R${Math.abs(dadosFin.valor).toFixed(2)}</Td>
          <Td alignCenter>
            {dadosFin.tipo === 1 ? (
             <MdArrowCircleDown color='red'/>
            ) : (
              <MdArrowCircleUp color='green'/>
            )}
          </Td>
          <Td alignCenter>
            <MdDelete onClick={() => onDelete(index)}/>
          </Td>
        </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Grid;