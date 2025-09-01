// src/components/Leaderboard.tsx
import { useAuth } from "@/contexts/AuthContext";
import { useLeaderboard } from "@/contexts/LeaderboardContext";

export default function Leaderboard() {
  const { user } = useAuth();
  const { leaderboard } = useLeaderboard();

  if (!leaderboard.length) {
    return <p className="p-4">No leaderboard data yet.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Leaderboard (This Week)</h2>
      <table className="border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border p-2">Rank</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Total Habits</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, i) => (
            <tr
              key={entry.uid}
              className={
                user?.uid === entry.uid ? "bg-blue-100 font-bold" : ""
              }
            >
              <td className="border p-2 text-center">{i + 1}</td>
              <td className="border p-2">{entry.name}</td>
              <td className="border p-2 text-center">{entry.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
