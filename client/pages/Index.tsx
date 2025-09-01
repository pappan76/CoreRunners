import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useHabits } from "@/contexts/HabitsContext";
import { useLeaderboard } from "@/contexts/LeaderboardContext";
import { CheckCircle2, Circle, Plus, Trophy, Target, User, LogOut, Trash2, Edit3 } from "lucide-react";

const DAYS = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export default function Index() {
  const { user, isLoggedIn, loginWithGoogle, logout } = useAuth();
  const {
    habits,
    addHabit,
    removeHabit,
    toggleHabitDay,
    getHabitTotal,
    getTotalCompleted,
    saveProgress
  } = useHabits();
  const { leaderboard, currentUserRank } = useLeaderboard();
  const [editingHabit, setEditingHabit] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const addNewHabit = () => {
    const habitName = prompt('Enter habit name:');
    if (habitName && habitName.trim()) {
      addHabit(habitName);
    }
  };

  const handleSaveProgress = async () => {
    try {
      await saveProgress();
      // You could show a toast notification here
      console.log('Progress saved successfully!');
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  };

  const handleDeleteHabit = (habitId: string, habitName: string) => {
    if (window.confirm(`Are you sure you want to delete "${habitName}"?`)) {
      removeHabit(habitId);
    }
  };

  const startEditingHabit = (habitId: string, currentName: string) => {
    setEditingHabit(habitId);
    setEditingName(currentName);
  };

  const cancelEditing = () => {
    setEditingHabit(null);
    setEditingName('');
  };

  const saveHabitName = (habitId: string) => {
    if (editingName.trim()) {
      // updateHabit(habitId, { name: editingName.trim() });
      // For now, we'll just cancel editing since updateHabit isn't implemented yet
      cancelEditing();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HabitFlow
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <User className="h-4 w-4" />
                    <span>Logged in as: {user?.name}</span>
                  </div>
                  <Button onClick={logout} variant="outline" size="sm">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button onClick={handleGoogleLogin} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Login with Google
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Habit Tracker */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-md border-white/20 shadow-xl">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-gray-900">Weekly Habit Tracker</CardTitle>
                  <Button onClick={addNewHabit} size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Habit
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-2 font-semibold text-gray-700">Habit</th>
                        {DAYS.map(day => (
                          <th key={day} className="text-center py-3 px-2 font-semibold text-gray-700 min-w-[50px]">
                            {day}
                          </th>
                        ))}
                        <th className="text-center py-3 px-2 font-semibold text-gray-700">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {habits.map(habit => (
                        <tr key={habit.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 px-2">
                            <div className="flex items-center justify-between group">
                              <div className="flex items-center space-x-2">
                                <div
                                  className="w-3 h-3 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: habit.color }}
                                />
                                {editingHabit === habit.id ? (
                                  <input
                                    type="text"
                                    value={editingName}
                                    onChange={(e) => setEditingName(e.target.value)}
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter') saveHabitName(habit.id);
                                      if (e.key === 'Escape') cancelEditing();
                                    }}
                                    onBlur={() => saveHabitName(habit.id)}
                                    className="font-medium text-gray-900 bg-transparent border-b border-blue-500 outline-none"
                                    autoFocus
                                  />
                                ) : (
                                  <span className="font-medium text-gray-900">{habit.name}</span>
                                )}
                              </div>
                              <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  onClick={() => startEditingHabit(habit.id, habit.name)}
                                  className="p-1 rounded hover:bg-gray-200 transition-colors"
                                  title="Edit habit"
                                >
                                  <Edit3 className="h-3 w-3 text-gray-500" />
                                </button>
                                <button
                                  onClick={() => handleDeleteHabit(habit.id, habit.name)}
                                  className="p-1 rounded hover:bg-red-100 transition-colors"
                                  title="Delete habit"
                                >
                                  <Trash2 className="h-3 w-3 text-red-500" />
                                </button>
                              </div>
                            </div>
                          </td>
                          {DAYS.map(day => (
                            <td key={day} className="text-center py-4 px-2">
                              <button
                                onClick={() => toggleHabitDay(habit.id, day)}
                                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                              >
                                {habit.completed[day] ? (
                                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                                ) : (
                                  <Circle className="h-6 w-6 text-gray-300 hover:text-gray-400" />
                                )}
                              </button>
                            </td>
                          ))}
                          <td className="text-center py-4 px-2">
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                              {getHabitTotal(habit)}/7
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                  <div className="text-lg font-semibold text-gray-900">
                    Total completed this week: <span className="text-blue-600">{getTotalCompleted()}</span>
                  </div>
                  <Button
                    onClick={handleSaveProgress}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  >
                    Save Progress
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leaderboard */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-md border-white/20 shadow-xl">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                    Leaderboard (This Week)
                  </CardTitle>
                  {isLoggedIn && currentUserRank > 0 && (
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      Your rank: #{currentUserRank}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((entry, index) => (
                    <div key={entry.id} className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      entry.isCurrentUser
                        ? 'bg-blue-50 border border-blue-200 hover:bg-blue-100'
                        : 'hover:bg-gray-50/50'
                    }`}>
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                          index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                          index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                          index === 2 ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                          entry.isCurrentUser ? 'bg-gradient-to-r from-blue-500 to-purple-600' :
                          'bg-gradient-to-r from-blue-400 to-blue-600'
                        }`}>
                          {index < 3 ? index + 1 : entry.avatar}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium ${
                          entry.isCurrentUser ? 'text-blue-900' : 'text-gray-900'
                        }`}>
                          {entry.name}
                          {entry.isCurrentUser && (
                            <span className="ml-2 text-xs text-blue-600">(You)</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">{entry.score} habits completed</div>
                      </div>
                      {index < 3 && (
                        <Trophy className={`h-4 w-4 ${
                          index === 0 ? 'text-yellow-500' :
                          index === 1 ? 'text-gray-400' :
                          'text-orange-400'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
