const SongList = ({ songs }) => {
  return (
    <ul className="results">
      {songs.map(result => (
        <li key={result.id}>
          <div>
            <a className="" onClick={() => alert("k")}>
              {result.title}
            </a>
          </div>
          <div>
            <span>Track Count: {result.tracks_count}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
