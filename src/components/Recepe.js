import React, { useState, useEffect } from "react";

import Recepes from "../data/recepes.json";

const Recepe = () => {
  const [seconds, setSeconds] = useState(0);
  const [recepe, setRecepe] = useState({
    name: "",
    type: "",
    ingredients: []
  });

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);

  const randomRecepe = () => {
    const item =
      Recepes.content[Math.floor(Math.random() * Recepes.content.length)];
    setRecepe({ name: item.name, type: item.type, ingredients: item.ingredients });
  };

  return (
    <div className="Recepe">
      <header className="App-header">
        <h1>{recepe.name}</h1>
        <small>{`(${recepe.type})`}</small>
        <ul>
          {recepe.ingredients.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button onClick={randomRecepe} className="btn-footer">Générer un Cocktail</button>
      </header>
    </div>
  );
};

export default Recepe;
