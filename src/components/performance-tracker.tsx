"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Cpu, Clock, Activity } from "lucide-react";

interface PerformanceData {
  id: string;
  name: string;
  time: number;
  timestamp: number;
}

export function PerformanceTracker() {
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
  const observerRef = useRef<PerformanceObserver | null>(null);

  // Create a function to track user interactions
  const trackInteraction = useCallback((actionName: string) => {
    const startMark = `${actionName}-start`;
    const endMark = `${actionName}-end`;

    performance.mark(startMark);
    setTimeout(() => {
      performance.mark(endMark);
      performance.measure(actionName, startMark, endMark);
    }, 10);
  }, []);

  useEffect(() => {
    // Create performance observer to monitor render times
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      observerRef.current = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const filteredEntries = entries
          .filter(
            (entry) =>
              entry.entryType === "measure" ||
              entry.entryType === "paint" ||
              entry.entryType === "navigation"
          )
          .map((entry) => ({
            id: `${entry.name}-${Date.now()}-${Math.random()
              .toString(36)
              .substr(2, 9)}`,
            name: entry.name,
            time:
              Math.round(entry.duration * 100) / 100 ||
              Math.round(entry.startTime * 100) / 100,
            timestamp: Date.now(),
          }));

        if (filteredEntries.length > 0) {
          setPerformanceData((prev) => {
            const newData = [...prev, ...filteredEntries];
            // Keep only the last 10 entries
            return newData.slice(-10);
          });
        }
      });

      observerRef.current.observe({
        entryTypes: ["measure", "paint", "navigation", "resource"],
      });
    }

    // Log initial page load time
    if (typeof window !== "undefined") {
      const onLoad = () => {
        const navigationEntries = performance.getEntriesByType("navigation");
        if (navigationEntries.length > 0) {
          const loadTime = Math.round(navigationEntries[0].duration * 100) / 100;
          setPerformanceData((prev) => [
            ...prev,
            {
              id: `PageLoad-${Date.now()}`,
              name: "Page Load",
              time: loadTime,
              timestamp: Date.now(),
            },
          ]);
        }
      };

      window.addEventListener("load", onLoad);

      // Mark component mounts and other UI events with performance marks
      performance.mark("Component-Mounted");
      setTimeout(() => {
        performance.measure("Component-Render", "Component-Mounted");
      }, 0);

      return () => {
        window.removeEventListener("load", onLoad);
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Add click event listener to track interactions
  useEffect(() => {
    const clickHandler = () => {
      trackInteraction("User-Click");
    };

    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [trackInteraction]);

  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <div className="fixed bottom-5 right-5 z-50 cursor-pointer flex items-center justify-center h-10 w-10 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors">
          <Cpu className="h-5 w-5 text-primary" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        className="w-80 p-0 backdrop-blur-lg bg-card/80 border border-primary/20"
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium flex items-center gap-2">
              <Activity className="h-4 w-4" /> Performance Metrics
            </h3>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </div>
          <ul className="space-y-2 max-h-[200px] overflow-y-auto">
            {performanceData.length > 0 ? (
              performanceData.map((entry) => (
                <li
                  key={entry.id}
                  className="text-xs flex justify-between border-b border-border pb-1 last:border-0"
                >
                  <span className="font-medium">{entry.name}</span>
                  <span className="text-muted-foreground">{entry.time}ms</span>
                </li>
              ))
            ) : (
              <li className="text-xs text-muted-foreground">
                No performance data yet
              </li>
            )}
          </ul>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
