"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import useSongSelection from "@/hooks/useSongSelection";
import SongList from "./SongList";
import { getSocket } from "@/app/socket";
import { adminResultsContainerCSS, roomId } from "@/constants/ui";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const socket = getSocket();

  const query = searchParams.get("query");
  const results = searchParams.get("results") || "[]";
  const title = (
    <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
      Search Results for "{query}"
    </h1>
  );
  let user;

  useEffect(() => {
    socket.emit("joinRoom", { roomId: roomId });
    user = JSON.parse(localStorage.getItem("user"));
  }, []);

  let parsedResults = [];
  try {
    parsedResults = JSON.parse(results);
  } catch (error) {
    console.error("Failed to parse results:", error);
  }

  const { handleSelectSong } = useSongSelection(user?.instrument || "");

  return (
    <div className={adminResultsContainerCSS}>
    
    {title}
      <SongList
        parsedResults={parsedResults}
        handleSelectSong={handleSelectSong}
        query={query}
      />
    </div>
  );
}

export default SearchResultsContent;
