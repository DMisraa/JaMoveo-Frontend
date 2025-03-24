"use client";

import { socket } from "../socket";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export const roomId = "BandSession";

export default function UserMainPage() {
  const [songData, setSongData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Joining room
    socket.emit("joinRoom", { roomId: "BandSession" });

    const handleSongSelected = (data) => {
  
      if (data.songSelected) {
        setSongData(data);
      }
    };

    socket.on("songSelected", handleSongSelected);

    return () => {
      socket.off("songSelected", handleSongSelected);
    };
  }, []);

  useEffect(() => {
    if (songData) {
      sessionStorage.setItem("songDetails", JSON.stringify(songData.song));
      router.push("/live");
    }
  }, [songData, router]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
      <div className="absolute top-1/6 p-6 w-96 text-center shadow-lg border border-gray-700 bg-gray-800 text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold mb-4">Waiting for next song</h1>
        <Loader2 className="animate-spin text-blue-400" size={36} />
      </div>
    </div>
  );
}