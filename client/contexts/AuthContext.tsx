import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  picture?: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
  loginWithGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for existing session on app load
    const savedUser = localStorage.getItem('habitflow_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('habitflow_user');
      }
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('habitflow_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('habitflow_user');
    localStorage.removeItem('habitflow_habits');
  };

  const loginWithGoogle = async (): Promise<void> => {
    try {
      // In a real app, this would integrate with Google OAuth
      // For demo purposes, we'll simulate the login
      const mockGoogleUser: User = {
        id: 'mock-google-id-' + Date.now(),
        name: 'Demo User',
        email: 'demo@habitflow.com',
        picture: 'https://via.placeholder.com/40x40?text=DU'
      };

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      login(mockGoogleUser);
    } catch (error) {
      console.error('Error during Google login:', error);
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    isLoggedIn,
    login,
    logout,
    loginWithGoogle
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
