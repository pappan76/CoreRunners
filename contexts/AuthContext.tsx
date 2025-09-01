import { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { auth, db } from "@/firebase";

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
}

interface AuthContextValue {
  user: firebase.User | null;
  profile: Profile | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    return auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        const p = await ensureUserProfile(firebaseUser);
        setProfile(p);
      } else {
        setUser(null);
        setProfile(null);
      }
    });
  }, []);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };

  const logout = async () => {
    await auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, profile, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};

async function ensureUserProfile(user: firebase.User): Promise<Profile> {
  const userRef = db.collection("users").doc(user.uid);
  const docSnap = await userRef.get();

  let { firstName = "", lastName = "" } = docSnap.exists ? docSnap.data() : {};

  if (!firstName && !lastName && user.displayName) {
    const parts = user.displayName.split(" ");
    firstName = parts[0];
    lastName = parts.slice(1).join(" ");
  }

  await userRef.set(
    { firstName, lastName, email: user.email },
    { merge: true }
  );

  return { firstName, lastName, email: user.email! };
}
