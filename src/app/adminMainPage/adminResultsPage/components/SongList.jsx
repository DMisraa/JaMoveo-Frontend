function SongList({ parsedResults, handleSelectSong }) {
  return (
      <ul className="p-2 space-y-4">
        {parsedResults.map((song, index) => (
          <li
            key={index}
            className="border p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition-all"
            onClick={() => handleSelectSong(song.url)}
          >
            <h2 className="font-semibold text-lg">{song.title}</h2>
            <p className="text-sm text-gray-600">Artist: {song.artist}</p>
            {song.image && (
              <img
                src={song.image}
                alt={song.title}
                className="w-40 h-40 object-cover mt-2 rounded-lg"
              />
            )}
          </li>
        ))}
      </ul>
    
  );
}

export default SongList;