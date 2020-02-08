const CategoryList = ({ state, dispatch }) => {
  return (
    <ul className="categories">
      <li
        className={`color-fade ${
          state.selectedCategory === "Songs" ? "selected" : ""
        }`}
        onClick={() => dispatch({ type: "SET_CATEGORY", payload: "Songs" })}
      >
        <a>Songs ({state.searchResults.songs.length})</a>
      </li>
      <li
        className={`color-fade ${
          state.selectedCategory === "Venues" ? "selected" : ""
        }`}
        onClick={() => dispatch({ type: "SET_CATEGORY", payload: "Venues" })}
      >
        <a>Venues ({state.searchResults.venues.length})</a>
      </li>
      <li
        className={`color-fade ${
          state.selectedCategory === "Tours" ? "selected" : ""
        }`}
        onClick={() => dispatch({ type: "SET_CATEGORY", payload: "Tours" })}
      >
        <a>Tours ({state.searchResults.tours.length})</a>
      </li>
    </ul>
  );
};

export default CategoryList;
