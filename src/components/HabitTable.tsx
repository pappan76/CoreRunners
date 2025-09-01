import React from "react";

interface HabitTableProps {
  habits: { name: string; days: boolean[] }[];
  onToggleDay: (habitIndex: number, dayIndex: number) => void;
}

const HabitTable: React.FC<HabitTableProps> = ({ habits, onToggleDay }) => {
  const totalCompletedThisWeek = habits.reduce(
    (acc, habit) => acc + habit.days.filter(Boolean).length,
    0
  );

  return (
    <div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2 text-left">Habit</th>
            <th className="border border-gray-300 p-2">Sat</th>
            <th className="border border-gray-300 p-2">Sun</th>
            <th className="border border-gray-300 p-2">Mon</th>
            <th className="border border-gray-300 p-2">Tue</th>
            <th className="border border-gray-300 p-2">Wed</th>
            <th className="border border-gray-300 p-2">Thu</th>
            <th className="border border-gray-300 p-2">Fri</th>
            <th className="border border-gray-300 p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {habits.map((habit, habitIndex) => (
            <tr key={habit.name}>
              <td className="border border-gray-300 p-2">{habit.name}</td>
              {habit.days.map((completed, dayIndex) => (
                <td
                  key={dayIndex}
                  className={`border border-gray-300 p-2 text-center cursor-pointer ${
                    completed ? "bg-green-200" : ""
                  }`}
                  onClick={() => onToggleDay(habitIndex, dayIndex)}
                >
                  {completed ? "✔" : ""}
                </td>
              ))}
              <td className="border border-gray-300 p-2 text-center">
                {habit.days.filter(Boolean).length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-4 text-gray-700 font-medium">
        Total completed this week: {totalCompletedThisWeek}
      </p>
    </div>
  );
};

export default HabitTable;
