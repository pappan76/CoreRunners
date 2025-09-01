import { useHabits } from "@/contexts/HabitsContext";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export default function HabitTable() {
  const { habits, toggleHabit, saveWeek, totalCompleted } = useHabits();

  if (!habits.length) {
    return <p className="p-4">No habits to track yet.</p>;
  }

  return (
    <Card className="max-w-4xl mx-auto mt-6">
      <CardContent className="p-4">
        <Table>
          <TableCaption>Weekly Habit Tracker</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Habit</TableHead>
              {days.map((day) => (
                <TableHead key={day} className="text-center">{day}</TableHead>
              ))}
              <TableHead className="text-center">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {habits.map((habit, i) => (
              <TableRow key={i}>
                <TableCell>{habit.name}</TableCell>
                {habit.done.map((checked, j) => (
                  <TableCell key={j} className="text-center">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleHabit(i, j)}
                    />
                  </TableCell>
                ))}
                <TableCell className="text-center font-semibold">
                  {habit.done.filter(Boolean).length}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="mt-4 text
