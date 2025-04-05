import LyricLine from "./LyricLine"; 

export default function LyricsDisplay({ lyricsWithChords, scrollRef }) {
  return (
    <div
      id="lyrics-section"
      ref={scrollRef}
      className="mb-6 overflow-y-auto max-h-[60vh]"
    >
      <h2 className="text-lg font-semibold mb-2 text-center">Lyrics</h2>
      <div className="space-y-3">
        {lyricsWithChords.map((line, index) => (
          <LyricLine key={index} line={line} />
        ))}
      </div>
    </div>
  );
}