import { createContext, useContext, useEffect, useState } from "react";
import { db } from "@/firebase";
import { useAuth } from "@/contexts/AuthContext";

type Habit = { name: string; done: boolean[] };

interface HabitsContextValue {
  habits: Habit[];
  weekKey: string | null;
  toggleHabit: (habitIndex: number, dayIndex: number) => void;
  saveWeek: () => Promise<void>;
  totalCompleted: number;
}

const HabitsContext = createContext<HabitsContextValue | undefined>(undefined);

export const HabitsProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [habits, setHabits] = useState<Habit[]>([]);
  const [weekKey, setWeekKey] = useState<string | null>(null);

  function getWeekStart(date: Date) {
    const day = date.getDay();
    const diff = day === 6 ? 0 : -((day + 1) % 7);
    const saturday = new Date(date);
    saturday.setDate(date.getDate() + diff);
    saturday.setHours(0, 0, 0, 0);
    return saturday;
  }

  function formatWeekKey(date: Date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  useEffect(() => {
    if (!user) {
      setHabits([]);
      return;
    }

    const saturday = getWeekStart(new Date());
    const wk = formatWeekKey(saturday);
    setWeekKey(wk);

    const docRef = db
      .collection("users")
      .doc(user.uid)
      .collection("weeks")
      .doc(wk);

    docRef.get().then((docSnap) => {
      if (docSnap.exists) {
        setHabits(docSnap.data().habits);
      } else {
        setHabits([
          { name: "Exercise", done: Array(7).fill(false) },
          { name: "Read", done: Array(7).fill(false) },
          { name: "Meditate", done: Array(7).fill(false) },
          { name: "Sleep 8h", done: Array(7).fill(false) },
        ]);
      }
    });
  }, [user]);

  function toggleHabit(habitIndex: number, dayIndex: number) {
    setHabits((prev) =>
      prev.map((h, i) =>
        i === habitIndex
          ? { ...h, done: h.done.map((d, j) => (j === dayIndex ? !d : d)) }
          : h
      )
    );
  }

  async function saveWeek() {
    if (!user || !weekKey) return;
    const totalCompleted = habits.reduce(
      (sum, h) => sum + h.done.filter(Boolean).length,
      0
    );
    const docRef = db
      .collection("users")
      .doc(user.uid)
      .collection("weeks")
      .doc(weekKey);

    await docRef.set({ habits, total: totalCompleted });
  }

  const totalCompleted = habits.reduce(
    (sum, h) => sum + h.done.filter(Boolean).length,
    0
  );

  return (
    <HabitsContext.Provider
      value={{ habits, weekKey, toggleHabit, saveWeek, totalCompleted }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => {
  const ctx = useContext(HabitsContext);
  if (!ctx) throw new Error("useHabits must be used inside HabitsProvider");
  return ctx;
};
