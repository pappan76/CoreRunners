import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { useHabits } from './HabitsContext';

export interface LeaderboardEntry {
  id: string;
  name: string;
  email: string;
  score: number;
  avatar: string;
  isCurrentUser?: boolean;
}

interface LeaderboardContextType {
  leaderboard: LeaderboardEntry[];
  currentUserRank: number;
  refreshLeaderboard: () => void;
}

const LeaderboardContext = createContext<LeaderboardContextType | undefined>(undefined);

export const useLeaderboard = () => {
  const context = useContext(LeaderboardContext);
  if (context === undefined) {
    throw new Error('useLeaderboard must be used within a LeaderboardProvider');
  }
  return context;
};

interface LeaderboardProviderProps {
  children: ReactNode;
}

// Mock leaderboard data - in a real app this would come from an API
const MOCK_LEADERBOARD_USERS = [
  { id: '1', name: 'Alex Chen', email: 'alex@example.com', score: 42, avatar: 'AC' },
  { id: '2', name: 'Sarah Kim', email: 'sarah@example.com', score: 38, avatar: 'SK' },
  { id: '3', name: 'Mike Johnson', email: 'mike@example.com', score: 35, avatar: 'MJ' },
  { id: '4', name: 'Emma Davis', email: 'emma@example.com', score: 32, avatar: 'ED' },
  { id: '5', name: 'Tom Wilson', email: 'tom@example.com', score: 28, avatar: 'TW' },
  { id: '6', name: 'Lisa Zhang', email: 'lisa@example.com', score: 25, avatar: 'LZ' },
  { id: '7', name: 'David Brown', email: 'david@example.com', score: 22, avatar: 'DB' },
  { id: '8', name: 'Anna Taylor', email: 'anna@example.com', score: 20, avatar: 'AT' }
];

export const LeaderboardProvider: React.FC<LeaderboardProviderProps> = ({ children }) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [currentUserRank, setCurrentUserRank] = useState(0);
  const { user, isLoggedIn } = useAuth();
  const { getTotalCompleted } = useHabits();

  const refreshLeaderboard = () => {
    let updatedLeaderboard = [...MOCK_LEADERBOARD_USERS];

    // If user is logged in, add them to the leaderboard with their actual score
    if (isLoggedIn && user) {
      const userScore = getTotalCompleted();
      const userEntry: LeaderboardEntry = {
        id: user.id,
        name: user.name,
        email: user.email,
        score: userScore,
        avatar: user.name.split(' ').map(n => n[0]).join('').toUpperCase(),
        isCurrentUser: true
      };

      // Remove any existing entry for this user and add the updated one
      updatedLeaderboard = updatedLeaderboard.filter(entry => entry.email !== user.email);
      updatedLeaderboard.push(userEntry);
    }

    // Sort by score (descending) and limit to top 10
    updatedLeaderboard.sort((a, b) => b.score - a.score);
    const topLeaderboard = updatedLeaderboard.slice(0, 10);

    // Find current user's rank
    const userRank = topLeaderboard.findIndex(entry => entry.isCurrentUser);
    setCurrentUserRank(userRank + 1); // 1-indexed rank

    setLeaderboard(topLeaderboard);
  };

  // Refresh leaderboard when user logs in/out or habits change
  useEffect(() => {
    refreshLeaderboard();
  }, [isLoggedIn, user, getTotalCompleted()]);

  const value: LeaderboardContextType = {
    leaderboard,
    currentUserRank,
    refreshLeaderboard
  };

  return (
    <LeaderboardContext.Provider value={value}>
      {children}
    </LeaderboardContext.Provider>
  );
};
