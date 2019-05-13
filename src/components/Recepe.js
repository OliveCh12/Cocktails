import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faListUl } from "@fortawesome/free-solid-svg-icons";

import Recepes from "../data/recepes.json";

const Recepe = () => {
  const [recepe, setRecepe] = useState({
    name: "",
    type: "",
    ingredients: []
  });
  const [show, setShow] = useState(true);

  const randomRecepe = () => {
    const item =
      Recepes.content[Math.floor(Math.random() * Recepes.content.length)];
    setRecepe({
      name: item.name,
      type: item.type,
      ingredients: item.ingredients
    });
  };



  const toggleRecepe = () => {
    setShow(!show);
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
          <div style={{ textAlign: "center" }}>
            <h1>{recepe.name}</h1>
            <small className={recepe.type.replace(/\s/g, "")}>
              {recepe.type}
            </small>
          </div>
        )}

        {show ? (
          ""
        ) : (
          <ul>
            {recepe.ingredients.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <div className="btn-group">
          {recepe.name === "" ? (
            <button onClick={randomRecepe} className="btn-footer">
              <FontAwesomeIcon icon={faSyncAlt} size="2x" />
            </button>
          ) : (
            <div className="btn-group">
              <button onClick={toggleRecepe} className="btn-footer">
                <FontAwesomeIcon icon={faListUl} size="2x" />
              </button>
              <button onClick={randomRecepe} className="btn-footer">
                <FontAwesomeIcon icon={faSyncAlt} size="2x" />
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Recepe;
