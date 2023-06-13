import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Resume from "../components/Resume";
import Form from "../components/Form";

const Dashboard = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

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
        setTransactionsList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const calculateAmounts = () => {
      const amountExpense = transactionsList
        .filter((item) => item.tipo === 2)
        .map((transaction) => Number(transaction.valor));

      const amountIncome = transactionsList
        .filter((item) => item.tipo === 1)
        .map((transaction) => Number(transaction.valor));

      const totalExpense = amountExpense.reduce((acc, cur) => acc + cur, 0);
      const totalIncome = amountIncome.reduce((acc, cur) => acc + cur, 0);

      const income = totalIncome.toFixed(2);
      const expense = totalExpense.toFixed(2);
      const total = (totalIncome - totalExpense).toFixed(2);

      setIncome(`R$ ${expense}`);
      setExpense(`R$ ${income}`);
      setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
    };

    calculateAmounts();
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);
  };

  return (
    <div>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </div>
  );
};

export default Dashboard;
