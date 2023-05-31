import React, { useEffect, useState } from "react";
import * as C from "./styles";

const DropDown = ({ categories }) => {
  return (
    <C.Select id="dropDownCategory">
      <option value="0">Selecione uma opção</option>
      {categories.map((option) => (
        <option key={option[0]} value={option[0]}>
          {option[1]}
        </option>
      ))}
    </C.Select>
  );
};

export default DropDown;
