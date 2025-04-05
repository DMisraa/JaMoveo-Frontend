"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import { getSocket } from "../socket"; 
import {
  adminContainerCSS,
  roomId,
  adminSubContainerCSS,
} from "@/constants/ui";

export default function UserMainPage() {
  const [songData, setSongData] = useState(null);
  const router = useRouter();
  const socket = getSocket(); 

  useEffect(() => {
    // Joining room
    socket.emit("joinRoom", { roomId: roomId });

    function handleSongSelected(data) {
      if (data.songSelected) {
        setSongData(data);
      }
    }
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
    <div className={adminContainerCSS}>
      <div className={`${adminSubContainerCSS} flex flex-col items-center`}>
        <h1 className="text-2xl font-semibold mb-4">Waiting for next song</h1>
        <Loader2 className="animate-spin text-blue-400" size={36} />
      </div>
    </div>
  );
}
