import { useState } from "react";
import SearchIcon from "./icons/Search";

const SearchInput = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  return (
    <form className="search-input" onSubmit={e => onSubmit(e, term)}>
      <input
        placeholder="Search"
        type="text"
        value={term}
        onChange={e => setTerm(e.target.value)}
      />
      <SearchIcon onClick={e => onSubmit(e, term)} className="color-fade" />
    </form>
  );
};

export default SearchInput;
