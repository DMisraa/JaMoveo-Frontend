export default function mapChordsToLyrics(songDetails) {
    let result = [];
    let totalChords = songDetails.chords.length;
    let totalLyrics = songDetails.lyrics.length;
    let chordIndex = 0;
  
    let maxChordsPerLine =
      totalChords > totalLyrics ? Math.ceil(totalChords / totalLyrics) : 1;
    maxChordsPerLine = Math.min(maxChordsPerLine, 2);
  
    songDetails.lyrics.forEach((line) => {
      if (
        [
          "Intro",
          "intro",
          "verse",
          "Chorus:",
          "Repeat",
          "Bridge:",
          "Ending:",
          "Solo",
        ].some((section) => line.includes(section))
      ) {
        result.push({ lyric: line, chords: [] });
        return;
      }
  
      let assignedChords = [];
  
      if (chordIndex < totalChords) {
        let availableChords = totalChords - chordIndex;
        let chordsForThisLine = Math.min(availableChords, maxChordsPerLine);
  
        assignedChords = songDetails.chords.slice(
          chordIndex,
          chordIndex + chordsForThisLine
        );
        chordIndex += chordsForThisLine;
      }
  
      result.push({
        lyric: line,
        chords: assignedChords,
      });
    });
  
    return result;
  }