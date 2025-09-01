import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Home, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <Card className="glass shadow-glass max-w-md w-full text-center">
        <CardContent className="pt-6">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl animate-float">
              <Target className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            404
          </h1>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Page Not Found
          </h2>
          
          <p className="text-gray-600 mb-8">
            Looks like this page wandered off track! Let's get you back to building those healthy habits.
          </p>
          
          <div className="space-y-3">
            <Link to="/" className="block">
              <Button className="w-full gradient-brand hover:opacity-90 transition-opacity">
                <Home className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            
            <Button 
              onClick={() => navigate(-1)} 
              variant="outline" 
              className="w-full"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? Contact support or check our{" "}
              <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
                help center
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
