import Loader from "react-loader-spinner";

import PlayIcon from "./icons/Play";

const CategoryList = ({ numSongs, numVenues, numTours }) => {
  return (
    <ul className="categories">
      <li className="selected">
        <a>Songs ({numSongs})</a>
      </li>
      <li>
        <a>Venues ({numVenues})</a>
      </li>
      <li>
        <a>Tours ({numTours})</a>
      </li>
    </ul>
  );
};

const SearchResults = ({ results, loading }) => {
  const { songs = [], venues = [], tours = [] } = results;

  return (
    <div className="search-results">
      <CategoryList
        numSongs={songs.length}
        numVenues={venues.length}
        numTours={tours.length}
      />
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Loader type="TailSpin" color="#577dde" height={45} width={45} />
        </div>
      ) : (
        <ul className="results">
          {songs.map(result => (
            <li key={result.id}>
              <div>
                <h2>{result.title}</h2>
              </div>
              <div>
                <span>Track Count: {result.tracks_count}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
