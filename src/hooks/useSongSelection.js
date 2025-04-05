import { useRouter } from "next/navigation";
import { getSocket } from "@/app/socket"; 
import { fetchSongDetails } from "@/lib/db";

function useSongSelection(instrument) {
  const router = useRouter();
  const socket = getSocket();

  async function handleSelectSong(songUrl) {
    const data = await fetchSongDetails(songUrl, instrument);

    if (data) {
      socket.emit("songPicked", { roomId: "BandSession", song: data });
      sessionStorage.setItem("songDetails", JSON.stringify(data));
      router.push(`/live?instrument=${encodeURIComponent(instrument)}`);
    } else {
      console.error("Failed to fetch song details");
    }
  }

  return { handleSelectSong };
}

export default useSongSelection;