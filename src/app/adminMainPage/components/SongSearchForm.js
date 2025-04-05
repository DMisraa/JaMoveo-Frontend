import { Input } from "@/components/ui/external/input";
import { Button } from "@/components/ui/external/button";
import { buttonCSS } from "@/constants/ui";

function SongSearchForm({ query, setQuery, isLoading, handleSearch }) {
  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <Input
        type="text"
        placeholder="Enter song name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* Submit Button */}
      <Button
        type="submit"
        className={`${buttonCSS} bg-blue-500 hover:bg-blue-600`}
      >
        {isLoading ? "Loading.." : "Search"}
      </Button>
    </form>
  );
}

export default SongSearchForm;