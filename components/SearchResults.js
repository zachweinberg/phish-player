import { useState } from "react";
import Loader from "react-loader-spinner";
import SongNameList from "./SongNameList";

const CategoryList = ({
  numSongs,
  numVenues,
  numTours,
  selectedCat,
  setSelectedCat
}) => {
  return (
    <ul className="categories">
      <li
        className={`color-fade ${selectedCat === "Songs" ? "selected" : ""}`}
        onClick={() => setSelectedCat("Songs")}
      >
        <a>Songs ({numSongs})</a>
      </li>
      <li
        className={`color-fade ${selectedCat === "Venues" ? "selected" : ""}`}
        onClick={() => setSelectedCat("Venues")}
      >
        <a>Venues ({numVenues})</a>
      </li>
      <li
        className={`color-fade ${selectedCat === "Tours" ? "selected" : ""}`}
        onClick={() => setSelectedCat("Tours")}
      >
        <a>Tours ({numTours})</a>
      </li>
    </ul>
  );
};

const SearchResults = ({ results, loading }) => {
  const [selectedCat, setSelectedCat] = useState("Songs");
  const { songs = [], venues = [], tours = [] } = results;

  return (
    <div className="search-results">
      <CategoryList
        numSongs={songs.length}
        numVenues={venues.length}
        numTours={tours.length}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Loader type="TailSpin" color="#577dde" height={45} width={45} />
        </div>
      ) : (
        <SongNameList songs={songs} />
      )}
    </div>
  );
};

export default SearchResults;
