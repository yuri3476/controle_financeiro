import React from "react";
import * as C from "./styles";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  const formatValue = (value) => {
    const formattedValue = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(value);

    return formattedValue;
  };

  return (
    <C.Tr>
      <C.Td>{item.nome}</C.Td>
      <C.Td>{item.nomeCategoria}</C.Td>
      <C.Td>{formatValue(item.valor)}</C.Td>
      <C.Td alignCenter>
        {item.tipo === 1 ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
