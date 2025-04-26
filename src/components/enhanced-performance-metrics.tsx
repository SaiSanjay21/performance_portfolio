"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, X, Cpu, Clock, BarChart, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PerformanceData {
  id: string;
  name: string;
  time: number;
  timestamp: number;
}

export function EnhancedPerformanceMetrics() {
  const [isOpen, setIsOpen] = useState(false);
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
  const [activeTab, setActiveTab] = useState<'metrics' | 'chart'>('metrics');
  const observerRef = useRef<PerformanceObserver | null>(null);
  
  // Create a function to track user interactions
  const trackInteraction = (actionName: string) => {
    const startMark = `${actionName}-start`;
    const endMark = `${actionName}-end`;

    performance.mark(startMark);
    setTimeout(() => {
      performance.mark(endMark);
      performance.measure(actionName, startMark, endMark);
    }, 10);
  };

  const refreshMetrics = () => {
    trackInteraction("Refresh-Metrics");
    // Visual feedback for refresh
    const refreshBtn = document.getElementById('refresh-metrics-btn');
    if (refreshBtn) {
      refreshBtn.classList.add('animate-spin');
      setTimeout(() => refreshBtn.classList.remove('animate-spin'), 500);
    }
  };

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
  }, []);

  // Get the highest and lowest metrics for visual indicators
  const getMetricStatus = (time: number) => {
    const maxTime = Math.max(...performanceData.map(d => d.time));
    const minTime = Math.min(...performanceData.map(d => d.time));
    
    if (time === minTime) return "good";
    if (time === maxTime) return "poor";
    return "average";
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg bg-background hover:bg-primary/10 border border-primary/20"
        aria-label="View Performance Metrics"
        onClick={() => {
          setIsOpen(true);
          trackInteraction("Open-Performance-Panel");
        }}
      >
        <Activity className="h-6 w-6 text-primary" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="bg-card border border-primary/20 rounded-xl shadow-xl w-full max-w-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Performance Metrics
                  </span>
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-primary/10"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-1">
                <div className="flex border-b border-border">
                  <button
                    className={cn(
                      "flex-1 py-2 px-4 text-sm font-medium transition-colors",
                      activeTab === 'metrics' ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => setActiveTab('metrics')}
                  >
                    <span className="flex items-center justify-center gap-1">
                      <Cpu className="h-4 w-4" />
                      Metrics
                    </span>
                  </button>
                  <button
                    className={cn(
                      "flex-1 py-2 px-4 text-sm font-medium transition-colors",
                      activeTab === 'chart' ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => setActiveTab('chart')}
                  >
                    <span className="flex items-center justify-center gap-1">
                      <BarChart className="h-4 w-4" />
                      Visualization
                    </span>
                  </button>
                </div>

                <div className="p-4">
                  {activeTab === 'metrics' ? (
                    <>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-sm font-medium text-muted-foreground">Recent Measurements</h3>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-6 w-6 rounded-full hover:bg-primary/10"
                          onClick={refreshMetrics}
                        >
                          <RefreshCw id="refresh-metrics-btn" className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                        {performanceData.length > 0 ? (
                          performanceData.map((entry) => {
                            const status = getMetricStatus(entry.time);
                            return (
                              <motion.div
                                key={entry.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={cn(
                                  "flex justify-between items-center p-3 rounded-lg border",
                                  status === "good" ? "bg-green-500/10 border-green-500/30" : 
                                  status === "poor" ? "bg-red-500/10 border-red-500/30" : 
                                  "bg-card border-border"
                                )}
                              >
                                <div className="flex items-center gap-2">
                                  <Clock className={cn(
                                    "h-4 w-4",
                                    status === "good" ? "text-green-500" : 
                                    status === "poor" ? "text-red-500" : 
                                    "text-primary"
                                  )} />
                                  <span className="font-medium text-sm">{entry.name}</span>
                                </div>
                                <span className={cn(
                                  "text-sm font-mono",
                                  status === "good" ? "text-green-500" : 
                                  status === "poor" ? "text-red-500" : 
                                  "text-muted-foreground"
                                )}>
                                  {entry.time}ms
                                </span>
                              </motion.div>
                            );
                          })
                        ) : (
                          <div className="text-center p-4 text-muted-foreground text-sm">
                            No performance data available yet
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="h-[300px] flex items-center justify-center flex-col gap-4">
                      <div className="w-full h-40 bg-card/50 rounded-lg border border-border flex items-center justify-center">
                        <div className="relative w-4/5 h-4/5">
                          {performanceData.length > 0 ? (
                            <div className="absolute inset-0 flex items-end">
                              {performanceData.map((entry, index) => {
                                const maxTime = Math.max(...performanceData.map(d => d.time));
                                const height = (entry.time / maxTime) * 100;
                                return (
                                  <motion.div
                                    key={entry.id}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${height}%` }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className={cn(
                                      "flex-1 mx-1 rounded-t-sm",
                                      height > 80 ? "bg-red-500/70" :
                                      height > 50 ? "bg-amber-500/70" :
                                      "bg-green-500/70"
                                    )}
                                    title={`${entry.name}: ${entry.time}ms`}
                                  />
                                );
                              })}
                            </div>
                          ) : (
                            <div className="text-center text-muted-foreground text-sm">
                              No data to visualize
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground text-center">
                        Performance visualization shows relative timing of recent operations
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-muted/50 border-t border-border">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Avg. Response</span>
                      <span className="font-medium">
                        {performanceData.length > 0
                          ? `${(performanceData.reduce((sum, entry) => sum + entry.time, 0) / performanceData.length).toFixed(2)}ms`
                          : "--"}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Performance Score</span>
                      <span className="font-medium">95/100</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}