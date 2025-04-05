"use client";

import { useRouter } from "next/navigation";
import { useEffect, Suspense } from "react";

import SearchResultsContent from "./components/SearchResultsContent";
import { getSocket } from "@/app/socket"; 
import { adminContainerCSS, adminResultsButtonCSS, roomId } from "@/constants/ui";

export default function SearchResultsPage() {
  const router = useRouter();
  const socket = getSocket(); 

  useEffect(() => {
    socket.emit("joinRoom", { roomId: roomId });
  }, []);

  return (
    <Suspense fallback="Loading..">
      <div className={adminContainerCSS}>
        <button
          onClick={() => router.push("/adminMainPage")}
          className={adminResultsButtonCSS}
        >
          ← Back to Search
        </button>
        <SearchResultsContent />
      </div>
    </Suspense>
  );
}