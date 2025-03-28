"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminMainPage() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  async function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    if (query.trim() === "") return; // Do nothing if query is empty

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search?query=${encodeURIComponent(query)}`);
    const data = await res.json();

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
  }

  // Logout 
  function handleLogout() {
    localStorage.clear(); 
    router.push("/"); 
  };

  return (
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 p-4">
        <div className="absolute top-1/6 bg-white shadow-xl rounded-lg p-6 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Search any song...
          </h1>
          <form onSubmit={handleSearch} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter song name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
             {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
            >
              {isLoading ? "Loading.." : "Search"}
            </Button>
          </form>

          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg mt-4"
          >
            Logout
          </Button>
        </div>
      </div>
  );
}
