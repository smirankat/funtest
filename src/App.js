import React from "react";
import FoodBlock from "./components/FoodBlock";

const items = [
  {
    type: "с фуа-гра",
    qty: "10",
    number: "",
    mouse: "мышь",
    weight: "0,5",
    end: "",
    desc: "Печень утки разварная с артишоками.",
    nonavailable: "Печалька, с фуа-гра закончился.",
    totalCount: 2,
  },
  {
    type: "с рыбой",
    qty: "40",
    number: "2",
    mouse: "мыши",
    weight: "2",
    end: "",
    desc: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    nonavailable: "Печалька, с рыбой закончился.",
    totalCount: 3,
  },
  {
    type: "с курой",
    qty: "100",
    number: "5",
    mouse: "мышей",
    weight: "5",
    end: "заказчик доволен",
    desc: "Филе из цыплят с трюфелями в бульоне.",
    nonavailable: "Печалька, с курой закончился.",
    totalCount: 5,
  },
];

function App() {
  return (
    <div className="wrapper">
      <h1> Ты сегодня покормил кота?</h1>
      <div className="wrapper__food">
        {items && items.map((obj) => <FoodBlock key={obj.type} {...obj} />)}
      </div>
    </div>
  );
}

export default App;
