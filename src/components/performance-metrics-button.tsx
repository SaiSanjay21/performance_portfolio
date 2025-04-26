"use client";

import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";

export function PerformanceMetricsButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg bg-background hover:bg-primary/10"
        aria-label="View Performance Metrics"
        onClick={() => setOpen(true)}
      >
        <Activity className="h-6 w-6 text-primary" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Website Performance Metrics</DialogTitle>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">Load Time</span>
                <span className="font-medium">0.8s</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">First Contentful Paint</span>
                <span className="font-medium">0.5s</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">Time to Interactive</span>
                <span className="font-medium">1.2s</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">Performance Score</span>
                <span className="font-medium">95/100</span>
              </div>
            </div>
          </div>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}