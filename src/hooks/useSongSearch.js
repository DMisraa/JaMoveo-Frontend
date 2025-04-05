"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { searchSong } from "@/lib/db";

function useSongSearch() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    if (query.trim() === "") {
      setIsLoading(false);
      return; // Do nothing if query is empty
    }

    const data = await searchSong(query);

    // If results are found, redirect to search results page
    if (data.results && data.results.length > 0) {
      const searchParams = new URLSearchParams({
        query: query,
        results: JSON.stringify(data.results),
      });

      setIsLoading(false);
      router.push(`/adminMainPage/adminResultsPage?${searchParams.toString()}`);
    } else {
      setIsLoading(false);
      alert("No results found");
    }
  };

  return {
    query,
    setQuery,
    isLoading,
    handleSearch,
  };
}

export default useSongSearch;