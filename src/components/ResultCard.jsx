import React, { useContext } from "react";
import { GlobalContext } from "../redux/GlobalState";
import "./styles.css";

export const ResultCard = ({ drink }) => {
  const { addDrinkToFavoriteslist, favoriteslist } = useContext(GlobalContext);

  let storedDrink = favoriteslist.find((o) => o.idDrink === drink.idDrink);

  const favoriteslistDisabled = storedDrink ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {drink.strDrinkThumb ? (
          <img
            src={`https://www.thecocktaildb.com/api/json/v1/1/search.php?s${drink.strDrinkThumb}`}
            alt={`${drink.strDrink} poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{drink.strDrink}</h3>
          <h4 className="release-date">{drink.strGlass}</h4>
        </div>
        <div className="controls">
          <button
            disabled={favoriteslistDisabled}
            className="btn"
            onClick={() => addDrinkToFavoriteslist(drink)}
          >
            Add to favorites
          </button>
        </div>
      </div>
    </div>
  );
};
