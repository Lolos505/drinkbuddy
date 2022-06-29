import React, { useRef } from "react";
import { fetchSearchCocktail } from "../redux/action";
import { useDispatch } from "react-redux";
import "./styles.css";

const SearchInput = () => {
  const searchValue = useRef();

  let dispatch = useDispatch();
  const searchCocktail = () => {
    dispatch(fetchSearchCocktail(searchValue.current.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="section-search">
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <label htmlFor="name">
            <b>Search Cocktail: </b>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={searchCocktail}
            ref={searchValue}
            className="inputsearchfield"
          />
        </form>
      </section>
    </>
  );
};
export default SearchInput;
