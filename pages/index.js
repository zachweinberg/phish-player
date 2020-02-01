import { useState } from "react";
import axios from "axios";

const Index = () => {
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");

  const onSearch = e => {
    e.preventDefault();

    axios
      .get(`http://localhost:34567/search?s=${term}`)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(e => alert(e));
  };

  return (
    <div>
      <h1>Search Phish Songs</h1>
      <form onSubmit={onSearch}>
        <input
          value={term}
          onChange={e => setTerm(e.target.value)}
          className="search-input"
          type="text"
          placeholder="Search"
        />
      </form>
      <div>
        {results.map(result => (
          <div className="result-box">Hi</div>
        ))}
      </div>
    </div>
  );
};

export default Index;
