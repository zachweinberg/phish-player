const CategoryList = ({ state, dispatch }) => {
  return (
    <ul className="categories">
      <li
        className={`color-fade ${
          state.selectedCategory === "Songs" ? "selected" : ""
        }`}
        onClick={() => dispatch({ type: "SET_CATEGORY", payload: "Songs" })}
      >
        <a>Songs</a>
      </li>
      <li
        className={`color-fade ${
          state.selectedCategory === "Venues" ? "selected" : ""
        }`}
        onClick={() => dispatch({ type: "SET_CATEGORY", payload: "Venues" })}
      >
        <a>Venues</a>
      </li>
      <li
        className={`color-fade ${
          state.selectedCategory === "Tours" ? "selected" : ""
        }`}
        onClick={() => dispatch({ type: "SET_CATEGORY", payload: "Tours" })}
      >
        <a>Tours</a>
      </li>
    </ul>
  );
};

export default CategoryList;
