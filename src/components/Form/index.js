import React, { useState, useEffect } from "react";
import Grid from "../Grid";
import DropDown from "../DropDown";
import * as C from "./styles";
import "../../styles/global.css";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);
  const [categories, setCategories] = useState([]);

  const generateID = () => Math.round(Math.random() * 1000);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await fetch(
          "https://artemiswebapi.azurewebsites.net/api/Categoria/ObterCategorias",
          {
            headers: headers,
          }
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (document.querySelector("#dropDownCategory").value === "0") {
      alert("Selecione uma Categoria!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }
  
    const transaction = {
      id: generateID(),
      desc: desc,
      idcategory: document.querySelector("#dropDownCategory").value,
      category:
        document.querySelector("#dropDownCategory").selectedOptions[0]
          .textContent,
      amount: amount,
      expense: isExpense,
    };
  
    handleAdd(transaction);
  
    setDesc("");
    document.querySelector("#dropDownCategory").selectedIndex = 0;
    setAmount("");
  
    // Adicione o código para realizar a requisição com o token de acesso
    const token = "SEU_TOKEN_DE_ACESSO";
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    fetch('https://artemiswebapi.azurewebsites.net/api/Categoria/ObterCategorias', {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(data => {
        // Armazena a lista de categorias na variável 'categorias'
        setCategories(data);
      })
      .catch(error => {
        // Lida com erros na requisição
        console.error(error);
      });
  };
  

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label id="labelCategory">Categoria</C.Label>
          <DropDown categories={categories} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Tipo</C.Label>
          <C.RadioGroup>
            <C.Input
              type="radio"
              id="rIncome"
              defaultChecked
              name="group1"
              onChange={() => setExpense(!isExpense)}
            />
            <C.Label htmlFor="rIncome">Entrada</C.Label>
            <C.Input
              type="radio"
              id="rExpenses"
              name="group1"
              onChange={() => setExpense(!isExpense)}
            />
            <C.Label htmlFor="rExpenses">Saída</C.Label>
          </C.RadioGroup>
        </C.InputContent>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
