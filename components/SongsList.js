import axios from "axios";
import { usePhish, useDispatchPhish } from "../context";

const SongsList = () => {
  const state = usePhish();
  const dispatch = useDispatchPhish();

  const setSelectedSong = async id => {
    dispatch({ type: "SET_SEARCHING", payload: true });

    const { data } = await axios.get(`/api/songs/${id}`);
    const { tracks } = data.data.data;
    dispatch({
      type: "SET_SELECTED_SONGS",
      payload: tracks
    });
    dispatch({ type: "SET_SEARCHING", payload: false });
  };
  return (
    state.searchResults.songs.length > 0 && (
      <div className="item-list">
        <div className="caption">Click a song to listen by date</div>
        <ul>
          {state.searchResults.songs.map(song => (
            <li key={song.id}>
              <div>
                <a onClick={() => setSelectedSong(song.id)}>{song.title}</a>
              </div>
              <div>
                <span>Track Count: {song.tracks_count}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default SongsList;
