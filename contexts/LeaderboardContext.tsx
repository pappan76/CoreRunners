import { createContext, useContext, useEffect, useState } from "react";
import { db } from "@/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { useHabits } from "@/contexts/HabitsContext";

interface LeaderboardEntry {
  uid: string;
  name: string;
  total: number;
}

interface LeaderboardContextValue {
  leaderboard: LeaderboardEntry[];
}

const LeaderboardContext = createContext<LeaderboardContextValue | undefined>(
  undefined
);

export const LeaderboardProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const { weekKey } = useHabits();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    if (!weekKey) return;

    const unsub = db.collection("users").onSnapshot(async (snapshot) => {
      const leaderboardData: LeaderboardEntry[] = [];

      for (const doc of snapshot.docs) {
        const { firstName = "Unknown", lastName = "User" } = doc.data();
        const weekSnap = await db
          .collection("users")
          .doc(doc.id)
          .collection("weeks")
          .doc(weekKey)
          .get();

        if (weekSnap.exists) {
          leaderboardData.push({
            uid: doc.id,
            name: `${firstName} ${lastName}`,
            total: weekSnap.data().total,
          });
        }
      }

      leaderboardData.sort((a, b) => b.total - a.total);
      setLeaderboard(leaderboardData);
    });

    return () => unsub();
  }, [weekKey]);

  return (
    <LeaderboardContext.Provider value={{ leaderboard }}>
      {children}
    </LeaderboardContext.Provider>
  );
};

export const useLeaderboard = () => {
  const ctx = useContext(LeaderboardContext);
  if (!ctx) throw new Error("useLeaderboard must be used inside LeaderboardProvider");
  return ctx;
};
