import { useState } from "react";
import axios from "axios";

import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";
import BracketsIcon from "../components/icons/Brackets";

const Index = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = (e, term) => {
    e.preventDefault();

    if (term !== "" && term.length >= 3) {
      setLoading(true);

      axios
        .get(`/api/search?s=${term}`)
        .then(({ data }) => {
          console.log(data);
          return;
          setResults(data.data.data);
        })
        .catch(e => alert(e))
        .finally(() => setLoading(false));
    } else {
      alert("Search term must be at least 3 characters");
    }
  };
  return (
    <div className="home">
      <p className="caption">
        Don't know any Phish songs? Try "Free" - it's a great starter song!
      </p>
      <SearchInput onSubmit={onSearch} />
      <SearchResults results={results} loading={loading} />
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
