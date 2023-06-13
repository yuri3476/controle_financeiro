import React, { useEffect, useState } from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = () => {
  const [itens, setItens] = useState([]);

  const onDelete = (ID) => {
    
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Substitua pelo seu token de autorização válido
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await fetch(
          "https://artemiswebapi.azurewebsites.net/api/Categoria/ObterGastos",
          { headers }
        );
        const data = await response.json();
        setItens(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={30}>Descrição</C.Th>
          <C.Th width={30}>Categoria</C.Th>
          <C.Th width={30}>Valor</C.Th>
          <C.Th width={20} alignCenter>
            Tipo
          </C.Th>
          <C.Th width={20}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
