"use client";

import { useState, useRef } from "react";

import mapChordsToLyrics from "@/lib/mapChordsToLyrics";
import useLivePageSocket from "@/hooks/useLivePageSocket";
import useAutoScroll from "@/hooks/useAutoScroll";
import useLivePageData from "@/hooks/useLivePageData";
import LyricsDisplay from "./components/LyricsDisplay";
import LivePageHeader from "./components/LivePageHeader";
import { livePageButtonCSS } from "@/constants/ui";

export default function LivePage() {
  const [isAutoScrollActive, setIsAutoScrollActive] = useState(false);
  const scrollRef = useRef(null);

  const { songDetails, isAdmin } = useLivePageData(); 
  const { handleQuitSession } = useLivePageSocket(isAdmin);
  useAutoScroll(isAutoScrollActive, scrollRef);

  if (!songDetails) return <div className="text-center p-4">Loading...</div>;

  const lyricsWithChords = mapChordsToLyrics(songDetails);

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <LivePageHeader
        title={songDetails.title}
        imageUrl={songDetails.imageUrl}
      />

      <LyricsDisplay
        lyricsWithChords={lyricsWithChords}
        scrollRef={scrollRef}
      />

      <div className="flex justify-between">
        <button
          onClick={() => setIsAutoScrollActive((prev) => !prev)}
          className={`${livePageButtonCSS} bg-blue-500 hover:bg-blue-600 right-5`}
        >
          {isAutoScrollActive ? "Stop Auto Scroll" : "Start Auto Scroll"}
        </button>
        {isAdmin && (
          <button
            onClick={handleQuitSession}
            className={`${livePageButtonCSS} bg-red-500 hover:bg-red-600 left-5`}
          >
            Quit
          </button>
        )}
      </div>
    </div>
  );
}
