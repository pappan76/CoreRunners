import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

export interface Habit {
  id: string;
  name: string;
  color: string;
  completed: { [key: string]: boolean };
  createdAt: string;
}

interface HabitsContextType {
  habits: Habit[];
  addHabit: (name: string, color?: string) => void;
  removeHabit: (habitId: string) => void;
  updateHabit: (habitId: string, updates: Partial<Habit>) => void;
  toggleHabitDay: (habitId: string, day: string) => void;
  getHabitTotal: (habit: Habit) => number;
  getTotalCompleted: () => number;
  saveProgress: () => Promise<void>;
  clearAllProgress: () => void;
}

const HabitsContext = createContext<HabitsContextType | undefined>(undefined);

export const useHabits = () => {
  const context = useContext(HabitsContext);
  if (context === undefined) {
    throw new Error('useHabits must be used within a HabitsProvider');
  }
  return context;
};

interface HabitsProviderProps {
  children: ReactNode;
}

const DAYS = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const DEFAULT_HABITS: Habit[] = [
  {
    id: '1',
    name: 'Exercise',
    color: '#3B82F6',
    completed: {},
    createdAt: new Date().toISOString()
  },
  {
    id: '2', 
    name: 'Read',
    color: '#10B981',
    completed: {},
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Meditate',
    color: '#8B5CF6',
    completed: {},
    createdAt: new Date().toISOString()
  }
];

const HABIT_COLORS = [
  '#3B82F6', // Blue
  '#10B981', // Green
  '#8B5CF6', // Purple
  '#F59E0B', // Yellow
  '#EF4444', // Red
  '#06B6D4', // Cyan
  '#84CC16', // Lime
  '#F97316', // Orange
];

export const HabitsProvider: React.FC<HabitsProviderProps> = ({ children }) => {
  const [habits, setHabits] = useState<Habit[]>(DEFAULT_HABITS);
  const { user, isLoggedIn } = useAuth();

  // Load habits from localStorage when user logs in
  useEffect(() => {
    if (isLoggedIn && user) {
      const savedHabits = localStorage.getItem(`habitflow_habits_${user.id}`);
      if (savedHabits) {
        try {
          const parsedHabits = JSON.parse(savedHabits);
          setHabits(parsedHabits);
        } catch (error) {
          console.error('Error parsing saved habits:', error);
        }
      }
    } else {
      // Reset to default habits when logged out
      setHabits(DEFAULT_HABITS);
    }
  }, [isLoggedIn, user]);

  // Save habits to localStorage whenever habits change
  useEffect(() => {
    if (isLoggedIn && user) {
      localStorage.setItem(`habitflow_habits_${user.id}`, JSON.stringify(habits));
    }
  }, [habits, isLoggedIn, user]);

  const addHabit = (name: string, color?: string) => {
    const newHabit: Habit = {
      id: Date.now().toString(),
      name: name.trim(),
      color: color || HABIT_COLORS[habits.length % HABIT_COLORS.length],
      completed: {},
      createdAt: new Date().toISOString()
    };
    setHabits(prev => [...prev, newHabit]);
  };

  const removeHabit = (habitId: string) => {
    setHabits(prev => prev.filter(habit => habit.id !== habitId));
  };

  const updateHabit = (habitId: string, updates: Partial<Habit>) => {
    setHabits(prev => prev.map(habit => 
      habit.id === habitId ? { ...habit, ...updates } : habit
    ));
  };

  const toggleHabitDay = (habitId: string, day: string) => {
    setHabits(prev => prev.map(habit => 
      habit.id === habitId 
        ? { 
            ...habit, 
            completed: { 
              ...habit.completed, 
              [day]: !habit.completed[day] 
            } 
          }
        : habit
    ));
  };

  const getHabitTotal = (habit: Habit) => {
    return DAYS.filter(day => habit.completed[day]).length;
  };

  const getTotalCompleted = () => {
    return habits.reduce((total, habit) => total + getHabitTotal(habit), 0);
  };

  const saveProgress = async (): Promise<void> => {
    // In a real app, this would sync with a backend API
    // For now, we'll just simulate a save operation
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Progress saved successfully');
        resolve();
      }, 500);
    });
  };

  const clearAllProgress = () => {
    setHabits(prev => prev.map(habit => ({
      ...habit,
      completed: {}
    })));
  };

  const value: HabitsContextType = {
    habits,
    addHabit,
    removeHabit,
    updateHabit,
    toggleHabitDay,
    getHabitTotal,
    getTotalCompleted,
    saveProgress,
    clearAllProgress
  };

  return (
    <HabitsContext.Provider value={value}>
      {children}
    </HabitsContext.Provider>
  );
};
