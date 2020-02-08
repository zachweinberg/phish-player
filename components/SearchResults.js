import Loader from "react-loader-spinner";
import SongsList from "./SongsList";
import VenuesList from "./VenuesList";
import ToursList from "./ToursList";
import CategoryList from "./CategoryList";
import { usePhish, useDispatchPhish } from "../context";

const SearchResults = () => {
  const state = usePhish();
  const dispatch = useDispatchPhish();

  return (
    <div className="search-results">
      <CategoryList state={state} dispatch={dispatch} />
      {state.searching ? (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Loader type="TailSpin" color="#577dde" height={45} width={45} />
        </div>
      ) : (
        <div>
          {state.selectedCategory === "Songs" && <SongsList />}
          {state.selectedCategory === "Venues" && <VenuesList />}
          {state.selectedCategory === "Tours" && <ToursList />}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
