import { useState } from "react";
import "./App.css";
import Card from "./Card";

const data = [
  { id: 1, name: "Велосипед", price: 1000, count: 5 },
  { id: 2, name: "Самокат", price: 700, count: 4 },
  { id: 3, name: "Ролики", price: 1300, count: 3 },
  { id: 4, name: "Сноуборд", price: 19000, count: 2 },
];

function dataToString(array) {
  let currentString;
  let dataString = 'Введите номер Товара\n';
  array.forEach(element => {
    currentString = `${element.id} ${element.name}, цена - ${element.price}у.е. , количество на складе - ${element.count}\n`
    dataString = dataString + currentString;
  });
  return dataString;
}

const addGoodsHandler = () => {
  const input = prompt(dataToString(data),1) 
  console.log(input);
};

function App() {
  return (
    <>
      <button onClick={addGoodsHandler}>Добавить товар</button>
      <Card data = {data} input={4}/>
    </>
  );
}

export default App;
