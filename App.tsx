import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/providers/ThemeProvider";

import { AuthProvider } from "@/contexts/AuthContext";
import { HabitsProvider } from "@/contexts/HabitsContext";
import { LeaderboardProvider } from "@/contexts/LeaderboardContext";

import Header from "@/components/Header";
import HabitTable from "@/components/HabitTable";
import Leaderboard from "@/components/Leaderboard";

import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HabitsProvider>
          <LeaderboardProvider>
            <ThemeProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <Header />
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>

                <div className="space-y-6 p-6">
                  <HabitTable />
                  <Leaderboard />
                </div>
              </TooltipProvider>
            </ThemeProvider>
          </LeaderboardProvider>
        </HabitsProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
