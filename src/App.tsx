import { Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";

import Landing from "./pages/Landing";
import NotFound from "./pages/not-found";

function App() {
  return (
    <div className="dark bg-background text-foreground min-h-screen">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
