import ThemeToggle from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { user, profile, login, logout } = useAuth();

  return (
    <Card className="w-full shadow-sm border-b sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className="text-lg font-bold">🏃 Weekly Habit Tracker</h1>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground hidden sm:inline">
                {profile?.firstName} {profile?.lastName}
              </span>
              <Button variant="destructive" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Button size="sm" onClick={login}>
              Login with Google
            </Button>
          )}

          <ThemeToggle />
        </div>
      </div>
    </Card>
  );
}
