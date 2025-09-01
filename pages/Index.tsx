import { useAuth } from "@/contexts/AuthContext";
import HabitTable from "@/components/HabitTable";
import Leaderboard from "@/components/Leaderboard";

export default function Index() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Welcome to the Habit Tracker 🎯</h2>
        <p className="text-muted-foreground mt-2">
          Please log in using the button in the header to start tracking your weekly habits.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6 max-w-5xl mx-auto">
      <HabitTable />
      <Leaderboard />
    </div>
  );
}
