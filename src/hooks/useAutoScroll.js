"use client";

import { useEffect } from "react";

export default function useAutoScroll(isAutoScrollActive, scrollRef) {
  useEffect(() => {
    if (isAutoScrollActive) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ top: 2, behavior: "smooth" });
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isAutoScrollActive, scrollRef]);
}