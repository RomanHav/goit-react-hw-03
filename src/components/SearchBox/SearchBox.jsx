import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ inputValue, handleChange }) {
  const filter = useId();

  return (
    <div className={css.searchBox}>
      <label htmlFor={filter}>Find contacts by name</label>
      <input
        className={css.searchBoxInput}
        type="text"
        value={inputValue}
        onChange={handleChange}
        id={filter}
      />
    </div>
  );
}
