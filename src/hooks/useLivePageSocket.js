"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSocket } from "@/app/socket";
import { roomId } from "@/constants/ui";

export default function useLivePageSocket(isAdmin) {
  const router = useRouter();
  const socket = getSocket();

  useEffect(() => {
    console.log("socket in useLivePageSocket:", socket);
    console.log("sessionAborted listener set up");
    socket.on("sessionAborted", () => {
      console.log("sessionAborted received");
      if (isAdmin) {
        router.push("/adminMainPage");
      } else {
        router.push("/playerMainPage");
      }
    });

    return () => {
      socket.off("sessionAborted");
    };
  }, [router, isAdmin, socket]); 

  const handleQuitSession = () => {
    console.log("handleQuitSession in hook");
    socket.emit("quitSession", { roomId: roomId });
  };

  return { handleQuitSession };
}