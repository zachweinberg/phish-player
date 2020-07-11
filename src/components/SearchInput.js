import { useState } from "react";
import axios from "axios";
import SearchIcon from "./icons/Search";
import { useDispatchPhish } from "../context";

const SearchInput = () => {
  const dispatch = useDispatchPhish();
  const [term, setTerm] = useState("");

  const onSearch = async e => {
    e.preventDefault();

    if (term !== "" && term.length >= 3) {
      dispatch({ type: "SET_SEARCHING", payload: true });

      const { data } = await axios.get(`/api/search?s=${term}`);
      const results = data.data.data;
      dispatch({
        type: "SET_SEARCH_RESULTS",
        payload: {
          songs: results.songs,
          venues: results.venues,
          tours: results.tours
        }
      });
      dispatch({ type: "SET_MODE", payload: "search" });
      dispatch({ type: "SET_CATEGORY", payload: "Songs" });
      dispatch({ type: "SET_SEARCHING", payload: false });
    } else {
      alert("Search term must be at least 3 characters");
    }
  };

  return (
    <form className="search-input" onSubmit={onSearch}>
      <input
        placeholder="Search"
        type="text"
        value={term}
        onChange={e => setTerm(e.target.value)}
      />
      <SearchIcon className="color-fade" onClick={onSearch} />
    </form>
  );
};

export default SearchInput;
