"use client";

import { useRouter } from "next/navigation";

import useSongSearch from "@/hooks/useSongSearch";
import SongSearchForm from "@/app/adminMainPage/components/SongSearchForm";
import { adminContainerCSS, adminSubContainerCSS, buttonCSS } from "@/constants/ui";
import { Button } from "@/components/ui/external/button";

const title = (
  <h1 className="text-3xl font-bold text-gray-800 mb-4">Search any song...</h1>
);

export default function AdminMainPage() {
  const { query, setQuery, isLoading, handleSearch } = useSongSearch();
  const router = useRouter();

  function handleLogout() {
    localStorage.clear();
    router.push("/");
  }

  return (
    <div className={adminContainerCSS}>
      <div className={adminSubContainerCSS}>

        {title}
        <SongSearchForm
          query={query}
          setQuery={setQuery}
          isLoading={isLoading}
          handleSearch={handleSearch}
        />

        {/* Logout Button */}
        <Button
          onClick={handleLogout}
          className={`${buttonCSS} + bg-red-500 hover:bg-red-600 mt-4`}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
