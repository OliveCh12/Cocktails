import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faListUl } from "@fortawesome/free-solid-svg-icons";

import Recepes from "../data/recepes.json";

const show = {
  display: "block"
};

const Recepe = () => {
  const [seconds, setSeconds] = useState(0);
  const [recepe, setRecepe] = useState({
    name: "",
    type: "",
    ingredients: []
  });

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setSeconds(seconds => seconds + 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);

  const randomRecepe = () => {
    const item =
      Recepes.content[Math.floor(Math.random() * Recepes.content.length)];
    setRecepe({
      name: item.name,
      type: item.type,
      ingredients: item.ingredients
    });
  };
  return (
    <div className="Recepe">
      <header className="App-header">
        {recepe.name === "" ? (
          <div style={{ textAlign: "center" }}>
            <h1 className="pulse">Pablo Cocktails</h1>
            <small>Nombre de Cocktails : {Recepes.content.length}</small>
          </div>
        ) : (
          <h1>{recepe.name}</h1>
        )}
        <small className={recepe.type.replace(/\s/g, "")}>{recepe.type}</small>
        <ul style={show}>
          {recepe.ingredients.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="btn-group">
          <button onClick={randomRecepe} className="btn-footer">
            <FontAwesomeIcon icon={faListUl} size="2x" />
          </button>
          <button onClick={randomRecepe} className="btn-footer">
            <FontAwesomeIcon icon={faSyncAlt} size="2x" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Recepe;
