import Loader from "react-loader-spinner";

import PlayIcon from "./icons/Play";

const CategoryList = () => {
  return (
    <ul className="categories">
      <li className="selected">
        <a>All</a>
      </li>
      <li>
        <a>Songs</a>
      </li>
      <li>
        <a>Venues</a>
      </li>
      <li>
        <a>Tours</a>
      </li>
    </ul>
  );
};

const Results = ({ results }) => {
  return (
    <ul className="results">
      {results.map(result => (
        <li key={result.id}>
          <h2>{result.title}</h2>
          <span>Track Count: {result.tracks_count}</span>
          <PlayIcon />
        </li>
      ))}
    </ul>
  );
};

const SearchResults = ({ results, loading }) => {
  return (
    <div className="search-results">
      <CategoryList />
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Loader type="TailSpin" color="#577dde" height={45} width={45} />
        </div>
      ) : (
        <Results results={results} />
      )}
    </div>
  );
};

export default SearchResults;
