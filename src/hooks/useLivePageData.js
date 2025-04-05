"use client";

import { useState, useEffect } from "react";

export default function useLivePageData() {
  const [songDetails, setSongDetails] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const songData = sessionStorage.getItem("songDetails");
    if (songData) {
      setSongDetails(JSON.parse(songData));
    }
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.admin) {
      setIsAdmin(true);
    }
  }, []);

  return { songDetails, isAdmin, setSongDetails, setIsAdmin };
}