"use client";

import { io } from "socket.io-client";

let socketInstance = null;

export const getSocket = () => {
  if (!socketInstance) {
    socketInstance = io(process.env.NEXT_PUBLIC_WS_URL);
  }
  return socketInstance;
};