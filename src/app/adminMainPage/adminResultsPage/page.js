import SearchResultsPage from "./pageContent";
import { Suspense } from "react";

export default function Page() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResultsPage />
      </Suspense>
    );
  }
  