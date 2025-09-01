import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center text-center space-y-4">
      <h2 className="text-3xl font-bold">404 - Page Not Found</h2>
      <p className="text-muted-foreground">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Button asChild>
        <Link to="/">Go Back Home</Link>
      </Button>
    </div>
  );
}
