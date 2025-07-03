
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-1 rounded text-primary-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xl font-bold">JobMatch</span>
          </Link>
          <nav className="hidden md:flex items-center ml-8 space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors">Find Jobs</Link>
            <Link to="/affiliate" className="text-muted-foreground hover:text-primary transition-colors">Affiliate</Link>
            {user && <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Dashboard</Link>}
            {user && <Link to="/my-work" className="text-muted-foreground hover:text-primary transition-colors">My Work</Link>}
            {(user?.role === "admin" || user?.role === "employer") && (
              <Link to="/post-job" className="text-muted-foreground hover:text-primary transition-colors">Post a Job</Link>
            )}
            {user?.role === "admin" && (
              <Link to="/admin" className="text-muted-foreground hover:text-primary transition-colors">Admin</Link>
            )}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {user ? (
            <div className="flex items-center gap-3">
              <span className="hidden md:inline text-sm">{user.name}</span>
              <Button variant="outline" onClick={logout}>Log Out</Button>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <Button variant="outline" className="mr-3">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
