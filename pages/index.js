import { useState } from "react";
import axios from "axios";

import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";
import BracketsIcon from "../components/icons/Brackets";

const Index = () => {
  const [results, setResults] = useState([]);

  const onSearch = (e, term) => {
    e.preventDefault();

    if (term !== "") {
      axios
        .get(`/api/search?s=${term}`)
        .then(({ data }) => {
          setResults(data.data.data.songs);
        })
        .catch(e => alert(e));
    }
  };
  return (
    <div className="home">
      <SearchInput onSubmit={onSearch} />
      <SearchResults results={results} />
      <a
        className="footer-link"
        href="https://github.com/zachweinberg/phish-player.git"
        target="_blank"
      >
        <span>View code</span>
        <BracketsIcon width="17px" height="17px" fill="#ccc" />
      </a>
    </div>
  );
};

export default Index;
