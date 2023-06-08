import React from "react";
import * as C from "./styles";

const DropDown = ({ categories, onChange }) => {
  return (
    <C.Select id="dropDownCategory" onChange={onChange}>
      <option value="0">Selecione uma opção</option>
      {categories.map((option) => (
        <option key={option.id} value={option.id}>
          {option.nome}
        </option>
      ))}
    </C.Select>
  );
};

export default DropDown;
