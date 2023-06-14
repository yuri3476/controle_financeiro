import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Legend } from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#4B0082",
  "#FF69B4",
  "#7FFF00",
  "#9400D3",
  "#FF4500",
  "#00FFFF",
  "#FFD700",
  "#1E90FF",
  "#228B22",
  "#FF1493",
  "#8B0000",
  "#A0522D",
  "#800080",
  "#FF7F50",
  "#4169E1",
  "#DC143C",
];

function PieChartt({ data }) {
  if (data.length > 0) {
    return (
      <PieChart width={300} height={350}>
        <Pie
          data={data}
          dataKey="valor"
          nameKey="nome"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend align="center" verticalAlign="bottom" />
      </PieChart>
    );
  } else {
    return null;
  }
}

PieChartt.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.string.isRequired,
      nome: PropTypes.string.isRequired,
      nomeCategoria: PropTypes.string.isRequired,
      tipo: PropTypes.number.isRequired,
      valor: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PieChartt;
