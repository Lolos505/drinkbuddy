import React, { useState } from "react";
import { ResultCard } from "../components/ResultCard";
import "../components/styles.css";

export const Tables = () => {
  const [query, setQuery] = useState("");
  const [drinks, setDrinks] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setDrinks(data.drinks);
        } else {
          setDrinks([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a drink"
              value={query}
              onChange={onChange}
            />
          </div>
          {drinks.length > 0 && (
            <ul className="results">
              {drinks.map((drink) => (
                <li key={drink.idDrink}>
                  <ResultCard drink={drink} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
