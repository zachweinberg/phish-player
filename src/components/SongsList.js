import axios from "axios";
import { usePhish, useDispatchPhish } from "../context";
import PlayIcon from "./icons/Play";

const SongsList = () => {
  const state = usePhish();
  const dispatch = useDispatchPhish();

  const setSelectedSong = async (id) => {
    dispatch({ type: "SET_SEARCHING", payload: true });

    const { data } = await axios.get(`/api/songs/${id}`);
    const { tracks } = data.data.data;
    dispatch({
      type: "SET_SELECTED_SONGS",
      payload: tracks.reverse(),
    });
    dispatch({ type: "SET_MODE", payload: "selected" });
    dispatch({ type: "SET_SEARCHING", payload: false });
  };

  const onPlay = (mp3Url) => {
    let audio = new Audio(mp3Url);
    audio.play();
  };

  if (state.mode === "search" && state.searchResults.songs.length > 0) {
    return (
      <div className="item-list">
        <div className="caption">Click a song to listen by date</div>
        <ul>
          {state.searchResults.songs.map((song) => (
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
    );
  }

  if (state.mode === "selected" && state.selected.songs.length > 0) {
    return (
      <div className="item-list" style={{ marginTop: "1rem" }}>
        <ul>
          {state.selected.songs.map((song) => (
            <li key={song.id}>
              <div>
                <a onClick={() => setSelectedSong(song.id)}>{song.title}</a>
              </div>
              <div>
                <span>{song.show_date}</span>
              </div>
              <div>
                <PlayIcon
                  className="color-fade"
                  onClick={() => onPlay(song.mp3)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};

export default SongsList;
