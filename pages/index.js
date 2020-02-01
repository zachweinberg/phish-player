import { useState } from "react";
import axios from "axios";

import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";

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
    </div>
  );
};

export default Index;
