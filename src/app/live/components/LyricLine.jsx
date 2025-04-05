export default function LyricLine({ line }) {
  const isSectionHeader = (lyric) => {
    return ["Intro", "verse", "Chorus", "Bridge", "Ending"].some(
      (section) => lyric.includes(section)
    );
  };

  return (
    <div className="flex flex-col items-center">
      {line.chords.length > 0 && (
        <div className="text-blue-600 font-bold text-sm flex w-full justify-evenly mb-0.5">
          {line.chords.map((chord, chordIdx) => (
            <span key={chordIdx} className="px-1">
              {chord}
            </span>
          ))}
        </div>
      )}
      <span
        className={`text-base ${
          isSectionHeader(line.lyric) ? "mb-4 font-bold" : ""
        }`}
      >
        {line.lyric}
      </span>
    </div>
  );
}